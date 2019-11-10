<template>
  <div class="portfolio">
    <div class="container pt-5 pb-5">
      <div class="row mb-4 d-flex justify-content-center">
        <p class="border-bottom inline-block text-nowrap h2">
          Portfolio
        </p>
      </div>
      <div class="row justify-content-center">
        <b-card
          :title="card.title"
          img-alt="Image"
          img-top
          tag="article"
          class="m-2 col-md-5 col-12"
          v-for="card in cards"
          v-bind:key="card.id"
        >
          <b-card-text class="text-left">
            {{ card.text }}
          </b-card-text>
          <a v-if="card.git != ''" :href="card.git" target="_blank">github</a
          ><br />
          <label>{{ card.url }}</label>
          <div class="tag">
            <b-badge
              pill
              variant="info"
              class="m-1 tag-badge"
              v-for="tag in card.tags"
              v-bind:key="tag"
            >
              {{ tag }}
            </b-badge>
          </div>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  data: function() {
    return {
      cards: [
        {
          id: 1,
          title: "Portfolioサイト",
          text: "自身の経歴や成果物をまとめるために作成したサイトです。",
          url: "https://mrtkj.github.io/portfolio/",
          tags: ["HTML", "JavaScript", "CSS", "Vue.js", "Bootstrap-Vue"],
          git: "https://github.com/mrtkj/portfolio"
        },
        {
          id: 2,
          title: "SaaS型PIMサービス",
          text:
            "商品情報管理サービス。フロント画面〜サーバサイド処理、バッチ処理などを担当。",
          url: "https://jsol.plapi-product.com/",
          tags: [
            "HTML",
            "JavaScript",
            "CSS",
            "PHP",
            "C#",
            "Powershell",
            "Laravel",
            "Azure App Service",
            "Azure Functions",
            "Azure Data Factory"
          ],
          git: ""
        },
        {
          id: 3,
          title: "MDMパッケージ",
          text:
            "Master Data Management Systemのパッケージ。主に新機能の企画・開発に従事。",
          url: "https://www.jsol.co.jp/solution/mdm.html",
          tags: [
            "HTML",
            "JavaScript",
            "CSS",
            "Java",
            "Vue.js",
            "Resin",
            "SQL Server",
            "Intra-mart"
          ],
          git: ""
        }
      ]
    };
  }
};
</script>

<style>
.badge-info {
  background-color: #5bc0de !important;
}
</style>
