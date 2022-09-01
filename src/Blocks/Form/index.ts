import { Form } from './Form';

window.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#app')!;
    const form = new Form({});
    console.log(form);
    root.append(form.getContent()!);
    form.dispatchComponentDidMount();
});
