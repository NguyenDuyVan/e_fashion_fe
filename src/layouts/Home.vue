<template>
  <div>
    <div id="header">
      <AppHeader />
    </div>
    <div id="content">
      <HeroSection />

      <div class="container">
        <div class="mt-24">
          <h3 class="text-center mb-3 font-semibold">Top Danh Mục</h3>
          <div class="flex justify-center">
            <!-- <div class="mr-4 flex-1">
          <Banner
            :custom-class="['justify-start']"
            content="Hot Sale"
            btn-label="Mua Ngay"
            :url-image="'https://cdn.shopify.com/s/files/1/0624/8638/0738/files/banner-left_91af4f83-6d23-4286-8584-53b3ebbe7f2e.png?v=1680604291&width=1780'"
          />
        </div>
        <div class="ml-4 flex-1">
          <Banner
            content-position="right"
            :custom-class="['justify-end']"
            content="Hàng Mới"
            btn-label="Mua Ngay"
            :url-image="'https://cdn.shopify.com/s/files/1/0624/8638/0738/files/banner-right_4559d6ac-37ed-43c3-92c9-d46440d88db2.png?v=1680604307&width=1780'"
          />
        </div> -->

            <Category v-for="(item, index) in 5" :key="index" />
          </div>
        </div>

        <div v-for="(item, index) in 3" :key="index" class="mt-24">
          <h3 class="text-center mb-5 font-semibold">Áo Nam</h3>
          <TabView>
            <TabPanel header="Áo Phông">
              <div class="grid grid-cols-4 gap-x-10 gap-y-5">
                <Card v-for="(item, index) in 8" :key="index" class="overflow-hidden">
                  <template #header>
                    <img
                      alt="user header"
                      src="https://pos.nvncdn.net/be3159-662/ps/20230419_mvTlpopD6G.jpeg"
                      class="w-full object-cover"
                      style="height: 400px"
                    />
                  </template>
                  <template #subtitle>
                    <div class="text-black text-base mb-2">Áo Phông Regular Cotton 1059</div>
                    <div class="text-black mb-2">
                      <i class="pi pi-star-fill text-yellow-400 mr-1 text-sm"></i>
                      <i class="pi pi-star-fill text-yellow-400 mr-1 text-sm"></i>
                      <i class="pi pi-star-fill text-yellow-400 mr-1 text-sm"></i>
                      <i class="pi pi-star-fill text-yellow-400 mr-1 text-sm"></i>
                      <i class="pi pi-star-fill text-yellow-400 mr-1 text-sm"></i>
                    </div>
                    <div class="flex mb-2">
                      <div class="text-black text-base font-bold mr-2">300.000đ</div>
                      <p>-</p>
                      <div class="text-black text-base line-through ml-2">400.000đ</div>
                    </div>
                    <div class="flex text-black text-base font-bold mb-2">
                      <div
                        v-for="(item, index) in 4"
                        :key="index"
                        class="w-9 mx-1 my-3 h-9 rounded-full overflow-hidden cursor-pointer"
                      >
                        <img
                          alt="user header"
                          src="https://pos.nvncdn.net/be3159-662/ps/20230419_mvTlpopD6G.jpeg"
                          class="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </template>
                </Card>
              </div>
              <div class="center">
                <Button class="bt-second px-20">Xem Thêm</Button>
              </div>
            </TabPanel>
            <TabPanel header="Áo Sơ Mi">
              <div class="grid grid-cols-4 gap-x-10 gap-y-5">
                <Card v-for="(item, index) in 8" :key="index" class="overflow-hidden">
                  <template #header>
                    <img
                      alt="user header"
                      src="https://pos.nvncdn.net/be3159-662/ps/20230427_xYBiYaxZfk.jpeg"
                      class="w-full h-96 object-cover"
                    />
                  </template>
                  <template #subtitle> Áo Phông Regular Cotton 1059 </template>
                  <template #content>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error
                      repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione
                      quam perferendis esse, cupiditate neque quas!
                    </p>
                  </template>
                  <template #footer>
                    <Button icon="pi pi-check" label="Save" />
                    <Button icon="pi pi-times" label="Cancel" severity="secondary" style="margin-left: 0.5em" />
                  </template>
                </Card>
              </div>
            </TabPanel>
            <TabPanel header="Áo Polo">
              <div class="grid grid-cols-4 gap-x-10 gap-y-5">
                <Card v-for="(item, index) in 8" :key="index" class="overflow-hidden">
                  <template #header>
                    <img
                      alt="user header"
                      src="https://pos.nvncdn.net/be3159-662/ps/20230419_fffxJbl0vM.jpeg"
                      class="w-full h-96 object-cover"
                    />
                  </template>
                  <template #subtitle> Áo Phông Regular Cotton 1059 </template>
                  <template #content>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error
                      repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione
                      quam perferendis esse, cupiditate neque quas!
                    </p>
                  </template>
                  <template #footer>
                    <Button icon="pi pi-check" label="Save" />
                    <Button icon="pi pi-times" label="Cancel" severity="secondary" style="margin-left: 0.5em" />
                  </template>
                </Card>
              </div>
            </TabPanel>
          </TabView>
        </div>
      </div>
    </div>
    <div id="footer">
      <AppFooter />
    </div>
    <div id="sidebar">
      <AppSideBar />
    </div>
  </div>
</template>

<script setup lang="ts">
// type Banner = {
//   isContentLeft: boolean
//   customClass: string[]
//   urlImage: string
// }

// const banners = ref<Banner[]>([
//   {

//   }
// ])
</script>

<style lang="scss" scoped>
:deep(.p-tabview-nav) {
  justify-content: center;
}
:deep(.p-tabview .p-tabview-nav) {
  border: 0;

  li {
    font-size: 1.1rem;
    margin: 0 2rem 8px;

    &.p-highlight a {
      border-bottom: 2px solid;
    }

    a {
      padding: 1.25rem 0 0.5rem;
      box-shadow: unset;
      border: 0;

      &:not(.p-disabled):focus {
        box-shadow: unset;
      }
    }
  }
}
:deep(.p-card) {
  box-shadow: none;
  .p-card-content {
    display: none;
  }
  .p-card-body {
    padding-left: 0;
  }
}
</style>
