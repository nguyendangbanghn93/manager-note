import firebase from 'firebase';
require('firebase/auth');
var config = {
  apiKey: "AIzaSyDSYz1d-NCnvVcSyqsJSm-VjnEhHIpCS5w",
  authDomain: "manager-note-17bb2.firebaseapp.com",
  databaseURL: "https://manager-note-17bb2-default-rtdb.firebaseio.com",
  projectId: "manager-note-17bb2",
  storageBucket: "manager-note-17bb2.appspot.com",
  messagingSenderId: "793296509658",
  appId: "1:793296509658:web:c40daab3fbb3899eba63e3",
  measurementId: "G-4Z5FJPH5KH"
};
const connect = firebase.initializeApp(config);
const data = firebase.database().ref("/note");

data.removeID = (id) => {
  data.child(id).remove();
}
// data.set({
//   4: {
//     id: 4,
//     title: "test123",
//     detail:"Moo tar"
//   },
//   5:{
//     id: 5,
//     title: "test5",
//     detail:"Moo tar5"
//   },
// })
const fBase = { connect, data }
export default fBase ;
