<template>
  <el-tabs v-model="activeName" @tab-click="handleClick" :stretch="true" class="tab">
    <el-tab-pane label="常用网站" name="first">
        <card></card>
    </el-tab-pane>
    <el-tab-pane label="Shopping" name="second">
      <shopping></shopping>
    </el-tab-pane>
    <el-tab-pane label="V&A" name="third">
      <va></va>
    </el-tab-pane>
    <el-tab-pane label="Other" name="fourth">
      <other></other>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style>
    
</style>
