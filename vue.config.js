module.exports = {
  devServer: {
    // disableHostCheck: true,
    // port: 8080,
    // public: '0.0.0.0:8080'
    // port: 8080,
    // contentBase: path.resolve(__dirname, 'public'),
    // host: 'localhost',
    // client: {
    //   host: '0.0.0.0',
    //   webSocketURL: 'ws://0.0.0.0:8080/ws',
    // },
    // public: '0.0.0.0:8080',
    client: {
      webSocketURL: 'ws://0.0.0.0:8080/ws',
    },
  },
  publicPath: './',
};
