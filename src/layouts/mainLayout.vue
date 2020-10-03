<template>
  <div class="main-layout">
    <popup/>
    <sides/>
    <mainLayer/>
  </div>
</template>

<script>
import Popup from '@/components/popup.vue'
import Sides from '@/components/sides.vue'
import mainLayer from '@/components/main-layer.vue'

export default {
  name: "mainLayout",
  components: {
    Popup,
    Sides,
    mainLayer
  },
  async mounted() {
    if ( !Object.keys(this.$store.getters.info).length ) {
      await this.$store.dispatch('fetchInfo')
    }
  }
}
</script>

<style>

</style>