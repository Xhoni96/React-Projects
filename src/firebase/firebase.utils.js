// we are importing only the files that we need so we don't get unnesecery files
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyA_akFt1ONo3u3A4t890dbTRqyHoFmspOo',
  authDomain: 'crwn-db-f9380.firebaseapp.com',
  databaseURL: 'https://crwn-db-f9380.firebaseio.com',
  projectId: 'crwn-db-f9380',
  storageBucket: 'crwn-db-f9380.appspot.com',
  messagingSenderId: '1021039400023',
  appId: '1:1021039400023:web:a8b292657bf7c9a3927f12',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user ', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);
//this below is what we are getting from the imported files of firebase and we want to export what we want to use in certain cases in other files
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// this means we want to allways trigger the google pop up whenever we use this google auth provider for authentication and sign in
provider.setCustomParameters({ prompt: 'select_account' });
// this below will call that sign in popup of google because there are a lot of auth popups like twiter etc.
// the activation of google is made in firebase project that you created online in authentication/sing-in/enable google
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
