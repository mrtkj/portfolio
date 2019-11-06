<template>
  <div class="skills">
    <div class="container pt-5 pb-5">
      <div class="row mb-2  d-flex justify-content-center">
        <p class="border-bottom inline-block text-nowrap h2">
          Skills
        </p>
        <div class="skills-container w-100">
          <div class="h6 mt-5">開発言語</div>
          <skill-cards :skills="language"></skill-cards>
          <div class="h6 mt-5">フレームワーク</div>
          <skill-cards :skills="language"></skill-cards>
          <div class="h6 mt-5">開発環境</div>
          <skill-cards :skills="language"></skill-cards>
          <div class="h6 mt-5">その他</div>
          <skill-cards :skills="language"></skill-cards>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SkillCards from "@/components/molecules/SkillCards.vue";

export default {
  name: "Skills",
  components: {
    SkillCards
  },
  data: function() {
    return {
      language: [
        {
          id: 1,
          title: "Java",
          rating: 5
        },
        {
          id: 2,
          title: "PHP",
          rating: 2
        },
        {
          id: 3,
          title: "JavaScript",
          rating: 3.5
        },
        {
          id: 4,
          title: "Powershell",
          rating: 2
        },
        {
          id: 5,
          title: "test",
          rating: 2
        }
      ]
    };
  }
};
</script>
