var firebaseConfig = {
      apiKey: "AIzaSyB8mIB3_D9SVaPlGpkBnCN2HdA_uydyWMI",
      authDomain: "kwitter-project-arnav.firebaseapp.com",
      databaseURL: "https://kwitter-project-arnav.firebaseio.com",
      projectId: "kwitter-project-arnav",
      storageBucket: "kwitter-project-arnav.appspot.com",
      messagingSenderId: "125477872695",
      appId: "1:125477872695:web:bd1d8d759e398adb81cbb2"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);




user_name= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";
getData();
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room_name - " + Room_names);
      row= "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}


function addRoom(){
      room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room"
      });
      localStorage.setItem("room_name", room_name);
      window.location= "kwitter_page.html";
}

function redirectToRoomName(name){
      console.log(name); 
      localStorage.setItem("room_name", name);
      window.location= "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}