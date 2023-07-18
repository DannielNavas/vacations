<template>
    <form @submit.prevent="onSubmit">
        <div class="input-group">
            <input type="email" class="input" id="Email" name="Email" placeholder="jhondoe@email.com" autocomplete="off" v-model="emailUser">
            <input class="button--submit" value="Subscribe" type="submit">
        </div>
    </form>
</template>

<script setup>
import { ref } from 'vue';

const emailUser = ref('');
const onSubmit = (event) => {
    console.log(emailUser.value);
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
    width: 300px !important;
  padding: 0 1rem;
  color: #fff;
  font-size: 15px;
  border: 1px solid #52cffe;
  border-radius: 6px 0 0 6px;
  background-color: transparent;
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

.input:focus, .input:focus-visible {
  border-color: #3898EC;
  outline: none;
}


</style>
