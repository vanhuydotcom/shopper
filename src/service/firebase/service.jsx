import firebase, { firebaseDb } from './config'
export const addDoc = (collection, data) => {
    const query = firebaseDb.collection(collection)
    query.add({
        ...data,
        createAt: firebase.firestore.FieldValue.serverTimestamp()
    })
}