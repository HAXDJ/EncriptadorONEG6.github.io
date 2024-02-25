function encriptar() {
    let texto = document.getElementById('texto').value;
    let tituloMensaje = document.getElementById('tituloMensaje');
    let cajaFuerte = document.getElementById('cajaFuerte');
    let parrafo = document.getElementById('parrafo');

    if (texto.trim() !== '') {
        let textoCifrado = texto
            .replace(/e/gi, 'enter')
            .replace(/i/gi, 'imes')
            .replace(/a/gi, 'ai')
            .replace(/o/gi, 'ober')
            .replace(/u/gi, 'ufat');

        document.getElementById('texto').value = textoCifrado;
        tituloMensaje.textContent = 'Tu secreto fue encriptado';
        cajaFuerte.src = './imagenes/close.svg';
        parrafo.textContent = "";
    } else {
        cajaFuerte.src = './imagenes/vault-154023.svg';
        tituloMensaje.textContent = 'Ningún secreto fue encriptado';
        parrafo.textContent = 'Escribe el secreto que desees ocultar o revelar';
        swal('Oooopss!', 'Debes ingresar el secreto', 'warning');
    }
}

function desencriptar() {
    let texto = document.getElementById('texto').value;
    let tituloMensaje = document.getElementById('tituloMensaje');
    let cajaFuerte = document.getElementById('cajaFuerte');
    let parrafo = document.getElementById('parrafo');

    if (texto.trim() !== '') {
        let textoCifrado = texto
            .replace(/enter/gi, 'e')
            .replace(/imes/gi, 'i')
            .replace(/ai/gi, 'a')
            .replace(/ober/gi, 'o')
            .replace(/ufat/gi, 'u');

        document.getElementById('texto').value = textoCifrado;
        tituloMensaje.textContent = 'Tu secreto fue desencriptado';
        cajaFuerte.src = './imagenes/open.svg';
        parrafo.textContent = "";
    } else {
        cajaFuerte.src = './imagenes/vault-154023.svg'; // Restaura la imagen original
        tituloMensaje.textContent = 'Ningún secreto fue encriptado';
        parrafo.textContent = 'Escribe el secreto que desees ocultar o revelar';
        swal('Oooopss!', 'Debes ingresar el secreto', 'warning');
    }
}

function copiarTexto() {
    let textoEncriptado = document.getElementById('texto').value;
    let textoTemporal = document.createElement('textarea');
    textoTemporal.value = textoEncriptado;

    document.body.appendChild(textoTemporal);
    textoTemporal.select();
    document.execCommand('copy');
    document.body.removeChild(textoTemporal);
}