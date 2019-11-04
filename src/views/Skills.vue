<template>
  <div class="skills">
    <div class="container pt-5 pb-5">
      <div class="row mb-2  d-flex justify-content-center">
        <p class="border-bottom inline-block text-nowrap h2">
          Skills
        </p>
        <div class="skills-container w-100">
          <div class="row mb-2  d-flex justify-content-center">
            <div class="card w-25 m-2">
              <div class="h6 text-left mt-2 ml-2 mr-2 mb-0">
                title
              </div>
              <b-progress :value="value" :max="max" class="m-2"></b-progress>
            </div>
            <div class="card w-25 m-2">
              <div class="h6 text-left mt-2 ml-2 mr-2 mb-0">
                title
              </div>
              <b-progress :value="value" :max="max" class="m-2"></b-progress>
            </div>
            <div class="card w-25 m-2">
              <div class="h6 text-left mt-2 ml-2 mr-2 mb-0">
                title
              </div>
              <b-progress :value="value" :max="max" class="m-2"></b-progress>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "skills",
  data: function() {
    return {
      value: 75,
      max: 100
    };
  }
};
</script>
