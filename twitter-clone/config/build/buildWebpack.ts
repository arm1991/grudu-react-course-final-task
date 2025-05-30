import webpack from 'webpack';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoader';
import { buildPlugins } from './buildPlugin';
import { buildResolver } from './buildResolver';
import { BuildOptions } from './types/types';

export function buildWebpack(options: BuildOptions): webpack.Configuration {
  const { mode, paths } = options;
  const isDev = options.mode === 'development';

  return {
    mode,
    entry: paths.entry,
    plugins: buildPlugins(options),
    module: { rules: buildLoaders(options) },
    resolve: buildResolver(options),
    output: {
      path: paths.output,
      filename: '[name].[contenthash].js',
      clean: true,
    },
    devtool: isDev ? 'inline-source-map' : false,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
