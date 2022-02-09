<template>
	<div id="app" :class="`loaded theme-${currTheme}`">
		<div class="main-wrapper">
			<main class="content">
				<div class="wrapper">
					<Breadcrumb />
				</div>

				<router-view />

				<Faq />
			</main>
			<Header />
			<Footer />
		</div>
	</div>
</template>
<script>
import Breadcrumb from "./components/Breadcrumb/";
import Header from "./components/Header/";

import Footer from "./components/Footer/";
import Faq from "./components/Faq/";
import { mapGetters, mapState, mapActions } from "vuex";

export default {
	components: {
		Breadcrumb,
		Header,
		Footer,
		Faq,
	},
	computed: {
		...mapGetters({
			currTheme: "theme/theme",
		}),
		...mapState(["locale"]),
	},
	watch: {
		locale() {
			this.$router.replace({ params: { lang: this.locale } }).catch(() => {});
		},
	},
	methods: {
		...mapActions({
			currLang: "lang/changeLocale",
		}),
	},
	created() {
		this.currLang(this.$store.state.locale);
	},
};
</script>

<style lang="scss">
@import "@/style/style.scss";
</style>
