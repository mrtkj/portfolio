<template>
  <div class="contact">
    <div class="container pt-5 pb-5">
      <div class="row mb-5  d-flex justify-content-center">
        <p class="border-bottom inline-block text-nowrap h2">
          Contact
        </p>
      </div>
      <div class="row justify-content-center">
        <div class="card col-md-4 col-12">
          <div class="card-title mt-2 mb-0 border-bottom">email</div>
          <div class="card-body">
            <button v-on:click="sendMail">
              <span
                class="iconify"
                data-icon="simple-line-icons:envelope"
                data-inline="false"
              ></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  methods: {
    sendMail: function(event) {
      if (event) {
        alert("test");
      }
    }
  }
};
</script>
