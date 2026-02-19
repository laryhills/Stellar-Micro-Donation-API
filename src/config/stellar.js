require('dotenv').config();

module.exports = {
  network: process.env.STELLAR_NETWORK || 'testnet',
  secret: process.env.STELLAR_SECRET,
  port: process.env.PORT || 3000,
  dbPath: process.env.DB_PATH || './data/donations.json'
};
