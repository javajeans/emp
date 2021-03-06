const withFrameWork = require('@efox/emp-vue3')
module.exports = withFrameWork(({config}) => {
  const projectName = 'vue3Ts'
  const port = 8004
  config.output.publicPath(`http://localhost:${port}/`)
  config.devServer.port(port)
  config.plugin('mf').tap(args => {
    args[0] = {
      ...args[0],
      ...{
        name: projectName,
        library: {type: 'var', name: projectName},
        filename: 'emp.js',
        /* exposes: {
          './Content': './src/components/Content',
          './Button': './src/components/Button',
        }, */
      },
    }
    return args
  })
  //
  config.plugin('html').tap(args => {
    args[0] = {
      ...args[0],
      ...{
        title: 'EMP Vue3 Typescript',
        files: {},
      },
    }
    return args
  })
})
