exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./**/*spec.js'],
  suites:{
      smoke: './smoke/*spec.js',
  },
};