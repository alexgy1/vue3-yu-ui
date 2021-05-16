<template>
  <!-- submenu  or-->
  <!-- menu-item -->
  <template v-for="menuObj in data">
    <sub-menu
      :key="menuObj.id"
      v-if="menuObj && menuObj.children && menuObj.children.length > 0"
    >
      <template v-slot:title>{{ menuObj.name }}</template>
      <!-- 递归处理 -->
      <!-- <template v-for="m in menuObj.children">
          <menu-item :key="m.id">{{ m.name }}</menu-item>
          or 
          <sub-item></sub-item>
        </template> -->
      <!-- TO  -->
      <recursive-menu-item :data="menuObj.children"></recursive-menu-item>
    </sub-menu>
    <menu-item :key="menuObj.id" v-else>
      {{ menuObj.name }}
    </menu-item>
  </template>
</template>

<script>
import MenuItem from "@/components/MenuItem";
import SubMenu from "@/components/SubMenu";
export default {
  // 递归组件要先有个name方便引用到它本身
  name: "RecursiveMenuItem",
  props: {
    data: {
      type: Array,
      defalut: () => [],
    },
  },
  components: { MenuItem, SubMenu },
};
</script>

<style></style>
