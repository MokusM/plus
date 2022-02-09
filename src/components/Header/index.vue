<template>
	<!-- BEGIN HEADER -->
	<header>
		<div class="wrapper">
			<router-link to="/Home" tag="a" class-active="active" class="logo">
				<svg width="116" height="30" viewBox="0 0 116 30" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M50.943 24H44.8856V0H38.8281V30H44.8856H50.943H57.0004V24H50.943Z" fill="white" />
					<g class="plus-logo">
						<path d="M12.1149 18V12H6.05744V18H0V24H6.05744V30H12.1149V24H18.1723V18H12.1149Z" fill="#FFCE00" />
					</g>
					<path
						d="M21.2002 0H18.1715H12.1141H6.05664V6V9H12.1141V6H18.1715H21.2002C24.5318 6 27.2577 8.7 27.2577 12C27.2577 15.3 24.5318 18 21.2002 18V24C27.8937 24 33.3151 18.63 33.3151 12C33.3151 5.37 27.8937 0 21.2002 0Z"
						fill="white"
					/>
					<path
						d="M79.4731 18C79.4731 21.3 76.7473 24 73.4157 24C70.0841 24 67.3582 21.3 67.3582 18V0H61.3008V18C61.3008 24.63 66.7222 30 73.4157 30C80.1091 30 85.5305 24.63 85.5305 18V0H79.4731V18Z"
						fill="white"
					/>
					<path
						d="M106.792 12H103.763H100.735C99.0688 12 97.7059 10.65 97.7059 9C97.7059 7.35 99.0688 6 100.735 6H103.763H106.792C108.458 6 109.821 7.35 109.821 9H115.878C115.878 4.05 111.789 0 106.792 0H103.763H100.735C95.7372 0 91.6484 4.05 91.6484 9C91.6484 13.95 95.7372 18 100.735 18H103.763H106.792C108.458 18 109.821 19.35 109.821 21C109.821 22.65 108.458 24 106.792 24H103.763H100.735C99.0688 24 97.7059 22.65 97.7059 21H91.6484C91.6484 25.95 95.7372 30 100.735 30H103.763H106.792C111.789 30 115.878 25.95 115.878 21C115.878 16.05 111.82 12 106.792 12Z"
						fill="white"
					/>
				</svg>
			</router-link>
			<langDropdown />
			<div class="theme-change">
				<a href="#" class="theme-change__item" :class="{ active: currTheme === 'dark' }"><i class="icon-night" @click.prevent="changeTheme('dark')"></i></a>
				<a href="#" class="theme-change__item" :class="{ active: currTheme === 'light' }" @click.prevent="changeTheme('light')"><i class="icon-sun"></i></a>
			</div>
		</div>
	</header>
	<!-- HEADER EOF   -->
</template>

<script>
import LangDropdown from "./LangDropdown/";
import { mapActions, mapGetters } from "vuex";
export default {
	name: "Header",
	components: {
		LangDropdown,
	},
	computed: {
		...mapGetters({
			currTheme: "theme/theme",
		}),
	},
	methods: {
		...mapActions({
			theme: "theme/theme",
		}),
		changeTheme(theme) {
			this.theme(theme);
		},
	},
};
</script>

<style lang="scss">
body header {
	width: 100%;
	min-width: $min-width;
	text-align: left;
	order: 1;
	-webkit-order: 1;
	padding: 67px 0 20px;
	.wrapper {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
}
.lang-select {
	width: 70px;
	height: 37px;
	background: #0c0c0d;
	border-radius: 2px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	padding-right: 18px;
	transition: all 0s;
	i {
		color: #868686;
		position: absolute;
		right: 18px;
		top: 15px;
		font-size: 8px;
		transition: all 0.3s;
	}
	img {
		width: 17px;
	}
}
.list-lang {
	position: absolute;
	left: 0;
	top: 100%;
	display: none;
	list-style: none;
	background: #1f2023;
	border-radius: 0 0 2px 2px;
	&__item {
		&.active {
			background: #2b2c30;
		}
		&.active {
			display: block;
		}
	}

	&__link {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 70px;
		height: 37px;
		padding-right: 18px;
		img {
			width: 16px;
		}
	}
}
.box-lang {
	position: relative;
	margin-right: 8px;
	margin-left: auto;
	width: 70px;
	height: 37px;
	background: #0c0c0d;
	border-radius: 2px;
	&.active {
		background: #1f2023;
		border-radius: 2px;
		.lang-select {
			background: #1f2023;
			i {
				transform: scale(1, -1);
			}
		}
		.list-lang {
			display: block;
		}
	}
}
.theme-change {
	display: flex;
	&__item {
		background: #0c0c0d;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 37px;
		color: #444545;
		border-bottom: 1px solid #060707;
		font-size: 15px;
		&.active {
			color: #fff;
			border-bottom: 1px solid #fff;
		}
		&:hover {
			color: #fff;
		}
	}
}
@keyframes rotatePlus {
	100% {
		transform: rotate(360deg);
	}
}
@keyframes rotatePlusLogo {
	0% {
		transform: rotate(00deg);
	}
	90% {
		transform: rotate(00deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
.plus-logo {
	position: relative;
	transform-origin: 9px 21px;
	animation: rotatePlusLogo 15s ease-in-out infinite;
}
.logo {
	&:hover {
		.plus-logo {
			animation: rotatePlus 2s ease-in-out 0s;
			transition-delay: 0;
		}
	}
}

@media screen and (max-width: 767px) {
	header {
		padding-top: 30px;
	}
}
</style>
