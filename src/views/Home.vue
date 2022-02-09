<template>
	<div>
		<div class="main-sreen">
			<div class="wrapper">
				<h1>{{ $t("mainTitle") }}</h1>
				<MainFilter />
			</div>
		</div>
		<Tab />
	</div>
</template>

<script>
import MainFilter from "../components/MainFilter";
import Tab from "../components/Tab/";
export default {
	name: "Home",
	components: {
		MainFilter,
		Tab,
	},
};
</script>
