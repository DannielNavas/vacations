<template>
  <form @submit.prevent="onSubmit">
    <div class="input-group">
      <input type="email" class="input" id="Email" name="Email" placeholder="jhondoe@email.com" autocomplete="off"
        v-model="emailUser">
      <input class="button--submit" value="Subscribe" type="submit">
    </div>
  </form>
  <p style="color: red">{{ message }}</p>
</template>

<script setup>
import confetti from 'canvas-confetti';
import { ref } from 'vue';

const emailUser = ref('');
let message = ref('');
const onSubmit = async() => {
  console.log(emailUser.value);
  const data = await fetch('https://alert-blue-toad.cyclic.app/subscribe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: emailUser.value })
  });
  const response = await data.json();
  message = response?.message ?? 'we will be sending you the progress of our platform ';
  if (!response.message) {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: {
        y: 0.6
      }
    });
  }
  alert(message);
}


</script>

<style>
form {
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
}

.input-group {
  display: flex;
  align-items: center;
}

.input {
  min-height: 50px;
  max-width: 550px !important;
  width: 100% !important;
  padding: 0 1rem;
  color: #fff;
  font-size: 15px;
  border: 1px solid #52cffe;
  border-radius: 6px 0 0 6px;
  background-color: transparent;
  min-width: 250px;
}

.button--submit {
  min-height: 50px;
  padding: .5em 1em;
  border: none;
  border-radius: 0 6px 6px 0;
  background-color: #52cffe !important;
  color: #1F2020;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  transition: background-color .3s ease-in-out;
}

.button--submit:hover {
  background-color: #52cffe;
}

.input:focus,
.input:focus-visible {
  border-color: #3898EC;
  outline: none;
}
</style>
