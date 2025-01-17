import { createUser, initSessionsWithGoogle } from '../lib';

export const Register = (onNavigate) => {
  const HomeDiv = document.createElement('div');

  // const registerForm = document.querySelector("#registerForm");

  HomeDiv.innerHTML = `<div class="container-father-register">
  <div class="welcome-register">
  </div>
  <div class='register-form-total' id='registerFormTotal'> 
  <button class="back" id="backP"> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-left" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 12l14 0" />
  <path d="M5 12l6 6" />
  <path d="M5 12l6 -6" />
</svg></button> 
    <div class="register-form">
      <h1 class="title-one">Registro</h1>   
      <form>
        
          <input id='input-name' placeholder='Nombre' type='text' class="input">
       
        
          <input id='input-lastname' placeholder='Apellido' class="input" type='text'>
        
       
          <input id='input-email' placeholder='Correo electronico' class="input" type='email'>
       
        
          <input id='input-password' placeholder='Contraseña' class="input" type='password'>
       
        
      </form>
    
      <hr class="hr-register">
      <div class="singin-google-facebook-reg">
      <button class="google-facebook-icon" id="google-icon"> <img class="google" src="./img/logo--google.png"></button>
      <button class="google-facebook-icon" id="facebook-icon"> <img class="facebook" src="./img/logo-facebook.png"></button>
      </div> 
      <div class="check-box">
      <input class="checkbox" type="checkbox">
      <p class="acept">Estoy de acuerdo con los término y condiciones.</p>
      </div>
      <div><button class="principal-button-dark" id="buttonSubmitRegister">Registrarse</button></div>
      
      <div>
      <p class="condition-p">Al presionar crear cuenta o iniciar sesión, aceptas nuestra politica de privacidad y cookies.</p>
    </div>
      </div>  

     
      </div>
      </div>`;
  const buttonSubmitRegister = HomeDiv.querySelector('#buttonSubmitRegister');
  const inputEmail = HomeDiv.querySelector('#input-email');
  const inputPassword = HomeDiv.querySelector('#input-password');

  const buttonChico = HomeDiv.querySelector('#backP');
  buttonChico.addEventListener('click', () => {
    onNavigate('/');
  });

  const buttonGoogle = HomeDiv.querySelector('#google-icon');
  buttonGoogle.addEventListener('click', () => {
    initSessionsWithGoogle().then(() => {
      onNavigate('/post');
    });
  });
  /* const buttonFacebook = HomeDiv.querySelector('#facebook-icon');
  buttonFacebook.addEventListener('click', () => {
    // console.log(initSessionsWithFacebook);
    initSessionsWithFacebook().then(() => {
      onNavigate('/post');
    });
  }); */

  buttonSubmitRegister.addEventListener('click', async (e) => {
    e.preventDefault();
    const email = inputEmail.value;
    const password = inputPassword.value;
    try {
      if (email) {
        localStorage.setItem('user', email);
        await createUser(email, password, onNavigate);
        onNavigate('/post');
      }
    } catch (error) {
      console.log(error);
    }
  });
  return HomeDiv;
};
