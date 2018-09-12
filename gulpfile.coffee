gulp = require 'gulp'
coffee = require 'gulp-coffee'
pug = require 'gulp-pug'
sass = require 'gulp-sass'
concat = require 'gulp-concat'
uglify = require 'gulp-uglify'
cleanCSS = require 'gulp-clean-css'
del = require 'del'

gulp.task 'clean', () ->
  del './gen/**/*'

gulp.task 'coffee', () ->
  gulp.src './src/coffee/*.coffee'
      .pipe coffee()
      .pipe gulp.dest './gen/js'

gulp.task 'pug', () ->
  gulp.src './src/pug/*.pug'
    .pipe pug
      pretty: true
    .pipe gulp.dest './'

gulp.task 'sass', () ->
  gulp.src './src/sass/*.scss'
    .pipe sass()
    .pipe gulp.dest './gen/css'

gulp.task 'js', () ->
  gulp.src ['./gen/js/*.js']
    .pipe concat 'counter.js'
    .pipe uglify()
    .pipe gulp.dest './bin/js'

gulp.task 'css', () ->
  gulp.src ['./gen/css/*.css']
    .pipe concat 'counter.css'
    .pipe cleanCSS()
    .pipe gulp.dest './bin/css'

gulp.task 'compile', gulp.series('clean', 'coffee', 'sass', 'pug', 'js', 'css')

gulp.task 'watch', () ->
  coffeePath = './src/coffee/*.coffee'
  pugPath = './src/pug/*.pug'
  sassPath = './src/sass/*.scss'
  gulp.watch [coffeePath, pugPath, sassPath], gulp.series('compile')

gulp.task 'default', gulp.series('compile', 'watch')
