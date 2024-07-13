<!--
 * @Descripttion: 
 * @version: 
 * @Author: TDXM
 * @Date: 2024-05-15 10:22:15
 * @LastEditors: CoderXZ
 * @LastEditTime: 2024-05-31 11:19:51
-->
<template>
  <div class="w-full h-full map-view">
    <baidu-map class="w-full h-full map-view" :center="center" :scroll-wheel-zoom="true" :zoom="zoom" @ready="handler"/>
  </div>
</template>

<script setup >
import {ref,onMounted} from 'vue';

const center = ref({lng: 0, lat: 0});
const zoom = ref(3);


const myBMap = ref(null);
const MyMap = ref(null);


const handler = ({BMap, map}) => {
  // console.log(BMap, map);
  myBMap.value = BMap;
  MyMap.value = map;
  center.value.lng = 116.404;
  center.value.lat = 39.915;
  zoom.value = 15;
}
</script>

<style scoped lang="less">

.map-view /deep/.anchorBL {
    display: none!important;
}
</style>