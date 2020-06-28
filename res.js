'use strict';

exports.ok = function(values, res) {
  var data = {
      'code': 200,
      'status': 'success',
      'result': values
  };
  res.json(data);
  res.end();
};

exports.failed = function(message, res) {
  var data = {
      'code': 500,
      'status': 'failed',
      'messgae': message
  };
  res.json(data);
  res.end();
};