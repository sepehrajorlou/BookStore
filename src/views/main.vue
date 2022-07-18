<template>
  <div style="" id="container-top">
    <carousel autoplay :per-page="1" :mouse-drag="false" :speed="500">
      <slide
        data-name="MySlideName"
        v-for="(item, index) in list"
        v-bind:key="index"
      >
        <img :src="item.url" :alt="item.alt" style="width: 100%" />
      </slide>
    </carousel>
    <section class="container-sm">
      <div class="d-flex align-item-center mt-3">
        <img
          style="max-height: 80px"
          src="https://images-production.bookshop.org/spree/curators/avatars/10/thumb/Social_media_Icon_alternative.jpg?1573251482"
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
        <div v-for="(item , index) in 15" :key="item" class="mx-3 my-2" id="box-shadow">
          <router-link :to="'/book/name-' + index">
            <img
              src="https://images-us.bookshop.org/ingram/9781523514281.jpg?height=250&v=v2-bbb1973723293b1ac81018d5c562fade"
              alt=""
            />
          </router-link>
        </div>
      </div>

      <div class="d-flex align-item-center mt-3">
        <img
          style="max-height: 80px"
          src="https://images-production.bookshop.org/spree/affiliate_profiles/profile_images/596/original/River_Dog_Book_Co._icon_logo.jpg?1585837458"
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
        <div v-for="(item , index) in 34" :key="item" class="mx-3 my-2" id="box-shadow">
          <router-link :to="'/book/name-' + index">
          <img
            src="https://images-us.bookshop.org/ingram/9781523523184.jpg?height=250&v=v2-0fc0c1f19c0982d2214360423e5a2bb6"
            alt=""
          />
          </router-link>
        </div>
      </div>

      <div class="d-flex align-item-center mt-3">
        <img
          style="max-height: 80px"
          src="https://images-production.bookshop.org/spree/affiliate_profiles/profile_images/16935/original/LV_White_You_Tube_Channel_Art.jpg?1651521241"
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
        <div v-for="(item , index) in 56" :key="item" class="mx-3 my-2" id="box-shadow">
          <router-link :to="'/book/name-' + index">
          <img
            src="https://images-us.bookshop.org/ingram/9780785235057.jpg?height=250&v=v2-3386b673ec59b0d65fcf0026a15ef597"
            alt=""
          />
          </router-link>
        </div>
      </div>

      <div class="d-flex align-item-center mt-3">
        <img
          style="max-height: 80px"
          src="https://images-production.bookshop.org/spree/curators/avatars/82/thumb/HC_logo.jpeg?1657220655"
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
        <div v-for="(item , index) in 10" :key="item" class="mx-3 my-2" id="box-shadow">
          <router-link :to="'/book/name-' + index">
          <img
            src="https://images-us.bookshop.org/ingram/9780062938787.jpg?height=250&v=v2"
            alt=""
          />
          </router-link>
        </div>
      </div>

      <div class="mt-3" style="border: 0.5px solid #eae9ed">
        <h1 class="mt-3 mx-3">All Things Julia</h1>
        <div class="mt-3 d-flex" id="special-book-intro">
          <div v-for="item in 3" :key="item" class="mx-3 my-2 py-3">
            <img
              src="https://images-us.bookshop.org/ingram/9780593160305.jpg?height=250&v=v2-5da801b9e97bc2c4a7cae56b8f6804f8"
              alt=""
              class="img-main-special-book-intro-responsive"
            />
          </div>
        </div>
      </div>

      <div class="d-flex align-item-center mt-3">
        <img
          style="max-height: 80px"
          src="https://images-production.bookshop.org/spree/affiliate_profiles/profile_images/56323/original/bishopandwilde_librofmpinkgreen_%282%29.jpg?1631217798"
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
        <div v-for="(item , index) in 45" :key="item" class="mx-3 my-2" id="box-shadow">
          <router-link :to="'/book/name-' + index">
          <img
            src="https://images-us.bookshop.org/ingram/9780374115098.jpg?height=250&v=v2-44b59af613f573a7b6ac0d7933842d22"
            alt=""
          />
          </router-link>
        </div>
      </div>

      <div class="d-flex align-item-center mt-3">
        <img
          style="max-height: 80px"
          src="https://images-production.bookshop.org/spree/affiliate_profiles/profile_images/68956/original/bykendalight-photo.jpg?1635022627"
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
        <div v-for="(item , index) in 45" :key="item" class="mx-3 my-2" id="box-shadow">
          <router-link :to="'/book/name-' + index">
          <img
            src="https://images-us.bookshop.org/ingram/9780385490818.jpg?height=250&v=v2"
            alt=""
          />
          </router-link>
        </div>
      </div>

      <div class="d-flex align-item-center mt-3">
        <img
          style="max-height: 80px"
          src="https://images-production.bookshop.org/spree/curators/avatars/57/thumb/Vintage.jpeg?1649868910"
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
        <div v-for="(item , index) in 14" :key="item" class="mx-3 my-2" id="box-shadow">
          <router-link :to="'/book/name-' + index">
          <img
            src="https://images-us.bookshop.org/ingram/9780679762805.jpg?height=250&v=v2"
            alt=""
          />
          </router-link>
        </div>
      </div>
      <div class="mt-3" style="border: 0.5px solid #eae9ed">
        <h1 class="mt-3 mx-3">
          Reading as a Spiritual Practive: Our Favorite Books About Books & The
          Joys Reading
        </h1>
        <div class="mt-3 d-flex" id="special-book-intro">
          <div v-for="(item , index) in 3" :key="item" class="mx-3 my-2 py-3">
            <router-link :to="'/book/name-' + index">
            <img
              src="https://images-us.bookshop.org/ingram/9781938584992.jpg?height=250&v=v2"
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
export default {
  data() {
    return {
      list: [
        {
          url: "https://images-production.bookshop.org/spree/promo_banner_slides/desktop_images/202/original/thumbnail_BrotherAliveBA2048x600_%281%29.jpg?1657548723",
          alt: "night-of-the-living-REZ",
        },
        {
          url: "https://images-production.bookshop.org/spree/promo_banner_slides/desktop_images/203/original/Rogues_Bookshop_2048x600.jpg?1657548818",
          alt: "One of The best book",
        },
      ],
    };
  },

  methods: {},
};
</script>
<style Scoped>
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