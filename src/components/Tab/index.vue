<template>
	<section class="section-advanced">
		<div class="wrapper">
			<div class="advanced-title-wr">
				<div class="advanced-title active-tab_0">
					<div class="advanced-title__item">Без лимитов</div>
					<div class="advanced-title__item">Фиксированный процент</div>
					<div class="advanced-title__item">Анонимно</div>
				</div>
			</div>
			<div class="tab-wrap">
				<ul class="nav-tab-list">
					<li v-for="(tab, index) in tabs" :key="tab.title" @click="selectTab(index)" :class="[`nav-tab-list__item`, { active: selectedIndex == index }]">
						<a :href="tab.href" @click="selectNewTab(tab)" class="nav-tab-list__link">
							<svg width="20" height="20" viewBox="0 0 20 20">
								<circle cx="10" cy="10" r="8" stroke="#40360e" />
								<circle class="circle-anim" cx="10" cy="10" r="8" />
							</svg>
							<span>{{ tab }}</span>
						</a>
					</li>
				</ul>
				<div class="box-tab-cont">
					<div v-if="selectedIndex === 0" class="tab-cont" id="tab_1">
						<div class="tab-plus-wr">
							<div class="icon-plus tab-plus"></div>
						</div>
						<p>
							Обмен Криптовалют Без ограничений - Кто вообще устанавливает лимиты? У <span>PLUS</span> нет ограничений и лимитов на обмен криптовалюты. Обменивайте криптовалюты по самому
							выгодному курсу в любом количестве.
						</p>
					</div>
					<div v-if="selectedIndex === 1" class="tab-cont">
						<div class="tab-plus-wr">
							<div class="icon-plus tab-plus"></div>
						</div>
						<p>
							Обмен Криптовалют Без ограничений - Кто вообще устанавливает лимиты? У <span>PLUS</span> нет ограничений и лимитов на обмен криптовалюты. Обменивайте криптовалюты по самому
							выгодному курсу в любом количестве.
						</p>
					</div>
					<div v-if="selectedIndex === 2" class="tab-cont">
						<div class="tab-plus-wr">
							<div class="icon-plus tab-plus"></div>
						</div>
						<p>Обмен Криптовалют Без ограничений - Кто вообще устанавливает лимиты? У <span>PLUS</span> нет ограничений и лимитов на обмен криптовалюты.</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			selectedIndex: 0,
			tabs: ["Без лимитов", "Фиксированный процент", "Анонимно"],
		};
	},
	mounted() {
		//this.selectTab(0);
		let tabsVue = this;
		setInterval(function () {
			tabsVue.changeToNextTab();
		}, 1000);
	},
	methods: {
		changeToNextTab() {
			if (!this.tabs.length) {
				return;
			}

			let activeIndex = this.tabs.findIndex((tab) => tab.isActive);

			if (activeIndex === -1) {
				activeIndex = 0;
			}

			// add one to the index for the next tab
			activeIndex++;

			if (activeIndex >= this.tabs.length) {
				// Reset to first tab if on the last tab
				activeIndex = 0;
			}

			this.selectNewTab(this.tabs[activeIndex]);
		},
		selectNewTab(slectedTab) {
			this.tabs.forEach((tab) => {
				tab.isActive = tab == slectedTab;
			});
		},
	},
};
</script>

<style>
.nav-tab-list__link {
	cursor: pointer;
}
</style>
