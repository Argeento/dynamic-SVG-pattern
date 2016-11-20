const gulp = require('gulp');

const rollup = require('gulp-rollup');

const eslint = require('gulp-eslint');
const eslintConfig = require('./config/eslint/cr.json');

const rename = require('gulp-rename');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const banner = require('gulp-banner');

const packageInfo = require( './package.json' );
const copyInfo = `/*! ${packageInfo.name} v${packageInfo.version} | ` + 
	`(c) ${new Date().getFullYear()} ${packageInfo.author.name} (${packageInfo.author.nick}) | ` + 
	`${packageInfo.license} license */\n\n`;

gulp.task('build', () => {
	gulp.src('./src/**/*.js')

		// eslint
		.pipe(eslint(eslintConfig))
		.pipe(eslint.format())

		// bundle
		.pipe(rollup({
			entry: 'src/index.js',
			format: 'iife',
		}))

		// to ES5
		.pipe(babel({presets: ['es2015']}))

		// save
		.pipe(banner(copyInfo))
		.pipe(rename(`${packageInfo.name}.js`))
		.pipe(gulp.dest('./dist'))
		

		// save min
		.pipe(uglify())
		.pipe(banner(copyInfo))
		.pipe(rename(`${packageInfo.name}.min.js`))
		.pipe(gulp.dest('./dist'));
});

gulp.task('watch', () => {
	gulp.watch('./src/**/*.js', ['build']);
});