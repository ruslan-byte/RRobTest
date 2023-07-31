<template>
	<header class="header">
		<h2 class="header__title">Вам подходит 375 вариантов</h2>
		<form @submit.prevent>
			<el-row :gutter="30">
				<el-col
					class="header__select"
					:md="4"
					:lg="5"
					:sm="12"
				>
					<label>
						<p>Выбрать ЖК</p>
						<el-select
							v-model="selectData.value"
							placeholder="Select"
							size="large"
							:suffixIcon="selectData.arrow"
						>
							<el-option
								v-for="(option, key) in selectData.options"
								:key="`${key}-${option.value}`"
								:label="option.label"
								:value="option.value"
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
							v-model="selectData.value"
							placeholder="Select"
							size="large"
							:suffixIcon="selectData.arrow"
						>
							<el-option
								v-for="(option, key) in selectData.options"
								:key="`${key}-${option.value}`"
								:label="option.label"
								:value="option.value"
							/>
						</el-select>
					</label>
				</el-col>
				<el-col
					:md="6"
					:lg="5"
					:sm="8"
				>
					<p>Комнатность</p>
					<el-radio-group v-model="radioData" size="large">
						<el-radio-button label="Ст"  />
						<el-radio-button label="1" />
						<el-radio-button label="2" />
						<el-radio-button label="3+" />
					</el-radio-group>
				</el-col>
				<el-col
					:md="4"
					:lg="4"
					:sm="8"
				>
					<label>
						<p>Площадь, м2 </p>
						<range-slider :range="[17, 162]"/>
					</label>
				</el-col>
				<el-col
					:md="6"
					:lg="5"
					:sm="8"
				>
					<label>
						<p>Стоимость, млн ₽ </p>
						<range-slider :range="[25, 245]" isFloat/>
					</label>
				</el-col>
				<el-col
					class="header__select header__select--mobile"
					:md="4"
					:lg="5"
				>
					<label>
						<p>Выбрать корпус</p>
						<el-select
							v-model="selectData.value"
							placeholder="Select"
							size="large"
							:suffixIcon="selectData.arrow"
						>
							<el-option
								v-for="(option, key) in selectData.options"
								:key="`${key}-${option.value}`"
								:label="option.label"
								:value="option.value"
							/>
						</el-select>
					</label>
			</el-col>
			</el-row>
			<el-row  class="header__toggles" justify="space-between" align="middle">
				<el-col :span="12" class="header__toggle">
					<toggle-sort-params />
				</el-col>
				<el-col :span="12" class="header__toggle">
					<toggle-card-type />
				</el-col>
			</el-row>
		</form>
	</header>
</template>
<script>
	import { markRaw } from 'vue';
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
		data: () => ({
			selectData: {
				arrow: markRaw(arrowIcon),
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
		})
	}
</script>

<style lang="scss">
	.header
	{
		border-top: 1px solid $default-border-color;
		padding-top: 32px;
		h2 {margin-bottom: 60px; }
		.el-col {margin-bottom: 24px; }
		.header__select--desktop {display: none; }
		.header__toggle
		{
			flex:unset;
			max-width: unset;
			margin: 0;
		}
		.header__toggles {gap: 24px; }
	}
	@media (min-width: $tablet)
	{
		.header
		{
			padding-top: 40px;
			h2{margin-bottom: 80px;}
			.el-row{margin-bottom: 6px;}
			.header__toggles{margin: 0;}
			.header__select .el-select{width: 100%;}
			.header__select--desktop{display: block;}
			.header__select--mobile{display: none;}
		}
	}
	@media (min-width: $desktop)
	{
		.header
		{
			padding-top: 40px;
			h2{margin-bottom: 86px;}
			.el-row{margin-bottom: 26px;}
			.header__toggles{margin: 0;}
			.header__select .el-select{width: 100%;}
			.header__select--desktop{display: none;}
			.header__select--mobile{display: block;}
		}
	}
</style>