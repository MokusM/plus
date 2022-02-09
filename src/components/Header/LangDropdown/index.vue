<template>
	<div class="box-lang" :class="{ active: langSelect }">
		<a href="#" class="lang-select" @click="toggleLang">
			<img :src="require(`../../../assets/img/${langFlag}.svg`)" alt="" />
			<i class="icon-arr"></i>
		</a>
		<ul class="list-lang">
			<li class="list-lang__item" :class="{ active: lang === langFlag }" v-for="(lang, i) in languageArray" :key="`lang${i}`" @click="choiceLang(lang)">
				<a class="list-lang__link" href="#"><img :src="require(`../../../assets/img/${lang}.svg`)" alt="" /></a>
			</li>
		</ul>
	</div>
</template>
<script>
import { languages } from "@/plugins/i18n";
import { mapActions } from "vuex";
export default {
	name: "langDropdown",
	data() {
		return {
			languageArray: languages,
			langSelect: false,
			langFlag: "ru",
		};
	},
	methods: {
		...mapActions({
			currLang: "lang/changeLocale",
		}),
		toggleLang() {
			this.langSelect = !this.langSelect;
		},
		choiceLang(lang) {
			this.currLang(lang);
			this.langFlag = lang;
			this.langSelect = false;
		},
	},
	computed: {
		lang: {
			get: function () {
				return this.$store.state.locale;
			},
			set: function (newVal) {
				this.currLang(newVal);
			},
		},
	},
};
</script>
<style scoped>
.lang-select::v-deep img,
.list-lang__link::v-deep img {
	border-radius: 50%;
	overflow: hidden;
}
</style>
