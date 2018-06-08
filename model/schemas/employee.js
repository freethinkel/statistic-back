module.exports = function (mongo) {
  return mongo.Schema({
    login: String
    , pass: String
    , role: Boolean
  })
}