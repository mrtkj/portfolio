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
          title: "折込広告業向け基幹システム構築",
          date: "2013/10～2014/12",
          body:
            "基幹システム内で利用するマスタデータを管理する画面およびバックエンド処理を設計・開発。その際、10名程度の開発チームのリーダを担当",
          badge: "warning",
          isRight: false,
          tags: ["HTML", "JavaScript", "Java", "OracleDB"]
        },
        {
          id: 2,
          title: "家具メーカー向けERP導入プロジェクト",
          date: "2014/01～2015/09",
          body:
            "ERPパッケージのフロント処理開発を担当。このプロジェクトで要件定義～本番リリースまでを経験。また、アプリケーション基盤領域として、テーブル設計やCI環境構築、運営を担当。",
          badge: "warning",
          isRight: true,
          tags: ["Java", "SQL Server", "Jenkins", "Powershell"]
        }
      ]
    };
  }
};
</script>
