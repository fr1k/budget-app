<template>
  <div id="app">
    <TotalBalance :total="totalBalance" />
    <BudgetList :list="list" @deleteitem="onDeleteitem" />
  </div>
</template>

<script>
import BudgetList from '@/components/BudgetList.vue';
import TotalBalance from '@/components/TotalBalance.vue';
export default {
  name: 'App',
  components: {
    BudgetList,
    TotalBalance,
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
  computed: {
    totalBalance() {
      return Object.values(this.list).reduce(
        (acc, item) => acc + item.value,
        0
      );
    },
  },
  methods: {
    onDeleteitem(id) {
      this.$delete(this.list, id);
    },
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
