const { createProxyMiddleware } = require('http-proxy-middleware')

const DEV_SERVER = 'localhost:4545'

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: `http://${DEV_SERVER}`,
            logLevel: 'debug',
            secure: false,
            pathRewrite: {
                '^/api/': '/', // rewrite path
            },
        }),
    )

    // const socketProxy = createProxyMiddleware('/socket', {
    //     target: `http://${DEV_SERVER}`,
    //     changeOrigin: true,
    //     ws: true,
    //     logLevel: 'debug',
    // })

    // app.use(socketProxy)
}
