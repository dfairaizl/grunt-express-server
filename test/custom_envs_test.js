/*
 * grunt-express-server
 * https://github.com/ericclemmons/grunt-express-server
 *
 * Copyright (c) 2013 Eric Clemmons
 * Licensed under the MIT license.
 */

'use strict';

var get = require('./lib/get');

module.exports.custom_envs = {
  test_envs: function(test) {
    test.expect(2);

    get('http://localhost:3000/env1', function(res, body) {
      test.equal(res.statusCode, 200, 'should return 200');
      test.equal(body, 'Howdy env1=value1 from development!', 'should return dynamic page');
      test.done();
    }, function(err) {
      test.done();
    });
  },

  test_runs_in_development: function(test) {
    test.expect(2);

    get('http://localhost:3000/env', function(res, body) {
      test.equal(res.statusCode, 200, 'should return 200');
      test.equal(body, 'Howdy from development!', 'should return dynamic page');
      test.done();
    }, function(err) {
      test.done();
    });
  }
};
