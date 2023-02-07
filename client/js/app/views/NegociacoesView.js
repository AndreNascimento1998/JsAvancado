class NegociacoesView extends View{

    constructor(elemento) {
        super(elemento);
    }

    template(model) {

        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
                ${model.getNegociacoes().map( (n) => {
                    return `
                    <tr>
                        <td>${DateHelper.dataParaTexto(n.getData())}</td>
                        <td>${n.getQuantidade()}</td>
                        <td>${n.getValor()}</td>
                        <td>${n.getVolume()}</td>
                    </tr>
                    `;
                }).join('')}
            </tbody>
            <tfoot>
                <td colspan="3"></td>
                <td>
                ${model.getNegociacoes().reduce( (total, e ) => total + e.getVolume(), 0.0)}
                    </td>
            </tfoot>
        </table>
        `;
    }
}