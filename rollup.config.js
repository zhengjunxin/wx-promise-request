import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import fs from 'fs'
import eslint from 'rollup-plugin-eslint'

const isProduction = process.env.NODE_ENV === 'production'
const getPackageName = () => JSON.parse(fs.readFileSync('./package.json', 'utf8')).name

export default {
    entry: 'src/index.js',
    format: 'umd',
    moduleName: getPackageName(),
    plugins: [
        eslint({exclude: 'node_modules/**'}),
        resolve({ jsnext: true, main: true }),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
        }),
        (isProduction && uglify())
    ],
    dest: 'dist/index.js',
}