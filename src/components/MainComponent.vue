<template>
	<div>
		<header-component />
		<router-view></router-view>
		<FooterComponent /> 
	</div>
</template>
<script>
import HeaderComponent from './HeaderrComponent.vue'
import FooterComponent from './FooterComponent.vue'
export default {
	components: {
		HeaderComponent , 
		FooterComponent
	}
}
</script>