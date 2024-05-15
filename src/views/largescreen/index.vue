<!--
 * @Author: TDXM1001 2678062447@qq.com
 * @Date: 2024-05-05 16:27:41
 * @LastEditors: TDXM1001 2678062447@qq.com
 * @LastEditTime: 2024-05-06 14:09:40
 * @FilePath: \tdxm-admin\src\views\largescreen\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->


<template>
  <v-scale-screen width="1920" height="1080" :fullScreen="true">
    <div style="color: #fff;">555555555555</div>
  </v-scale-screen>
</template>
 
<script>
import { defineComponent } from 'vue'
import VScaleScreen from 'v-scale-screen'
 
export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Largescreen',
  components: {
    VScaleScreen
  }
})
</script>