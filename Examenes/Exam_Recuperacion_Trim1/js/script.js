//Opening of the database
let db;
function createDatabase(){
    if (!window.indexedDB) {
        console.log(`Your browser doesn't support IndexedDB`);
        return;
    }
    const request = window.indexedDB.open("UsersDatabase", 1);
    //Event Handlers (Exiled plugins go brrr)
    request.onerror = (e) => {
        console.error('IndexedDB error');
    };

    request.onsuccess = (e) => {
        console.info('Connection to the database was successful');
        db = request.result;
    };

    request.onupgradeneeded = (e) => {
        console.info('Database created');
        const db = request.result;
        const objectStore = db.createObjectStore('users', {keyPath: 'id'});

        //Indexes
        objectStore.createIndex("id", "id", {unique: true, autoIncrement: true});
        objectStore.createIndex("login", "login", {unique: false});
        objectStore.createIndex("password", "password", {unique: false});
        objectStore.createIndex("email", "email", {unique: false});
        objectStore.createIndex("firstName", "firstName", {unique: false});
        objectStore.createIndex("lastName", "lastName", {unique: false});
        objectStore.createIndex("birthday", "birthday", {unique: false});
        objectStore.createIndex("phone", "phone", {unique: false});
        objectStore.createIndex("address", "address", {unique: false});

        //Transaction completed
        objectStore.transaction.oncompleted = (e) => {
            console.log('Object store "users" created');
        }
    }
}

function addUser(user){
    var login = document.getElementById("login");
    var password = document.getElementById("password");
    var email = document.getElementById("email");
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var birthday = document.getElementById("birthday");
    var phone = document.getElementById("phone");
    var address = document.getElementById("address");
    
    const transaction = db.transaction('users', 'readwrite');
    transaction.oncomplete = function(event) {
        console.log('User has been added to the database');
    };
    transaction.onerror = function(event) {
        //
    };
    const objectStore = transaction.objectStore('users');
    //Add a new user
    const request = objectStore.add(user);
    request.onsuccess = () => {
        console.log('New user added');
    }
    request.onerror = (err) => {
        console.error('Error to add the new user');
    }    
}

const user = {
    login: login, password: password, email: email, firstName: firstName, lastName: lastName, birthday: birthday, phone: phone, address: address 
}

function getAllUsers(){
    const request = db.transaction('users').objectStore('users').getAll();

    request.onsuccess = () => {
        const users = request.result;
        console.log('Got all the users of the table');
        console.table(users);
        return users;
    }

    request.onerror = (err) => {
        console.error('Error to get all the users)');
    }
}

createDatabase();
