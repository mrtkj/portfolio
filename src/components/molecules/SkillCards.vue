<template>
  <div class="skill-card">
    <div class="skills-container w-100">
      <div class="row mb-2 d-flex flex-row justify-content-center">
        <div
          v-for="skill in skills"
          v-bind:key="skill.id"
          class="card col-md-3 m-2"
        >
          <div class="h6 text-left mt-2 ml-2 mr-2 mb-0">
            <div class="row ml-2 mr-2">
              <b-img
                fluid
                :src="skill.url"
                width="30px"
                height="30px"
                alt="Center image"
              ></b-img>
              <div class="mt-2 ml-2 align-bottom">{{ skill.title }}</div>
            </div>
            <b-progress
              :value="skill.value"
              :max="skill.max"
              :label="skill.value"
              class="m-2"
              show-progress
            ></b-progress>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SkillCards",
  props: {
    skills: {
      type: Array,
      required: true,
      default: function() {
        return [];
      }
    }
  }
};
</script>
