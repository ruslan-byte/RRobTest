<template>
	<el-radio-group class="toggle-cart-type" v-model="isCartTypeList" size="large">
		<el-radio-button :label="false">
			<card-icon/>
		</el-radio-button>
		<el-radio-button :label="true">
			<list-icon/>
		</el-radio-button>
	</el-radio-group>
</template>
<script>
import listIcon from '@/components/icons/list.svg'
import cardIcon from '@/components/icons/cards.svg'
export default {
	components:{'list-icon': listIcon, 'card-icon': cardIcon},
	data: () => ({ isCartTypeList: false }),
}
</script>

<style lang="scss">
.toggle-cart-type
{
	gap: 6px;
	svg 
	{
		transform: translate(-1px,-1px);
		transition: var(--el-transition-all);
		stroke:$black;
	}
	.is-active svg {stroke:$white; }
	.el-radio-button.el-radio-button--large
	{
		width: 40px;
		height: 40px;
	}
}
</style>