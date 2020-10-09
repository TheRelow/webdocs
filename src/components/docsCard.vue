<template>
  <div class="col s12 m6" ref="card" v-if="!deleted">
    <div class="card blue-grey darken-1">
      <div class="card-content white-text">
        <span class="card-title">{{value.item.name}}</span>
        <p>{{value.item.preview}}</p>
      </div>
      <div class="card-action white-text">
        <router-link :to="'/docs/' + value.index">Open</router-link>
        <a href="javascript:;" @click="openEdit">Edit</a>
      </div>
      <div class="card-controls">
        <div class="card-controls__item card-controls__item_red" @click="deleteDoc">
          <i class="material-icons">delete</i>Удалить
        </div>
        <div class="card-controls__item card-controls__item_blue">
          <i class="material-icons">content_copy</i>Копировать
        </div>
        <div class="card-controls__item card-controls__item_blue">
          <i class="material-icons">clear_all</i>Переместить
        </div>
      </div>
      <div class="card-controls card-controls_bottom">
        <a class="waves-effect waves-light btn"><i class="material-icons right">save</i>Сохранить</a>
      </div>
    </div>
    <div class="editing-bg" @click="closeEdit"></div>
  </div>
</template>

<script>
export default {
  name: "docsCard",
  props: ['value'],
  data: () =>  ({
    deleted: false
  }),
  methods: {
    openEdit() {
      this.$refs.card.classList.toggle('editing')
    },
    closeEdit() {
      this.$refs.card.classList.remove('editing')
    },
    async deleteDoc() {
      const p = this.value.index
      try {
        await this.$store.dispatch('deleteDoc', p)
        this.deleted = true
      } catch (e) {
        console.log(e)
        this.$errorMsg(e.code)
      }
    }
  }
}
</script>

<style>

</style>