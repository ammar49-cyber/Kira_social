const admin = require("firebase-admin");
const serviceAccount = require("../firebaseServiceAccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const sendPush = async (token, title, body) => {
  try{
    await admin.messaging().send({ token, notification:{title, body} });
    console.log("Push sent to", token);
  }catch(err){ console.log(err); }
}

module.exports = sendPush;
