<template>
	<div class="wrapper section-steps">
		<h1 v-html="$t('innerPageTitle')"></h1>
		<div class="steps">
			<div class="steps__main">
				<div class="steps-title">1. {{ $tc("stepTitle", 0) }}</div>
				<p class="steps__desc">{{ $tc("stepSubTitle", 0) }}</p>
				<div class="main-filter exchange-form">
					<form>
						<!-- <div class="filter">
							<div class="filter__col filter__col_1">
								
							</div>
							<a href="#" class="filter__refresh">
								<img src="img/refresh.svg" alt="" />
							</a>
							<div class="filter__col filter__col_2">
								
							</div>
						</div> -->
						<InputField :label="$t('labelAddress')" :value="address" :placeholder="$t('placeholderAddress')" />
						<InputField :label="$t('labelID')" :value="address" :placeholder="$t('placeholId')" />
						<ul class="list-check">
							<li class="list-check__item">
								<label class="list-check__label">
									<input type="checkbox" name="check_1" />
									<span class="list-check__icon"><i class="icon-check"></i></span>
									<span class="label-text">{{ $tc("checkList", 0) }}</span>
								</label>
							</li>
							<li class="list-check__item">
								<label class="list-check__label">
									<input type="checkbox" name="check_1" />
									<span class="list-check__icon"><i class="icon-check"></i></span>
									<span class="label-text">{{ $tc("checkList", 1) }}</span>
								</label>
							</li>
							<li class="list-check__item">
								<label class="list-check__label">
									<input type="checkbox" name="check-mail" v-model="checkMail" />
									<span class="list-check__icon"><i class="icon-check"></i></span>
									<span class="label-text">{{ $tc("checkList", 2) }}</span>
								</label>
							</li>
						</ul>

						<InputField v-if="checkMail" :value="address" :label="$t('labelEmail')" :placeholder="$t('placeholEmail')" />
						<div class="exchange-form__btns">
							<div class="exchange-form__inf">
								<i class="icon-inf"></i>
								{{ $t("infForm") }}
							</div>
							<button type="submit" class="btn-yellow">{{ $t("btnExchange") }} <i class="icon-arr-right"></i></button>
						</div>
					</form>
				</div>
			</div>
			<div class="steps__aside">
				<ul class="steps-list">
					<li class="steps-list__item active">
						<span class="steps-list__link"><span>1.</span> {{ $tc("stepsList", 0) }} </span>
					</li>
					<li class="steps-list__item">
						<span class="steps-list__link"><span>2.</span>{{ $tc("stepsList", 1) }}</span>
					</li>
					<li class="steps-list__item">
						<span class="steps-list__link"><span>3.</span> {{ $tc("stepsList", 2) }}</span>
					</li>
					<li class="steps-list__item">
						<span class="steps-list__link"><span>4.</span> {{ $tc("stepsList", 3) }}</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import MainFilter from "../components/MainFilter";
import InputField from "../components/InputField/index.vue";
export default {
	name: "Exchange",
	components: {
		MainFilter,
		InputField,
	},
	data() {
		return {
			address: "",
			checkMail: false,
		};
	},
};
</script>
