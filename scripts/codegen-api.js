const { codegen } = require('swagger-axios-codegen')
codegen({
  source: require('./swagger.v1.json'),
  outputDir:'./src/app/api',
  modelMode:'interface',
  multipleFileMode:true
})
 