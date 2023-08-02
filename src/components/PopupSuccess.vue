<template>
	<div class="popup-success">
		<h2 class="popup-success__title">Заявка успешно отправлена</h2>
		<h5 class="popup-success__subtitle">Наш менеджер свяжется с вами для уточнения деталей</h5>
		<el-button
			class="popup-success__button"
			type="primary"
			size="large"
			round
			@click="close"
		>
			Вернуться в каталог
		</el-button>
	</div>
</template>
<script>
	export default {
		methods:
		{
			close()
			{
				this.$emit('close');
			}
		}
	}
</script>

<style lang="scss">
.popup-success
{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: $black;
	text-align: center;
	&__title { margin-bottom: 24px; }
	&__subtitle {margin-bottom: 40px;}
	&__button 
	{
		max-width: 360px; 
		width: 100%;
	}
}

</style>