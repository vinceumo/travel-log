//https://www.npmjs.com/package/gulp-bundle-assets
var lazypipe = require('lazypipe');
var babel = require('gulp-babel');

module.exports = {
    bundle: {
        scriptsBundleMain: {
            scripts: [
                './themes/travel-log/src/js/vendors/inert.js',
                './themes/travel-log/src/js/customs/navigation.js'
            ],
            options: {
                rev: false, // {(boolean|string|Array)}
                transforms: {
                    scripts: lazypipe().pipe(babel, {
                        presets: ['env']
                    })
                }
            }
        }
    },
};
