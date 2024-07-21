import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { Analysis, Post, Member, Campaign } from './types';

const firebaseConfig = {
	apiKey: 'AIzaSyBauKn_RID0iMqb0vaHkJfvvB--4WjZEg8',
	authDomain: 'left-4d6a5.firebaseapp.com',
	projectId: 'left-4d6a5',
	storageBucket: 'left-4d6a5.appspot.com',
	messagingSenderId: '818943462868',
	appId: '1:818943462868:web:360711e87aaa1a765e9a41',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

const getInfoGeneral = async () => {
	try {
		const docRef = doc(db, 'info', 'general');
		const docSnap = await getDoc(docRef);
		return docSnap.data();
	} catch (error) {
		console.error('Eroare la citirea datelor:', error);
	}
};

const getPosts = async () => {
	try {
		const querySnapshot = await getDocs(collection(db, 'posts'));
		return querySnapshot.docs.map((doc) => doc.data() as Post);
	} catch (error) {
		console.error('Eroare la citirea datelor:', error);
		return [];
	}
};

export { auth, db, app, storage, firebaseConfig, getInfoGeneral, getPosts };
