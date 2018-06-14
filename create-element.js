class Element{
    constructor(){}
   
    createNode({ el, style, text, placeholder, id }){
        const node = document.createElement(el);
        style && node.classList.add(style);
        placeholder && node.setAttribute("placeholder", placeholder)
        id && node.setAttribute("id", id)
        if(text) node.innerText = text;
        return node
    }    
}
