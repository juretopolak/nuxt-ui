<script setup lang="ts">
//import colors from '#tailwind-config/theme/colors'
const grayColors = ['slate', 'cool', 'zinc', 'neutral', 'stone']
const appConfig = useAppConfig()
//console.log(colors)
</script>
<template>
  <USelect
    v-model="appConfig.ui.gray"
    :options="grayColors"
  />
</template>