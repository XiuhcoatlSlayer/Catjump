const mongoose = require(`mongoose`);

const currentCatSchema = new mongoose.Schema({

    name: { type: String, default: `Cat` },
    gender: { type: String, default: `female` },
    generation: { type: Number, default: 0 },
    maxLevel: { type: Number, default: 0 },
    currentLevel: { type: Number, default: 1 },
    currentPower: { type: Number, default: 1 },
    pattern: { type: String, default: `default` },
    timesFed: { type: Number, default: 0 },
    timesPlayed: { type: Number, default: 0 },
    timesTrained: { type: Number, default: 0 },
    timesBred: { type: Number, default: 0 },
    leagueBattles: { type: Number, default: 0 },
    leagueVictories: { type: Number, default: 0 },

});

const achievementSchema = new mongoose.Schema({

    catsRaised: { type: Number, default: 1 },
    catsBred: { type: Number, default: 0 },
    timesFed: { type: Number, default: 0 },
    timesPlayed: { type: Number, default: 0 },
    timesTrained: { type: Number, default: 0 },
    timesBred: { type: Number, default: 0 },
    timesBredSuccessfully: { type: Number, default: 0 },
    leagueBattles: { type: Number, default: 0 },
    leagueVictories: { type: Number, default: 0 },
    patternsCollected: { type: Number, default: 1 }

});

const pastCatSchema = new mongoose.Schema({
    pastCats: [currentCatSchema]
});

const userSchema = new mongoose.Schema({

    userID: { type: Number, default: 0 },
    coinBalance: { type: Number, default: 0 },
    starBalance: { type: Number, default: 0 },
    playerLevel: { type: Number, default: 0 },

    currentGeneration: { type: Number, default: 1 },
    currentCat: currentCatSchema,
    achievements: achievementSchema

});

const Users = mongoose.model("Users", userSchema);
const CurrentCats = mongoose.model("CurrentCats", currentCatSchema)
const PastCats = mongoose.model("PastCats", pastCatSchema)
const Achievements = mongoose.model("Achievements", achievementSchema);

module.exports = {
    Users,
    CurrentCats,
    PastCats,
    Achievements
};