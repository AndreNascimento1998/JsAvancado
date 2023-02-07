class View {

    constructor(elemento) {
        this._elemento = elemento;
    }

    template(){
        throw new Error('Template tem que ser implementada.');
    }

    update(model) {
        this._elemento.innerHTML = this.template(model);
    }   
}