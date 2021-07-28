
import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyA8Q4wmbSKnA5TtG9GzfGh_Gp4HJ42fHYg",
    authDomain: "cfd6-shop.firebaseapp.com",
    projectId: "cfd6-shop",
    storageBucket: "cfd6-shop.appspot.com",
    messagingSenderId: "985983733638",
    appId: "1:985983733638:web:2a22cad629fa6d59d8a607"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firebaseDb = firebase.firestore()
export { firebaseDb }
export default firebase
