<template>
  <Menu>
    <recursive-menu-item :data="data"></recursive-menu-item>
  </Menu>
</template>

<script>
// yData: [
//         {
//           name: "部门管理",
//           id: 1,
//           children: [
//             {
//               name: "部门管理1-1",
//               id: 1.1,
//               children: [
//                 {
//                   name: "部门管理1-1-1",
//                   id: 1.2,
//                 },
//                 {
//                   name: "部门管理1-1-2",
//                   id: 1.3,
//                 },
//               ],
//             },
//           ],
//         },
//         {
//           name: "员工管理",
//           id: 2,
//         },
//         {
//           name: "权限管理",
//           id: 3,
//         },
//       ],
import Menu from "@/components/Menu";

import RecursiveMenuItem from "@/components/RecursiveMenuItem";
export default {
  name: "YuMenu",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  components: { Menu, RecursiveMenuItem },
};
</script>

<style>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  background-color: tomato;
  color: white;
  padding: 0.5rem;
  cursor: pointer;
  transition: all 3s ease-in;
}
</style>
