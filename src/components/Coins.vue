<template>
	<section class="mt-[2.3rem] relative pb-[4.5rem]">
		<div class="flex gap-[2.5rem] justify-center">
			<div class="flex flex-col gap-1 mb-7 items-center" v-for="coin in coins.slice(0, 15)" :key="coin">
				<img class="size-[3.1875rem] object-contain" :src="'src/assets/images/coins/' + coin + '.png'" />
				<span class="text-[1.125rem] text-black capitalize"> {{ coin }} </span>
			</div>
		</div>
		<div class="flex gap-[1.95rem] justify-center">
			<div class="flex flex-col gap-1 mb-7 items-center" v-for="coin in coins.slice(15, 30)" :key="coin">
				<img class="size-[3.1875rem] object-contain" :src="'src/assets/images/coins/' + coin + '.png'" />
				<span class="text-[1.125rem] text-black capitalize"> {{ coin }} </span>
			</div>
		</div>
		<div class="flex gap-[1.85rem] justify-center">
			<div class="flex flex-col gap-1 mb-7 items-center" v-for="coin in coins.slice(30, 44)" :key="coin">
				<img class="size-[3.1875rem] object-contain" :src="'src/assets/images/coins/' + coin + '.png'" />
				<span class="text-[1.125rem] text-black capitalize"> {{ coin }} </span>
			</div>
		</div>
		<div class="flex gap-[3.44rem] justify-center">
			<div class="flex flex-col gap-1 mb-7 items-center" v-for="coin in coins.slice(44, 50)" :key="coin">
				<img class="size-[3.1875rem] object-contain" :src="'src/assets/images/coins/' + coin + '.png'" />
				<span class="text-[1.125rem] text-black capitalize"> {{ coin }} </span>
			</div>
		</div>
		<div
			class="flex flex-col gap-4 rounded-[1.875rem] border-[1px] border-black mx-auto mt-4 w-max p-[1.375rem] text-[1.5rem]"
		>
			<span>eth , arb, bsc, canto, poly :</span>
			<span>0x9e20461bc2c4c980f62f1B279D71734207a6A356</span>
		</div>

		<img
			class="absolute object-contain -bottom-[7.5rem] w-[26rem] z-10"
			src="@/assets/images/gan0nd0rf_Gorillaz_style_bastard_dog_drinkink_ketchup_bottle_ka_4148c8fa-5556-454c-953a-834e09613f38-PhotoRoom 1.png"
		/>
		<img
			class="absolute object-contain -bottom-4 right-5 w-[25rem]"
			src="@/assets/images/Screenshot_2024-01-08_at_20.43 1.png"
		/>
	</section>
</template>

<script>
export default {
	data() {
		return {
			coins: [
				'ethereum',
				'fantom',
				'fuse',
				'gnosis',
				'harmony',
				'hubble',
				'intain',
				'kava',
				'klayth',
				'linea',
				'loot',
				'manta',
				'mantle',
				'meter',
				'metis',
				'moondeam',
				'moonriver',
				'nove',
				'okx',
				'opbnp',
				'optimism',
				'orderly',
				'polygon',
				'scroll',
				'shimmer',
				'shrapnel',
				'Swimmer',
				'telos',
				'Tenet',
				'tomo',
				'Zkevm',
				'Zksync',
				'Zora',
				'aurora',
				'base',
				'deso',
				'aptos',
				'canto',
				'conflux',
				'pgn',
				'xpla',
				'arbitrum',
				'astar',
				'avalanche',
				'beam',
				'bnb chain',
				'celu',
				'coredao',
				'dexalot',
				'aeon'
			]
		};
	}
};
</script>

<style></style>
