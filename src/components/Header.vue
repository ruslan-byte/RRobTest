<template>
	<header class="header">
		<h2 class="header__title">Вам подходит 375 вариантов</h2>
		<el-row>
			<el-col>
				<label>
					<p>Выбрать жк</p>
					<el-select
					class="select"
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
			<el-col>
				<label>
					<p>Комнатность</p>
					<el-radio-group v-model="radioData" size="large">
						<el-radio-button label="Ст"  />
						<el-radio-button label="1" />
						<el-radio-button label="2" />
						<el-radio-button label="3+" />
					</el-radio-group>
				</label>
			</el-col>
			<el-col>
				<label>
					<p>Площадь, м2 </p>
					<range-slider :range="[17, 162]"/>
				</label>
			</el-col>
			<el-col>
				<label>
					<p>Стоимость, млн ₽ </p>
					<range-slider :range="[17, 162]" isFloat/>
				</label>
			</el-col>
		</el-row>
	</header>
</template>
<script>
	import arrowIcon from "@/components/icons/arrow.svg";
	import RangeSlider from "@/components/RangeSlider.vue";
	export default {
		components: {'range-slider': RangeSlider},
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

<style>

</style>