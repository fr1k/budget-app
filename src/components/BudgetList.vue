<template>
  <div class="budget-list-wrap">
    <el-card :header="header">
      <template v-if="isEmpty">
        <div class="list-item" v-for="(item, prop) in list" :key="prop">
          <span class="budget-comment">{{ item.comment }}</span>
          <span class="budget-value">{{ item.value }}</span>
          <el-button type="danger" icon="el-icon-delete" circle> </el-button>
        </div>
      </template>
      <el-alert v-else type="error" show-icon :title="emptyTitle"></el-alert>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'BudgetList',
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      header: 'Budget List',
      emptyTitle: 'Empty List',
    };
  },
  computed: {
    isEmpty() {
      // console.log(Boolean(Object.keys(this.list).length));
      return Boolean(Object.keys(this.list).length);
    },
  },
};
</script>

<style scoped>
.budget-list-wrap {
  max-width: 500px;
  margin: auto;
}
.list-item {
  display: flex;
  align-items: center;
  padding: 10px 15px;
}
.budget-value {
  font-weight: bold;
  margin-left: auto;
  margin-right: 20px;
}
</style>
