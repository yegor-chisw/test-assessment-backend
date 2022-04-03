const mongoose = require('mongoose');
const Tier = require('../api/models/tier.model');
const { Package } = require('../api/models/package.model');
const Button = require('../api/models/button.model');

require('dotenv/config');

const { MONGO_HOST, MONGO_PORT, MONGO_DB } = process.env;
const uri = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`;

mongoose
  .connect(uri)
  .then(() => {
    console.log('Successfully connected to the db');
  })
  .catch((err) => {
    console.error(err);
  });

const seedPackages = [
  {
    pid: 1,
    cost: 0,
    name: 'free',
    serviceList: ['10 users included', '2 GB of storage', 'Email support', 'Help center access']
  },
  {
    pid: 2,
    cost: 15,
    name: 'pro',
    serviceList: [
      '20 users included',
      '10 GB of storage',
      'Priority email support',
      'Help center access'
    ]
  },
  {
    pid: 3,
    cost: 29,
    name: 'enterprise',
    serviceList: [
      '30 users included',
      '15 GB of storage',
      'Phone and email support',
      'Help center access'
    ]
  }
];

const seedTiers = [
  {
    tid: 1,
    title: 'Tier-1',
    description:
      'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.',
    packages: seedPackages
  },
  {
    tid: 2,
    title: 'Tier-2',
    description:
      'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.',
    packages: seedPackages
  },
  {
    tid: 3,
    title: 'Tier-3',
    description:
      'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.',
    packages: seedPackages
  }
];

const seedButtons = [
  {
    btnClass: 'btn-outline-primary',
    textButton: 'Sign up for free'
  },
  {
    btnClass: 'btn-primary',
    textButton: 'Get Started'
  },
  {
    btnClass: 'btn-primary',
    textButton: 'Contact us'
  }
];

const seedDB = async () => {
  await Package.deleteMany({});
  await Tier.deleteMany({});
  await Button.deleteMany({});

  await Package.insertMany(seedPackages);
  await Tier.insertMany(seedTiers);
  await Button.insertMany(seedButtons);
};

seedDB().then(() => {
  mongoose.connection.close();
});
