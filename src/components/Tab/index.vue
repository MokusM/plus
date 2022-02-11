<template>
	<section class="section-advanced">
		<div class="wrapper">
			<div class="advanced-title-wr">
				<div :class="`advanced-title active-tab_${selectedIndex}`" ref="titleWrap" :style="{ left: -x + 'px' }">
					<div class="advanced-title__item advanced-title__item_0" ref="title1">{{ $tc("tabs", 2) }}</div>
					<div class="advanced-title__item advanced-title__item_1" ref="title2">{{ $tc("tabs", 0) }}</div>
					<div class="advanced-title__item advanced-title__item_2" ref="title3">{{ $tc("tabs", 1) }}</div>
					<div class="advanced-title__item advanced-title__item_3">{{ $tc("tabs", 2) }}</div>
					<div class="advanced-title__item advanced-title__item_4">{{ $tc("tabs", 0) }}</div>
					<div class="advanced-title__item advanced-title__item_5">{{ $tc("tabs", 1) }}</div>
				</div>
			</div>
			<div class="tab-wrap">
				<ul class="nav-tab-list">
					<li v-for="(tab, index) in tabs" :key="tab.title" :class="[`nav-tab-list__item`, { active: selectedIndex == index }]">
						<a :href="tab.href" @click="selectTab(index)" class="nav-tab-list__link">
							<svg width="20" height="20" viewBox="0 0 20 20">
								<circle cx="10" cy="10" r="8" stroke="#40360e" />
								<circle class="circle-anim" cx="10" cy="10" r="8" />
							</svg>
							<span>{{ $tc("tabs", index) }}</span>
						</a>
					</li>
				</ul>
				<div class="box-tab-cont">
					<div v-if="selectedIndex === index" v-for="(item, index) in 3" :key="item + index" class="tab-cont">
						<div class="tab-plus-wr">
							<div class="icon-plus tab-plus"></div>
						</div>
						<p v-html="$tc('tabsCont', index)"></p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
var myVar = null;
export default {
	data() {
		return {
			selectedIndex: 0,
			x: 0,
			tabs: [{ name: "Без лимитов" }, { name: "Фиксированный процент" }, { name: "Анонимно" }],
		};
	},
	mounted() {
		this.selectTab(0);
	},
	computed: {
		width1() {
			return this.$refs.title1.clientWidth;
		},
		width2() {
			return this.$refs.title2.clientWidth;
		},
		width3() {
			return this.$refs.title3.clientWidth;
		},
	},
	methods: {
		selectTab(i) {
			this.selectedIndex = i;
			if (this.selectedIndex === 0) {
				this.x = this.width1;
			} else if (this.selectedIndex === 1) {
				this.x = this.width1 + this.width2;
			} else if (this.selectedIndex === 2) {
				this.x = this.width1 + this.width2 + this.width3;
			}
		},
	},
};
</script>

<style>
.nav-tab-list__link {
	cursor: pointer;
}
.nav-tab-list {
	z-index: 3;
	position: relative;
}
</style>
