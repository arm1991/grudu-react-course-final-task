import 'webpack-dev-server';
import path from 'path';
import dotenv from 'dotenv';
import webpack from 'webpack';

import { buildWebpack } from './config/build/buildWebpack';
import { type BuildMode } from './config/build/types/types';

dotenv.config();

export default (): webpack.Configuration => {
  const { PORT, BUILD_MODE } = process.env;

  const mode = (BUILD_MODE ?? 'development') as BuildMode;
  const port = Number(PORT) || 3200;

  const options = {
    mode,
    paths: {
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      output: path.resolve(__dirname, 'build'),
      html: path.resolve(__dirname, 'public', 'index.html'),
      src: path.resolve(__dirname, 'src'),
    },
    port,
  };

  const config = buildWebpack(options);

  return config;
};
