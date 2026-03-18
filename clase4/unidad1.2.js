let lado= prompt("ingrese el lado de un cuadrado")
while(lado<=0||isNaN(lado)){
    lado=prompt("ingrese el lado del cuadrado. numero positivo")
}
let perimetro=lado*4
let area=lado*lado
alert("El perimetro del cuadrado es: "+perimetro)
alert("El area del cuadrado es: "+area)