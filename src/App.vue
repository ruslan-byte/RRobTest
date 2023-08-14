<template>
	<div class="app container">
		<Header class="app__header"/>
		<main class="app__main">
			<el-row class="app__row" :gutter="30">
				<el-col
					class="app__col"
					v-for="(card, index) of cardList"
					:key="`${index}-${card.id}`"
					:sm="(isCardHorizontal)? 24 : 12"
					:md="(isCardHorizontal)? 24 : 8"
					:lg="(isCardHorizontal)? 24 : 6"
				>
					<Card :cardData="card"/>
				</el-col>
			</el-row>
		</main>
		<el-pagination
			@current-change="activePageChange"
			class="app__pagination"
			layout="pager"
			:total="maxPage*10"
		/>
		{{activePage}}
		<el-dialog
			:modelValue="isPopupOpen"
			:show-close="false"
			@close="closePopup"
			:modal-class="(isPopupSuccess)? success : ''"
		>
			<template #header="{close}">
				<button
					class="g-dialog-close-button"
					@click="close" 
				>
					<close-icon />
				</button>		
			</template>
			<popup-body v-if="!isPopupSuccess" />
			<popup-success @close="closePopup()" v-else/>
			<template #footer v-if="!isPopupSuccess">
				<popup-footer />
			</template>
		</el-dialog>
	</div>
</template>
<script>
	import closeIcon from "@/components/icons/closeIcon.svg"
	import Header from '@/components/Header.vue';
	import PopupBody from '@/components/PopupBody.vue';
	import Card from '@/components/Card.vue';
	import PopupFooter from '@/components/PopupFooter.vue';
	import PopupSuccess from '@/components/PopupSuccess.vue';
	import { mapState } from 'vuex'
	export default {
		components: {
			Header,
			Card,
			'close-icon': closeIcon,
			'popup-body': PopupBody,
			'popup-footer': PopupFooter,
			'popup-success': PopupSuccess,
		},
		computed:
		{
			cardList(){
				return this.$store.getters.getPaginationFilterCardList;
			},
			maxPage()
			{
				return this.$store.getters.getMaxPage;
			},
			...mapState({
					isPopupOpen: state => state.popup.isOpen,
					isPopupSuccess: state => state.popup.isSuccess,
					isCardHorizontal: state => state.card.isHorizontal,
					activePage: state => state.page,
			}),
		},
		methods:
		{
			closePopup()
			{
				this.$store.commit('closePopup');
			},
			activePageChange(newValue)
			{
				this.$store.commit('pageChange', newValue)
			}
		}
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
			&__col:nth-last-of-type(4){margin: 0;}
		}
	}
</style>