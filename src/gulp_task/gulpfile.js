'use strict';

var gulp = require('gulp'),
  csslint = require('gulp-csslint'),
  htmlhint = require("gulp-htmlhint"),
  webReporter = require('gulp-hint-web-reporter'),
	del = require('del'),
	gutil = require('gulp-util'),
	browserSync = require('browser-sync').create(),
  // file name 정규식
  tmptime = new Date().toLocaleString(),
  tmptime = tmptime.replace(/\-|\:/g, ''),
  tmptime = tmptime.replace(/\s/g, '_'),
  //browsersync 는 create()라는 추가 명령어 필요
  reload = browserSync.reload;

gulp.task('clean', function() {
	return del(['logs/*.html'])
});

gulp.task('html', ['clean'], function() {
  return gulp.src('src/**/*.html')
    .pipe(htmlhint('htmlhintrc.json'))
    .pipe(webReporter({
      //hinters: ["htmlhint"],
      //logsPath: "../tmp_logs",
      filenames: {
        htmlhint: "htmlhint_" + tmptime + "_log.html"
      }
    }));
});

gulp.task('css', ['html'], function() {
  return gulp.src('src/**/*.css')
    .pipe(csslint('csslintrc.json'))
	//.pipe(csslint.reporter())
    .pipe(webReporter({
      //logsPath: "../tmp_logs",
      filenames: {
        csslint: "csslint_" + tmptime + "_log.html"
      }
    }));
});

gulp.task('server', function() {
    browserSync.init({
        //proxy : "10.80.17.103/test/gulp-lint/logs/"
		server: {
            baseDir: "./",
			directory: true
        },
		//localhost
		browser: "chrome"
    });
	gulp.watch('src/**/*.html', ['css']).on('change', reload);
	gulp.watch('src/**/*.css', ['css']).on('change', reload);
});

gulp.task('default', ['css']);

// default 샐행 후 Report 파일은 수동으로 F5(새로고침)




