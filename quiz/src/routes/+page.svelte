<script>
	import { Center, Flex, Text, Title } from '@svelteuidev/core';

	const data = {
		title: '5 вопросов, чтобы найти лучшие дома по лучшим ценам!',
		list: [
			'Получите проекты домов с актуальными ценами в удобном PDF-формате',
			'Возможность настройки комплектации и корректировки стоимости',
			'Широкий выбор цветов и покрытий для индивидуализации дизайна',
			'Персонализированный подбор материалов для кровли и окон'
		]
	};
</script>

<Center>
	<div class="text-promo">
		<Flex direction="column">
			<Title variant="gradient" weight="extrabold">
				{data.title}
			</Title>

			<div class="text-promo-label-container">
				{#each data.list as item}
					<span class="text-promo-label">
						<Text>{item}</Text>
					</span>
				{/each}
				<a href="/housestyles">
					<Text variant="gradient" weight="bold">
						Подробнее
					</Text>
			</div>
		</Flex>
	</div>
</Center>

<style>
	:global(body) {
		background-color: #DEDEDE;
		min-height: 100vh;
	}
	.text-promo {
		width: 800px;
		padding-top: 120px;
		padding-left: 30px;
		padding-right: 30px;
;

		& h1 {
			font-size: 87px;
			line-height: 1.1;
			text-align: center;
			padding-bottom: 55px;
		}
	}

	@media (max-height: 800px) {
		.text-promo {
			& h1 {
				font-size: 66px;
			}
		}
	}

	@media (max-width: 1024px) {
		.text-promo {
			padding-top: 150px;
		}
	}

	@media (max-width: 597px) {
		.text-promo h1 {
			font-size: 40px;
		}

		.text-promo-label-container div {
			font-size: 15px;
			font-weight: 200;
		}
	}

	@media (max-width: 604px) {
		.text-promo {
			padding-top: 140px;

			& h1 {
				font-size: 44px;
			}
		}

		.text-promo-label-container > div {
			font-size: 14px;
			font-weight: 200;
		}
	}

	@media (max-width: 340px) {
		.text-promo {
			padding-top: 125px;

			& h1 {
				font-size: 24px;
			}
		}
	}

	@media (max-width: 718px) {
		.text-promo {
			padding-top: 80px;
		}
	}

	@media (min-width: 808px) {
		.text-promo-label-container {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.text-promo {
			padding-top: 150px;
		}
	}

	@media (max-width: 808px) {
		.text-promo-label-container {
			display: flex;
			flex-direction: column;
			align-items: center;
			max-width: 580px;
		}
	}

	.text-promo-label {
		margin-bottom: 10px;

		& div {
			font-size: 20px;
			font-weight: 300;
			line-height: 1.2;
		}
	}

	@media (max-width: 768px) {
		.text-promo-label > div {
			font-size: 20px;
			font-weight: 300;
			line-height: 1.2;
		}
	}
</style>
