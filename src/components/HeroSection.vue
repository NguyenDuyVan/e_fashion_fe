<script setup>
import { Navigation, Autoplay } from 'swiper'
</script>
<template>
  <div class="hero-section">
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
</template>
<style lang="scss">
.swiper {
  width: 100%;
  height: calc(100vh - 84px);

  .swiper-button-next,
  .swiper-button-prev {
    opacity: 0;
    transition: 0.2s;

    &::after {
      font-size: 30px;
      color: #000;
      transition: 0.2s;
    }

    &:hover::after {
      color: var(--primary-color);
    }
  }

  &:hover {
    .swiper-button-next,
    .swiper-button-prev {
      opacity: 1;
    }
  }
}

.swiper-button-next {
  right: 30px;
}

.swiper-button-prev {
  left: 30px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
