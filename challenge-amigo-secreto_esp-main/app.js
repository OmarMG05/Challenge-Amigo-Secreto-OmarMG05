class AmigoSecreto {
    constructor() {
        this._amigos = [];
        this._resultado = "";
    }

    // Getters
    get getAmigos() {
        return this._amigos;
    }

    get getResultado() {
        return this._resultado;
    }

    // Setters
    set setAmigos(amigo) {
        if (amigo.trim() === "") {
            alert("Por favor, ingrese un nombre válido.");
            return;
        }
        this._amigos.push(amigo);
    }

    set setResultado(resultado) {
        this._resultado = resultado;
    }
}

const amigoSecreto = new AmigoSecreto();

function agregarAmigo() {
    let input = document.getElementById("amigo");
    amigoSecreto.setAmigos = input.value;
    actualizarLista();
    input.value = ""; // Limpiar input después de añadir
}

function sortearAmigo() {
    if (amigoSecreto.getAmigos.length === 0) {
        alert("Debe agregar al menos un amigo antes de sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigoSecreto.getAmigos.length);
    amigoSecreto.setResultado = `El amigo secreto sorteado es: ${amigoSecreto.getAmigos[indiceAleatorio]}`;
    
    mostrarResultado();
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    amigoSecreto.getAmigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function mostrarResultado() {
    let lista = document.getElementById("listaAmigos");
    let resultado = document.getElementById("resultado");

    lista.innerHTML = ""; // Ocultar la lista de amigos
    resultado.innerHTML = `<li style="color: green; font-weight: bold;">${amigoSecreto.getResultado}</li>`;
}
