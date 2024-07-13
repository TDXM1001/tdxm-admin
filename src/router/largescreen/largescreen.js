/*
 * @Author: TDXM1001 2678062447@qq.com
 * @Date: 2024-05-06 09:17:52
 * @LastEditors: CoderXZ
 * @LastEditTime: 2024-05-29 15:16:14
 * @FilePath: \tdxm-admin\src\router\system\largescreen.js
 */


export const largescreenRouters = [
  {
    path: '/largescreen',
    name: 'Largescreen',
    component: () => import('../../views/largescreen/largescreen-index.vue'),
    meta: {
      title: '大屏',
      hideInMenu: false,
    },
  },
];
