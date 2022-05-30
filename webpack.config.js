const path = require("path")


/**
 * 普通应用
 */
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "webpack-numbers.js",
  },
  externals: {
    lodash: "_",
    react: "React"
  }
}


/**
 * 构建 umd 格式的包
 */
// module.exports = {
//   mode: "development",
//   entry: "./src/index.js",
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: "webpack-numbers.js",
//     library: {
//       name: "webpackNumbers",
//       type: "umd"
//     }
//   },
//   externals: {
//     lodash: "_",
//     react: "React"
//   }
// }


/**
 * 构建 umd 格式的包
 */
// module.exports = {
//   mode: "development",
//   entry: "./src/index.js",
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: "webpack-numbers.js",
//     library: {
//       name: "webpackNumbers",
//       type: "umd"
//     }
//   },
//   externals: {
//     lodash: {
//       commonjs: 'lodash',
//       commonjs2: 'lodash',
//       amd: 'lodash',
//       root: '_'
//     },
//     react: "React"
//   }
// }
