import { Templator } from './templator'
import { TTemplatorContext } from '../utils/types/types'
import {EventBus} from './eventBus';

export function templatorConnector(template:string, context:TTemplatorContext) {
    const tmpl:Templator = new Templator(template)
    document.body.innerHTML = tmpl.compile(context)
    const eventBus:EventBus = new EventBus();

    const callback = ():void => {
        console.log('Event emitted');
    }

    eventBus.on('myEvent', callback);

// Так как мы передаём новую функцию (а значит, новую ссылку), оригинальный обработчик не будет отписан
    eventBus.off('myEvent', () => { console.log('Event emitted'); });

// Теперь передаём правильную ссылку, обработчик будет отписан
    eventBus.off('myEvent', callback);
}