<template>
	<section class="relative">
		<span class="absolute custom-gradient-background inset-0 z-10"></span>
		<div class="flex flex-col w-1/2 pl-[7.5rem] pt-[7.5rem] font-bold relative z-20">
			<h2 class="text-[2.5rem] text-ketchup-color font-Baloo mb-5">Fair Launch</h2>
			<p class="text-[2rem] text-grey w-[25rem] mb-14">Founders like you, they buy they sale their ketchup</p>
			<div class="grid grid-cols-3 text-[1.875rem] font-Baloo gap-y-4 mb-14">
				<span class="custom-text-gradient">
					<span class="custom-text-gradient"> 0 </span>
					Roadmap
				</span>
				<span class="custom-text-gradient">
					<span class="custom-text-gradient"> 0 </span>
					Marketing
				</span>
				<span class="custom-text-gradient">
					<span class="custom-text-gradient"> 0 </span>
					Presale
				</span>
				<span class="custom-text-gradient">
					<span class="custom-text-gradient"> 0 %</span>
					Taxe
				</span>
				<span class="custom-text-gradient">
					<span class="custom-text-gradient"> 0 </span>
					White paper
				</span>

				<span class="custom-text-gradient">
					<span class="custom-text-gradient"> 0 </span>
					KYC
				</span>
			</div>
			<p class="text-3xl text-grey w-[25rem] mb-14">Liquidity 100% Lockedp</p>
		</div>
		<img
			class="absolute object-contain top-0 right-0 h-full"
			src="@/assets/images/gan0nd0rf_jumping_bastard_dog_with_no_glasses_ketchup_Gorillaz__e85094d2-3558-4b70-91b9-7bd8546afa28 1.png"
		/>
	</section>
</template>

<script>
export default {};
</script>

<style>
.custom-text-gradient {
	background: var(--gradient, linear-gradient(291deg, #bd0b0b 28.44%, #fb5e54 93.82%));
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

.custom-gradient-background {
	background: linear-gradient(89deg, #ffe897 52%, rgba(255, 232, 151, 0) 70%);
}
</style>
