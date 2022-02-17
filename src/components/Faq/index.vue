<template>
	<section class="section-faq">
		<div class="wrapper">
			<div class="faq-plus-wr faq-plus-wr-1">
				<i class="icon-plus faq-plus-1"></i>
			</div>
			<div class="faq-plus-wr faq-plus-wr-2">
				<i class="icon-plus faq-plus-2"></i>
			</div>
			<h2>F.A.Q.</h2>
			<ul class="list-faq">
				<li v-for="(item, index) in 6" :key="`item+${index}`" :class="[`list-faq__item`, { active: index + 1 === isOpen }]" @click="toggleFaq(index + 1)">
					<div class="list-faq__line list-faq__line_1"></div>

					<div class="list-faq__link">
						<span>{{ $tc("faqLink", index) }}</span>
						<i class="icon-plus"></i>
					</div>
					<div v-if="index + 1 === isOpen" class="list-faq__answer">
						<p>{{ $tc("faqCont", index) }}</p>
					</div>
					<div class="list-faq__line list-faq__line_2"></div>
				</li>
			</ul>
		</div>
	</section>
</template>

<script>
export default {
	name: "Faq",
	data() {
		return {
			isOpen: 0,
		};
	},
	methods: {
		toggleFaq(i) {
			if (this.isOpen === i) {
				this.isOpen = 0;
			} else {
				this.isOpen = i;
			}
		},
	},
};
</script>

<style scoped lang="scss">
.list-faq__link {
	cursor: pointer;
	transition: all 0.3s;
}
</style>
