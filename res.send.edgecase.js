'use strict'

var express = require('../')
var request = require('supertest')

describe('res.send edge cases', function () {
  it('should send an empty string response correctly', function (done) {
    var app = express()

    app.get('/', function (req, res) {
      res.send('')
    })

    request(app)
      .get('/')
      .expect(200)
      .expect('content-type', /text\/html/)
      .expect('')
      .end(done)
  })
})
