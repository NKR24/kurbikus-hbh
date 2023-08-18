<script>
	import '../fonts.css';
	let currentIndex = 0;
	let DATA = [
		{
			pic: 'src/assets/images/table-img.png',
			text: [
				'Бетонные плиты (собственного производства) устанавливаются на длинные ригели из гидротехнического бетона со спец армированием.',
				'Конструкцию держат монолитные бетонные сваи на титановых крепежах. Данный сплав используется для строения космических аппаратов.',
				'На бетонной плите, внутри деревянной обвязки шириной 150 мм, 2 слоя теплоизоляционного материала (экструдированный пенополистерол).',
				'Затем производится полусухая стяжка на немецком оборудовании. В результате создаётся идеально ровное предфинальное покрытие пола. На него кладётся финальное половое покрытие.',
				'Конструкция обладает высокой несущей способностью, большой площадью опоры, что делает невозможным опрокидывание и провалы грунта.'
			]
		},
		{
			pic: 'src/assets/images/carcass-img.png',
			text: 'Домокомплект - выдерживает сильные морозы. Поставляется с завода не утепленным. Ширина 4-5 метров.Каркас состоит из древесных плит хвойных пород (ОСП Kalevala) камерной сушки. Особенность такого типа каркасов отсутствие формальдегидных примесей, поскольку при прессовании плоской древесной стружки сосны на высоких температурах выделяется природный компонент смола, которая выполняет роль естественной клеевой основы и обеспечивает прочную, экологичную сцепку древесины.'
		},
		{
			pic: 'src/assets/images/windows-img.png',
			text: [
				'Качественные энергоэффективные стеклопакеты (3 стекла, 2 камеры) KBE Expert с ламинированным профилем 70 мм.',
				'Профиль позволяют удерживать тепло в холодный период, а в жаркий день не нагревается, создаётся комфортная температура.',
				'Самый толстый стеклопакет из стандартных вариантов - 42 мм.',
				'Немецкая фурнитура фирмы ROTO. Работает чётко, тактильно приятна рукам.'
			]
		}
	];
	let descriptions = ['фундамент', 'каркас/утеплитель', 'окна/стеклопакеты'];

	function goToIndex(index) {
		currentIndex = index;
	}
	function goToNext() {
		currentIndex = (currentIndex + 1) % images.length;
	}

	function goToPrevious() {
		currentIndex = (currentIndex - 1 + images.length) % images.length;
	}
</script>

<div class="bg-[#3E3E3E] text">
	{#each DATA as item, i (item)}
		{#if i === currentIndex}
			<img
				src={item.pic}
				alt={`Image ${i}`}
				class="sm: w-[100%] h-[14.6875rem]"
			/>
			<div class="carousel-buttons">
				<div class="flex justify-center gap-8">
					{#each DATA as item, j (item)}
						<button
							class="carousel-button"
							class:selected={j === currentIndex}
							on:click={() => goToIndex(j)}
						/>
					{/each}
				</div>
			</div>
			<div class="pl-[3.44rem] pr-[3.37rem]">
				<div class="flex justify-center mt-6 text-[3rem] text-[#dedede]">
					<p class="">{descriptions[i]}</p>
				</div>
				<!-- TODO: component for carousel text since some has list and others dont -->
				<div
					class="w-[100%] h-[30rem] text-[0.875rem] text-[#dedede] pb-28 mt-5"
				>
					<p>{item.text}</p>
				</div>
			</div>
		{/if}
	{/each}
</div>

<!-- <button on:click={goToPrevious} class="carousel-control">&#8249;</button>
<button on:click={goToNext} class="carousel-control">&#8250;</button> -->

<style>
	.carousel-button {
		width: 2.1875rem;
		height: 0.2rem;
		background-color: #dedede;
	}

	.carousel-button.selected {
		background-color: #faad67; /* Change to the desired highlight color */
		color: #faad67; /* Change to the desired text color */
		/* Additional styles for the selected state */
	}
	.text {
		font-family: mikro;
	}
</style>
