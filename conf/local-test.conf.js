const { config: baseConfig }= require("./base.conf.js");

const localConfig = {
  // Adding browserstackLocal to browserstack-service to initiate local binary
  services: [['browserstack', { browserstackLocal: true, forcelocal: false }]], 
  capabilities: [{
    browserName: 'Chrome',
    "bstack:options": {
      buildName: 'browserstack-build-1',
      local: true, // For enabling local testing
    }
  }],
  specs: ['./tests/specs/local_test.js']
};

console.log({...baseConfig, ...localConfig})
exports.config = {...baseConfig, ...localConfig};
