<script>
	import BlackBtn from '../components/BlackBtn.svelte';
	import '../fonts.css';
</script>

<div class="text bg-[#DEDEDE] pb-7">
	<div class="flex justify-center pt-7">
		<div class="border-black border-[1px] w-[90%] pb-6">
			<h2 class="mt-5 ml-[7.5%] text-[0.875rem]">
				ЭКСКУРСИЯ ПО НАШИМ ОБЪЕКТАМ
			</h2>
			<img
				src="src/assets/images/gallery-img-1.png"
				alt="founder-img"
				class="w-[85%] mx-auto mt-3"
			/>
		</div>
	</div>
	<div class="flex flex-col items-center mt-3 text-[0.75rem]">
		<p class="w-[75%]">
			Демонстрируем построенный вариант дома, однако может отвезти на
			недостроенный объект, чтобы вы могли проверить и убедиться своими глазами.
		</p>
		<p class="w-[75%]">
			Экскурсию проводит наш проектный менеджер, поэтому вы получите ответы на
			все интересующие вас вопросы. Также поможем подобрать вам участок, если вы
			в растерянности от большого количества предложений и не знаете, что лучше.
		</p>
	</div>
	<div class="flex justify-center mt-8">
		<BlackBtn text={'записаться'} />
	</div>
</div>

<style>
	.text {
		font-family: mikro;
	}
</style>
