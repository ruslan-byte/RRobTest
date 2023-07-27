<template>
  <div class="container">
    <el-row :gutter="20"> 
      <el-col :span="4">
        <label>
          <p>
            Выбрать ЖК
          </p>
          <el-select
            class="select"
            v-model="value"
            placeholder="Select"
            size="large"
            :suffixIcon="icon"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </label>
      </el-col>
      <el-col :span="8">
        <el-radio-group v-model="radio1" size="large">
          <el-radio-button label="Ст"  />
          <el-radio-button label="1" />
          <el-radio-button label="2" />
          <el-radio-button label="3+" />
        </el-radio-group>
      </el-col>
      <el-col :span="3">
        <RangeSlider :range="[1,1000
        ]">
          
        </RangeSlider>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import { markRaw } from "vue";
  import arrowIcon from "./components/icons/arrow.vue";
  import RangeSlider from "./components/RangeSlider.vue";
  export default {
    components: ['RangeSlider'],
    data(){
      return{
        icon: markRaw(arrowIcon),
        radio1:'1',
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
.select{width: 100%; }
</style>