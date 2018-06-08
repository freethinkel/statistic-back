module.exports = function (mongo) {

  const answerSchema = mongo.Schema({
    qId: String
    , answer: String
    , isCorrect: Boolean
    , points: Number
    , type: Boolean
  }, { _id: false });


  return mongo.Schema({
    firstName: String
    , lastName: String
    , group: String
  })
}