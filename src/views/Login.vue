<script setup lang="ts">
import { AuthenticationStore } from '@/stores/AuthentiacationStore'
import { useToast } from "../composables/useToast";
import { useRouter } from 'vue-router'
const router = useRouter()
const toast = useToast();

const authentication = AuthenticationStore()

import { ref } from 'vue';
import {  Button  } from 'flowbite-vue'

const action = ref('login');
const email = ref();
const password = ref();
const password2 = ref();
const name = ref();
const phone = ref();

const submitForm = async (type: string) => {
  console.log(password.value, 'email', email.value);
  if ( type === 'login') {
    await authentication.login({email: email.value, password: password.value})
    
  }else{
    if(password2.value == password.value){
      authentication.register({email: email.value, password: password.value, name: name.value, phone: phone.value})
    }else{
      toast.toast("Error", 'Las contraseñas no coinciden', "danger");
    }
  }
}

const changeScreen = (scren: string) => {
  action.value = scren
}

</script>

<template>

<div class="box" v-if=" action == 'login'">
  <span class="borderLine"></span>
  <form @submit.prevent="">
    <h2>Sign In</h2>
    <div class="inputBox">
      <input v-model="email" type="text" required="required">
      <span>Correo</span>
      <i></i>
    </div>
    <div class="inputBox">
      <input v-model="password" type="password" required="required">
      <span>Password</span>
      <i></i>
    </div>
    <div class="links">
      <a href="#">Forgot Password</a>
      <a href="#" @click="changeScreen('signup')">Signup</a>
    </div>
    <Button @click="submitForm('login')" gradient="purple-blue" outline>Iniciar sesión</Button>
  </form>
</div>

<div class="box boxSignUp" v-if="action == 'signup'">
  <span class="borderLine"></span>
  <form @submit.prevent="">
    <h2>Signup</h2>
    <div class="inputBox">
      <input v-model="name" type="text" required="required">
      <span>Nombre y Apellido:</span>
      <i></i>
    </div>
    <div class="inputBox">
      <input v-model="email" type="text" required="required">
      <span>Correo</span>
      <i></i>
    </div>
    <div class="inputBox">
      <input v-model="password" type="password" required="required">
      <span>Contraseña</span>
      <i></i>
    </div>
    <div class="inputBox">
      <input v-model="password2" type="password" required="required">
      <span>Repetir Contraseña</span>
      <i></i>
    </div>
    <div class="inputBox">
      <input v-model="phone" type="number" required="required">
      <span>Telefono</span>
      <i></i>
    </div>
    <div class="links">
      <a href="#">Forgot Password</a>
      <a href="#" @click="changeScreen('login')">Sign In</a>
    </div>
    <Button @click="submitForm('singup')" gradient="purple-blue" outline>&nbsp;&nbsp;&nbsp;&nbsp;Registrarse&nbsp;&nbsp;&nbsp;&nbsp;</Button>
  </form>
</div>

</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700;800;900&family=Syne:wght@800&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.box {
  margin: 0 auto;
  position: relative;
  width: 400px;
  height: 470px;
  max-width: 100%;
  background: #1c1c1c;
  border-radius: 18px;
  overflow: hidden;
}

.boxSignUp{
  height: 690px;
}

.box::before {
  content: "";
  position: absolute;
  width: 4000px;
  height: 470px;
  top: -50%;
  left: -50%;
  background: linear-gradient(
    0deg,
    transparent,
    transparent,
    #45f3ff,
    #45f3ff,
    #45f3ff
  );
  z-index: 1;
  transform-origin: bottom right;
  animation: animate 6s linear infinite;
}

.box::after {
  content: "";
  position: absolute;
  width: 400px;
  height: 470px;
  top: -50%;
  left: -50%;
  background: linear-gradient(
    0deg,
    transparent,
    transparent,
    #ffff00,
    #ffff00,
    #ffff00
  );
  z-index: 1;
  transform-origin: bottom right;
  animation: animate 6s linear infinite;
  animation-delay: -3s;
}

.borderLine {
  position: absolute;
  top: 0;
  inset: 0;
}

.borderLine::before {
  content: "";
  position: absolute;
  width: 400px;
  height: 470px;
  top: -50%;
  left: -50%;
  background: linear-gradient(
    0deg,
    transparent,
    transparent,
    #fc0f8d,
    #fc0f8d,
    #fc0f8d
  );
  z-index: 1;
  transform-origin: bottom right;
  animation: animate 6s linear infinite;
}

@keyframes animate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.box form {
  position: absolute;
  inset: 4px;
  background: #222;/*  */
  padding: 50px 40px;
  border-radius: 18px;
  z-index: 2;
  display: flex;
  flex-direction: column;
}

.box form h2 {
  color: #fff;
  font-weight: 500;
  text-align: center;
  letter-spacing: 0.1em;
}

.box form .inputBox {
  position: relative;
  width: 300px;
  margin-top: 35px;
}

.box form .inputBox input {
  position: relative;
  width: 100%;
  padding: 20px 10px 10px;
  background: transparent;
  outline: none;
  border: none;
  box-shadow: none;
  color: #23242a;
  font-size: 1em;
  letter-spacing: 0.05em;
  transition: 0.5s;
  z-index: 10;
}

 .box form .inputBox span {
  position: absolute;
  left: 0;
  padding: 20px 0px 10px;
  pointer-events: none;
  color: #8f8f8f;
  font-size: 1em;
  letter-spacing: 0.05em;
  transition: 0.5s;
} 

.box form .inputBox input:valid ~ span,
.box form .inputBox input:focus ~ span {
  color: #fff;
  font-size: 0.75em;
  transform: translateY(-34px);
} 

.box form .inputBox i {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: #fff;
  border-radius: 7px;
  overflow: hidden;
  transition: 0.5s;
  pointer-events: none;
}

.box form .inputBox input:valid ~ i,
.box form .inputBox input:focus ~ i {
  height: 44px;
}

.box form .links {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.box form .links a {
  margin: 15px 12px 20px 0;
  font-size: 0.75em;
  color: #8f8f8f;
  text-decoration: none;
} 
.box form .links a:hover {
  text-decoration: underline;
} 

button{
  width: 47%;
  padding: 3px 0;
}

</style>