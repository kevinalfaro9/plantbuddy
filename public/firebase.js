import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, getDocs, collection } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import { getDatabase, ref, onValue, set} from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js';

// Firebase Connection
const firebaseConfig = {
  apiKey: "UyRU137fPk7ZrSwa7Oanym9rSnkhhu2ibGSI7uQ4",
  authDomain: "plant-buddy-be150.firebaseapp.com",
  databaseURL: "https://plant-buddy-be150-default-rtdb.firebaseio.com",
  projectId: "plant-buddy-be150",
  storageBucket: "plant-buddy-be150.appspot.com",
  messagingSenderId: "182846007300",
  appId: "1:182846007300:web:a99b2676958f6a2d67ad51",
  measurementId: "G-MQG4VPCM5P"
};

// Add Event Listener To Button
let buttonOne = document.getElementById("buttonOne");

// Grab Span Tag To Append Moisture Level
let moistureLevelOne = document.getElementById("moistureLevelOne");
let moistureLevelTwo = document.getElementById("moistureLevelTwo");
let moistureLevelThree = document.getElementById("moistureLevelThree");


//Initialize the firebase app
initializeApp(firebaseConfig);

// Initialize the service
const db = getDatabase();


let clicked;


// Reference a collection
const plantRef = ref(db, 'Plants');
onValue(plantRef, (snapshot) => {
  const data = snapshot.val();
  const arr = data.split("-");
  const moistureLevel = arr[0];
  const waterLevel = arr[1];

  // Check For Moisture Level Of Plant, Display Level To Span Tag
  if(moistureLevel < 2300) {
    moistureLevelOne.textContent = "High";
    moistureLevelTwo.textContent = "High";
    moistureLevelThree.textContent = "High";
  } else if(moistureLevel < 2700 && moistureLevel > 2300) {
    moistureLevelOne.textContent = "Medium";
    moistureLevelTwo.textContent = "Medium";
    moistureLevelThree.textContent = "Medium";
  } else {
    moistureLevelOne.textContent = "Low";
    moistureLevelTwo.textContent = "Low";
    moistureLevelThree.textContent = "Low";
  }

});



// Button Functionality
buttonOne.addEventListener('click', function() {
  clicked = true;
  set(ref(db, 'waterPlant/'), {
    clicked: clicked
  });
})










