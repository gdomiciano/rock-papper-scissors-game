<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h3>Choose Your option to start playing</h3>
    <form @submit.prevent="checkForm">
      <radio-button
        v-for="(option, index) in options"
        :key="index"
        :value="option"
        required
        name="choice"
      />
      <the-button
        type="submit"
        text="Play!"
      />
    </form>
    <result/>
  </div>
</template>

<script>
// @ is an alias to /src
import RadioButton from '@/components/RadioButton.vue';
import TheButton from '@/components/TheButton.vue';
import Result from '@/components/Result.vue';

export default {
  name: 'home',
  components: {
    RadioButton,
    TheButton,
    Result,
  },
  data() {
    return {
      options: ['rock', 'paper', 'scissors'],
    };
  },
};
</script>
