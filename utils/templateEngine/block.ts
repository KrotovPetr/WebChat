import { nanoid } from 'nanoid';
import { EventBus } from './event-bus';

// Нельзя создавать экземпляр данного класса
class Block {
    static EVENTS = {
        INIT: 'init',
        FLOW_CDM: 'flow:component-did-mount',
        FLOW_CDU: 'flow:component-did-update',
        FLOW_RENDER: 'flow:render',
    };

    public id = nanoid(6);
    protected props: any;
    public children: Record<string, Block>;
    private eventBus: () => EventBus;
    private _element: HTMLElement | null = null;
    private _meta: { tagName: string; props: any };

    /** JSDoc
     * @param {string} tagName
     * @param {Object} propsWithChildren
     *
     * @returns {void}
     */
    constructor(tagName = 'div', propsWithChildren: any = {}) {
        const eventBus = new EventBus();
        // console.log(propsWithChildren)
        const { props, children } =
            this._getChildrenAndProps(propsWithChildren);
        // console.log(children)
        this._meta = {
            tagName,
            props,
        };

        this.children = children;
        this.props = this._makePropsProxy(props);

        this.eventBus = () => eventBus;

        this._registerEvents(eventBus);

        eventBus.emit(Block.EVENTS.INIT);
    }

    _getChildrenAndProps(childrenAndProps: any) {
        const props: Record<string, any> = {};
        const children: Record<string, Block> = {};

        Object.entries(childrenAndProps).forEach(([key, value]) => {
            // console.log(value);
            if (value instanceof Block) {
                // console.log(1)
                children[key] = value;
            } else {
                // console.log(2);
                props[key] = value;
            }
        });
        return { props, children };
    }

    _addEvents() {
        const { events = {} } = this.props as {
            events: Record<string, () => void>;
        };

        Object.keys(events).forEach((eventName: string) => {
            this._element?.addEventListener(eventName, events[eventName]);
        });
    }

    _addProperties() {
        const { properties = {} } = this.props as {
            properties: Record<string, string>;
        };
        Object.keys(properties).forEach((prop) => {
            if (prop === 'class') {
                this._element?.classList.add(properties[prop]);
            } else {
                this._element?.setAttribute(prop, properties[prop]);
            }
        });
    }

    _registerEvents(eventBus: EventBus) {
        eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    _createResources() {
        // console.log(this._element);
        const { tagName } = this._meta;
        this._element = this._createDocumentElement(tagName);
        // console.log(this._element)
    }

    private _init() {
        this._createResources();

        this.init();

        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    protected init() {}

    _componentDidMount() {
        this.componentDidMount();
    }

    componentDidMount() {}

    public dispatchComponentDidMount() {
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);

        Object.values(this.children).forEach((child) =>
            child.dispatchComponentDidMount(),
        );
    }

    private _componentDidUpdate(oldProps: any, newProps: any) {
        if (this.componentDidUpdate(oldProps, newProps)) {
            this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
        }
    }

    // @ts-ignore
    protected componentDidUpdate(oldProps: any, newProps: any) {
        return true;
    }

    setProps = (nextProps: any) => {
        if (!nextProps) {
            return;
        }

        Object.assign(this.props, nextProps);
    };

    get element() {
        return this._element;
    }

    private _render() {
        const fragment = this.render();

        this._element!.append(fragment);
        // this._element!.append(fragment.toString());

        this._addEvents();
        this._addProperties();
    }

    protected compile(
        template: (tmpl: string, context: any) => string,
        context: any,
        tmpl: string,
    ) {
        const contextAndStubs = { ...context }; //<--объект контекста
        Object.entries(this.children).forEach(([name, component]) => {
            contextAndStubs[name] = `<div data-id="${component.id}" ></div>`;
        });
        const html = template(tmpl, contextAndStubs); //<--строка
        const temp = document.createElement('template');
        temp.innerHTML = html;
        Object.entries(this.children).forEach(([_, component]) => {
            // console.log(component);
            const stub = temp.content.querySelector(
                `[data-id="${component.id}"]`,
            );

            if (!stub) {
                return;
            }
            component.getContent()?.append(...Array.from(stub.childNodes));

            stub.replaceWith(component.getContent()!);
        });
        return temp.content;
    }

    protected render(): DocumentFragment {
        return new DocumentFragment();
    }

    getContent() {
        return this.element;
    }

    _makePropsProxy(props: any) {
        // Ещё один способ передачи this, но он больше не применяется с приходом ES6+
        const self = this;

        return new Proxy(props, {
            get(target, prop) {
                const value = target[prop];
                return typeof value === 'function' ? value.bind(target) : value;
            },
            set(target, prop, value) {
                const oldTarget = { ...target };

                target[prop] = value;

                // Запускаем обновление компоненты
                // Плохой cloneDeep, в следующей итерации нужно заставлять добавлять cloneDeep им самим
                self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
                return true;
            },
            deleteProperty() {
                throw new Error('Нет доступа');
            },
        });
    }

    _createDocumentElement(tagName: string) {
        // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
        return document.createElement(tagName);
    }
}

export default Block;
