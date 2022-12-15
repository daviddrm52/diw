var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
var database = "usersDB";
const DB_STORE_NAME = 'users';
const DB_VERSION = 1;
var db;
const EDIT_USER = "Edit user";
const NEW_USER = "New user";
var opened = false;

function openDb(onDbCompleted) {

  if(opened){
    db.close();
    opened = false;
  }
  var req = indexedDB.open(database, DB_VERSION);

  req.onsuccess = function (e) {
    db = this.result;
    console.log("openDb: openDb DONE");
    opened = true;

    onDbCompleted(db);

  };
  req.onerror = function (e) {
    console.error("openDb: error opening DB:", e.target.errorCode);
  };

  // Create the schema
  req.onupgradeneeded = function() {
    console.log("openDb.onupgradeneeded");
    db = req.result;
    var store = db.createObjectStore(DB_STORE_NAME, { keyPath: "id", autoIncrement: true});

    store.createIndex('fname', 'fname', { unique: false });
    store.createIndex('lname', 'lname', { unique: false });
    store.createIndex('dni', 'dni', { unique: false });
  };
}

function sendData(){

  openDb(function(db){
    
    addUser(db);
        
  });
}

function addUser(db){
  var fname = document.getElementById("fname");
  var lname = document.getElementById("lname");
  var dni = document.getElementById("dni");
  var obj = { fname: fname.value, lname: lname.value, dni: dni.value };

  // Start a new transaction
  var tx = db.transaction(DB_STORE_NAME, "readwrite");  
  var store = tx.objectStore(DB_STORE_NAME);

  req = store.add(obj);
  
  req.onsuccess = function (e) {
    console.log("Insertion in DB successful");
    
    readData();
    clearFormInputs();
    
  };
  req.onerror = function(e) {
    console.error("addUser error", this.error);
  };

  tx.oncomplete = function() {
    console.log("addUser: tx completed");
    db.close();
    opened = false;
  };

}

function readData(){
  openDb(function(db){
    readUsers(db);
  });
}

function readUsers(db) {
  var tx = db.transaction(DB_STORE_NAME, "readonly"); 
  var store = tx.objectStore(DB_STORE_NAME);

  var result = [];
  var req = store.openCursor();
  
  req.onsuccess = function(e){
    var cursor = e.target.result;
    if (cursor) {
      result.push(cursor.value);
      console.log(cursor.value);
      cursor.continue();
    } else {
      console.log("EOF");
      console.log(result);
      addUsersToHTML(result);
    }    
  };

  req.onerror = function(e){
    console.error("readUsers: error reading data:", e.target.errorCode);
  };

  tx.oncomplete = function() {
    console.log("readUsers: tx completed");
    db.close();
    opened = false;
  };
}

function addUsersToHTML(users){
  var ul = document.getElementById("users-ul");

  ul.innerHTML = "";

  for (let i = 0; i < users.length; i++) {
    ul.innerHTML += "<li><span>"+users[i].id+" "+users[i].fname+" "+users[i].lname+" "+users[i].dni+"</span><button user_id="+users[i].id+" id=edit_"+users[i].id+">Edit user</button><button user_id="+users[i].id+" id=delete_"+users[i].id+">Delete user</button></li>";
  }

  for (let i = 0; i < users.length; i++) {
    document.getElementById("edit_"+users[i].id).addEventListener("click", readUser, false);
    document.getElementById("delete_"+users[i].id).addEventListener("click", deleteUser, false);
  }
}

function readUser(e){
  console.log("readUser");
  // Your code here
  openDb(function(db){
    var id = 1; //oof
    var tx = db.transaction(DB_STORE_NAME, "readonly"); 
    var store = tx.objectStore(DB_STORE_NAME);
    var request = store.get(parseInt(id));
    request.onsuccess = function(event) {
      var user = event.target.result;
      console.log("First name: "+user.fname+" Last Name: "+user.lname+" DNI: "+user.dni);
      var firstName = document.getElementById("fname");
      firstName.value = user.fname;
      var lastName = document.getElementById("lname");
      lastName.value = user.lname;
      var identify = document.getElementById("dni");
      identify.value = user.dni;
    }
  });
  //Can read the user, but only with the fist one, i can't get the "user_id" from the button.
}

function deleteUser(e){
  console.log("deleteUser");
  //Do not complete, it's not mandatory
}

function editUser(db){
  console.log("editUser");
  // Your code here

}

function clearFormInputs(){  
  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("dni").value = "";
}

window.addEventListener('load', (event) => {
  readData();
});