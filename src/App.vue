<template>
	<div id="app" class="page">
		<component :is="layout">

    </component>
	</div>
</template>

<style lang="scss">
@import "~materialize-css/sass/materialize.scss";
@import "@/assets/styles.sass";

#nav {
	a {
		font-weight: bold;
		color: #2c3e50;

	&.router-link-exact-active {
		color: #42b983;
	}
	}
}
</style>

<script>
// @ is an alias to /src
import mainLayout from '@/layouts/mainLayout'
import emptyLayout from '@/layouts/emptyLayout'


export default {
	name: 'Home',
  computed: {
    layout() {
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  components: {
    emptyLayout,
    mainLayout
  }
}
</script>