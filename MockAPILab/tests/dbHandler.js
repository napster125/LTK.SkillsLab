const { MongoMemoryServer } = require("mongodb-memory-server");

const mongoose = require("mongoose");

async function startMongoServer() {
  const mongoInstance = new MongoMemoryServer();
  await mongoInstance.start();
  const mongoUri = mongoInstance.getUri();
  await mongoose.connect(mongoUri);
}

module.exports = { startMongoServer };
