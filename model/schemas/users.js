module.exports = function (mongo) {

  return mongo.Schema({
    data: {
      firstName: String
      , lastName: String
      , group: String
      , solutions: Array
    },
    date: Number,
    correctCount: Number,
    totalCount: Number
  });
};