<template>
  <div>
    <Button label="Submit" />
    <Calendar v-model="date" />
  </div>
</template>

<script setup lang="ts">
const date = ref<Date>()
</script>

<style></style>
