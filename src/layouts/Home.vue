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
          <h3 class="text-center mb-3 font-semibold">Best Seller</h3>
          <TabView>
            <TabPanel header="Nam">
              <div class="flex flex-wrap justify-center">
                <Card v-for="(item, index) in 5" :key="index" style="width: 25em" class="m-5">
                  <template #header>
                    <img alt="user header" src="/images/usercard.png" />
                  </template>
                  <template #title> Advanced Card </template>
                  <template #subtitle> Card subtitle </template>
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
            <TabPanel header="Nữ">
              <div class="flex flex-wrap justify-center">
                <Card v-for="(item, index) in 5" :key="index" style="width: 25em" class="m-5">
                  <template #header>
                    <img alt="user header" src="/images/usercard.png" />
                  </template>
                  <template #title> Advanced Card </template>
                  <template #subtitle> Card subtitle </template>
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
            <TabPanel header="Trend">
              <div class="flex flex-wrap justify-center">
                <Card v-for="(item, index) in 5" :key="index" style="width: 25em" class="m-5">
                  <template #header>
                    <img alt="user header" src="/images/usercard.png" />
                  </template>
                  <template #title> Advanced Card </template>
                  <template #subtitle> Card subtitle </template>
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
</style>
