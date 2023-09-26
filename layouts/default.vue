<script setup lang="ts"> 
let test = ref('jure')
console.log(test.value)
</script>
<template>
  <UContainer>
    <header>
      <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        Header
      </div>
    </header>
    <main>
      <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div class="grid lg:grid-cols-10 lg:gap-8">
          <div class="lg:col-span-2">
            <MainMenu />
            <ColorModeButton />
          </div>
          <div class="">
            <slot />
          </div>
        </div>
      </div>
    </main>
    <footer class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      Footer
    </footer>
  </UContainer>
</template>
