// aqui exportaras las funciones que necesites

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';

export function crearUsuarioConCorreoYContraseña(email, contraseña, onNavigate) {
  createUserWithEmailAndPassword(auth, email, contraseña)
    .then((result) => {
      if (result.user) {
        localStorage.setItem('casita', JSON.stringify(result));
        onNavigate('/post');
      }
    });
// .catch((err) => { alert('hola'); });
<<<<<<< HEAD

/*function createPost(title, content) {
  db.collection('posts')
    .add({
      title: title,
      content: content,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(onNavigate)
    })
    .then((docRef) => {
      console.log('Post creado con ID:', docRef.id);
    })
    .catch((error) => {
      console.error('Error al crear el post:', error);
    });
    const newPostTitle = 'Título del nuevo post';
const newPostContent = 'Contenido del nuevo post';

createPost(newPostTitle, newPostContent);
}*/




};
=======
}

// post

export const createPost = (text) => {
  addDoc(collection(db, "posts"),{
    container:
  })
}
>>>>>>> aad81b6a7244067abb883d68b7f15851f95f941d
