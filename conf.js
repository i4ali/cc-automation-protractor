exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./**/*spec.js'],
  suites:{
      smoke: './smoke/officerdashboard-spec.js',
  },
  allScriptsTimeout: 20000,
  onPrepare: function () {
  browser.driver.manage().window().maximize();
  }
};