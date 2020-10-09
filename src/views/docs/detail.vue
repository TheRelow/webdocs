<template>
  <div class="about">
    <nav class="breadcrumbs breadcrumbs_docs">
      <div class="nav-wrapper">
        <div class="col s12">
          <router-link to="/" class="breadcrumb">home</router-link>
          <router-link to="/docs" class="breadcrumb">docs</router-link>
          <router-link :to="'/docs/' + id" class="breadcrumb">{{id}}</router-link>
        </div>
      </div>
    </nav>
    <div>{{detail}}</div>
    <br>
    <input type="text" v-model="text">
    <button class="btn waves-effect waves-light auth-submit" @click="edit">Редактировать</button>
  </div>
</template>

<script>
export default {
  name: "detail",
  data: () =>  ({
    id: null,
    detail: null,
    text: ''
  }),
  async beforeCreate() {
    this.id = await this.$route.params.id
    await this.$store.dispatch('getDocDetail', this.id)
    this.detail = this.$store.getters.docsDetail[this.id].content
    this.text = this.detail
  },
  methods: {
    async edit() {
      this.detail = this.text
      await this.$store.dispatch('editDocDetail', {docKey: this.id, content: this.text})
      // this.detail = this.$store.getters.docsDetail[this.id]
    }
  }
}
</script>

<style>

</style>
