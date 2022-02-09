<template>
	<!-- BEGIN FOOTER -->
	<footer>
		<div class="wrapper">
			<div class="footer-row">
				<div class="copyright">Авторские права © 2017-2021 PLUS. Все права защищены.</div>
				<router-link to="/PrivacyPolicy" tag="a" class-active="active" class="footer-link footer-link_policy" @click.native="scrollToTop">Политика конфиденциальности</router-link>
				<router-link to="/TermsUse" tag="a" class-active="active" class="footer-link" @click.native="scrollToTop">Правила пользования</router-link>
			</div>
		</div>
	</footer>
	<!-- FOOTER EOF   -->
</template>

<script>
export default {
	name: "Footer",
	methods: {
		scrollToTop() {
			window.scrollTo(0, 0);
		},
	},
};
</script>

<style lang="scss">
footer {
	text-align: left;
	width: 100%;
	min-width: $min-width;
	order: 3;
	-webkit-order: 3;
}

.footer-row {
	padding: 65px 0;
	display: flex;
	justify-content: space-between;
	border-top: 1px solid rgba(229, 229, 229, 0.2);
}
.copyright {
	font-weight: 500;
	font-size: 14px;
	line-height: 17px;
	color: #ffffff;
}
.footer-link {
	font-weight: 500;
	font-size: 14px;
	line-height: 17px;
	color: #ffffff;
	&:hover {
		color: #ffce00;
	}
	&_policy {
		margin: 0 7.6% 0 auto;
	}
}

@media screen and (max-width: 767px) {
	.footer-row {
		flex-direction: column;
	}
	.copyright {
		margin-bottom: 49px;
	}
	.footer-link_policy {
		margin: 0 0 36px;
	}
}
</style>
