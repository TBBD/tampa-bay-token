const TampaBayToken = artifacts.require('TampaBayToken')

module.exports = function(deployer) {
  // Use deployer to state migration tasks.
  deployer.deploy(TampaBayToken)
};
