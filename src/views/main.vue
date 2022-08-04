<template>
  <div style="" id="container-top">
    <carousel
      autoplay
      :per-page="1"
      :mouse-drag="false"
      :speed="500"
      class="text-center"
    >
      <slide
        data-name="MySlideName"
        v-for="(item, index) in PhotoesData.slice(100, 105)"
        v-bind:key="index"
      >
        <img
          :src="item.url"
          :alt="item.alt"
          style="width: 100%; max-width: 800px; max-height: 800px"
        />
      </slide>
    </carousel>
    <section class="container-sm">
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
          v-for="(item, index) in PhotoesData.slice(0, 15)"
          :key="item.id"
          class="mx-3 my-2"
          id="box-shadow"
        >
          <router-link :to="'/book/name-' + index">
            <img :src="item.url" alt="" class="images" />
          </router-link>
        </div>
      </div>

      <div class="d-flex align-item-center mt-3">
        <h1>iahfkjshfjkafs</h1>
        <img
          style="max-height: 80px"
          src="PhotoesData[210].url"
          alt=""
          id="bookshop-second-logo"
          class="d-inline-block"
        />
        <h1 class="d-inline-block">Bans Off Our Books & our Bodies</h1>
      </div>
      <div class="mt-3">
        <button class="viewListBTN bg-special-pink text-light">
          viewList (34books)
        </button>
      </div>
      <div class="d-flex overflow-scroll-x mt-3">
        <div
          v-for="(item, index) in PhotoesData.slice(16, 24)"
          :key="item.id"
          class="mx-3 my-2"
          id="box-shadow"
        >
          <router-link :to="'/book/name-' + index">
            <img :src="item.url" alt="" class="images" />
          </router-link>
        </div>
      </div>

      <div class="d-flex align-item-center mt-3">
        <img
          style="max-height: 80px"
          src="PhotoesData[210].url"
          alt=""
          id="bookshop-second-logo"
          class="d-inline-block"
        />
        <h1 class="d-inline-block">
          Great Beach Reads to Add to Your Summer Reading List
        </h1>
      </div>
      <div class="mt-3">
        <button class="viewListBTN bg-special-pink text-light">
          viewList (56 books)
        </button>
      </div>
      <div class="d-flex overflow-scroll-x mt-3">
        <div
          v-for="(item, index) in PhotoesData.slice(26, 31)"
          :key="item.id"
          class="mx-3 my-2"
          id="box-shadow"
        >
          <router-link :to="'/book/name-' + index">
            <img :src="item.url" alt="" class="images" />
          </router-link>
        </div>
      </div>

      <div class="d-flex align-item-center mt-3">
        <img
          style="max-height: 80px"
          src="PhotoesData[219].url"
          alt=""
          id="bookshop-second-logo"
          class="d-inline-block"
        />
        <h1 class="d-inline-block">World Building Delight</h1>
      </div>
      <div class="mt-3">
        <button class="viewListBTN bg-special-pink text-light">
          viewList (10 books)
        </button>
      </div>
      <div class="d-flex overflow-scroll-x mt-3">
        <div
          v-for="(item, index) in PhotoesData.slice(36, 45)"
          :key="item.id"
          class="mx-3 my-2"
          id="box-shadow"
        >
          <router-link :to="'/book/name-' + index">
            <img :src="item.url" alt="" class="images" />
          </router-link>
        </div>
      </div>

      <div class="mt-3" style="border: 0.5px solid #eae9ed">
        <h1 class="mt-3 mx-3">All Things Julia</h1>
        <div class="mt-3 d-flex" id="special-book-intro">
          <div
            v-for="item in PhotoesData.slice(199, 201)"
            :key="item.id"
            class="mx-3 my-2 py-3"
          >
            <img
              :src="item.url"
              alt=""
              class="img-main-special-book-intro-responsive"
            />
          </div>
        </div>
      </div>

      <div class="d-flex align-item-center mt-3">
        <img
          style="max-height: 80px"
          src="PhotoesData[279].url"
          alt=""
          id="bookshop-second-logo"
          class="d-inline-block"
        />
        <h1 class="d-inline-block">Pride Rounduo: LGBTQ + writing of 2022</h1>
      </div>
      <div class="mt-3">
        <button class="viewListBTN bg-special-pink text-light">
          viewList (45 books)
        </button>
      </div>
      <div class="d-flex overflow-scroll-x mt-3">
        <div
          v-for="(item, index) in PhotoesData.slice(48, 55)"
          :key="item.id"
          class="mx-3 my-2"
          id="box-shadow"
        >
          <router-link :to="'/book/name-' + index">
            <img :src="item.url" alt="" class="images" />
          </router-link>
        </div>
      </div>

      <div class="d-flex align-item-center mt-3">
        <img
          style="max-height: 80px"
          src=""
          alt=""
          id="bookshop-second-logo"
          class="d-inline-block"
        />
        <h1 class="d-inline-block">Fed Up Femenists Who Read</h1>
      </div>
      <div class="mt-3">
        <button class="viewListBTN bg-special-pink text-light">
          viewList (45 books)
        </button>
      </div>
      <div class="d-flex overflow-scroll-x mt-3">
        <div
          v-for="(item, index) in PhotoesData.slice(60, 70)"
          :key="item.id"
          class="mx-3 my-2"
          id="box-shadow"
        >
          <router-link :to="'/book/name-' + index">
            <img :src="item.url" alt="" class="images" />
          </router-link>
        </div>
      </div>

      <div class="d-flex align-item-center mt-3">
        <img
          style="max-height: 80px"
          src="PhotoesData[419].url"
          alt=""
          id="bookshop-second-logo"
          class="d-inline-block"
        />
        <h1 class="d-inline-block">
          Upside Down: A Stranger Things Reading List
        </h1>
      </div>
      <div class="mt-3">
        <button class="viewListBTN bg-special-pink text-light">
          viewList (14 books)
        </button>
      </div>
      <div class="d-flex overflow-scroll-x mt-3">
        <div
          v-for="(item, index) in PhotoesData.slice(72, 83)"
          :key="item.id"
          class="mx-3 my-2"
          id="box-shadow"
        >
          <router-link :to="'/book/name-' + index">
            <img :src="item.url" alt="" class="images" />
          </router-link>
        </div>
      </div>
      <div class="mt-3" style="border: 0.5px solid #eae9ed">
        <h1 class="mt-3 mx-3">
          Reading as a Spiritual Practive: Our Favorite Books About Books & The
          Joys Reading
        </h1>
        <div class="mt-3 d-flex" id="special-book-intro">
          <div
            v-for="(item, index) in PhotoesData.slice(85, 88)"
            :key="item.id"
            class="mx-3 my-2 py-3"
          >
            <router-link :to="'/book/name-' + index">
              <img
                :src="item.url"
                alt=""
                class="img-main-special-book-intro-responsive"
              />
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import ApiService from "@/api/apiservice";
export default {
  data() {
    return {
      PhotoesData: [],
      list: [
        {
          url1: "",
          alt: "night-of-the-living-REZ",
        },
        {
          url2: "",
          alt: "One of The best book",
        },
      ],
    };
  },

  methods: {
    test2() {
      console.log(this.PhotoesData[210].url);
    },
  },
  beforeMount() {
    ApiService.photo().then((response) => {
      this.PhotoesData = response.data;
    });
  },
};
</script>
<style Scoped>
.images {
  max-height: 400px;
  max-width: 210px;
}
#container-top {
  margin-top: 12rem;
}
#first-overflow-slider {
  grid-template-columns: auto auto;
}
#bookshop-second-logo {
  border-radius: 55px;
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
.img-main-special-book-intro-responsive {
  width: 100%;
}
#box-shadow {
  box-shadow: 1px 5px 5px #eeeeee;
}
#special-book-intro {
  background-color: #efeef5;
}
</style>