class ClientDal{
    constructor(firebase){
        this._firebirdRef = firebase.database().ref('clients/');
        this._clients = [];
    }

    save(client){
        this._firebirdRef.set(client);
    }

    get(){

        this._firebirdRef.on('value', snap => {
            console.log(JSON.stringify(snapshot.val()));
            this._clients.push(snapshot.val());
        });
        return this._firebirdRef;
    }
}