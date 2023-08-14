<template>
	<div class="popup-body">
		<picture class="popup-body__image">
			<img :src="popupData.layout" alt="Квартира">
		</picture>
		<div class="popup-body__main">
			<h3 class="popup-body__title">{{popupData.title}}</h3>
			<p class="popup-body__id">ID{{popupData.id}}</p>
			<button class="popup-body__button g-link">{{popupData.objectName}}</button>
			<div class="popup-body__deadline">
				Срок сдачи: <b>{{popupData.deadline}}</b>
			</div>
			<div class="popup-body__options">
				<div class="popup-body__option"><span>Корпус</span><span>{{popupData.lairNum}}</span></div>
				<div class="popup-body__option"><span>Этаж</span><span>{{popupData.floorNum}}</span></div>
				<div class="popup-body__option"><span>Общая площадь</span><span>{{popupData.area}} м2</span></div>
				<div class="popup-body__option"><span>Жилая площадь</span><span>{{popupData.areaKitchen}} м2</span></div>
			</div>
			<div class="popup-body__price"><span>Стоимость</span><span>от {{popupData.price}} ₽</span></div>
		</div>
	</div>
</template>
<script>
	export default {
		computed:
		{
			popupData() {
				return this.$store.state.popup.data;
			}
		}
	}
</script>

<style lang="scss">
.popup-body
{
	&__image {
		display: block;
		width: 100%;
		margin-bottom: 47px;
		img
		{
			display: block;
			margin: 0 auto;				
			object-fit:cover;
			width: 275px;
		}
	}
	&__title
	{
		color: $black;
		margin-bottom: 23px;
	}
	&__id
	{
		color:#999;
		margin-bottom: 22px;
	}
	&__button
	{
		margin-bottom: 12px;
		font-size: 16px;
	}
	&__deadline
	{
		color: $gray;
		font-size: 12px;
		margin-bottom: 16px;
		b {color: $black; font-weight: 400}
	}
	&__options {margin-bottom: 32px; }
	&__option
	{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 16px 0 18px 0;
		border-bottom: 1px solid $default-border-color;
		font-size: 14px;
		color: $gray;
		span:last-of-type
		{
			color: $black;
			font-weight: 600;
		}
		&:last-of-type{border-color: $black}
	}
	&__price
	{
		display: flex;
		justify-content: space-between;
		font-size: 16px;
		font-weight: 600;
		span:last-of-type
		{
			color:#263e66;
			font-weight: 700;
		}
	}
}
@media(min-width: $tablet)
{
	.popup-body
	{
		&__image
		{
			margin-bottom: 44px;
			img{width: 427px;}
		}
		&__title {font-size: 28px; }
		&__id {font-size: 12px; }
		&__button {letter-spacing: 0.2px; }
		&__deadline {margin-bottom: 25px; }
		&__options { margin-bottom: 36px; }
		&__option {padding: 16px 0 21px 0; }
		&__price
		{
			font-size: 20px;
			span:last-of-type{font-size: 24px;}
		}
	}

}
@media (min-width:  $desktop)
{
	.popup-body
	{
		display: flex;
		justify-content: space-between;
		&__image
		{
			margin: 0;
			width: max(375px, 40%);
			img {width: 375px; }
		}
		&__main {width: max(360px, calc(50% - 45px) ); }
		&__title 
		{
			margin-bottom: 40px;
		}
		&__deadline {margin-bottom: 35px; }
		&__options {margin-bottom: 57px; }
		&__option
		{
			padding: 24px 0 19px 0;
			font-size: 16px;
		}
	}
}
@media (min-width:  $widescreen)
{
	.popup-body
	{
		align-items: center;
		&__image
		{
			width: max(546px, 40%);
			img{width: 100%;}
		}
		&__main {width: max(620px, calc(50% - 97px) ); }
	}
}
</style>