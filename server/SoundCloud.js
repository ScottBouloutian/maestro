const Song = require('./Song');

class SoundCloud extends Song {
    constructor(id, duration) {
        super('soundcloud', id, duration);
    }
}

module.exports = SoundCloud;
