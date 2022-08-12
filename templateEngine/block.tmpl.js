export function blockTemplate() {
    return `
<!-- Можно {{}} с пробелами, можно без-->
<div class="{{ className }}">
        <span onClick="{{ handleClick }}">{{text}}</span>
        <span>{{ user.info.firstName }}</span>
        <button onclick={{handleClick}}/>
</div>
`}