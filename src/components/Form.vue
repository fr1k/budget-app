<template>
  <el-card class="form-card">
    <el-form
      :model="formData"
      ref="addItemForm"
      :rules="rules"
      label-position="top"
    >
      <el-form-item label="Type" prop="type">
        <el-select
          class="type-select"
          v-model="formData.type"
          placeholder="Choose type..."
        >
          <el-option label="Income" value="INCOME"></el-option>
          <el-option label="Outcome" value="OUTCOME"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Comments" prop="comment">
        <el-input v-model="formData.comment" @keyup.enter="onSubmit"></el-input>
      </el-form-item>
      <el-form-item label="Value" prop="value">
        <el-input
          v-model.number="formData.value"
          @keyup.enter="onSubmit"
        ></el-input>
      </el-form-item>
      <el-button type="primary" @click="onSubmit">Submin</el-button>
    </el-form>
  </el-card>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      formData: {
        icon: true,
        type: 'INCOME',
        comment: '',
        value: 0,
      },
      rules: {
        type: [
          { required: true, message: 'Please select type', trigger: 'blur' },
        ],
        comment: [
          {
            required: true,
            message: 'Please input comment',
            trigger: 'change',
          },
        ],
        value: [
          { required: true, message: 'Please input value', trigger: 'change' },
          {
            type: 'number',
            message: 'Value must be number',
            trigger: 'change',
          },
        ],
      },
    };
  },
  methods: {
    onSubmit() {
      this.$refs.addItemForm.validate((valid) => {
        if (valid) {
          if (this.formData.type === 'OUTCOME') {
            this.formData.icon = false;
            this.formData.value = Math.abs(this.formData.value);
            this.formData.value = -this.formData.value;
          }
          if (this.formData.type === 'INCOME') {
            this.formData.icon = true;
            this.formData.value = Math.abs(this.formData.value);
          }
          this.$emit('submitForm', { ...this.formData });
          this.$refs.addItemForm.resetFields();
        }
      });
    },
  },
};
</script>

<style scoped>
.form-card {
  max-width: 500px;
  margin: auto;
  margin-top: 5px;
}
.type-select {
  width: 100%;
}
</style>
