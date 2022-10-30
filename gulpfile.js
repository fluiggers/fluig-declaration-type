const { src, dest } = require('gulp');
const concat = require('gulp-concat');

function build(cb) {
    src('src/**/*.ts')
        .pipe(concat('fluig.d.ts'))
        .pipe(dest('.'));

    cb();
}

exports.default = build;
