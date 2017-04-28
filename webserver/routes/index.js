const express = require('express')
const router = express.Router()
const twitterAPI = require('../config/twitterAPI')
const passport = require('passport')

const twitterHandler = require('../apihandlers/handler-twitter')

router.get('/', (request, response, next) => {
  response.json({ test: 'this is a test' })
})

router.get('/auth/twitter', passport.authenticate('twitter'))
router.get( '/auth/twitter/callback',
  passport.authenticate('twitter', { failureRedirect: '/error' }),
  (req, res) => {
    res.send('successful authentication')
  })

router.get( '/home', twitterHandler.getTimeline )
router.get( '/feed', twitterHandler.getFeed )

router.get('/create', (request, response, next) => {
  response.render('tweetcreate')
})
router.post('/create', twitterHandler.createTweet )

router.get('/edit/:id', (request, response, next) => {
  let id = request.params.id
  let editTweet
  twitterAPI.get(
    'statuses/user_timeline',
    { 'q': {
      screen_name: 'resoltz',
      recent:'mixed'}
    },
    (error, tweets, twitterResponse) => {
      for (tweet in tweets) {
        if(parseInt(tweets[tweet].id) === parseInt(id )) {
          editTweet = tweets[tweet]
        }
      }
      response.render('tweetedit', {
        editTweet
      })
    })
})
router.put('/edit/:id', ( request, response, next ) => {
  let { id } = request.params
  let editTweet = request.body
  twitterAPI.post(
    'statuses/update.json',
    { status:request.body.status },
    (error, tweets, twitterResponse) => {
      response.send('/feed')
  })
})

router.get('/delete/:id', (request, response, next) => {
  let id_str = request.params.id
    response.render('tweetDelete', {
      id_str
    })
})
router.delete('/delete/:id_str', twitterHandler.deleteTweet )

module.exports = router
