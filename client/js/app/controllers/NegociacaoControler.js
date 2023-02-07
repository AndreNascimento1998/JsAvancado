class NegociacaoControler {

    constructor() {
        const $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNeogiacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._listaNeogiacoes);
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);
    }

    adiciona(e) {
        e.preventDefault();
        
        this._listaNeogiacoes.adiciona(this._criaNegociacao());
        this._negociacoesView.update(this._listaNeogiacoes);
        
        this._mensagem.setTexto('Negociação adicionada com sucesso!');
        this._mensagemView.update(this._mensagem);
        this._limpaFormulario(); 
    }
        
    _criaNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value, 
            this._inputValor.value,
        );
    }

    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0;
        this._inputData.focus();
    }
}