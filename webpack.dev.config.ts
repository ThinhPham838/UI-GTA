import path from 'path';
import { HotModuleReplacementPlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import TerserPlugin from 'terser-webpack-plugin';

const resolveApp = relativePath => path.resolve(__dirname, relativePath);

// Xử lý biến môi trường
const getEnvName = env => {
  console.log('env', env);
  if (env) {
    switch (env.file) {
      case 'development':
        return '.development';
      case 'production':
        return '.production';
      default:
        return '.development';
    }
  }
};

module.exports = env => ({
  mode: 'development',

  entry: './src/index.tsx',
  resolve: {
    fullySpecified: false,
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
    alias: {
      '@components': resolveApp('src/components/'),
      '@utils': resolveApp('src/utils/'),
      '@pages': resolveApp('src/pages/'),
      '@lib': resolveApp('src/lib/'),
      '@slice': resolveApp('src/app/slice/'),
      '@apis': resolveApp('src/apis/'),
      '@models': resolveApp('src/models/'),
      '@app': path.resolve(__dirname, 'src/')
    }
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      minSize: 200 * 1024,
      maxSize: 1200 * 1024,
      maxAsyncRequests: Infinity,
      maxInitialRequests: Infinity,
      cacheGroups: {
        modules: {
          minSize: 200 * 1024,
          maxSize: 1200 * 1024,
          test: /[\\/]node_modules[\\/]/,
          name: 'modules_vdrs',
          chunks: 'all',
          reuseExistingChunk: true
        },
        components: {
          minSize: 200 * 1024,
          maxSize: 800 * 1024,
          name: 'components_vdrs',
          chunks: 'all',
          minChunks: 2,
          test: /[\\/]src[\\/]components[\\/]/,
          priority: -5,
          reuseExistingChunk: true
        },
        apps: {
          minSize: 200 * 1024,
          maxSize: 800 * 1024,
          name: 'appstore_vdrs',
          chunks: 'initial',
          minChunks: 2,
          test: /[\\/]src[\\/]app[\\/]/,
          priority: -5,
          reuseExistingChunk: true
        },
        pages: {
          minSize: 200 * 1024,
          maxSize: 800 * 1024,
          name: 'pages_vdrs',
          chunks: 'all',
          minChunks: 2,
          test: /[\\/]src[\\/]pages[\\/]/,
          priority: -5,
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    // new BundleAnalyzerPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/09854504-6f38-44fb-b81f-180624/[name].css', // ẩn line optimization này khi run start | nhớ đổi version + ngày build cho thư mục chứa
      chunkFilename: 'css/09854504-6f38-44fb-b81f-180624/[id].css' // ẩn line optimization này khi run start | nhớ đổi version + ngày build cho thư mục chứa
    }),
    new HotModuleReplacementPlugin(),
    new ForkTsCheckerWebpackPlugin({
      async: false
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx']
    }),
    new Dotenv({
      path: `./env/.env${getEnvName(env.file)}`,
      safe: false,
      systemvars: true
    }),
    new CopyPlugin({
      patterns: [{ from: 'src/public', to: 'src/public' }],
      options: {
        concurrency: 100
      }
    })
  ],
  output: {
    publicPath: '/'
  },
  devtool: 'inline-source-map', // tính năng tra lỗi trên file khi bundle
  devServer: {
    static: {
      directory: path.join(__dirname, './')
    },
    compress: true,
    historyApiFallback: true,
    port: 3030,
    open: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
        use: ['file-loader']
      },
      {
        test: /\.(ts|js)x$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(ts|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: false
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
      {
        test: /\.svg/,
        use: ['@svgr/webpack']
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader'
        ]
      }
    ]
  }
});
