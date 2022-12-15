//Tutorial: https://dev.to/pandresdev/create-a-database-with-indexedbd-1f1j

//Apertura de la base de datos
let db;
function createDatabase(){
    if (!window.indexedDB) {
        console.log(`Your browser doesn't support IndexedDB`);
        return;
    }
    const request = window.indexedDB.open("UsersDatabase", 1);
    //Event Handlers "recuerdos de c#"
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
        objectStore.createIndex("name", "name", {unique: false});
        objectStore.createIndex("email", "email", {unique: false});
        objectStore.createIndex("password", "password", {unique: false});

        //Transaction completed
        objectStore.transaction.oncompleted = (e) => {
            console.log('Object store "users" created');
        }
    }
}

function addUser(user){
    var username = document.getElementById("username");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
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
    username: username, email: email, password: password
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

window.onbeforeunload = function() {
    return "Dude, are you sure you want to leave? Think of the kittens!";
}