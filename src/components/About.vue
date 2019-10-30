<template>
  <div class="about">
    <div class="container pt-5 pb-5">
      <div class="row mb-2  d-flex justify-content-center">
        <p class="border-bottom w-25 h2">
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
        <div class="p-5">
          <p class="text-left">
            二人の子供を持つ父親エンジニア<br />
            基本的にはサーバサイドの開発をやっています。
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
