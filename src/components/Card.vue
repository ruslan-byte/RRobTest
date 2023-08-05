 <template>
	<div @click="openPopup" class="card" :class="{'card--horizontal': isCardHorizontal}">
		<picture class="card__image">
			<img :src="cardData.layout" alt="card">
		</picture>
		<div class="card__section">
			<div class="card__data">
				<div class="card__titles-overlay">
					<div class="card__titles">
						<button> {{cardData.objectName}} </button>
						<h4>{{cardData.shortTitle}}</h4>
					</div>
					<ul class="g-list">
						<li>Литер {{cardData.lairNum}}</li>
						<li>Этаж {{cardData.floorNum}}</li>
						<li>Сдача {{cardData.deadline}}</li>
					</ul>
					<div class="card__prices" v-if="!isCardHorizontal" >
						<div>
							<span
								class="card__price"
								:class="{'card__price--new':cardData.oldPrice}"
							> {{cardData.price}} </span>
							<span class="card__price card__price--old"> {{cardData.oldPrice}} </span>
						</div>
						<span class="card__sale" v-if="cardData.salePercent">{{cardData.salePercent}}% </span>
					</div>
				</div>
				<el-scrollbar class="card__tags card__tags--mobile" @click.stop>
					<template
						v-for="(feature, id) in cardData.features"
						:key="`${feature}-${id}`"
					>
						<div class="card__tag" v-if="id < 2"> {{feature}}  </div>
						<el-tooltip
							effect="tag"
							v-else-if="tags.length - 1 == id"
							:content="hideTagsList"
							placement="right-start"
						>
							<div class="card__tag"> +{{ hideTagsCount }}  </div>
						</el-tooltip>
					</template>
				</el-scrollbar>
			</div>
			<div class="card__prices" v-if="isCardHorizontal">
				<span
					v-if="cardData.oldPrice"
					class="card__price card__price--old"
				>
					{{cardData.oldPrice}}
				</span>
				<span
					class="card__price"
					:class="{'card__price--new':cardData.oldPrice}"
				>
					{{cardData.price}}
				</span>
				<span class="card__sale" v-if="cardData.salePercent">{{cardData.salePercent}}% </span>
			</div>
			<div class="card__tags card__tags--desktop">
				<template v-for="(name, id) in tags">
					<div class="card__tag" v-if="id < 2"> {{name}}  </div>
					<el-tooltip
						effect="tag"
						v-else-if="tags.length - 1 == id"
						:content="hideTagsList"
						placement="right-start"
					>
						<div class="card__tag"> +{{ hideTagsCount }}  </div>
					</el-tooltip>
				</template>
			</div>
		</div>
		<el-tooltip content="Акция: Подарок" effect="card">
			<span class="card__event"><fire-icon/></span>
		</el-tooltip>
		<div class="card__buttons">
			<span class="card__button"><heard-icon/></span>
			<span class="card__button"><scales-icon/></span>
		</div>
	</div>
</template>
<script>
	import fire from "@/components/icons/fire.svg"
	import heard from "@/components/icons/heard.svg"
	import scales from "@/components/icons/scales.svg"
	export default {
		props: { cardData: Object },
		components: {
			'fire-icon': fire,
			'heard-icon': heard,
			'scales-icon': scales
		},
		data: () =>({
			tags: [ 'Отделка', 'Вид на горы', 'Лоджия', 'Рассрочка' ]
		}),
		computed:
		{
			hideTagsCount()
			{
				return this.tags.length - 2;
			},
			hideTagsList()
			{
				let hideTagsList = this.tags.reduce((tagList, item, index)=>{
					return (index>=2) ? tagList + item + '\r\n' : tagList
				},'');
				return hideTagsList;
			},
			isCardHorizontal()
			{
				return this.$store.state.card.isHorizontal;
			}
		},
		methods:
		{
			openPopup()
			{
				this.closeSuccessMessage();
				this.$store.commit('openPopup');
			},
			closeSuccessMessage()
			{
				this.$store.commit('setPopupSuccess', false)
			}
		}
	} 
</script>

