// This works on all devices/browsers, and uses IndexedDBShim as a final fallback 
var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
var database = "usersDB";
const DB_STORE_NAME = 'users';
const DB_VERSION = 1;
var db;

function sendData(){

  var req = indexedDB.open(database, DB_VERSION);

  req.onsuccess = function (e) {
    // Equal to: db = req.result;
    db = this.result;
    console.log("openDb DONE");

    addUser(db);

  };
  req.onerror = function (e) {
    console.error("openDb:", e.target.errorCode);
  };

  // Create the schema
  req.onupgradeneeded = function() {
    console.log("openDb.onupgradeneeded");
    db = req.result;
    var store = db.createObjectStore(DB_STORE_NAME, { keyPath: "id", autoIncrement: true});

    store.createIndex('fname', 'fname', { unique: false });
    store.createIndex('lname', 'lname', { unique: false });

  };
}

function addUser(db){
  var fname = document.getElementById("fname");
  var lname = document.getElementById("lname");
  var obj = { fname: fname.value, lname: lname.value };

  // Start a new transaction
  var tx = db.transaction(DB_STORE_NAME, "readwrite");  //readonly 
  var store = tx.objectStore(DB_STORE_NAME);
  //var index = store.index("fname");

  try {
    req = store.add(obj);
  } catch (e) {
    console.log("Catch");
  }

  req.onsuccess = function (e) {
    console.log("Insertion in DB successful");
    
  };
  req.onerror = function(e) {
    console.error("addPublication error", this.error);
   
  };

  tx.oncomplete = function() {
    db.close();
  };

}

document.getElementById("form").addEventListener("submit", sendData, false);


// // This works on all devices/browsers, and uses IndexedDBShim as a final fallback 
// var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

// var database = "MyDatabase";

// // Open (or create) the database
// var openDB = indexedDB.open(database, 1);

// // Create the schema
// openDB.onupgradeneeded = function() {
//   var db = openDB.result;
//   var store = db.createObjectStore("MyObjectStore", {keyPath: "id"});
//   var index = store.createIndex("NameIndex", ["name.last", "name.first"]);
// };

// openDB.onsuccess = function(event) {
//   // Start a new transaction
//   var db = openDB.result;
//   // var db = event.target.result;
//   var tx = db.transaction("MyObjectStore", "readwrite");
//   var store = tx.objectStore("MyObjectStore");
//   var index = store.index("NameIndex");

//   // Add some data
//   store.put({id: 12345, name: {first: "John", last: "Doe"}, age: 42});
//   store.put({id: 67890, name: {first: "Bob", last: "Smith"}, age: 35});
  
//   // Query the data
//   var getJohn = store.get(12345);
//   var getBob = index.get(["Smith", "Bob"]);

//   getJohn.onsuccess = function() {
//       console.log(getJohn.result.name.first);  // => "John"
//   };

//   getBob.onsuccess = function() {
//       console.log(getBob.result.name.first);   // => "Bob"
//   };

//   // Close the db when the transaction is done
//   tx.oncomplete = function() {
//       db.close();
//   };
// }


// openDB.onerror = (event) => {
//   // Do something with openDB.errorCode!
//   console.error("Why didn't you allow my web app to use IndexedDB?!");
//   console.error(`Database error: ${event.target.errorCode}`);
// };