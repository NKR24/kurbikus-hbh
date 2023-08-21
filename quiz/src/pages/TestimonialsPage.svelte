<script>
	import TestimonialCard from '../components/TestimonialCard.svelte';
	import '../fonts.css';
	const DATA = [
		{
			date: 'Март 2023',
			fullName: 'Мария Ш',
			comment:
				'Нам срочно нужно было съехать со съемной квартиры, искали и нашли. Спасибо Дом за домом! все сделали быстро и качественно.'
		},
		{
			date: 'Февраль 2023',
			fullName: 'Игорь Д',
			comment:
				'Нам срочно нужно было съехать со съемной квартиры, искали и нашли. Спасибо Дом за домом! все сделали быстро и качественно.'
		},
		{
			date: 'Февраль 2023',
			fullName: 'Игорь Д',
			comment:
				'Нам срочно нужно было съехать со съемной квартиры, искали и нашли. Спасибо Дом за домом! все сделали быстро и качественно. Спасибо Дом за домом! все сделали быстро и качественно.'
		}
	];
</script>

<div class="text bg-[#3e3e3e] pt-[0.69rem] text-[#dedede] text-[0.875rem]">
	<div class="flex justify-center">
		<div class="border-[#D9D9D9] border-[1px] w-[90%] pb-[1.81rem]">
			<h2 class="mt-5 ml-[7.5%]">ИНТЕРЬВЬЮ С СОЗДАТЕЛЕМ КОМПАНИИ</h2>
			<img
				src="src/assets/images/founder-img.png"
				alt="founder-img"
				class="w-[85%] mx-auto mt-3"
			/>
		</div>
	</div>
	<div
		class="flex justify-between px-[1.37rem] mx-auto mt-9 text-[1.5rem] border-b-[1px] border-[#DEDEDE]"
	>
		<p>отзывы:</p>
		<p>&#8599;</p>
	</div>
	<div>
		{#each DATA as item}
			<TestimonialCard
				date={item.date}
				fullName={item.fullName}
				comment={item.comment}
			/>
		{/each}
	</div>
	<div class="flex justify-center pb-7">
		<button class="mt-7 w-[13.25rem] h-[2.5625rem] border-[1px] border-[#dedede]">загрузить ещё</button>
	</div>
</div>

<style>
	.text {
		font-family: mikro;
	}
</style>
