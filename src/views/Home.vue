<template>
  <div class="home">
    <about></about>
  </div>
</template>

<script>
// @ is an alias to /src
import About from "@/components/About.vue";

export default {
  name: "home",
  components: {
    About
  }
};
</script>
