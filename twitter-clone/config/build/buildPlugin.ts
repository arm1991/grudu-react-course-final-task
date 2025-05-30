import webpack, { type Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/types';

export function buildPlugins(options: BuildOptions): Configuration['plugins'] {
  const isDev = options.mode === 'development';
  const isProd = options.mode === 'production';

  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({ template: options.paths.html }),
  ];

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
      })
    );
  }

  plugins.push(
    new webpack.DefinePlugin({
      'process.env.AUTH_COOKIES': JSON.stringify(process.env.AUTH_COOKIES),
      'process.env.USER_COOKIES': JSON.stringify(process.env.USER_COOKIES),
      'process.env.CLIENT_URL': JSON.stringify(process.env.CLIENT_URL),
      'process.env.SERVER_URL': JSON.stringify(process.env.SERVER_URL),
      'process.env.BUILD_MODE': JSON.stringify(process.env.BUILD_MODE),
      'process.env.PORT': JSON.stringify(process.env.PORT),
      // add more env vars as needed
    }),
  )

  if (isDev) {
    plugins.push(new webpack.ProgressPlugin());
  }

  return plugins;
}
