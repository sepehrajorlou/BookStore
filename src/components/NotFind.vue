<template>
  <div>
    <div class="container-sm bg-notfind-gray radius-10" id="margin-top">
      <div class="text-center py-2">
        <h1 class="special-blue">404</h1>
        <h3 class="">
          Sorry, the page you’re looking for doesn't seem to exist. If you're
          looking for a specific book, you may find it by <br />
          searching by title or author below:
        </h3>
      </div>
      <div class="text-center pb-5 mt-2">
        <div class="mx-auto" id="Inputwidth-notfind">
          <div class="wrap">
            <div class="search">
              <input type="text" class="searchTerm" placeholder="Search" />
              <button type="submit" class="searchButton">
                <unicon name="search" fill="white" id="Searchicon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style Scoped>
#margin-top {
  margin-top: 23rem;
  margin-bottom: 5rem;
}
#input {
  width: 50%;
  height: 45px;
  border: 0px;
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
  height: 42px;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  outline: none;
  color: black;
}

.searchButton {
  width: 40px;
  height: 58px;
  border: 3px solid black;
  background: #fff;
  text-align: center;
  color: #fff;
  border-radius: 0 20px 20px 0;
  cursor: pointer;
  font-size: 20px;
  border-left-width: 0px;
}
.wrap {
  width: 100%;
}
#Searchicon {
  background-color: #de2454;
  border-radius: 50%;
  padding: 10px;
  position: relative;
  right: 20px;
  top: 3px;
}
#Inputwidth-notfind {
  width: 55%;
}
</style>