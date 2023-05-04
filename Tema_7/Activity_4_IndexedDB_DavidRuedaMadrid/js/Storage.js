//Opening for the database
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
        console.info('Connection to the database was successful');
        const db = request.result;
        const objectStore = db.createObjectStore('users',{keypath: 'id'});

        //Indexes (things for the database i guess)
        objectStore.createIndex("id", "id", {unique: true, autoIncrement: true});
        objectStore.createIndex("email", "email", {unique: true});
        objectStore.createIndex("nickname", "nickname", {unique: true});
        objectStore.createIndex("password", "password", {unique: false});

        //Transaction completed
        objectStore.transaction.oncompleted = (e) => {
            console.log('Object store "users" created, cool');
        }
    }
}

function addUser(){
    //Hacer cuando pueda
}