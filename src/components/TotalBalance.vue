<template>
  <div class="total-value">Balanse: {{ total }}</div>
</template>

<script>
export default {
  name: 'TotalBalance',
  props: {
    total: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style scoped>
.total-value {
  font-size: 20px;
  text-transform: uppercase;
  padding: 20px;
  text-align: center;
}
</style>
