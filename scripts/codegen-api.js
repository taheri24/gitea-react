const { codegen } = require('swagger-axios-codegen')
codegen({
  source: require('./swagger.v1.json'),
  outputDir:'./src/app/api',
  multipleFileMode:true
})
 