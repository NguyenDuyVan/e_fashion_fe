<template>
  <div class="header flex items-center">
    <div class="left column-3 h-full basis-3/12 center px-2">
      <img
        src="https://cdn.shopify.com/s/files/1/0624/8638/0738/files/logo-storepify.png?crop=center&height=58&v=1681180697&width=430"
        alt="logo"
        class="w-64"
      />
    </div>
    <div class="center grid-rows-6 h-full basis-6/12">
      <ul class="menu flex">
        <li class="menu-item h-full py-3 mx-6 font-semibold hover-1 text-lg cursor-pointer">Trang Chủ</li>
        <li class="menu-item h-full py-3 mx-6 font-semibold hover-1 text-lg cursor-pointer">Áo Xuân Hè</li>
        <li class="menu-item h-full py-3 mx-6 font-semibold hover-1 text-lg cursor-pointer">Quần</li>
        <li class="menu-item h-full py-3 mx-6 font-semibold hover-1 text-lg cursor-pointer">Phụ Kiện</li>
      </ul>
    </div>
    <div class="right grid-rows-3 h-full basis-3/12 center">
      <span class="p-input-icon-left mr-4">
        <i class="pi pi-search" />
        <InputText v-model="search" placeholder="Search" />
      </span>
      <i v-badge="2" class="pi pi-heart p-overlay-badge px-2 mr-4 cursor-pointer hover-1" style="font-size: 1.5rem" />
      <i
        v-badge="2"
        class="pi pi-shopping-bag p-overlay-badge px-2 mr-4 cursor-pointer hover-1"
        style="font-size: 1.5rem"
      />
      <i class="pi pi-user px-2 mr-4 cursor-pointer hover-1" style="font-size: 1.5rem" />
    </div>
  </div>
</template>

<script setup lang="ts">
const search = ref<string>('')
</script>

<style lang="scss" scoped>
.header {
  height: 6rem;
}

.menu-item {
  position: relative;
}
.menu-item::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  height: 2px;
  background-color: var(--primary-color);
  transition: 0.2s;
  right: 50%;
}
.menu-item:hover::before {
  left: 0%;
  right: 0%;
}
</style>
