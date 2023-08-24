<script>
	import '../fonts.css';
</script>

<div class="bg-[#DEDEDE] border-t-[1px] border-b-[1px] border-black py-8">
	<div class="w-[90%] border-[1px] border-black mx-auto py-6">
		<form class="w-[80%] mx-auto">
			<h3 class="font-mikro text-[1.25rem]">КОНСУЛЬТАЦИЯ</h3>
			<p class="font-montserrat text-[0.75rem]">
				Оставьте свои контактные данные и мы обязательно с вами свяжемся
			</p>

			<div class="mt-8 border-t-[1px] border-black">
				<label for="name" class="font-montserrat text-[0.625rem] block mb-1"
					>имя*</label
				>
				<input
					type="text"
					id="name"
					name="name"
					class="w-full px-2 py-1 bg-[#DEDEDE]"
				/>
			</div>
			<div class="mt-4 border-t-[1px] border-black">
				<label for="email" class="font-montserrat text-[0.625rem] block mb-1"
					>почта или номер телефона*</label
				>
				<input
					type="email"
					id="email"
					name="email"
					class="w-full px-2 py-1 bg-[#DEDEDE]"
				/>
			</div>
			<div class="mt-4 border-t-[1px] border-black">
				<label for="text" class="font-montserrat text-[0.625rem] block mb-1"
					>Текст сообщения</label
				>
				<input
					type="text"
					id="text"
					name="text"
					class="w-full px-2 py-1 bg-[#DEDEDE]"
				/>
			</div>

			<div class="flex justify-between mt-4">
				<p class="text-[0.625rem] w-[49%]">
					*нажимая на кнопку «Отправить» вы даете согласие на обработку
					персональных данных
				</p>
				<button type="submit" class="bg-black text-white w-[49%] h-9">отправить</button>
			</div>
		</form>
	</div>
</div>

<style>
	.font-mikro {
		font-family: mikro;
	}
	.font-montserrat {
		font-family: montserrat;
	}
</style>
