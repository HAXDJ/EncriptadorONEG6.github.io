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
        cajaFuerte.src = './imagenes/vault.svg';
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
        cajaFuerte.src = './imagenes/vault.svg';
        tituloMensaje.textContent = 'Ningún secreto fue encriptado';
        parrafo.textContent = 'Escribe el secreto que desees ocultar o revelar';
        swal('Oooopss!', 'Debes ingresar el secreto', 'warning');
    }
}

function copiarTexto() {
    let textoEncriptado = document.getElementById('texto').value;
    navigator.clipboard.writeText(textoEncriptado)
        .then(() => {
            swal('¡Éxito!', '¡El texto se copió al portapapeles!', 'success');
        })
        .catch((error) => {
            console.error('Error al copiar el texto:', error);
            swal('Error', 'No se pudo copiar el texto al portapapeles', 'error');
        });
}