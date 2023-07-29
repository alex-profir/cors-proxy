const express = require('express')
const dotenv = require("dotenv")
const cors = require('cors')
const { createProxyMiddleware } = require('http-proxy-middleware')
dotenv.config();

const app = express()
app.use(cors())
app.use(createProxyMiddleware({
    router: (req) => new URL(req.path.substring(1)),
    pathRewrite: (path, req) => (new URL(req.path.substring(1))).pathname,
    changeOrigin: true,
    logger: console
}))

app.listen(process.env.PORT, () => {
    console.info(`proxy server is running on port ${process.env.PORT}`)
})
