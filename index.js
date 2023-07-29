const express = require('express')
const dotenv = require("dotenv")
const cors = require('cors')
const { createProxyMiddleware } = require('http-proxy-middleware')
dotenv.config();

const app = express()
app.use(cors())
app.use(createProxyMiddleware({
    target: "https://data.nasdaq.com/api/v3",
    changeOrigin: true,
    logger: console
}))

app.listen(process.env.PORT, () => {
    console.info(`proxy server is running on port ${process.env.PORT}`)
})
