var firebaseConfig = {
    apiKey: "AIzaSyBaQXOyLV_QEPpPaR0vyD7cztdhi5XflLw",
    authDomain: "datenskate.firebaseapp.com",
    projectId: "datenskate",
    storageBucket: "datenskate.appspot.com",
    messagingSenderId: "316862785684",
    appId: "1:316862785684:web:830739c68328f75c60ec81",
    measurementId: "G-5VGRNW2PWG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();

  export default database;