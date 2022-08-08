<template>
  <div>
    <div class="container" id="responsive-locator-margin-page">
      <div id="grid-container-locator" class="d-flex">
        <div style="width: 40%">
          <div
            class="border d-block"
            v-for="x in 10"
            :key="x"
            style="width: 100%"
          >
            <div class="w-100 shadow py-2">
              <h5 class="mx-2">Elephant Alley Children's Books (Pop-up)</h5>
              <span class="fw-light mx-1">Los Angeles, CA, USA</span>
              <button
                id="pre-order-btn"
                class="bg-special-pink text-light d-block mx-1 mt-4 cursor"
              >
                Support this Shop!
              </button>
              <span class="text-dark mx-1 d-block mt-2">1.80 milies away</span>
            </div>
          </div>
        </div>
        <div class="border shadow py-2" style="width: 60%">

		</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
#responsive-locator-margin-page {
  margin-top: 13rem;
}

#pre-order-btn {
  width: auto;
  height: 25px;
  border: 1px solid #bf1f49;
  border-radius: 5px;
  font-size: 12px;
  font-weight: bold;
}
</style>