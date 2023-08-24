<script>
	import '../fonts.css';
	import { Accordion } from '@svelteuidev/core';
	import { Plus } from 'radix-icons-svelte';
	const DATA = [
		{
			header: 'Из чего состоит наш фундамент',
			text: 'Бетонные плиты (собственного производства) устанавливаются на длинные ригели из гидротехнического бетона со спец армированием. Конструкцию держат монолитные бетонные сваи на титановых крепежах (Данный сплав используется для строения космических аппаратов)На бетонной плите, внутри деревянной обвязки шириной 150 мм, 2 слоя теплоизоляционного материала (экструдированный пенополистерол).Затем производится полусухая стяжка на немецком оборудовании. Конструкция обладает высокой несущей способностью, большой площадью опоры, что делает невозможным опрокидывание и провалы грунта.'
		},
		{
			header: 'Подбираем ли мы участок',
			text: ''
		},
		{
			header: 'Какие материалы используем',
			text: ''
		},
		{
			header: 'Можем ли мы помочь с ипотекой',
			text: ''
		},
		{
			header: 'Технологии строительства',
			text: ''
		},
		{
			header: 'Чем каркасные дома лучше остальных',
			text: ''
		}
	];
</script>

<div class="font-montserrat">
	<Accordion chevron={Plus} class={'bg-[#DEDEDE]'}>
		{#each DATA as item, i}
			<Accordion.Item value={item.header} class={'border-b-[0.5px] border-black'}>
				<div slot="control">
					<h2 class="text-[0.875rem] font-bold">{item.header}</h2>
				</div>
				<p class="text-[0.625rem]">{item.text}</p>
			</Accordion.Item>
		{/each}
	</Accordion>
</div>

<style>
	.font-montserrat {
		font-family: montserrat;
	}
</style>
