<template>
  <!-- 本身应该是 li -->
  <li>
    <span @click="toggleUl"><slot name="title"></slot></span>
    <!-- 里面应该是ul -->
    <ul v-if="isUlShow">
      <slot></slot>
    </ul>
  </li>
</template>

<script>
export default {
  name: "SubMenu",
  data() {
    return {
      isUlShow: true,
    };
  },
  methods: {
    toggleUl() {
      this.isUlShow = !this.isUlShow;
    },
  },
};
</script>

<style></style>
