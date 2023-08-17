<script>
	import '../fonts.css';
</script>

<div class="text bg-[#dedede] lowercase">
	<div class="flex justify-center text-[2.5rem] font-bold mb-[2.81rem]">
		<h2 class="">ПОЧЕМУ МЫ?</h2>
	</div>

	<div class="wrapper">
		<div class="item item-0">
			<div class="item-number-0">01</div>
			<div class="mt-5 ml-5">СТРОИМ/МОНТАЖ КРУГЛЫЙ ГОД</div>
		</div>

		<div class="item item-1">
			<div class="item-number-1">02</div>
			<div class="mt-5 ml-5">
				ЛУЧШИЕ ИННОВАЦИОННЫЕ ТЕХНОЛОГИИ И ГАРАНТИЯ КАЧЕСТВА
			</div>
		</div>

		<div class="item item-2">
			<div class="item-number-2">03</div>
			<div class="mt-5 ml-[4.5rem] w-48">
				ДОСТУПНАЯ СТОИМОСТЬ ЗА СЧЕТ СОБСТВЕННОГО ПРОИЗВОДСТВА
			</div>
		</div>

		<div class="item item-3">
			<div class="item-number-3">04</div>
			<div class="mt-5 ml-[4.5rem] w-48">ГИБКАЯ СИСТЕМА ОПЛАТЫ</div>
		</div>
		<div class="item item-4">
			<div class="item-number-4">05</div>
			<div class="mt-6 ml-6 w-48">
				БЕСПЛАТНЫЙ ПОДБОР УЧАСТКА И РАСЧЁТ ФУНДАМЕНТА
			</div>
		</div>
	</div>
</div>

<style>
	.text {
		font-family: mikro;
	}
	.wrapper {
		display: flex;
		flex-direction: column;
		width: 375px;
		height: 550px;
		position: relative;
	}

	.item {
		height: 100px;
		border: 1px solid black;
	}

	.item-0 {
		border-left: 0;
		border-bottom: 0;
		width: 255px;
		height: 90px;
		align-self: start;
		position: relative;
	}

	.item-1 {
		border-right: 0;
		border-bottom: 0;
		margin-left: 79.5px;
		width: 175px;
		align-self: start;
		height: 150px;
	}

	.item-2 {
		border-left: 0;
		border-bottom: 0;
		margin-right: 39.5px;
		width: 255px;
		height: 130px;
		align-self: end;
	}

	.item-3 {
		margin-left: 30px;
		border-right: 0;
		border-bottom: 0;
		width: 304.5px;
		align-self: start;
	}
	.item-4 {
		margin-left: 30px;
		border-right: 0;
		border-bottom: 0;
		border-left: 0;
		width: 30px;
		align-self: start;
	}

	.item-number-0 {
		position: absolute;
		top: -20px;
		left: 20px;
		font-size: 3rem;
		background-color: #dedede;
		line-height: 35px;
	}
	.item-number-1 {
		position: absolute;
		font-size: 3rem;
		top: 70px;
		left: 100px;
		background-color: #dedede;
		line-height: 35px;
	}
	.item-number-2 {
		position: absolute;
		font-size: 3rem;
		top: 215px;
		left: 150px;
		background-color: #dedede;
		line-height: 35px;
	}
	.item-number-3 {
		position: absolute;
		font-size: 3rem;
		top: 340px;
		left: 100px;
		background-color: #dedede;
		line-height: 35px;
	}
	.item-number-4 {
		position: absolute;
		font-size: 3rem;
		top: 440px;
		left: 50px;
		background-color: #dedede;
		line-height: 35px;
	}
</style>
