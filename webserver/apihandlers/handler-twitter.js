const twitterAPI = require('../config/twitterAPI')

const twitterHandler = {
  getTimeline: ( request, response, next ) => {
    twitterAPI.get(
      'statuses/user_timeline',
      { 'q': {
        screen_name: 'resoltz',
        recent:'mixed'}
      },
      (error, tweets, twitterResponse) => {
        if ( error ) {
          let err = new Error('User timeline not fetched.')
          console.log( error )
        }
        response.status(200).json( tweets )
    })
  },

  getFeed: ( request, response, next ) => {
    twitterAPI.get(
      'statuses/user_timeline',
      { 'q': {
        screen_name: 'resoltz',
        recent:'mixed'}
      },
      (error, tweets, twitterResponse) => {
        if ( error ) {
          response.status(406).send(error)
        } else {
          response.status(200).render('tweetfeed', {
            tweets
          })

        }
    })
  },

  createTweet: ( request, response, next ) => {
    const newTweet = {
      status: request.body.status,
    }
    twitterAPI.post( 'statuses/update', newTweet, (error, tweet, tweetResponse) => {
      if (!error) {
        response.status(201).send('/feed')
      } else {
        response.status(400).send('/error')
      }
    })
  },

  deleteTweet: ( request, response, next ) => {
    let { id_str } = request.params
    twitterAPI.post(
      'statuses/destroy/'+id_str+'.json',
      (error, tweets, twitterResponse) => {
          response.status(202).send('/feed')
    })
  }
}

module.exports = twitterHandler
