var assert = require('assert');
var Tournament = require('./tournament.js');

var { Bracket, Player, Match } = Tournament;

describe('Tournament', function() {

  var p1 = new Player(1, "James");
  var p2 = new Player(2, "Larry");
  var p3 = new Player(3, "Sarah");
  var p4 = new Player(4, "Cody");
  var p5 = new Player(5, "Bobby");
  var p6 = new Player(6, "Annabelle");
  var p7 = new Player(7, "Nancy");
  var p8 = new Player(8, "Ricky");

  var m1 = {
    player1: 1,
    player2: 2,
    winner: 1
  }
  var m2 = {
    player1: 3,
    player2: 4,
    winner: 4
  }
  var m3 = {
    player1: 5,
    player2: 6,
    winner: 6
  }
  var m4 = {
    player1: 7,
    player2: 8,
    winner: 7
  }
  var m5 = {
    player1: 1,
    player2: 4,
    winner: 4
  }
  var m6 = {
    player1: 6,
    player2: 7,
    winner: 7
  }
  var m7 = {
    player1: 4,
    player2: 7,
    winner: 7
  }

  var players = [p1, p2, p3, p4, p5, p6, p7, p8];

  describe('#buildTree', function() {
    var b1 = new Bracket(players.slice(0,-1), [])
    it('should throw an error if the number of players is not a power of two', function() {
      assert.throws(b1.buildTree, Error)
    })
  })
  describe('#getAllRounds', function() {
    var b1 = new Bracket(players, [])
    it('should return an array containing all of the rounds in the tournament', function() {
      var rounds = b1.getAllRounds()
      rounds.forEach(round => {
        assert.equal(round.every(match => match instanceof Match), true)
      })
    })
    it('should return an array containing 3 rounds', function() {
      var rounds = b1.getAllRounds()
      rounds.forEach(round => {
        assert.equal(round.every(match => match instanceof Match), true)
      })
    })
  })
  describe('#getTree', function() {
    it('should return the correct matches when given an array of matches', function() {
      var matches = [m1,m2,m3,m4,m5,m6,m7]
      var b1 = new Bracket(players, matches)
      var rounds = b1.getTree()
      assert.equal(rounds[1][0].player1.position, 1)
      assert.equal(rounds[1][0].player2.position, 4)
      assert.equal(rounds[1][1].player1.position, 6)
      assert.equal(rounds[1][1].player2.position, 7)
      assert.equal(rounds[2][0].player1.position, 4)
      assert.equal(rounds[2][0].player2.position, 7)
      assert.equal(rounds[2][0].winner.position, 7)
    })
    it('should not update future matches if previous matches did not occur', function() {
      var matches = [m1,m2,m5,m7]
      var b1 = new Bracket(players, matches)
      var rounds = b1.getTree()
      assert.equal(rounds[1][0].player1.position, 1)
      assert.equal(rounds[1][0].player2.position, 4)
      assert.equal(rounds[1][1].player1, null)
      assert.equal(rounds[1][1].player2, null)
      assert.equal(rounds[2][0].player1.position, 4)
      assert.equal(rounds[2][0].player2, null)
      assert.equal(rounds[2][0].winner, null)
    })
    it('should be able to be represented as JSON', function() {
      var matches = [m1,m2,m3,m4,m5,m6,m7]
      var b1 = new Bracket(players, matches)
      assert.doesNotThrow(() => JSON.stringify(b1.getTree()), TypeError)
    })
  })
})
