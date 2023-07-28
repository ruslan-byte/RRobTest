<template>
	<el-radio-group class="toggleCartType" v-model="isCartTypeList" size="large">
		<el-radio-button :label="false">
			<cartIcon/>
		</el-radio-button>
		<el-radio-button :label="true">
			<listIcon/>
		</el-radio-button>
	</el-radio-group>
</template>
<script>
import listIcon from './icons/list.svg'
import cartIcon from './icons/cards.svg'
export default {
	components:{listIcon, cartIcon},
	data()
	{
		return {
			isCartTypeList: false,
		}
	}
}
</script>

<style lang="scss">
@use "~/assets/scss/variables.scss" as *; 
.toggleCartType.el-radio-group
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