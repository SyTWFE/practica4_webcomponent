class wcMyWebComponent extends HTMLElement {
    static get observedAttributes() {
      return ['img', 'title', 'descripcion', 'url'];
    }

    constructor() {
        // Always call super first in constructor
        super();
    
        const shadow = this.attachShadow({mode: 'open'});
    
        const div = document.createElement('div');
        const style = document.createElement('style');
        shadow.appendChild(style);
        shadow.appendChild(div);
      }
    
      connectedCallback() {
        console.log('Custom square element added to page.');
      }
    
      attributeChangedCallback(name, oldValue, newValue) {
        console.log('Custom square element attributes changed.');
      }
    }
    
    customElements.define('myweb-component', wcMyWebComponent);
        
    const add = document.querySelector('.add');
    const add = document.querySelector('.add2');
    const add = document.querySelector('.add3');
    const add = document.querySelector('.add4');
    const remove = document.querySelector('.remove');
    let seleccionado;
    
    remove.disabled = true;
    
    add.onclick = function() {
      // Create a custom square element
      seleccionado = document.createElement('myweb-component');
      seleccionado.setAttribute('img' , 'img');
      seleccionado.setAttribute('title' , 'title');
      seleccionado.setAttribute('descripcion' , 'descripcion');
      seleccionado.setAttribute('url' , 'url');
      document.body.appendChild(seleccionado);
    
      remove.disabled = false;
      add.disabled = true;
    };

    add.onclick = function() {
      // Create a custom square element
      seleccionado = document.createElement('myweb-component');
      seleccionado.setAttribute('img' , 'img');
      seleccionado.setAttribute('title' , 'title');
      seleccionado.setAttribute('descripcion' , 'descripcion');
      seleccionado.setAttribute('url' , 'url');
      document.body.appendChild(seleccionado);
    
      remove.disabled = false;
      add.disabled = true;
    };
        
    remove.onclick = function() {
      // Remove the square
      document.body.removeChild(seleccionado);
    
      remove.disabled = true;
      add.disabled = false;
    };

    function select_teme(product){    
        let ele = document.getElementById(product)
        console.log(ele);
    }