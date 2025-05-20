const COBERTURA = 12

function calcularLitros() {
    let alto = Number(document.getElementById("alto").value)
    let ancho = Number(document.getElementById("ancho").value)
    let manos = Number(document.getElementById("manos").value)
    let resultado = document.getElementById("resultado")
    let litros = (alto * ancho * manos) / COBERTURA

    let mensaje = "Necesitas comprar " + litros + " litros de pintura"

    resultado.innerHTML = mensaje
    resultado.style.display = "block"
    resultado.style.color = "white"
    resultado.style.fontSize = "20px"
    resultado.style.fontWeight = "bold"
    resultado.style.backgroundColor = "purple"

}