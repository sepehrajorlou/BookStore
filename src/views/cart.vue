<template>
  <div>
    <div class="container-sm" id="responsive-cart-margin-page">
      <section>
        <h1>Shopping Cart</h1>
        <div class="d-flex justify-content-between mt-3">
          <span></span>
          <button
            id="pre-order-btn"
            class="bg-special-pink text-light d-inline-block mx-2 mt-1 cursor"
          >
            checkout (TOTAL: ${{ price1 }})
          </button>
        </div>
        <div class="d-flex justify-content-between mt-3">
          <div>
            <span>item</span>
          </div>
          <div>
            <span class="mr-3">QTY</span>
            <div style="width: 5rem" class="d-inline-block"></div>
            <span class="ml-3 mr-3">Price</span>
          </div>
        </div>
        <hr class="mt-3">
      </section>
      <section>
        
      </section>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      price1: "24.34",
    };
  },
};
</script>
<style scoped>
#responsive-cart-margin-page {
  margin-top: 15rem;
}
#pre-order-btn {
  width: auto;
  height: 50px;
  border: 1px solid #bf1f49;
  border-radius: 5px;
  font-size: 15px;
  font-weight: bold;
}
</style>