const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = app =>{
    app.use(
        createProxyMiddleware('/v4/competitions/2000/standings',{
            target:'https://api.football-data.org/',
            changeOrigin:true,
        })
    )
}