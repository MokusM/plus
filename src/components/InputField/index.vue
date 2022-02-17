<template>
	<div class="box-field" :class="{ 'focused-field': focus }">
		<div class="box-field__input">
			<label for="value" class="box-field__label">{{ label }}</label>
			<input
				type="text"
				class="form-control"
				name="value"
				required
				:placeholder="placeholder"
				:value="value"
				:disabled="disabled"
				:focus="focus"
				v-on:keypress="numbersOnly"
				@change="handleChange"
				@focus="focus = true"
				@blur="focus = false"
			/>
		</div>
	</div>
</template>

<script>
export default {
	name: "InputField",
	props: {
		label: {
			type: String,
			default: "",
			required: true,
		},
		placeholder: {
			type: String,
			default: "0",
		},
		value: {
			type: String,
			default: "",
		},
		disabled: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			focus: false,
		};
	},
	methods: {
		async handleChange(e) {
			this.$emit("update-value", e.target.value);
		},
		numbersOnly(evt) {
			evt = evt ? evt : window.event;
			var charCode = evt.which ? evt.which : evt.keyCode;
			if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
				evt.preventDefault();
			} else {
				return true;
			}
		},
	},
};
</script>

<style></style>
