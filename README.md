# gulp-touch-cmd

Change file access and modification times of files copied using gulp

## Install

Install with [npm](https://npmjs.org/package/gulp-touch-cmd)

```
npm install --save-dev gulp-touch-cmd
```

## Example

```js
var gulp = require('gulp');
var touch = require('gulp-touch-cmd');

gulp.task('default', function() {
  gulp
    .src('./src/**/*')
    .pipe(gulp.dest('./dest'))
    .pipe(touch());
});
```