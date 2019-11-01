<template>
  <div class="skills">
    <div class="container pt-5 pb-5">
      <div class="row mb-2  d-flex justify-content-center">
        <p class="border-bottom inline-block text-nowrap h2">
          Skills
        </p>
        <timelines :timelines="lines"></timelines>
      </div>
    </div>
  </div>
</template>

<script>
import Timelines from "@/components/molecules/Timelines.vue";

export default {
  name: "skills",
  components: {
    Timelines
  },
  data: function() {
    return {
      lines: [
        {
          id: 1,
          title: "test1",
          body: "body1",
          badge: "warning",
          isRight: false
        },
        {
          id: 2,
          title: "test2",
          body: "body2",
          badge: "warning",
          isRight: true
        }
      ]
    };
  }
};
</script>
