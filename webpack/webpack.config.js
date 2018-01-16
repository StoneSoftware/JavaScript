const path=require('path');
module.exports = {
  entry: './app.js',
  output: {
	//不配做默认当前路径
	path:path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.txt$/, loader: 'raw-loader' },
	  { test: /\.css$/, loader: 'style-loader!css-loader'}
    ]
  }
};