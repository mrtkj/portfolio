<template>
  <div class="skills">
    <div class="container pt-5 pb-5">
      <div class="row mb-2  d-flex justify-content-center">
        <p class="border-bottom inline-block text-nowrap h2">
          Skills
        </p>
        <div class="skills-container w-100">
          <div class="h6 mt-2">開発言語</div>
          <skill-cards :skills="language"></skill-cards>
          <div class="h6 mt-5">フレームワーク</div>
          <skill-cards :skills="framework"></skill-cards>
          <div class="h6 mt-5">開発環境</div>
          <skill-cards :skills="environment"></skill-cards>
          <div class="h6 mt-5">その他</div>
          <skill-cards :skills="other"></skill-cards>
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
          rating: 3
        },
        {
          id: 3,
          title: "JavaScript",
          rating: 3.5
        },
        {
          id: 4,
          title: "SQL",
          rating: 4
        },
        {
          id: 5,
          title: "Powershell",
          rating: 2
        },
        {
          id: 6,
          title: "C#",
          rating: 1
        },
        {
          id: 7,
          title: "HTML",
          rating: 3
        },
        {
          id: 8,
          title: "CSS",
          rating: 2.5
        }
      ],
      framework: [
        {
          id: 1,
          title: "SAStruts",
          rating: 3.5
        },
        {
          id: 2,
          title: "Spring",
          rating: 3
        },
        {
          id: 3,
          title: "Laravel",
          rating: 3
        },
        {
          id: 4,
          title: "Vue.js",
          rating: 2.5
        },
        {
          id: 5,
          title: "Bootstrap",
          rating: 1.5
        },
        {
          id: 6,
          title: "Electron",
          rating: 1
        }
      ],
      environment: [
        {
          id: 1,
          title: "Oracle DB",
          rating: 2
        },
        {
          id: 2,
          title: "SQL Server",
          rating: 4
        },
        {
          id: 3,
          title: "Resin",
          rating: 3
        },
        {
          id: 4,
          title: "Apache",
          rating: 1
        },
        {
          id: 5,
          title: "Redis",
          rating: 1
        }
      ],
      other: [
        {
          id: 1,
          title: "JP1",
          rating: 3
        },
        {
          id: 2,
          title: "Jenkins",
          rating: 2
        },
        {
          id: 3,
          title: "Intra-mart",
          rating: 4
        }
      ]
    };
  }
};
</script>
