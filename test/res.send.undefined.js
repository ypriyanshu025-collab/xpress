'use strict'

var express = require('../')
var request = require('supertest')

describe('res.send(undefined)', function () {
  it('should handle undefined body correctly', function (done) {
    var app = express()

    app.get('/', function (req, res) {
      res.send(undefined)
    })

    request(app)
      .get('/')
      .expect(200)
      .expect('')
      .end(done)
  })
})
