<template>
  <div class="container">
    <el-select
      v-model="value"
      class="m-2"
      placeholder="Select"
      size="large"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        value: "Option1",
        options: [
        {
          value: 'Option1',
          label: 'Любой',
        },
        {
          value: 'Option2',
          label: 'Option2',
        },
        {
          value: 'Option3',
          label: 'Option3',
        },
        {
          value: 'Option4',
          label: 'Option4',
        },
        {
          value: 'Option5',
          label: 'Option5',
        },]
      }
    }
  }
</script>

<style>

</style>