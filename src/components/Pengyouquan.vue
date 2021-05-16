<template>
  <div>
    <ul>
      <li v-for="(item, index) in imgList" :key="index">
        <img :src="item" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Pengyouquan",
};
</script>

<style>
ul {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
li {
  width: 32%;
  height: 100px;
  margin-top: 5px;
}
.list:not(:nth-child(3n)) {
  margin-right: 2%;
}

ul li:nth-last-child(1):first-child {
  width: 200px;
  height: 200px;
}
</style>
