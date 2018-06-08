module.exports = function (mongo) {

  return mongo.Schema({
    firstName: String
    , lastName: String
    , group: String
    , countComplitedQuests: Number
  });
};