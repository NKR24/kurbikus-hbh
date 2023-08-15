<script>
	import BlackBtn from '../components/BlackBtn.svelte';
	import '../fonts.css';
</script>

<div class="text bg-[#dedede]">
	<div class="sm: ml-[3.75rem] pt-[13.19rem]">
		<h2 class="text-[3rem] font-bold text-[#000] sm: mb-[5.81rem]">
			5 вопросов о вашем доме
		</h2>
	</div>
	<div class="flex justify-center"><BlackBtn text="начать" /></div>
	<div
		class="border-[1px] border-black sm: ml-[1.38rem] mr-5 mt-[3.12rem] mb-[5.44rem] pl-[1.94rem] pb-[1.56rem] pt-[0.87rem]"
	>
		<h3 class="text-[2rem] lowercase">Вы получите:</h3>
		<ul class="text-[0.8125rem]">
			<li>&#x2022; Подходящие проекты с ценой в PDF</li>
			<li>&#x2022; Изменение комплектации и цены Выбор</li>
			<li>&#x2022; цветов и покрытий Подбор материалов</li>
			<li>&#x2022; кровли и окон</li>
		</ul>
	</div>
    <h3>PLACEHOLDER</h3>
</div>

<style>
	.text {
		font-family: mikro;
	}
</style>
