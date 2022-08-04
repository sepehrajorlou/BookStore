<template>
  <div id="responsive-book-margin-page">
    <div class="container-sm d-flex" id="main-book-container">
      <div class="" id="book-image-responsive">
        <img
          src="https://images-us.bookshop.org/ingram/9781523514281.jpg?height=500&v=v2-bbb1973723293b1ac81018d5c562fade"
          alt=""
          style="max-width: 300px"
        />
      </div>
      <div class="mx-3">
        <h1>Do the Work!: An Antiracist Activity Book</h1>
        <h3 class="special-blue">
          W. Kamau Bell (Author) Kate Schatz (Author)
        </h3>

        <h4>FORMAT</h4>
        <div class="text-center" id="price-box">
          <h3>Paperback</h3>
          <h3
            class="text-danger line-through d-inline-block mx-2"
            style="bottom: 25px; position: relative"
          >
            $22.95
          </h3>
          <h3 class="d-inline-block" style="bottom: 25px; position: relative">
            $21.34
          </h3>
        </div>

        <div class="mt-3" style="">
          <button
            id="pre-order-btn"
            class="bg-special-pink text-light d-inline-block mx-2 mt-1 cursor"
          >
            <unicon
              name="shopping-bag"
              fill="#fff"
              style="position: relative; top: 4px"
            />
            PRE ORDER
          </button>
          <button
            id="add-to-wishlist-btn"
            class="bg-light special-blue d-inline-block mx-2 mt-1 cursor"
          >
            <unicon
              name="bookmark-full"
              fill="#573BA3"
              style="position: relative; top: 4px"
            />
            ADD TO WISHLIST
          </button>
        </div>
        <h1>Description</h1>
        <h4>
          Overwhelmed by racial injustice? Outraged by the news? Find yourself
          asking, "What can I doooooo?" DO THE WORK!
        </h4>
        <p>
          {{description[0]}}
          <br>
          {{description[1]}}
        </p>
        <h1>Product Details</h1>
        <span class="d-inline-block mx-2 font-weight">price</span>
        <span class="d-inline-block line-through text-danger mx-2">$22.95</span>
        <span class="d-inline-block"> $21.34</span>
        <br />
        <span class="d-inline-block font-weight mx-2 mt-2">Publisher</span>
        <span class="d-inline-block">Workman Publishing</span>
        <br />
        <span class="d-inline-block font-weight mx-2 mt-2">publish Date</span>
        <span class="d-inline-block">{{
          moment().format("dddd MMMM,YYYY")
        }}</span>
        <br />
        <span class="d-inline-block font-weight mx-2 mt-2">language</span>
        <span class="d-inline-block">English</span>
        <h3>
          <router-link to="" class="text-dark">
            BISAC Categories: Activity Books Race & Ethnic Relations
            Discrimination & Race Relations</router-link
          >
        </h3>
        <h1>Earn by promoting books</h1>
        <div class="py-2 px-2" style="width: 100%; background-color: #f2f2f2">
          <span
            >Earn money by sharing your favorite books through our Affiliate
            program.</span
          >
          <br />
          <div class="mt-3 d-flex align-item-center">
            <img
              src="https://rails-assets-us.bookshop.org/assets/ic_bookshop-a66797f275b4d578ff7d11b045b727ae5eb6e353003f7d30cba1120108a99a4f.svg"
              alt=""
              class="d-inline-block mr-2"
            />
            <span>BECOME AN AFFILIATE</span>
          </div>
        </div>
        <h2>About the Author</h2>
        <p>
          {{description[4]}}
          <br>
          {{description[5]}}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";
import ApiService from "@/api/apiservice";
export default {
  data() {
    return {
      moment: moment,
      description: "",
    };
  },
  beforeMount() {
    ApiService.booktext().then((response) => {
      this.description = response.data;
    });
  },
};
</script>
<style Scoped>
#price-box {
  border: 3px solid #2b0f42;
  width: 250px;
  height: 100px;
}
#pre-order-btn {
  width: 170px;
  height: 50px;
  border: 1px solid #bf1f49;
  border-radius: 25px;
  font-size: 15px;
  font-weight: bold;
}
#add-to-wishlist-btn {
  width: 200px;
  height: 50px;
  border: 3px solid #573ba3;
  border-radius: 25px;
  font-size: 15px;
  font-weight: bold;
}
.font-weight {
  font-weight: lighter;
  color: gray;
}
#responsive-book-margin-page {
  margin-top: 15rem;
}
</style>