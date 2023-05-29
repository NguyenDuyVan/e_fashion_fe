<script setup lang="ts">
import { Navigation, Autoplay } from 'swiper'

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
<template>
  <div>
    <ScrollTop />
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

        <div class="mt-24">
          <h3 class="text-center mb-5 font-semibold">Bán Chạy Nhất</h3>
          <TabView>
            <TabPanel header="Áo Phông">
              <div class="grid grid-cols-4 gap-x-10 gap-y-5">
                <Card v-for="(item, index) in 8" :key="index" class="overflow-hidden">
                  <template #header>
                    <div class="relative cursor-pointer wapper-img-card">
                      <img
                        alt="user header"
                        src="https://pos.nvncdn.net/be3159-662/ps/20230419_mvTlpopD6G.jpeg"
                        class="w-full object-cover"
                        style="height: 400px"
                      />
                      <div class="add-to-card center w-full absolute bottom-0 translate-y-full duration-300 opacity-0">
                        <Button icon="pi pi-cart-plus" label="Thêm vào giỏ hàng" class="bt-second" />
                      </div>
                      <div
                        class="wishlist center bg-transparent border border-black border-solid text-black text-xl absolute right-0 top-5 translate-x-full opacity-0 duration-300 w-10 h-10 rounded-full"
                      >
                        <i class="pi pi-heart"></i>
                      </div>
                    </div>
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
            <TabPanel header="Áo Phông">
              <div class="grid grid-cols-4 gap-x-10 gap-y-5">
                <Card v-for="(item, index) in 8" :key="index" class="overflow-hidden">
                  <template #header>
                    <div class="relative cursor-pointer wapper-img-card">
                      <img
                        alt="user header"
                        src="https://pos.nvncdn.net/be3159-662/ps/20230427_xYBiYaxZfk.jpeg"
                        class="w-full object-cover"
                        style="height: 400px"
                      />
                      <div class="add-to-card center w-full absolute bottom-0 translate-y-full duration-300 opacity-0">
                        <Button icon="pi pi-cart-plus" label="Thêm vào giỏ hàng" class="bt-second" />
                      </div>
                      <div
                        class="wishlist center bg-transparent border border-black border-solid text-black text-xl absolute right-0 top-5 translate-x-full opacity-0 duration-300 w-10 h-10 rounded-full"
                      >
                        <i class="pi pi-heart"></i>
                      </div>
                    </div>
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
            <TabPanel header="Áo Phông">
              <div class="grid grid-cols-4 gap-x-10 gap-y-5">
                <Card v-for="(item, index) in 8" :key="index" class="overflow-hidden">
                  <template #header>
                    <div class="relative cursor-pointer wapper-img-card">
                      <img
                        alt="user header"
                        src="https://pos.nvncdn.net/be3159-662/ps/20230419_fffxJbl0vM.jpeg"
                        class="w-full object-cover"
                        style="height: 400px"
                      />
                      <div class="add-to-card center w-full absolute bottom-0 translate-y-full duration-300 opacity-0">
                        <Button icon="pi pi-cart-plus" label="Thêm vào giỏ hàng" class="bt-second" />
                      </div>
                      <div
                        class="wishlist center bg-transparent border border-black border-solid text-black text-xl absolute right-0 top-5 translate-x-full opacity-0 duration-300 w-10 h-10 rounded-full"
                      >
                        <i class="pi pi-heart"></i>
                      </div>
                    </div>
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
          </TabView>
        </div>

        <div class="sale-off-code container mt-24">
          <swiper
            :navigation="true"
            :modules="[Navigation, Autoplay]"
            class="mySwiper select-none"
            :loop="true"
            :autoplay="{
              delay: 3000,
            }"
          >
            <swiper-slide>
              <div class="absolute left-1/4"></div>
              <img
                src="https://cdn.shopify.com/s/files/1/0624/8638/0738/files/a-slider3.png?crop=center&height=668&v=1680601290&width=1903"
                alt="slide1"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                src="https://cdn.shopify.com/s/files/1/0624/8638/0738/files/a-slider1.png?crop=center&height=668&v=1680601088&width=1903"
                alt="slide2"
              />
            </swiper-slide>
          </swiper>
        </div>

        <div class="mt-24">
          <h3 class="text-center mb-5 font-semibold">Sản Phẩm Mới</h3>
          <TabView>
            <TabPanel header="Áo Phông">
              <div class="grid grid-cols-4 gap-x-10 gap-y-5">
                <Card v-for="(item, index) in 8" :key="index" class="overflow-hidden">
                  <template #header>
                    <div class="relative cursor-pointer wapper-img-card">
                      <img
                        alt="user header"
                        src="https://pos.nvncdn.net/be3159-662/ps/20230419_mvTlpopD6G.jpeg"
                        class="w-full object-cover"
                        style="height: 400px"
                      />
                      <div class="add-to-card center w-full absolute bottom-0 translate-y-full duration-300 opacity-0">
                        <Button icon="pi pi-cart-plus" label="Thêm vào giỏ hàng" class="bt-second" />
                      </div>
                      <div
                        class="wishlist center bg-transparent border border-black border-solid text-black text-xl absolute right-0 top-5 translate-x-full opacity-0 duration-300 w-10 h-10 rounded-full"
                      >
                        <i class="pi pi-heart"></i>
                      </div>
                    </div>
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
            <TabPanel header="Áo Phông">
              <div class="grid grid-cols-4 gap-x-10 gap-y-5">
                <Card v-for="(item, index) in 8" :key="index" class="overflow-hidden">
                  <template #header>
                    <div class="relative cursor-pointer wapper-img-card">
                      <img
                        alt="user header"
                        src="https://pos.nvncdn.net/be3159-662/ps/20230427_xYBiYaxZfk.jpeg"
                        class="w-full object-cover"
                        style="height: 400px"
                      />
                      <div class="add-to-card center w-full absolute bottom-0 translate-y-full duration-300 opacity-0">
                        <Button icon="pi pi-cart-plus" label="Thêm vào giỏ hàng" class="bt-second" />
                      </div>
                      <div
                        class="wishlist center bg-transparent border border-black border-solid text-black text-xl absolute right-0 top-5 translate-x-full opacity-0 duration-300 w-10 h-10 rounded-full"
                      >
                        <i class="pi pi-heart"></i>
                      </div>
                    </div>
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
            <TabPanel header="Áo Phông">
              <div class="grid grid-cols-4 gap-x-10 gap-y-5">
                <Card v-for="(item, index) in 8" :key="index" class="overflow-hidden">
                  <template #header>
                    <div class="relative cursor-pointer wapper-img-card">
                      <img
                        alt="user header"
                        src="https://pos.nvncdn.net/be3159-662/ps/20230419_fffxJbl0vM.jpeg"
                        class="w-full object-cover"
                        style="height: 400px"
                      />
                      <div class="add-to-card center w-full absolute bottom-0 translate-y-full duration-300 opacity-0">
                        <Button icon="pi pi-cart-plus" label="Thêm vào giỏ hàng" class="bt-second" />
                      </div>
                      <div
                        class="wishlist center bg-transparent border border-black border-solid text-black text-xl absolute right-0 top-5 translate-x-full opacity-0 duration-300 w-10 h-10 rounded-full"
                      >
                        <i class="pi pi-heart"></i>
                      </div>
                    </div>
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
          </TabView>
        </div>

        <div class="service center flex-wrap mt-24">
          <div>
            <div class="flex mr-10">
              <img src="@/assets/image/service/free-ship.png" alt="" class="mr-4" />
              <div>
                <div class="font-bold">Free Ship</div>
                <div>Cho đơn hàng từ 300K</div>
              </div>
            </div>
          </div>
          <div>
            <div class="flex mr-10">
              <img src="@/assets/image/service/call.png" alt="" class="mr-4" />
              <div>
                <div class="font-bold">Phục vụ khách hàng 24/7</div>
                <div>Gọi cho Shop theo SĐT: 012345678</div>
              </div>
            </div>
          </div>
          <div>
            <div class="flex mr-10">
              <img src="@/assets/image/service/guarantee.png" alt="" class="mr-4" />
              <div>
                <div class="font-bold">Bảo hàng 6 tháng</div>
                <div>Áp dụng cho tất cả sản phẩm</div>
              </div>
            </div>
          </div>
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
  .p-card-header {
    .wapper-img-card:hover {
      .add-to-card {
        transform: translateY(-20px);
        opacity: 1;
      }
      .wishlist {
        transform: translateX(-20px);
        opacity: 1;

        &:hover {
          background-color: var(--primary-color);
          color: #fff;
          border-color: transparent;
        }
      }
    }
  }
}
</style>
