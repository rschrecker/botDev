function rand (list) {
    return list[Math.floor(Math.random()*list.length)];
}

function lastRoundWasDraw(gamestate) {
    const len = gamestate.rounds.length;
    return gamestate.rounds[len - 1][1] === gamestate.rounds[len - 1][2];
}

function countDynamite (gamestate, player) {
    return gamestate.rounds.map(round => round.player).filter(move => move === 'D').length;
}

function dynamiteRatio (gamestate, player) {
    return countDynamite(gamestate, player)/gamestate.rounds.map(round => round.player).length;
}

const rps = ['R', 'P', 'S'];

class ForgetMeBot {
    makeMove(gamestate) {
        if (lastRoundWasDraw(gamestate) && dynamiteRatio(gamestate, 1) >= 0.09) {
            return rand([rand(rps), 'W', 'D']);
        }
        return rand(rps);
    }
}

module.exports = new ForgetMeBot();