<template>
  <div class="home">
    <h2>rate val is : {{ data.value }}</h2>
    <!-- <Rate :value="data.value" @change="changeRateVal" /> -->
    <!-- change to v-model -->
    <Rate v-model="data.value" />
    <Calendar />

    <!-- 这不是数据驱动的 不方便  first show in here-->
    <!-- two part title + subMenu -->
    <!-- https://cn.vuejs.org/v2/api/#v-slot -->
    <!-- <Menu>
      <sub-menu>
        <template v-slot:title>导航1</template>
        <sub-menu>
          <template v-slot:title>导航1 subtitle</template>
          <menu-item>选项1-1-1</menu-item>
          <menu-item>选项1-1-2</menu-item>
        </sub-menu>
        <menu-item>选项1-1</menu-item>
        <menu-item>选项1-2 </menu-item>
      </sub-menu>
      <menu-item>导航2 </menu-item>
      <menu-item>导航3</menu-item>
      <menu-item>导航4</menu-item>
    </Menu> -->

    <yu-menu :data="yData"></yu-menu>
    <h1>{{ yData[0].name }}</h1>
  </div>
</template>

<script>
import { reactive } from "vue";
import Rate from "@/components/Rate";
import Calendar from "@/components/Calendar";
// import Menu from "@/components/Menu";
// import MenuItem from "@/components/MenuItem";
// import SubMenu from "@/components/SubMenu";
import YuMenu from "@/components/YuMenu.vue";

export default {
  name: "Home",
  // components: { Rate, Calendar, Menu, MenuItem, SubMenu, YuMenu },
  components: { Rate, Calendar, YuMenu },
  data() {
    return {
      yData: [
        {
          name: "部门管理",
          id: 1,
          children: [
            {
              name: "部门管理1-1",
              id: 1.1,
              children: [
                {
                  name: "部门管理1-1-1",
                  id: 1.2,
                },
                {
                  name: "部门管理1-1-2",
                  id: 1.3,
                  children: [
                    {
                      name: "人事管理1-1-2-1",
                      id: 1.4,
                      children: [
                        {
                          name: "财务管理1-1-2-1-1",
                          id: 1.5,
                        },
                        {
                          name: "技术管理1-1-2-1-2",
                          id: 1.6,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "员工管理",
          id: 2,
        },
        {
          name: "权限管理",
          id: 3,
        },
      ],
    };
  },
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
