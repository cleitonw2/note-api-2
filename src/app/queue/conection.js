const Bull = require("bull");
const redisConfig = require("../../config/redis");

const Queue = new Bull("Queue", { redis: redisConfig });

module.exports = Queue;