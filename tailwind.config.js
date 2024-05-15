/*
 * @Descripttion: 
 * @version: 
 * @Author: TDXM
 * @Date: 2024-05-15 11:25:51
 * @LastEditors: CoderXZ
 * @LastEditTime: 2024-05-15 11:26:32
 */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './public/*.{html,js,ts,jsx,tsx,vue}',
    './src/*.{html,js,ts,jsx,tsx,vue}',
    './src/components/**/*.{html,js,ts,jsx,tsx,vue}',
    './src/views/**/*.{html,js,ts,jsx,tsx,vue}',
    './src/views/**/**/*.{html,js,ts,jsx,tsx,vue}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

