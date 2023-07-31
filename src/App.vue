<template>
	<div class="app container">
		<Header />
		<main>
			<el-row :gutter="30">
				<el-col v-for="index of 4">
					<Card></Card>
				</el-col>
			</el-row>
		</main>
	</div>
</template>
<script>
	import Header from '@/components/Header.vue';
	import Card from '@/components/Card.vue';
	export default {
	 components: ['Header', 'Card']
	}
</script>

<style lang="scss">
	.app {padding-top: 60px; }
	@media (min-width: $tablet)
	{
		.app {padding-top: 80px; }
	}
	@media (min-width: $desktop)
	{
		.app {padding-top: 100px; }
	}
</style>