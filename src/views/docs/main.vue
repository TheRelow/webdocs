<template>
	<div class="about">
    <nav class="breadcrumbs breadcrumbs_docs">
      <div class="nav-wrapper">
        <div class="col s12">
          <router-link to="/" class="breadcrumb">home</router-link>
          <router-link to="/docs" class="breadcrumb">docs</router-link>
        </div>
      </div>
    </nav>
    <Loader v-if="loading"/>
    <div class="row" v-else>
      <docs-card v-for="(item, index) in docs" :key="item.name" :value="{item, index}"/>
    </div>
    <a href="javascript:;" @click="logStateDocs">Вывести в консоль стейт доков</a>
	</div>
</template>

<script>
import DocsCard from "@/components/docsCard";

export default {
  name: 'Main',
  components: {DocsCard},
  data: () =>  ({
    loading: true,
    deleted: false
  }),
  methods: {
    logStateDocs() {
      console.log(this.docs)
    }
  },
  computed: {
    docs() {
      return this.$store.getters.docs
    }
  },
  async created() {
    if ( !Object.keys(this.$store.getters.docs).length ) {
      await this.$store.dispatch('fetchDocs')
    }
    this.loading = false
  }
}
</script>