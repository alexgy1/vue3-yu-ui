<template>
  <div class="home">
    <h2>rate val is : {{ data.value }}</h2>
    <!-- <Rate :value="data.value" @change="changeRateVal" /> -->
    <!-- change to v-model -->
    <Rate v-model="data.value" />
  </div>
</template>

<script>
import { reactive } from "vue";
import Rate from "@/components/Rate";
export default {
  name: "Home",
  components: { Rate },
  setup() {
    let data = reactive({
      value: 5,
    });
    //这样外部还要带一个方法 不方便 所以直接去掉
    // const changeRateVal = (val) => {
    //   console.log(val);
    //   //reactive的可以直接赋值修改
    //   data.value = val;
    // };
    return {
      data,
    };
  },
};
</script>
