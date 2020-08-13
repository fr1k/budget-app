<template>
  <div id="app">
    <Form @submitForm="onSubmitForm" />
    <TotalBalance :total="totalBalance" />
    <BudgetList :list="list" @deleteitem="onDeleteitem" />
  </div>
</template>

<script>
import BudgetList from '@/components/BudgetList.vue';
import TotalBalance from '@/components/TotalBalance.vue';
import Form from '@/components/Form.vue';
export default {
  name: 'App',
  components: {
    BudgetList,
    TotalBalance,
    Form,
  },
  data() {
    return {
      list: {
        1: {
          icon: true,
          type: 'INCOME',
          value: 100,
          comment: 'Some comment',
          id: 1,
        },
        2: {
          icon: false,
          type: 'OUTCOME',
          value: -50,
          comment: 'Some outcome comment',
          id: 2,
        },
        3: {
          icon: true,
          type: 'INCOME',
          value: 150,
          comment: 'Some outcome comment',
          id: 3,
        },
        4: {
          icon: false,
          type: 'OUTCOME',
          value: 50,
          comment: 'Some outcome comment',
          id: 4,
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
    onSubmitForm(data) {
      const newObj = {
        ...data,
        id: String(Math.random()),
      };

      this.$set(this.list, newObj.id, newObj);
      // console.log(this.list);
    },
  },
};
</script>

<style>
@import '../node_modules/typeface-roboto/index.css';
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 30px;
}
</style>
