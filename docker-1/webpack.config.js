const path = require('path');

module.exports = [{
    entry: './src/index.js', 
    target: 'node', 
    output: {
      filename: 'app.js',
      path: path.resolve(__dirname, 'dist'),
    },
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
},];
