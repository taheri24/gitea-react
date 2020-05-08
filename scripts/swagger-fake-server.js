const mockApi = require('swagger-mock-api');
const path = require('path');
const swaggerUiAssetPath = require("swagger-ui-dist").getAbsoluteFSPath()
const fs = require('fs');
const swaggerFile = path.join(__dirname, 'swagger.v1.json');

const mockMiddleware = mockApi({
    swaggerFile,
    watch: true // enable reloading the routes and schemas when the swagger file changes
});

const express = require('express')
const port = 4331
const app = express();
app.use(mockMiddleware);
app.get('/swagger.json', (req, res) => {
    res.sendFile(swaggerFile)
})
app.get('/swagger', (req, res) => {
    const html = fs.readFileSync(path.join(swaggerUiAssetPath, 'index.html'), 'utf-8');

    res.contentType('text/html').end(html.replace('https://petstore.swagger.io/v2/swagger.json',
        `http://localhost:${port}/swagger.json`));

})
app.use('/swagger', express.static(swaggerUiAssetPath))

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))