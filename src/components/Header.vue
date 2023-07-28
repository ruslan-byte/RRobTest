<template>
	<header class="header">
		<h2 class="header__title">Вам подходит 375 вариантов</h2>
		<el-row :gutter="20">
			<el-col :sm="12"
				class="header__select"
			>
				<label>
					<p>Выбрать ЖК</p>
					<el-select
						v-model="selectExample.value"
						placeholder="Select"
						size="large"
						:suffixIcon="selectExample.arrow"
					>
						<el-option
							v-for="item in selectExample.options"
							:key="item.value"
							:label="item.label"
							:value="item.value"
						/>
					</el-select>
				</label>
			</el-col>
			<el-col 
				class="header__select header__select--desktop"
				:sm="12"
			>
				<label>
					<p>Выбрать корпус</p>
					<el-select
						v-model="selectExample.value"
						placeholder="Select"
						size="large"
						:suffixIcon="selectExample.arrow"
					>
						<el-option
							v-for="item in selectExample.options"
							:key="item.value"
							:label="item.label"
							:value="item.value"
						/>
					</el-select>
				</label>
			</el-col>
		</el-row>
		<el-row :gutter="20">
			<el-col :sm="8">
				<p>Комнатность</p>
				<el-radio-group v-model="radioData" size="large">
					<el-radio-button label="Ст"  />
					<el-radio-button label="1" />
					<el-radio-button label="2" />
					<el-radio-button label="3+" />
				</el-radio-group>
			</el-col>
			<el-col :sm="8">
				<label>
					<p>Площадь, м2 </p>
					<range-slider :range="[17, 162]"/>
				</label>
			</el-col>
			<el-col :sm="8">
				<label>
					<p>Стоимость, млн ₽ </p>
					<range-slider :range="[25, 245]" isFloat/>
				</label>
			</el-col>
			<el-col class="header__select header__select--mobile">
				<label>
					<p>Выбрать корпус</p>
					<el-select
						v-model="selectExample.value"
						placeholder="Select"
						size="large"
						:suffixIcon="selectExample.arrow"
					>
						<el-option
							v-for="item in selectExample.options"
							:key="item.value"
							:label="item.label"
							:value="item.value"
						/>
					</el-select>
				</label>
			</el-col>
		</el-row>
		<el-row  justify="space-between" align="middle">
			<el-col span="12">
				<toggle-sort-params />
			</el-col>
			<el-col span="12">
				<toggle-card-type />
			</el-col>
		</el-row>
	</header>
</template>
<script>
	import arrowIcon from "@/components/icons/arrow.svg";
	import RangeSlider from "@/components/RangeSlider.vue";
	import toggleSortParams from "@/components/toggleSortParams.vue";
	import toggleCardType from "@/components/toggleCardType.vue";
	export default {
		components: {
			'range-slider': RangeSlider,
			'toggle-sort-params': toggleSortParams,
			'toggle-card-type': toggleCardType
		},
		data(){
			return {
				selectExample: {
					arrow: arrowIcon,
					value: "all",
					options: [
						{
							value: 'all',
							label: 'Любой',
						},
						{
							value: 'Option2',
							label: 'Option2',
						},
						{
							value: 'Option3',
							label: 'Option3',
						},
						{
							value: 'Option4',
							label: 'Option4',
						},
						{
							value: 'Option5',
							label: 'Option5',
						},
					]
				},
				radioData: '1',
			}

		}
	}
</script>

<style lang="scss">
	.header
	{
		border-top: 1px solid $default-border-color;
		padding-top: 32px;
		h2
		{
			margin-bottom: 60px;
		}
		.el-col
		{
			margin-bottom: 24px;
		}
		&__select--desktop
		{
			display: none;
		}
	}
	@media (min-width: $tablet)
	{
		.header
		{
			padding-top: 40px;
			h2{margin-bottom: 80px;}
			.el-col {margin-bottom: unset; }
			.el-row {margin-bottom: 24px;}
			.el-row:nth-of-type(2) {margin-bottom: 30px;}
			.header__select .el-select{width: 100%;}
			.header__select--desktop{display: block;}
			.header__select--mobile{display: none;}
		}
	}
</style>