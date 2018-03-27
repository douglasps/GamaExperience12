class ClientController{

    constructor(clientDal){

        let $ = document.querySelector.bind(document);
        this._inputFullName = $('#full-name');
        this._inputEmail = $('#email');
        this._inputCompany = $('#company');

        this._clientView = new ClientView($('#client-view'));
        this._clientDal = new ClientDal();
        
        this._clientDal.get()
            .then(data => this._update(data));
    }

    save(event){
        event.preventDefault();
        this._clientDal.save(this._newClient());
        this._clientDal.get()
            .then(data => this._update(data));
        this._clearInputs();
    }

    _update(data){
        this._clientView.update(data);
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