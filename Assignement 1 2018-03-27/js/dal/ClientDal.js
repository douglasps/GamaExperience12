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