<template>
	<div class="popup-footer">
		<div class="popup-footer__titles">
			<h2 class="popup-footer__title">
				Забронировать квартиру в 2 клика
			</h2>
			<p class="popup-footer__subtitle">
				Наш менеджер перезвонит вам в течение 15 минут
			</p>
		</div>
		<el-form class="popup-footer__form">
			<label class="popup-footer__input">
				<p class="popup-footer__input-title">Ваш email</p>
				<el-input
					v-model="email"
					placeholder="myname@gmail.com"
				/>
			</label>
			<label class="popup-footer__input">
				<p class="popup-footer__input-title">Ваш телефон</p>
				<el-input
					v-model="phoneNumber"
					placeholder="+7 (XXX) XXX-XX-XX"
				/>
			</label>
			<el-button
				class="popup-footer__button"
				type="primary"
				size="large"
				round
			>
				Отправить
			</el-button>
			<p class="popup-footer__consent">
				Отправляя форму, вы соглашаетесь <a href="#">на обработку персональных данных</a>
			</p>
		</el-form>
	</div>
</template>
<script>
	export default {
		data: ()=>({
			email: '',
			phoneNumber: ''
		})
	}
</script>

<style lang="scss">
.popup-footer
{
	&__titles {margin-bottom: 40px; }
	&__title
	{
		margin-bottom: 21px;
		line-height: 32px;
	}
	&__subtitle
	{
		color: $black;
		font-size: 16px;
		font-weight: 300;
		line-height: 24px;
	}
	&__input
	{
		display: block;
		margin-bottom: 20px;
		&:last-of-type{margin-bottom: 30px;}
	}
	&__input-title {margin-bottom: 10px; }
	&__button
	{
		width: 100%;
		margin-bottom: 26px;
	}
	&__consent
	{
		display: inline;
		color:#929292;
		font-size: 12px;
		font-weight: 300;
		line-height: 12px;
		a
		{
			display: inline;
			font-size: 12px;
			color:#929292;
			text-decoration: underline;
			&:hover{text-decoration: none;}
		}
	}
}
@media (min-width:  $desktop)
{
	.popup-footer {
		display: flex;
		gap: 50px;
		&__titles {margin: 0; }
		&__title
		{
			font-size: 32px;
			line-height: 120%;
			margin-bottom: 15px; 
		}
	}

}
@media (min-width:  $widescreen)
{
	.popup-footer
	{
		align-items: start;
		gap: 170px;
		&__titles {width: 511px; }
		&__title { font-size: 42px; }
		&__form { width: 620px;}
		&__input .el-input__wrapper{ padding-left: 22px;}
		&__button 
		{
			display: block;
			max-width: 412px;
		}
	}

}
</style>