<template>
	<main>
		<div class="main-container">
			<RouterView />
		</div>
	</main>
</template>

<script>
export default {};
</script>

<style lang="less">
@import '@/assets/styles/style';

main {
	min-height: calc(var(--header-height) + 100vh);
}
</style>
