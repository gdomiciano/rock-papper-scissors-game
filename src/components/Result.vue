<template>
  <div class="results">
    <p
      v-if="result === 'winner'"
      class="winner"
    >
      You won!
    </p>
    <p
      v-else-if="result === 'looser'"
      class="looser"
    >
      You Lost!
    </p>
  </div>
</template>

<script>
export default {
  name: 'Result',
  props: {
    result: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
