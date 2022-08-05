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
            checkout (TOTAL: ${{ numberOfbooks * totalPriceAfterDiscount }})
          </button>
        </div>
        <div class="d-flex justify-content-between mt-3">
          <div>
            <span id="item-text">item</span>
          </div>
          <div>
            <span class="mr-3">QTY</span>
            <div style="width: 5rem" class="d-inline-block"></div>
            <span class="ml-3 mr-3">Price</span>
          </div>
        </div>
        <hr class="mt-3" />
      </section>
      <section class="">
        <div class="d-flex justify-content-between mt-5" id="main-container">
          <div class="d-flex">
            <img
              src="https://images-us.bookshop.org/ingram/9781523514281.jpg?height=500&v=v2-bbb1973723293b1ac81018d5c562fade"
              alt=""
              style="max-height: 240px"
              class=""
            />
            <div class="ml-2">
              <h3 class="">Do the Work!: An Antiracist Activity Book</h3>
              <h5 class="">W Kamau Bell, Kate Schatz</h5>
              <span class="text-special-gray"> Paperback </span>

              <div class="mt-2">
                <unicon
                  name="check"
                  fill="#1FA5A3"
                  class="d-inline-block"
                  style="position: relative; top: 7px"
                />
                <span class="d-inline-block fw-bold" style="color: #1fa5a3"
                  >AVAILABLE</span
                >
              </div>
            </div>
          </div>
          <div class="d-flex mt-3" id="price-number-of-production">
            <div class="mt-3">
              <input
                type="number"
                style="
                  width: 50px;
                  height: 25px;
                  position: relative;
                  bottom: 23px;
                "
                class="d-inline-block"
                value="1"
                v-model="numberOfbooks"
              />
            </div>
            <div style="width: 5rem"></div>
            <div class="" style="position: relative; bottom: 6px">
              <span class="text-danger line-through"> ${{ price }} </span>
              <br />
              <span> ${{ totalPriceAfterDiscount }}</span>
            </div>
          </div>
        </div>
        <div class="w-100 text-center">
          <hr class="mt-3 mb-2" />
          <h3 class="">
            Total : $ {{ numberOfbooks * totalPriceAfterDiscount }}
          </h3>
          <div>
            <button
              id="update"
              class="d-inline-block mx-2 mt-1 cursor d-inline-block"
            >
              <span class="text-special-pink">update</span>
            </button>
            <button
              id="checkout-2"
              class="
                bg-special-pink
                text-light
                d-inline-block
                mx-2
                mt-1
                cursor
                d-inline-block
              "
            >
              checkout (TOTAL: ${{ numberOfbooks * totalPriceAfterDiscount }})
            </button>
            <br />
            <br />
            <span class="fw-bold">Payments Accepted:</span>
            <span>American Express, Discover, Mastercard and Visa</span>
          </div>
        </div>
      </section>
      <div class="d-flex align-item-center mt-3">
        <img
          style="max-height: 80px"
          src=""
          alt=""
          id="bookshop-second-logo"
          class="d-inline-block"
        />
        <h1 class="d-inline-block mx-3">
          Bookshop.org Best Sellers of the Week
        </h1>
      </div>
      <div class="mt-3">
        <button class="viewListBTN bg-special-pink text-light">
          viewList (15books)
        </button>
      </div>
      <div class="d-flex overflow-scroll-x mt-3">
        <div
          v-for="(item, index) in 16"
          :key="item"
          class="mx-3 my-2"
          id="box-shadow"
        >
          <router-link :to="'/book/name-' + index">
            <img src="" alt="" class="images" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      price1: "24.34",
      mainPrice: "21.37",
      price: "22.95",
      discountPercent: "10",
      numberOfbooks: "2",
      totalPriceAfterDiscount: null,
    };
  },
  methods: {
    discount(){
      let price = parseInt(this.price);
      let discountPercent = parseInt(this.discountPercent) / 100;
      let calculate = price * discountPercent;
      let total = price - calculate;
      return this.totalPriceAfterDiscount = total.toFixed(2);
    }
  },
  watch: {
    numberOfbooks() {
      // for api
      // When the number increases or decreases
      this.discount()
    },
  },
  mounted() {
    this.discount()
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
#checkout-2 {
  min-width: 150px;
  border: 0px;
  border-radius: 25px;
  height: 45px;
  padding: 0 25px;
}
#update {
  min-width: 150px;
  border: 1px solid #bf1f49;
  border-radius: 25px;
  height: 45px;
  background-color: #fff;
}
.viewListBTN {
  display: block;
  width: 100%;
  height: 50px;
  border-radius: 25px;
  font-weight: 200;
  font-size: 21px;
  border: 1px solid #bf1f49;
}
#bookshop-second-logo {
  border-radius: 55px;
}
.images {
  max-height: 400px;
  max-width: 210px;
}
</style>