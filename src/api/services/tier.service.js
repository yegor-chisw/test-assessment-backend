const Tier = require('../models/tier.model');
const Button = require('../models/button.model');

class TierService {
  constructor() {
    this.tierModel = Tier;
    this.buttonModel = Button;
  }

  findAllTiers() {
    return this.tierModel.find();
  }

  async findWithButton(tierId, packageId) {
    const [signUp, getStarted, contactUs] = await this.buttonModel.find();

    let tier = await this.tierModel.findOne({ tid: tierId });
    tier = tier.toObject();

    tier.packages.forEach((tierPackage) => {
      if (tierPackage.pid === packageId) {
        tierPackage.button = signUp;
        tierPackage.cost = 100500;
      } else if (!tierPackage.button) {
        tierPackage.button = getStarted;
      } else {
        tierPackage.button = contactUs;
      }
    });

    return tier;
  }
}

const tierService = new TierService();

module.exports = tierService;
