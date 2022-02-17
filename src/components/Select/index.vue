<template>
	<div class="box-field__select">
		<v-select :value="value" :options="options" label="title" @input="handleChange">
			<template slot="option" slot-scope="option">
				<img :src="option.icon" alt="" />
				{{ option.id }}
			</template>
		</v-select>
	</div>
</template>

<script>
export default {
	name: "Select",
	props: {
		value: {
			type: String,
			default: "",
			required: true,
		},
		options: {
			type: Array,
			default: [],
			required: true,
		},
	},
	methods: {
		async handleChange(item) {
			this.$emit("handle-change", item);
		},
	},
};
</script>

<style></style>
