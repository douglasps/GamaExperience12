class Client{
    constructor(fullname, email, company){
        this._fullName = fullname;
        this._email = email;
        this._company = company;
        Object.freeze(this);
    }

    get fullName(){
        return this._fullName;
    }

    get email(){
        return this._email;
    }

    get company(){
        return this._company;
    }
}