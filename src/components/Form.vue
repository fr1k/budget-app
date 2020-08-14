<template>
  <el-card class="form-card">
    <el-form
      size="small"
      :model="formData"
      ref="addItemForm"
      :rules="rules"
      label-position="right"
      label-width="100px"
    >
      <el-form-item label="Type" prop="type">
        <el-select
          size="small"
          class="type-select"
          v-model="formData.type"
          placeholder="Choose type..."
        >
          <el-option label="Income" value="INCOME"></el-option>
          <el-option label="Outcome" value="OUTCOME"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Comments" prop="comment">
        <el-input size="small" v-model="formData.comment"></el-input>
      </el-form-item>
      <el-form-item label="Value" prop="value">
        <el-input size="small" v-model="formData.value"></el-input>
      </el-form-item>
      <el-button type="primary" @click="onSubmit">Submit</el-button>
    </el-form>
  </el-card>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      formData: {
        type: 'INCOME',
        comment: '',
        value: 0,
      },
      testRules: {
        testText: [
          { required: true, message: 'Please select type', trigger: 'blur' },
        ],
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
            pattern: /[1-9]\d*/,
            message: 'Value must be more then 0',
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
            this.formData.value = Math.abs(this.formData.value);
            this.formData.value = -this.formData.value;
          }
          if (this.formData.type === 'INCOME') {
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
/* .type-select {
  width: 100%;
} */
</style>
