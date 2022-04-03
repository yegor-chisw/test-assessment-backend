const tierService = require('../services/tier.service');

exports.getAll = async (req, res, next) => {
  const tiers = await tierService.findAllTiers();

  res.json(tiers);
};

exports.getByPid = async (req, res, next) => {
  const tid = +req.params.tid;
  const pid = +req.params.pid;

  const tiers = await tierService.findWithButtonsStyles(tid, pid);

  res.json(tiers);
};
