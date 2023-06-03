const { defineConfig } = require('@vue/cli-service');
module.exports = {
	transpileDependencies: true,
	lintOnSave: false,
	outputDir: '../src/main/resources/static',
	devServer: {
		proxy: {
			'/': {
				target: 'http://localhost:8090',
				changeOrigin: true,
			},
		},
	},
};
