class ClientView{

    constructor(element){
        this._element = element;
    }

    _template(clients){
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>Nome completo</th>
                    <th>E-mail</th>
                    <th>Empresa</th>
                </tr>
            </thead>
            <tbody>
            ${
                clients.map(c => 
                `
                    <tr>
                        <td>${c.fullName}</td>
                        <td>${c.email}</td>
                        <td>${c.company}</td>
                    </tr>
                `).join('')
            }
            </tbody>
            <tfoot>
            </tfoot>
        </table>
        `;
    }

    update(clients){
        this._element.innerHTML = this._template(clients);
    }
}