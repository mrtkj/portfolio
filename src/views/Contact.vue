<template>
  <div class="contact">
    <div class="container pt-5 pb-5">
      <div class="row mb-5  d-flex justify-content-center">
        <p class="border-bottom inline-block text-nowrap h2">
          Contact
        </p>
      </div>
      <b-form
        name="contactForm"
        @submit="onSubmit"
        @reset="onReset"
        v-if="show"
      >
        <div class="row justify-content-center">
          <div class="col-md-3 col-12">
            <b-form-group
              id="input-group-1"
              label="名前:"
              :label-for="'id' + formData.name"
            >
              <b-form-input
                :id="'id' + formData.name"
                :name="'entry.' + formData.name"
                v-model="form.name"
                required
                placeholder="名前を入力してください"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="メールアドレス:"
              :label-for="'id' + formData.email"
            >
              <b-form-input
                :id="'id' + formData.email"
                :name="'entry.' + formData.email"
                v-model="form.email"
                type="email"
                required
                placeholder="メールアドレスを入力してください"
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="col-md-7 col-12">
            <b-form-group
              id="input-group-3"
              label="メッセージ:"
              :label-for="'id' + formData.message"
            >
              <b-form-textarea
                :id="'id' + formData.message"
                :name="'entry.' + formData.message"
                v-model="form.message"
                rows="5"
                max-rows="5"
                required
                placeholder="メッセージを入力してください"
              ></b-form-textarea>
            </b-form-group>
          </div>
        </div>
        <div class="row justify-content-center mb-4">
          <b-button
            class="m-2"
            type="submit"
            variant="outline-primary"
            :disabled="isDisabled"
            >送信</b-button
          >
          <b-button
            class="m-2"
            type="reset"
            variant="outline-danger"
            :disabled="isDisabled"
            >クリア</b-button
          >
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data: function() {
    return {
      form: {
        email: "",
        name: "",
        message: ""
      },
      formData: {
        doc:
          "https://docs.google.com/forms/d/e/1FAIpQLSc6fODgYrU42eiefkfPgdUuqWPWWg2oJ_Z44NCsDXon07F7mA/formResponse",
        name: "1682519223",
        email: "2005393521",
        message: "1417765426"
      },
      isDisabled: false,
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      let me = this;
      evt.preventDefault();

      // 二重送信できないように、ボタンを非活性にする
      me.isDisabled = true;

      fetch(this.formData.doc, {
        method: "POST",
        body: new FormData(document.contactForm),
        mode: "no-cors"
      }).then(response => {
        // 送信が完了したタイミングでフォームをクリアする
        me.onReset(evt);

        me.$bvModal.msgBoxOk("メッセージが送信されました。", {
          title: "情報",
          size: "sm",
          buttonSize: "sm",
          okVariant: "outline-success",
          headerClass: "p-2 border-bottom-0",
          footerClass: "p-2 border-top-0",
          centered: true
        });

        // ボタンを活性化する
        me.isDisabled = false;
      });
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.message = "";
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

<style>
.form-group > label {
  float: left;
}
</style>
