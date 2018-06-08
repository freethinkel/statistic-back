module.exports = function (mongo) {

  const answerSchema = mongo.Schema({
    qId: String
    , answer: String
    , isCorrect: Boolean
    , points: Number
    , type: Boolean
  }, { _id: false });


  return mongo.Schema({
    email: String
    , phoneNum: String
    , name: String
    , lastName: String
    , surname: String
    , category: String
    , about: String
    , quizResults: [answerSchema]
  })
}