<style lang="scss">
.card
{
	cursor: pointer;
	position: relative;
	background: $white;
	padding: 30px 20px 24px 20px;
	border: 1px solid #EAEAEA;
	&__image
	{
		display: block;
		height: 236px;
		width: 100%;
		margin-bottom: 28px;
		img
		{
			display: block;
			height: 100%;
			width: 100%;
			object-fit:contain;
		}
	}
	&__titles {
		text-align: left;
		margin-bottom: 12px;
		button
		{
			color: $blue;
			font-size: 14px;
			margin-bottom: 6px;
			&:hover {text-decoration: underline; }
		}
	}
	.g-list{margin-bottom: 16px;}
	&__prices
	{
		display: flex;
		justify-content: space-between;
		align-items:center;
		border-top: 1px solid $default-border-color;
		padding-top: 14px;
		margin-bottom: 20px;
	}
	&__price 
	{
		font-size: 18px;
		font-weight: 600;
		display: inline-block;
		&:last-of-type{margin-right: 10px;}
		&--new
		{
			color: $accent-color;
			margin-right: 8px;
		}
		&--old
		{
			text-decoration: line-through;
			font-size: 14px;
			font-weight: 400;
		}
	}
	&__sale
	{
		display: inline-block;
		background: $accent-color;
		padding: 4px 7px;
		border-radius: 30px;
		color: $white;
		text-align: center;
		font-size: 13px;
	}
	&__tags
	{
		text-wrap: nowrap;
		text-align: start;	
		&--desktop{display: none;}
	}
	&__tag
	{
		font-size: 12px;
		display: inline-block;
		border-radius: 30px;
		color: $blue-second;
		background: $blue-light;
		padding: 6px 10px;
		margin-right: 4px;
		&:last-of-type{margin-right: 0;}
	}
	&__event
	{
		position: absolute;
		left: 10px;
		top: 10px;
	}
	&__buttons
	{
		position: absolute;
		right: 23px;
		top: 11px;
	}
	&__button
	{
		margin-right: 7px;
		&:last-of-type{margin: 0;}
	}
	&--horizontal
	{
		display: flex;
		padding: 35px 20px 20px 10px;
		.g-list
		{
			display: block;
			padding-right: 10px; 
			li
			{
				display: inline-block;
				margin-right: 10px;
				color:#132A3E;
				font-size: 10px;
				&:last-of-type{margin: 0;}
				&:not(:first-child)::before {content:none }
			}
		}
		.card__prices
		{
			display: block;
			border: none;
			margin: 0;
		}
		.card__price
		{
			display: block;
			&--old {color:$gray }
		}
		.card__image
		{
			width: unset;
			height: unset;
			margin: 0;
		}
		.card__tag{font-size: 10px;}
		.card__titles button{font-size: 12px;}

	}
}
@media (min-width: $tablet) {
	.card--horizontal
	{
		align-items:center;
		padding: 16px;
		.card__section
		{ 
			width: 100%;  
			display: flex;
			justify-content: space-between;
			padding-right: 117px;
		}
		.card__image
		{
			max-width: 95px;
			margin-left: 30px;
		}
		.g-list li
		{
			font-size: 13px;
			margin-right: 24px;
		}
		.card__buttons
		{
			display: flex;
			flex-direction: column;
			align-items: center;
			top: 14px;
			right: 15px;
		}
		.card__button
		{
			display: block;
			margin: 0;
		}
	}
}
@media (min-width: $desktop)
{
	.card--horizontal
	{
		padding: 12px 35px;
		.card__data
		{
			display: flex;
			align-items: center;
		}
		.card__titles-overlay {margin-right: 39px; }
		.card__image
		{
			margin: 0;
			max-width: 113px;
			margin-right: 20px;
		}
		.card__titles h4 {font-size: 14px; }
		.g-list li
		{
			letter-spacing: 1.10px;
			margin-right: 28px;
		}
		.card__tag{font-size: 12px;}
		.card__price
		{
			font-size: 22px;
			&--old{font-size: 14px;}
		}
		.card__section{padding-right: 55px;}
	}	
}
@media (min-width:  $widescreen)
{
	.card--horizontal
	{
		align-items: center;
		.card__tags--desktop
		{
			display: block;}
		.card__tags--mobile{display: none;}
		.card__titles-overlay
		{
			display: flex;
			align-items: center;
		}
		.card__section
		{
			align-items: center;
		}
		.card__titles
		{
			margin: 0;
			margin-right: 45px;
			max-width: 220px;
			h4 {font-size: 18px; }
		}
		.g-list{margin: 0;}
	}
	
}
</style>