require("dotenv").config()

dbPassword=process.env.MONGODB;

module.exports = {
  mongoURI: dbPassword
};