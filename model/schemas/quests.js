module.exports = function (mongo) {
  return mongo.Schema({
    name: String
    , type: String
		, links: Array
		,	description: String
		,	solution: String
  })
}