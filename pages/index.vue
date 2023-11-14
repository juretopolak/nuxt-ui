<script setup lang="ts">
const name = ref('')
const email = ref('')

const saveUser = async () => {
  const response = await $fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({ name: name.value, email: email.value })
  })
  console.log(response)
}

</script>

<template>
  <div>
    <UCard>
      <template #header>
        Create user
      </template>

      <UFormGroup
        label="Email"
        class="w-64"
      >
        <UInput
          v-model="email"
          placeholder="Email"
          icon="i-heroicons-envelope"
        />
      </UFormGroup>

      <UFormGroup
        label="Name"
        class="w-64 mt-4"
      >
        <UInput
          v-model="name"
          placeholder="Name"
          icon="i-heroicons-user"
        />
      </UFormGroup>

      <UButton
        class="mt-4"
        @click="saveUser"
      >
        Create user
      </UButton>
    </UCard>
  </div>
</template>