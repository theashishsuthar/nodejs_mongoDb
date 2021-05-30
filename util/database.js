const mongoDb = require("mongodb");

const MongoClient = mongoDb.MongoClient;

let _db;

const mongoConnect = callback => {
  MongoClient.connect(
    "mongodb+srv://ashishgajjar:ytQuNV5Lzi1mqn2J@cluster0.xppry.mongodb.net/shop?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("Connected!");
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No Database founded";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
