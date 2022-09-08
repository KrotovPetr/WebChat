export function validationInputFocus(input:HTMLInputElement, str:string){
    input.setAttribute("success","true");
    let p:Element | null = input.previousElementSibling
    if(p!==null){

        p.textContent = str;
        p.setAttribute("error","false")
    }
}