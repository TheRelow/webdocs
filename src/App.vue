<template>
	<div id="app" class="page">
		<popup/>
		<sides/>
		<mainLayer/>
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
import Popup from '@/components/popup.vue'
import Sides from '@/components/sides.vue'
import mainLayer from '@/components/main-layer.vue'

export default {
	name: 'Home',
	components: {
		Popup,
		Sides,
    mainLayer
	}
}
</script>