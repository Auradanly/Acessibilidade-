/*Seleciona, acessa ou reconhece a base do documento html e o checkbox do tema Dark*/
const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

/* Pega o valor do elemento ou estilo*/
const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)

/*Pega as variáveis que terão as cores alteradas*/
const initialColors = {
    bg: getStyle(html, "--bg"),
    bgPanel: getStyle(html, "--bg-panel"),
    colorHeadings: getStyle(html, "--color-headings"),
    colorText: getStyle(html, "--color-text"),
}
/*Alteração*/
const darkMode = {
    bg: "#333333",
    bgPanel: "#434343",
    colorHeadings: "#E0D2FF",
    colorText: "#B5B5B5"
    
}
/*Chaves de acesso da variável*/
const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

/*Transforma ou muda as cores*/
const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    )
}

/*checked? Mudar as cores*/
checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})
