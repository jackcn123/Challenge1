const textEntrada = document.getElementById("entrada");
const buttonEncriptar = document.getElementById("botonencriptar");
const buttonDesencriptar = document.getElementById("botondesencriptar");
const buttonCopiar = document.getElementById("copiar");
var llaves = ['e', 'enter', 'i', 'imes', 'a', 'ai', 'o', 'ober', 'u', 'ufat'];
var patron = /[a-z\u00f1\s]/;

textEntrada.addEventListener("beforeinput", revisar);
buttonEncriptar.addEventListener("click", encriptar);
buttonDesencriptar.addEventListener("click", desencriptar);
buttonCopiar.addEventListener("click", copiar);

function revisar(event) {
    if (patron.test(event.data) === false) event.preventDefault();
}

function encriptar() {
    var textIn = textEntrada.value.toString();
    if (validar(textIn)) {
        for (var i = 0; i < llaves.length; i = i + 2) {
            textIn = textIn.replaceAll(llaves[i], llaves[i + 1]);
        }
        colocartexto(textIn);
    }
}

function desencriptar() {
    var textIn = textEntrada.value.toString();
    if (validar(textIn)) {
        for (var i = 1; i < 10; i = i + 2) {
            textIn = textIn.replaceAll(llaves[i], llaves[i - 1]);
        }
        colocartexto(textIn);
    }
}

function validar(porvalidar) {
    var caracteres = porvalidar.length;
    if (caracteres == 0) {
        document.getElementById('imagen2').style.display = 'block';
        document.getElementById('msj').style.display = 'none';
        document.getElementById('copiar').style.display = 'none';
        return false;
    } else {
        for (var j = 0; j < caracteres; j++) {
            resultado = patron.test(porvalidar[j]);
            if (resultado === false) {
                alert("Ingrese solo letras minúsculas y sin acentos. No es posible continuar.");
                break;
            }
        }
        return resultado
    }
}

function colocartexto(texto) {
    document.getElementById('imagen').style.display = 'none';
    document.getElementById('imagen2').style.display = 'none';
    document.getElementById('msj').style.display='block';
    document.getElementById('msj').innerHTML = texto;
    document.getElementById('copiar').style.display = 'block';
    document.getElementById('entrada').value = "";
}

function copiar() {
    let textocopiado = document.getElementById('msj');
    navigator.clipboard.writeText(textocopiado.textContent);
}


