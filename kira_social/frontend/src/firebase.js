import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = { apiKey:"", authDomain:"", projectId:"", messagingSenderId:"", appId:"" };

const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

export const requestPermission = async () => {
  try { return await getToken(messaging,{vapidKey:""}); }
  catch(err){ console.log(err); }
}

export const onMessageListener = () =>
  new Promise(resolve => onMessage(messaging, payload => resolve(payload)));
