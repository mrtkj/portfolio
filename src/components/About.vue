<template>
  <div class="about">
    <div class="container pt-5 pb-5">
      <div class="row mb-2  d-flex justify-content-center">
        <p class="border-bottom inline-block text-nowrap h2">
          About me
        </p>
      </div>
      <div class="row d-flex justify-content-center">
        <b-img
          rounded="circle"
          alt="Circle image"
          src="../assets/vis01.jpg"
          width="180"
          height="180"
          class="ml-2 mr-2"
        ></b-img>
        <div class="m-5">
          <p class="text-left text-nowrap h4 inline-block">村田 浩司</p>
          <p class="text-left text-nowrap inline-block">
            Koji Murata<br />
            Engineer
          </p>
        </div>
      </div>

      <div class="row mb-5 pt-3 d-flex justify-content-center">
        <p class="text-left w-75">
          経歴概要
        </p>
        <p class="text-left w-75">
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
          title: "家具メーカー向けERP導入プロジェクト",
          date: "2014/01～2015/09",
          body:
            "ERPパッケージのフロント処理開発を担当。このプロジェクトで要件定義～本番リリースまでを経験。また、アプリケーション基盤領域として、テーブル設計やCI環境構築、運営を担当。",
          tags: ["Java", "SQL Server", "Jenkins", "Powershell"]
        },
        {
          id: 3,
          title: "折込広告業向け基幹システム構築",
          date: "2013/10～2014/12",
          body:
            "基幹システム内で利用するマスタデータを管理する画面およびバックエンド処理を設計・開発。その際、10名程度の開発チームのリーダを担当",
          tags: ["HTML", "JavaScript", "Java", "OracleDB"]
        },
        {
          id: 4,
          title: "折込広告業向け基幹システム構築",
          date: "2013/10～2014/12",
          body:
            "基幹システム内で利用するマスタデータを管理する画面およびバックエンド処理を設計・開発。その際、10名程度の開発チームのリーダを担当",
          tags: ["HTML", "JavaScript", "Java", "OracleDB"]
        }
      ]
    };
  }
};
</script>
