<script setup lang="ts">
const links = ref([
  {
    label: 'Home',
    icon: 'i-heroicons-bug-ant-20-solid',
    to: '/'
  },
  {
    label: 'Test',
    icon: 'i-heroicons-document-text-20-solid',
    to: '/test'
  }
])
</script>
<template>
  <div>
    <UVerticalNavigation
      :links="links"
      :ui="{padding: 'p-3'}"
    >
      <template #icon="{ link }">
        <UIcon
          :name="link.icon"
          class="text-base"
        />
      </template>
    </UVerticalNavigation>
  </div>
</template>