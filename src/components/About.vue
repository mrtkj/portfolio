<template>
  <div class="about">
    <div class="container pt-5 pb-5">
      <div class="row mb-2  d-flex justify-content-center">
        <p class="border-bottom inline-block text-nowrap h2">
          About me
        </p>
      </div>
      <div class="row d-flex justify-content-center align-items-center">
        <b-img
          rounded="circle"
          alt="Circle image"
          src="../assets/vis01.jpg"
          width="120"
          height="120"
          class="m-4"
        ></b-img>
        <div class="m-4">
          <p class="text-left text-nowrap h4 inline-block">村田 浩司</p>
          <p class="text-left text-nowrap inline-block mb-0">
            Koji Murata<br />
            Engineer
          </p>
        </div>
      </div>

      <div class="row mb-5 pt-3 d-flex justify-content-center">
        <p class="text-left w-60">
          経歴概要
        </p>
        <p class="text-left w-60">
          1988年生まれのエンジニアの村田 浩司です。
          新卒から現在に至るまで、大手SIerにて様々な基幹システムの構築に携わってきました。
          直近2年くらいは、自社開発のMDMパッケージやSaaS型PIMサービスの開発をしています。
          基本的にはサーバサイドの開発ですが、フロントエンド開発をしたり、ミドルウェアや
          アプリケーション基盤といった領域の仕事も経験しています。
          一番得意な言語はJavaです。最近はPHPのLaravelを用いた開発をしています。
        </p>
      </div>
      <div class="row mb-2 pt-5 d-flex justify-content-center">
        <p class="border-bottom inline-block text-nowrap h2">Resume.</p>
      </div>
      <timelines :timelines="lines"></timelines>
    </div>
  </div>
</template>

<script>
import Timelines from "@/components/molecules/Timelines.vue";

export default {
  name: "About",
  components: {
    Timelines
  },
  data: function() {
    return {
      value: 70,
      max: 100,
      lines: [
        {
          id: 1,
          title: "クラウド型商品管理サービス開発",
          date: "2019/03～現在",
          body:
            "自社会社の商品管理サービスの開発を担当。今までのオンプレミス型の開発ではなく、Azureのサーバーレスアーキテクチャを利用したクラウドネイティブなアプリ構成。Azureのどのサービスを利用かの選定も実施。",
          tags: [
            "HTML",
            "JavaScript",
            "JQuery",
            "CSS",
            "PHP",
            "Laravel",
            "C#",
            "Powershell",
            "SQL Server",
            "Azure App Service",
            "Azure Functions",
            "Azure Data Factory"
          ]
        },
        {
          id: 2,
          title: "自社パッケージ製品の企画、開発、導入支援",
          date: "2018/03～2019/09",
          body:
            "マスタを統合管理するための自社パッケージの新機能の企画、開発を担当。また、パッケージを導入するお客様・ビジネスパートナー様の導入コンサルタント業務に従事。製品導入前のプリセールス業務にも携わる。",
          tags: ["Java", "vue.js", "intra-mart", "SAStruts", "SQL Server"]
        },
        {
          id: 3,
          title: "マスタデータ管理システム導入プロジェクト",
          date: "2017/10～2018/3",
          body:
            "自社パッケージであるマスタデータ管理システムの導入プロジェクトに参画。開発チームリーダとして、基本設計〜本番稼働まで担当。基本設計～本番稼働まで従事。開発者としても、データ連携のためのバッチ処理の設計および運用設計、各システムとのインターフェース全般を担当。",
          tags: ["Java", "intra-mart", "SAStruts", "SQL Server", "JP1"]
        },
        {
          id: 4,
          title: "製造業向けERPフロントシステム導入プロジェクト",
          date: "2014/1～2015/9",
          body:
            "会計、販売、物流領域のERPパッケージのフロントシステム構築プロジェクトに参画。要件定義〜移行、本番までのすべての工程に携わる。また、アプリケーション基盤、データベース管理者として、テーブル設計やCI運用（自動ビルド、自動テスト）の構築、運用を担当。",
          tags: ["Java", "Seasar2", "Powershell", "OracleDB", "Jenkins"]
        }
      ]
    };
  }
};
</script>

<style>
.w-60 {
  width: 60%;
}
</style>
