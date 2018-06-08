module.exports = function (mongo) {

  const answerVariantSchema = mongo.Schema({
    text: String
    , onSelectMsg: String
    , isCorrect: Boolean
  }, { _id: false })

  return mongo.Schema({
    text: String
    , type: Boolean
    , imgUrl: String
    , points: Number
    , answers: [answerVariantSchema]
  });
}