function roll(numSides,numDice,numRolled){
    function rollDice(min, max) {
        return min + Math.floor(Math.random() * (max - min + 1));
    }

    const results = [];

    for (let i = 0; i < numRolled; i++) {
        let score = 0;
        for (let ii = 0; ii < numDice; ii++) {
            score += rollDice(1, numSides)
        }
        results.push(score);
    }
    return{
        sides: numSides,
        dice: numDice,
        rolls: numRolled,
        results: results

    };
}

module.exports = { roll };