export class EventBus {
    listeners:any={}
    constructor() {
        this.listeners={};
    }
    //включение события в обработчик
    on(event: string, callback:any):void{
        if(!this.listeners[event]){
            this.listeners[event] = [];
        }
        this.listeners[event].push(callback);
        console.log(this.listeners)
    }

    //проверка и вызов события
    emit(event: string, ...args:any){
        if (!this.listeners[event]) {
            throw new Event(`Нет события: ${event}`);
        }

        this.listeners[event].forEach(listener => {
            listener(...args);
        });
        console.log(this.listeners)
    }

    //удаление события
    off(event:string, callback:any){
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event] = this.listeners[event].filter(
            listener => listener !== callback
        );
        console.log(this.listeners)
    }
}


