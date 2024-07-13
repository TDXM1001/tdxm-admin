<!--
 * @Author: TDXM1001 2678062447@qq.com
 * @Date: 2024-05-05 16:27:41
 * @LastEditors: CoderXZ
 * @LastEditTime: 2024-05-31 11:20:26
 * @FilePath: \tdxm-admin\src\views\largescreen\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->


<template>
  <v-scale-screen width="1920" height="1080" :fullScreen="true" style="background-color: transparent;">
    <div class="w-full h-full">

      <largescreen-map/>
      
    </div>
  </v-scale-screen>
</template>
 
<script setup name="largescreen">
import VScaleScreen from 'v-scale-screen'
import LargescreenMap from "./components/largescreen-map.vue"


</script>