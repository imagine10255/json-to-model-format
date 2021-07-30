const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app) {
    const proxyApiDomain = process.env.PROXY_API_DOMAIN;
    const proxyStorageDomain = process.env.PROXY_STORAGE_DOMAIN;

    // API
    if(proxyApiDomain){
        app.use(
            createProxyMiddleware('/api5-member/api',{
                target: proxyApiDomain,
                changeOrigin: true,
                // timeout: 120000,
                // proxyTimeout: 120000,
                // pathRewrite: {
                //     '^/api': '/api', // rewrite path
                // },
            })
        );
    }

    // Storage (Backend Upload File)
    if(proxyStorageDomain){
        app.use(
            createProxyMiddleware('/FileUpload',{
                target: proxyStorageDomain,
                changeOrigin: true,
                // pathRewrite: {
                //     '^/uploads': '/FileUpload', // remove base path
                // },
            })
        );
    }


};
