<template>
  <div class="rate">
    <span
      v-for="(item, key) in max"
      :key="key"
      class="item"
      style="cursor: ponter"
      @mousemove="setValue(item)"
      @mouseleave="resetValue"
      @click="clickValue(item)"
    >
      <i class="icon" :class="currentValue >= item ? 'on' : 'off'"> s </i>
    </span>
  </div>
</template>

<script>
/**
 * 0 add theme-chalk lib/theme-c
 * 1 show rate list
 *      1.1 total rate
 *      1.2 current rate
 * 2 add some events like click mouseenter mouseleave
 */
import { ref } from "vue";
export default {
  name: "Rate",
  props: {
    // value: {
    //   type: Number,
    //   default: 4,
    // },
    //key 改为modelValue   实现显示父元素的传进来的 值 value
    modelValue: {
      type: Number,
      default: 4,
    },
  },
  setup(props, context) {
    // console.log(context, context.emit);
    //   let currentValue = ref(props.value);
    let currentValue = ref(props.modelValue);
    const setValue = (val) => {
      currentValue.value = val;
    };
    const resetValue = () => {
      //   currentValue.value = props.value;
      currentValue.value = props.modelValue;
    };
    const clickValue = (val) => {
      //   context.emit("change", val);
      context.emit("update:modelValue", val);
    };
    return {
      max: 5,
      currentValue,
      setValue,
      resetValue,
      clickValue,
    };
  },
};
</script>

<style>
.rate {
  width: 300px;
  margin: 0 auto;
}
.item {
  /* display: inline-block;
  width: 40px;
  height: 20px;
  margin: 0;
  text-align: center; */
}
.icon {
  line-height: 40px;
  font-size: 30px;
}
.on {
  color: red;
}
.off {
  color: black;
}
</style>
