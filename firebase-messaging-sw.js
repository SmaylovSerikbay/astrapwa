importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyCvIxDGs9k08dKxFkYrFwndicLs53lVxsk",
  authDomain: "astrapush-a8108.firebaseapp.com",
  projectId: "astrapush-a8108",
  storageBucket: "astrapush-a8108.firebasestorage.app",
  messagingSenderId: "389198298873",
  appId: "1:389198298873:web:43d24adb2a1a28ce69ec28"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Received background message ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/icons/Icon-192.png"
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});