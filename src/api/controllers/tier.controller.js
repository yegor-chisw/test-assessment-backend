const tierService = require('../services/tier.service');

exports.getAll = async (req, res, next) => {
  const tiers = await tierService.findAllTiers();

  res.send(tiers);
};

exports.getByPid = async (req, res, next) => {
  const tid = parseInt(req.params.tid, 10);
  const pid = parseInt(req.params.pid, 10);

  const tiers = await tierService.findWithButton(tid, pid);

  res.send(tiers);
};
