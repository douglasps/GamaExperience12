class ClientDal{
    constructor(firebase){
        this._clients = [];
        this._firebirdRef = firebase.database().ref('clients');
    }

    _refreshClients(getData, data){
        if(!data || !data.val()) return;

        let clients = data.val();
        let keys = Object.keys(clients);
        let clientList = [];
        keys.forEach(function(key) {
            let client = clients[key];
            clientList.push(new Client(client.fullName, client.email, client.company));
        }, this);

        getData(clientList);
    }

    save(client){
        this._firebirdRef.push({
            fullName: client.fullName,
            email: client.email,
            company: client.company
        });
    }

    get(getData){
        let ref = this._refreshClients;
        this._firebirdRef.once("value", function(data){ 
            ref(getData, data); 
        });
    }
}