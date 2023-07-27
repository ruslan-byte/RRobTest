<template>
	<div class="range-slider">
		<el-input
			class="range-slider__input"
			:value="value[0]" 
		/>
		<el-input
			class="range-slider__input"
			:value="value[1]" 
		/>
		<el-slider
			class="range-slider__slider"
			:show-tooltip="false"
			v-model="value"
			range
			:max="maxValue"
			:min="minValue"
		/>
	</div>
</template>
<script>
	export default {
		props: {
			range: {
				type: Array,
				default: [10, 100]
			},
		},
		data() {
			return {
				maxValue: this.range[1],
				minValue: this.range[0],
				value: null
			}
		},
		created()
		{
			this.value = this.range;
		}
	}
</script>

<style lang="scss">
@use '../assets/scss/variables.scss' as *;

.range-slider
{
	display: flex;
	position: relative;
	border: 1px solid $default-border-color;
	border-radius: 4px;
	height: 44px;
	width: 100%;
}
.range-slider__input:first-of-type::after
{
	content:"";
	position: absolute;
	height: 30px;
	width: 1px;
	background: $default-border-color;
	left:calc(100% - 1px);
	top: calc(50% - 15px);
	z-index: 1;
}
.range-slider__input .el-input__wrapper
{
	box-shadow: none;
	border:none;
	border-radius: 4px;
    pointer-events: none;
}
.range-slider__input .el-input__inner
{
	text-align: center;
	user-select: none;
}
.range-slider__slider
{
	position: absolute;
	bottom: -16px;
	left: 12px;
	width: calc(100% - 24px);
	.el-slider__button
	{
		border-width: 1px;
	}
}

</style>