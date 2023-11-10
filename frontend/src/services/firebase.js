// Importa las funciones que necesitas de los SDK que necesitas
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA_Pyv5JXCVQz7eckvLl1nQHnj4DuUpaPw",
  authDomain: "woofmatch-6e1e5.firebaseapp.com",
  projectId: "woofmatch-6e1e5",
  storageBucket: "woofmatch-6e1e5.appspot.com",
  messagingSenderId: "505972250778",
  appId: "1:505972250778:web:3da944f6a378c80247a723",
  measurementId: "G-XKM11HB768"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Obtiene la instancia de auth
const auth = getAuth(app);

// Opcional: Inicializa Analytics si lo necesitas
const analytics = getAnalytics(app);

// Exporta la instancia de la aplicación y el objeto de autenticación si es necesario
export { app, auth };
