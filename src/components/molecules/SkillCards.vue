<template>
  <div class="skill-card">
    <div class="skills-container w-100">
      <div class="row mb-2 d-flex flex-row justify-content-center">
        <div
          v-for="skill in skills"
          v-bind:key="skill.id"
          class="card col-md-3 m-2"
        >
          <div class="h6 text-left mt-2 ml-2 mr-2 mb-1 container">
            <div class="row ml-2 mr-2">
              <b-img v-bind="mainProps" rounded alt="Rounded image"></b-img>
              <div class="mt-1 ml-2 align-bottom">{{ skill.title }}</div>
              <star-rating
                :increment="0.5"
                :max-rating="5"
                inactive-color="#888"
                active-color="#eb0"
                :star-size="20"
                :rating="skill.rating"
                :show-rating="false"
                :read-only="true"
                class="ml-2 mb-2"
              ></star-rating>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
  name: "SkillCards",
  components: {
    StarRating
  },
  props: {
    skills: {
      type: Array,
      required: true,
      default: function() {
        return [];
      }
    }
  },
  data: function() {
    return {
      mainProps: {
        blank: true,
        blankColor: "#000080",
        width: 5,
        height: 25,
        class: "m1"
      }
    };
  }
};
</script>
