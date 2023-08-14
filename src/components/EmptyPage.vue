<template>
	<h5 class="empty-page">
		По вашему запросу ничего не найдено
	</h5>
</template>
<script>
	export default {
	}
</script>

<style lang="scss">
.empty-page
{
	font-size: 16px;
	font-weight: 300;
	text-align: center;
	margin: 80px auto;
}
	@media (min-width:  $tablet)
	{
		.empty-page { font-size: 20px; margin: 180px auto; }
	}
	@media (min-width:  $desktop)
	{
		.empty-page{margin: 200px auto;}
	}
</style>