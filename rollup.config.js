import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
// import postcss from 'rollup-plugin-postcss';
import sass from 'rollup-plugin-sass';


const format = process.env.FORMAT === 'cjs' ? 'cjs' : 'iife';

export default {
  input: 'src/main.jsx',
  output: [
    {
      format,
    },
  ],
  plugins: [
    resolve({
      extensions: ['.jsx', '.js'],
    }),
    commonjs(),
    babel({
      exclude: './node_modules/**',
    }),
    sass(),
    postcss(),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};