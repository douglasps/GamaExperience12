class ClientList{
    constructor(){
        this._clientList = [];
        Object.freeze(this);
    }

    add(client){
        this._clientList.push(client);
    }

    get clients(){
        return [].concat(this._clientList);
    }
}