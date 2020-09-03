class SelecionarTema extends HTMLElement {

    constructor(){
        super();
    }

    connectedCallback(){        
        const image = this.getAttribute('img');
        const title = this.getAttribute('title');
        const description = this.getAttribute('description');
        const url_site = this.getAttribute('link');

        let tema = document.createElement('div');
        tema.innerHTML = `
        <div class="card grey align="center">
            <div class="card-content">
                <h2 class="subtitulo">${title}</h2>
            </div>
            <div class="card-image">
                <img class="img" src="${image}">
            </div>
            <div class="card-image">
                <p class="texto">${description}</p>
            </div>      
            <div class="card-action center link">
                <a href="${url_site}">Más información</a>
            </div>
        </div>`;      
        this.appendChild(tema);
    }

    disconnectedCallback() {
        console.log('Custom square element removed from page.');
    }
}

window.customElements.define("tema-seleccionado", SelecionarTema);

function selecionarTema(tema){ 
    let selecionar = document.getElementById('selecionar-tema');
    selecionar.innerHTML = `El tema elegido es ${tema}`;
}