/*
 * @Author: TDXM1001 2678062447@qq.com
 * @Date: 2024-05-06 09:17:52
 * @LastEditors: TDXM1001 2678062447@qq.com
 * @LastEditTime: 2024-05-06 09:24:29
 * @FilePath: \tdxm-admin\src\router\system\largescreen.js
 */


export const largescreenRouters = [
  {
    path: '/largescreen',
    name: 'Largescreen',
    component: () => import('/@/views/largescreen/index.vue'),
    meta: {
      title: '大屏',
      hideInMenu: true,
    },
  },
];
