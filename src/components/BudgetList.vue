<template>
  <div class="budget-list-wrap">
    <el-card>
      <div class="card-header" slot="header">
        <span>{{ header }}</span>
        <el-button-group>
          <el-button
            type="success"
            icon="el-icon-top"
            size="mini"
            @click="onMoreList"
          ></el-button>
          <el-button
            type="danger"
            icon="el-icon-bottom"
            size="mini"
            @click="onLessList"
          ></el-button>
          <el-button
            type="primary"
            icon="el-icon-tickets"
            size="mini"
            @click="onAllList"
          ></el-button>
        </el-button-group>
      </div>
      <template v-if="isEmpty">
        <div
          class="list-item"
          v-for="(item, index) in isFilterList"
          :key="index"
        >
          <i :class="iconClass(item)"></i>
          <span class="budget-comment">{{ item.comment }}</span>
          <span class="budget-value" :class="colorValue(item)">{{
            item.value
          }}</span>
          <el-button
            type="danger"
            icon="el-icon-delete"
            circle
            @click="confirmDialog(item.id)"
          >
          </el-button>
          <el-dialog title="Warning" :visible.sync="dialogVisible" width="30%">
            <span>Do you really want to delete it</span>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">No</el-button>
              <el-button type="primary" @click="deleteitem">Yes</el-button>
            </span>
          </el-dialog>
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
      dialogVisible: false,
      listId: '',
      isFilterList: JSON.parse(JSON.stringify(this.list)),
    };
  },
  computed: {
    isEmpty() {
      // console.log(Boolean(Object.keys(this.list).length));
      return Boolean(Object.keys(this.list).length);
    },
    // onShowList() {
    //   return Object.values(this.list).filter((elem) => elem.icon === true);
    // },
  },
  methods: {
    confirmDialog(id) {
      this.listId = id;
      this.dialogVisible = true;
    },
    deleteitem() {
      this.$emit('deleteitem', this.listId);
      this.dialogVisible = false;
    },
    iconClass(item) {
      return {
        'el-icon-top': item.type === 'INCOME',
        'el-icon-bottom': item.type === 'OUTCOME',
      };
    },
    colorValue(item) {
      return {
        green: item.type === 'INCOME',
        red: item.type === 'OUTCOME',
      };
    },
    onMoreList() {
      this.isFilterList = Object.values(this.list).filter(
        (item) => item.type === 'INCOME'
      );
    },
    onLessList() {
      this.isFilterList = Object.values(this.list).filter(
        (item) => item.type === 'OUTCOME'
      );
    },
    onAllList() {
      this.isFilterList = JSON.parse(JSON.stringify(this.list));
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
.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.red {
  color: red;
}
.green {
  color: green;
}
</style>
