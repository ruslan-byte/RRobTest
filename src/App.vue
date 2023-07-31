<template>
	<div class="app container">
		<Header class="app__header"/>
		<main class="app__main">
			<el-row class="app__row" :gutter="30">
				<el-col
					class="app__col"
					v-for="index of 4"
					:span="24"
					:sm="12"
					:md="8"
					:lg="6"
				>
					<Card></Card>
				</el-col>
			</el-row>
		</main>
		<el-pagination class="app__pagination" layout="pager" :total="30" />
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
	.app
	{
		padding-top: 60px;
		padding-bottom: 60px; 
		&__col 
		{
			margin-bottom: 30px;
			&:last-of-type{margin: 0; }
		}
		&__header{margin-bottom: 40px;}
		&__main{margin-bottom: 38px;}
	}
	.app__pagination
	{
		margin: 0 auto;
		width: max-content;
	} 
	@media (min-width: $tablet)
	{
		.app 
		{
			padding-top: 80px;
			padding-bottom: 80px; 
			&__header
			{
				margin-bottom: 38px;
			}
			&__main{margin-bottom: 45px;}
			&__col:nth-last-of-type(2){margin: 0;}

		}
	}
	@media (min-width: $desktop)
	{ 
		.app 
		{
			padding-top: 100px;
			padding-bottom: 100px;           
			&__header{margin-bottom: 40px;}
			&__col:nth-last-of-type(3){margin: 0;}
		}
	}
	@media (min-width: $widescreen)
	{
		.app
		{
			padding-top: 120px;
			padding-bottom: 146px;
			&__col{margin: 0;}
		}
	}
</style>