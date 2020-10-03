<template>
	<div id="main-layer" class="main-layer">
		<div>
			<header-area/>
			<content-area/>
		</div>
<!--		<footer-area/>-->
	</div>
</template>

<script>
// @ is an alias to /src
import HeaderArea from '@/components/header-area.vue'
import ContentArea from '@/components/content-area.vue'
// import FooterArea from '@/components/footer-area.vue'

export default {
  name: 'mainLayer',
	components: {
		HeaderArea,
		ContentArea,
		// FooterArea
	}
}
</script>