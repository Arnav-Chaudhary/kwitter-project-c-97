//YOUR FIREBASE LINKS
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
room_name= localStorage.getItem("room_name");


function send() {
      var msg= document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value="";
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output2").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name= message_data['name'];
message= message_data['message'];
like= message_data['like'];
name_with_tag= "<h4>" + name + "<img class= 'tick_mark' src='tick.png'> </h4>";
message_with_tag= "<h4 class='message_h4'>" + message + "</h4>";
like_button= "<button class= 'btn btn-danger' id="+firebase_message_id+" value="+ like +" onclick='updatelike(this.id)'>";
span_with_tag= "<span class= 'glyphicon glyphicon-thumbs-up' > Like: " + like + "</span> </button> <hr>";
row= name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output2").innerHTML+=row;
//End code
      } });  }); }
getData();

function updatelike(message_id) {
console.log("clicked on like button - " + message_id);
button_id= message_id;
likes= document.getElementById(button_id).value;
updatelikes= Number(likes) + 1;
console.log(updatelikes);
firebase.database().ref(room_name).child(message_id).update({
      like: updatelikes
});
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("kwitter.html");
}









