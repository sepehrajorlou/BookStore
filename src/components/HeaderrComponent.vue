
<template>
  <div id="sticky-header">
    <Slide id="home">
      <router-link to="/choose-Bookstore" class="text-dark"
        >choose a bookstore</router-link
      >
      <router-link to="/Gift-Cards" class="text-dark">Gift Cards</router-link>
      <router-link to="/Best-Sellers" class="text-dark"
        >Best Sellers</router-link
      >
      <router-link to="/New-Releases" class="text-dark"
        >New Releases</router-link
      >
      <router-link to="/Fiction" class="text-dark">Fiction</router-link>
      <router-link to="/NonFiction" class="text-dark">NonFiction</router-link>
      <router-link to="/YA" class="text-dark">YA</router-link>
      <router-link to="/Kids" class="text-dark">Kids</router-link>
      <router-link to="/Games-Puzzles" class="text-dark"
        >Games & Puzzles</router-link
      >
    </Slide>
    <div class="container bg-light-orange text-center" style="height: 50px">
      <span class="text-dark" id="header-text ">
        Every Purchase Supports Local Bookstores. A Better Way to Buy Books
        Online.
      </span>
    </div>
    <section>
      <div class="d-flex align-item-center" id="header-responsive">
        <div class="">
          <img
            :src="require('@/assets/images/wallpaper.svg')"
            alt=""
            class=""
          />
        </div>
        <div style="width: 25%" class=""></div>
        <div class="" style="width: 45%" id="searchbar-header">
          <div class="wrap">
            <div class="search">
              <input
                type="text"
                class="searchTerm light-purple"
                placeholder="seatch books,authors,ISBNs..."
                @keyup.enter="Search()"
                v-model="input"
              />
              <button type="submit" class="searchButton" @click="Search()">
                <unicon name="search" fill="black" />
              </button>
            </div>
          </div>
        </div>

        <div class="d-flex align-item-center" id="sign-and-shop">
          <div style="margin: 0 25px">
            <h2 class="special-blue" id="signIn">sign in</h2>
            <unicon
              name="user"
              fill="user"
              width="42"
              height="42"
              id="sinInIcon"
            />
          </div>
          <div>
            <unicon name="shopping-bag" fill="black" width="42" height="42" />
          </div>
        </div>
      </div>
      <div class="container text-center">
        <h3 class="special-blue d-inline-block" style="margin-right: 5px">
          $21,298,011.20
        </h3>
        <h4 class="d-inline-block">raised for local bookstores</h4>
      </div>
    </section>
  </div>
</template>
<script>
import { Slide } from "vue-burger-menu";
export default {
  components: {
    Slide, // Register your component
  },
  data() {
    return {
      input: "",
    };
  },
  methods: {
    Search() {
      if ("/" + this.input != this.$route.path) {
        this.$router.push(this.input);
        this.input = "";
      } else {
        return (this.input = "");
      }
    },
  },
};
</script>
<style scoped>
#sticky-header {
  background-color: #fff;
  transition: 0.2s;
  position: fixed;
  width: 100%;
  z-index: 1;
  top: 0;
}
#header-text {
  padding: 20px 0;
}
#slide {
  position: absolute;
}
.search {
  width: 100%;
  position: relative;
  display: flex;
}

.searchTerm {
  width: 100%;
  border: 3px solid;
  border-right: none;
  padding: 5px;
  height: 20px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: black;
}

.searchTerm:focus {
  font-size: 20px;
}
.searchButton {
  width: 40px;
  height: 36px;
  border: 3px solid black;
  background: #ccc4e3;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
  border-left-style: dotted;
}

/*Resize the wrap to see the search bar change!*/
.wrap {
  width: 100%;
}
#sign-and-shop {
  width: 35%;
  justify-content: flex-end;
}
#signIn {
  display: none;
}
#sinInIcon {
  display: block;
}
#home {
  position: relative;
  top: 55px;
  right: 35px;
}
</style>
