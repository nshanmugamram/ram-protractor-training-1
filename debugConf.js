var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
    dest: './built/reports',
    filename: 'e2e.html',
    ignoreSkippedSpecs: true,
    showQuickLinks: true,
    showSummary: true
});

const disableNgAnimate = function() {
  angular.module('disableNgAnimate', []).run(['$animate', function($animate) {
    $animate.enabled(false);
  }]);
};

exports.config = {

    allScriptsTimeout: 11000,

    specs: [
        "./built/end2end/js/**/app.spec.js",
        "./built/end2end/js/**/exercise1.spec.js",
        "./built/end2end/js/**/exercise2.spec.js",
        "./built/end2end/js/**/exercise3.spec.js"
    ],

    capabilities: {
        'browserName': 'chrome',
        chromeOptions: {
            args: [
                "--start-maximized",
                "incognito"
            ]
        }
    },

    directConnect: true,
    framework: 'jasmine',

    baseUrl: 'http://localhost:9000/testapp/',    

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000,
        showColors: true,
        includeStackTrace: true
    },

    beforeLaunch: function () {       
        return new Promise(function (resolve) {
            reporter.beforeLaunch(resolve);
        });
    },

    onPrepare: function () {
        jasmine.getEnv().addReporter(reporter);

        browser.addMockModule('disableNgAnimate', disableNgAnimate);
        
        require('ts-node').register({
            project: './'
        });

        return browser.getProcessedConfig().then(function (config) {
            global.capabilities = config.capabilities;
        });
    },

    afterLaunch: function (exitCode) {
        return new Promise(function (resolve) {
            reporter.afterLaunch(resolve.bind(this, exitCode));
        });
    }
};

