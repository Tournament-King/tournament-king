/**
* Creates a new Player
* @class
* @param {integer} position - The player's position in the tournament (1...n).
* @param {string} name - The player's name.
*/
class Player {
  constructor(position, name) {
    this.position = position;
    this.name = name;
  }
}

/**
* Creates a new Match
* @class
  @param {integer} id - The id of the match.
* @param {object} left - A reference to the left child.
* @param {object} right - A reference to the right child.
*/
class Match {
  constructor(id, left, right) {
    this.id = id
    this.left = left
    this.right = right
    this.parent = null
    this.player1 = null
    this.player2 = null
  }
  setParent(parent) {
    this.parent = parent
  }
  setWinner(winner) {
    this.winner = winner
    var parent = this.parent
    if (parent) {
      if (parent.player1) {
        parent.player2 = winner
      } else {
        parent.player1 = winner
      }
    }
  }
  setPlayer1(player1) {
    this.player1 = player1
  }
  setPlayer2(player2) {
    this.player2 = player2
  }
}

/**
* Creates a new Tournament Bracket.
* @class
* @param {array} players - The players in the tournament. Number of players must be a power of 2.
* @param {array} matches - The matches in the tournament.
*/
class Bracket {
  constructor(players, matches) {
    this.players = players;
    this.matches = matches;
  }
  // Build a binary tree from the players (leaves)
  // This will give us the structure we need to update a parent match when a
  // winner has been declared for any given match
  buildTree() {
    var tree = this.players.slice()

    if (!tree.length || !tree.length & tree.length-1 === 0) {
      throw new Error("Number of players in the tournament must be a power of 2")
    }


    var matchIDs = this.matches.map(m => m.id)

    while (tree.length > 1) {
      var a = tree.shift()
      var b = tree.shift()
      var matchID = matchIDs.shift()
      var match = new Match(matchID, a, b)
      if (a instanceof Match) {
        a.setParent(match)
      } else {
        match.setPlayer1(a)
      }
      if (b instanceof Match) {
        b.setParent(match)
      } else {
        match.setPlayer2(b)
      }
      tree.push(match)
    }
    return tree
  }
  // Perform a level-order traversal on the tree, grouping the nodes by level.
  // Each level (excluding the last) represents a round in the tournament.
  // The resulting array will include all rounds in the tournament, with the first round at index 0.
  getAllRounds() {
    var root = this.buildTree()[0]
    var levels = [[root]]
    function getNextLevel(level) {
      var nextLevel = []
      while (level.length) {
        var currentNode = level.shift()
        if (currentNode instanceof Match) {
          nextLevel.push(currentNode.left)
          nextLevel.push(currentNode.right)
        }
      }
      if (nextLevel.length) {
        levels.push(nextLevel.slice())
        getNextLevel(nextLevel)
      } else {
        return
      }
    }
    getNextLevel(levels[0].slice())
    return levels.reverse().slice(1)
  }
  // After we have built the tree, look through the matches (from database), and update match with new information.
  // We must start from the bottom of the tree to ensure all information is
  // added properly (we don't know who plays in round 2 until round 1 is complete).
  // Example: One match has occurred in the first round between player1 and player2, resulting in a win for player2.
  // While we are processing the tree, we can use this information, and call the setWinner method on the
  // match between player 1 and player 2. This will also set player1 on the parent node.
  getTree() {
    var rounds = this.getAllRounds()
    var matches = this.matches;
    var players = this.players;
    rounds.forEach(round => {
      round.forEach(match => {
        var existingMatch = matches.shift()
        match.player1_score = existingMatch.player1_score
        match.player2_score = existingMatch.player2_score
        match.winner = existingMatch.winner
        match.active = existingMatch.active
        if (match.winner) {
          var winner = players.find(p => p.id === match.winner)
          match.setWinner(winner)
        }
        delete match.left
        delete match.right
        delete match.parent
      })
    })
    return rounds
  }

  getJSON() {
    return this.getTree();
  }
}

module.exports = {
  Bracket,
  Player,
  Match
}
