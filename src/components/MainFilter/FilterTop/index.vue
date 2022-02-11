<template>
	<div class="main-filter__row">
		<span class="link-bot"><img src="@/assets/img/bot.svg" alt="" /></span>
		<ul class="main-inf">
			<li v-for="(item, index) in 3" :key="item + index" class="main-inf__item">
				<span>{{ $tc("filterAdvance", index) }}</span>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "FilterTop",
};
</script>

<style></style>
