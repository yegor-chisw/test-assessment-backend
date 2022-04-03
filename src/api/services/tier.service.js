const Tier = require('../models/tier.model');

class TierService {
  constructor() {
    this.tierModel = Tier;
  }

  findAllTiers() {
    return this.tierModel.find();
  }

  findWithButtonsStyles(tierId, packageId) {
    return this.tierModel.aggregate([{ $match: { tid: tierId } }]);
  }
}

const tierService = new TierService();

module.exports = tierService;
