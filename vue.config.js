module.exports = {
	publicPath: process.env.NODE_ENV === "development" ? "/" : "./",
	productionSourceMap: false,
	pluginOptions: {
		i18n: {
			locale: "ru",
			fallbackLocale: "ru",
			localeDir: "locales",
			enableInSFC: false,
		},
	},

	css: {
		loaderOptions: {
			sass: {
				/** Set "$width" and "$height" from "clm.config" and include global variables and mixins to all styles. **/
				prependData: `
          @import "@/style/utils/_variables.scss";
          @import "@/style/utils/_mixins.scss";`,
			},
		},
	},
};
