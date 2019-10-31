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
          width="250"
          height="250"
        ></b-img>
        <div class="p-5 w-75">
          <p class="text-left">
            はじめまして。1988年生まれのエンジニアのk00j（こーじ）です。
            新卒から今まで、大手SIerにて様々な基幹システムの構築に携わってきました。
            直近2年くらいは、自社開発のMDMパッケージやSaaS型PIMサービスの開発をしています。
            基本的にはサーバサイドの開発ですが、フロントエンド開発をしたり、ミドルウェアや
            アプリケーション基盤といった領域の仕事も経験しています。
            一番得意な言語はJavaです。最近はPHPのLaravelを用いた開発をしています。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>
