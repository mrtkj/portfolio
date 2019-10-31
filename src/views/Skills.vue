<template>
  <div class="skills">
    <div class="container pt-5 pb-5">
      <div class="row mb-2  d-flex justify-content-center">
        <p class="border-bottom inline-block text-nowrap h2">
          Skills
        </p>

        <vue-timeline :timeline-items="timelineItems"></vue-timeline>
      </div>
    </div>
  </div>
</template>

<script>
import VueTimeline from "bs-vue-timeline";

export default {
  name: "skills",
  components: {
    VueTimeline
  },
  data: function() {
    return {
      timelineItems: [
        {
          from: new Date(2014, 10),
          to: new Date(),
          title: "Company Name 1",
          subtitle: "System Engineer",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          from: new Date(2009, 5),
          to: new Date(2013, 5),
          title: "Company Name 2",
          subtitle: "Programmer",
          content:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
          from: new Date(2000, 3),
          to: new Date(2008, 12),
          title: "Company Name 3",
          subtitle: "Internship / Volunteer",
          content:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      ]
    };
  }
};
</script>
