<template>
	<div class="box-bread-crumbs">
		<ul class="bread-crambs">
			<li class="bread-crambs__item" v-for="(breadcrumb, idx) in breadcrumbList" :key="idx" @click="routeTo(idx)" :class="{ linked: !!breadcrumb.link }">
				<span class="bread-crambs__link">{{ breadcrumb.name }}</span>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "Breadcrumb",
	data() {
		return {
			breadcrumbList: [],
		};
	},
	mounted() {
		this.updateList();
	},
	watch: {
		$route() {
			this.updateList();
		},
	},
	methods: {
		routeTo(pRouteTo) {
			if (this.breadcrumbList[pRouteTo].link) this.$router.push(this.breadcrumbList[pRouteTo].link);
		},
		updateList() {
			this.breadcrumbList = this.$route.meta.breadcrumb;
		},
	},
};
</script>

<style lang="scss">
.box-bread-crumbs {
	margin-bottom: 10px;
}
.bread-crambs {
	list-style: none;
	&__item {
		display: inline-block;
		font-weight: 500;
		font-size: 14px;
		line-height: 17px;
		color: #ffce00;
		padding: 0 11px;
		position: relative;
		&:first-child {
			padding-left: 0;
		}
		&:last-child {
			padding-left: 20px;
			.bread-crambs__link {
				color: #ffce00;
				pointer-events: none;
				cursor: text !important;
			}
		}
		&:last-child:before {
			content: "/";
			position: absolute;
			left: 0;
		}
	}

	&__link {
		color: #ffffff;
		cursor: pointer;
	}
}
@media screen and (max-width: 767px) {
	.box-bread-crumbs {
		display: none;
	}
}
</style>
