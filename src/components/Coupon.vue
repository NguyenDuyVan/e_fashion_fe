<template>
  <div class="card">
    <div class="main">
      <div class="co-img">
        <img src="https://i.pinimg.com/originals/c7/84/67/c78467db9ff497393cb548a48f02d451.png" alt="" />
      </div>
      <div class="vertical"></div>
      <div class="content">
        <h2>Mcdonalds</h2>
        <h1>10% <span>Coupon</span></h1>
        <p>Valid till 30 April 2021</p>
      </div>
    </div>
    <div class="copy-button">
      <input id="copyvalue" type="text" readonly value="GOFREE" />
      <Button class="bt-second" @click="copyCoupon">COPY</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
function copyCoupon() {
  // useCopyToClipBoard()
}
</script>

<style lang="scss">
.card {
  width: 400px;
  height: 180px;
  border-radius: 5px;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2);
  background-color: #fff;
  padding: 10px 10px;
  position: relative;
}

.main,
.copy-button {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  align-items: center;
}

.co-img img {
  width: 100px;
  height: 100px;
}
.vertical {
  border-left: 5px dotted black;
  height: 100px;
  position: absolute;
  left: 40%;
}

.content h1 {
  font-size: 35px;
  margin-left: -20px;
  color: #565656;
}

.content h1 span {
  font-size: 18px;
}
.content h2 {
  font-size: 18px;
  margin-left: -20px;
  color: #565656;
  text-transform: uppercase;
}

.content p {
  font-size: 16px;
  color: #696969;
  margin-left: -20px;
}

.copy-button {
  margin: 12px 0 -5px 0;
  height: 45px;
  border-radius: 4px;
  padding: 0 5px;
  border: 1px solid #e1e1e1;
}

.copy-button input {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 15px;
}

.copy-button button {
  padding: 5px 20px;
  background-color: #dc143c;
  color: #fff;
  border: 1px solid transparent;
}

.buy {
  position: absolute;
  content: '';
  bottom: 20px;
  left: 20px;
  background-color: #dc143c;
}
</style>
