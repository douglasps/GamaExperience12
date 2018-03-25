class ClientController{

    constructor(clientDal){

        this._clientDal = clientDal;

        let $ = document.querySelector.bind(document);
        this._inputFullName = $('#full-name');
        this._inputEmail = $('#email');
        this._inputCompany = $('#company');
        this._clientView = new ClientView($('#client-view'));
        
        let clientView = this._clientView;
        this._clientDal.get(function (data){
            clientView.update(data);
        });
    }

    get clientList(){
        return [].concat(_clientList);
    }

    save(event){
        event.preventDefault();
        let client = this._newClient();
        this._clientDal.save(client)
        var clientView = this._clientView;
        this._clientDal.get(function(data){
            clientView.update(data);
        });
        this._clearInputs();
    }

    _newClient(){
        return new Client(this._inputFullName.value, this._inputEmail.value, this._inputCompany.value);
    }

    _clearInputs(){
        this._inputFullName.text = '';
        this._inputEmail.text = '';
        this._inputCompany.text = '';
        this._inputFullName.focus();
    }
}