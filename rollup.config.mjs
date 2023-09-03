import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import sass from 'rollup-plugin-sass';
import jsx from 'rollup-plugin-jsx';

// const format = process.env.FORMAT === 'cjs' ? 'cjs' : 'iife';

export default {
  input: 'src/main.jsx',
  output: [
    {
      file: 'dist/bundle.js',
    },
  ],
  plugins: [
    resolve({
      extensions: ['.jsx', '.js'],
    }),
    commonjs(),
    babel({
      exclude: './node_modules/**',
      presets: ['@babel/preset-react'],
    }),
    sass(),
    postcss(),
    jsx({ factory: 'React.createElement' }),
  ],
};