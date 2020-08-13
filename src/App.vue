<template>
  <div id="app">
    <BudgetList :list="list" />
  </div>
</template>

<script>
import BudgetList from '@/components/BudgetList.vue';
export default {
  name: 'App',
  components: {
    BudgetList,
  },
  data() {
    return {
      list: {
        1: {
          type: 'INCOME',
          value: 100,
          comment: 'Some comment',
          id: 1,
        },
        2: {
          type: 'OUTCOME',
          value: -50,
          comment: 'Some outcome comment',
          id: 2,
        },
      },
    };
  },
};
</script>

<style>
@import '../node_modules/typeface-roboto/index.css';
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
