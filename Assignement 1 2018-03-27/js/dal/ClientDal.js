class ClientDal{
    constructor(){
        // Initialize Firebase
		var config = {
            apiKey: "AIzaSyDl-xdJRXnN9vDB4Pdb94hzwzW7FUXn3Ak",
            authDomain: "gamaexperience12-assignment1.firebaseapp.com",
            databaseURL: "https://gamaexperience12-assignment1.firebaseio.com",
            projectId: "gamaexperience12-assignment1",
            storageBucket: "gamaexperience12-assignment1.appspot.com",
            messagingSenderId: "872231773224"
        };
        firebase.initializeApp(config);

        this._firebirdRef = firebase.database().ref('clients');
    }

    _convertData(data){
        if(!data || !data.val()) return;

        let clients = data.val();
        let keys = Object.keys(clients);
        let clientList = [];
        keys.forEach(key => {
            let client = clients[key];
            clientList.push(new Client(client.fullName, client.email, client.company));
        }, this);

        return clientList;
    }

    save(client){
        this._firebirdRef.push({
            fullName: client.fullName,
            email: client.email,
            company: client.company
        });
    }

    get(){
        return new Promise(resolve =>{
            this._firebirdRef.once("value", data => resolve(this._convertData(data)));
        });
    }
}