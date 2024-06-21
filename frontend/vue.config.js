const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	lintOnSave: false,
  transpileDependencies: true,
	devServer: {
		port: 9000,
		open: false,
		proxy: {
			"/django": {
				pathRewrite: {'/django/' : ''},
				// pathRewrite: function(path, req) {
				// 	// console.log('path', path)
				// 	// console.log('req', req)
				// 	if(path.indexOf("/django/" >= 0)) {
				// 		const replacedPath = path.replace("/django/", "")
				// 		// console.log('replacedPath', replacedPath)
				// 		return replacedPath
				// 	}
				// },
				"target": "http://localhost:9010/",
			},
			"/node": {
				pathRewrite: function(path, req) {
					// console.log('path', path)
					// console.log('req', req)
					if(path.indexOf("/node/" >= 0)) {
						const replacedPath = path.replace("/node/", "")
						// console.log('replacedPath', replacedPath)
						return replacedPath
					}
				},
				"target": "http://localhost:9020",
				"secure": false
			}
		}
	},
})


