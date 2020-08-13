<template>
  <div class="total-value" :class="classColor">Balanse: {{ total }}</div>
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
  data() {
    return {
      color: 'black',
    };
  },
  computed: {
    classColor: function() {
      return this.changeColor();
    },
  },
  methods: {
    changeColor() {
      if (this.total < 0) {
        return (this.color = 'red');
      }
      if (this.total > 0) {
        return (this.color = 'green');
      }
    },
  },
};
</script>

<style scoped>
.total-value {
  font-size: 20px;
  text-transform: uppercase;
  padding: 10px;
  text-align: center;
}
.green {
  color: green;
}
.black {
  color: black;
}
.red {
  color: red;
}
</style>
