<template>
	<div class="toggle-sort-params">
		<p>Сортировать:</p>
		<button
			class="toggle-sort-params__button"
			:class="{ 'toggle-sort-params__button--active': isPriceTop }"
			@click="toggleSortPrice"
		>
			по цене
			<arrow-icon/>
		</button>
		<button
			class="toggle-sort-params__button"
			:class="{ 'toggle-sort-params__button--active': isAreaTop }"
			@click="toggleSortSpace"
		>
			по площади
			<arrow-icon/>
		</button>
	</div>
</template>
<script>
	import arrowIcon from '@/components/icons/arrow.svg'	
	export default {
		components:{'arrow-icon': arrowIcon},
		methods:
		{
			toggleSortPrice()
			{
				this.$store.commit('filters/changeFilterSort', {sortName: 'isPriceTop', newValue: !this.isPriceTop })
			},
			toggleSortSpace()
			{
				this.$store.commit('filters/changeFilterSort', {sortName: 'isAreaTop', newValue: !this.isAreaTop })
			},
			
		},
		computed:
		{
			isPriceTop()
			{
				return this.$store.state.filters.sort.isPriceTop;
			},
			isAreaTop()
			{
				return this.$store.state.filters.sort.isAreaTop;
			}
		}
	}
</script>

<style lang="scss">
.toggle-sort-params
{
	font-weight: 300;
	display: flex;
	align-items:center;
	gap:13px;
	&__button
	{
		font-size: 14px;
		color:$gray;
		svg
		{
			margin-left: 1px;
			margin-right: 8px;
			transition: var(--el-transition-all);
		}
		&--active svg
		{
			transform: rotate(180deg);
		}
	}
	p
	{
		font-size: 14px;
		margin: 0;
	}
}
@media (min-width: $tablet)
{
	.toggle-sort-params
	{

		&__button
		{
			font-size: 16px;
			svg
			{
				margin-left: 3px;
				margin-right: 5px;
			}
		}
		p {font-size: 16px;}
	}
}
@media (min-width: $desktop)
{
	.toggle-sort-params{gap:15px}
}
</style>