<script setup lang="ts">
defineProps({
  urlImage: {
    type: String,
    default: '',
  },
  customClass: {
    type: Array<String>,
    default: ['justify-start'],
  },
  contentPosition: {
    type: String,
    default: 'left',
  },
  content: {
    type: String,
    default: '',
  },
  btnLabel: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="overflow-hidden">
    <div
      class="banner flex items-center cursor-pointer"
      :style="{ backgroundImage: `url(${urlImage})` }"
      :class="customClass"
    >
      <div v-if="contentPosition === 'left'" class="content relative ml-20">
        <h2 class="mb-3">{{ content }}</h2>
        <Button v-if="btnLabel" class="bt-second">{{ btnLabel }}</Button>
      </div>
      <div v-else-if="contentPosition === 'right'" class="content relative mr-20 text-right">
        <h2 class="mb-3">{{ content }}</h2>
        <Button v-if="btnLabel" class="bt-second">{{ btnLabel }}</Button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  width: 100%;
  height: 370px;
  border-radius: 8px;
  transition: 0.5s;

  &:hover {
    transform: scale(1.1);
  }
}
</style>
