module.exports = function (mongo) {
  return mongo.Schema({
    qNumber: {
      first: Number,
      second: Number,
      third: Number
    }, infBlock: {
      first: {
        title: String,
        subTitle: String,
        text: String
      },
      second: {
        title: String,
        subTitle: String,
        text: String
      }
    }, percentBlock: {
      first: {
        capt: Number,
        text: String
      },
      second: {
        capt: Number,
        text: String
      },
      third: {
        capt: Number,
        text: String
      }
    }, desc: {
      quiz: {
        title: String
        , text: String
      }, 
      anketaText: String,
      resultText: String
    } 
  })
}