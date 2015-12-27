var Orchestrate = require('orchestrate');

function Generate(path, db) {
  return {
    get: function (id, done) {
      db.get(path, id).then(function (result) {
        done(null, result.body);
      }, function (err) {
        done(err.body);
      })
    },
    save: function (data, done) {
      db.put(path, data.id, data).then(function () {
        done(null);
      }, function (err) {
        done(err.body);
      })
    },
    all: function (done) {
      db.list(path).then(function (res) {
        done(null, res.body.results.map(function (result) {
          return result.value;
        }));
      }, function (err) {
        done(err.body);
      })
    }
  }
}


function Db(token) {
    var db = this.db = Orchestrate(token);
    this.storage = {
      teams: Generate('teams', db),
      users: Generate('users', db),
      channels: Generate('channels', db)
    };
}

module.exports = Db;
