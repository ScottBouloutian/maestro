const Song = require('./Song');

export default class SoundCloud extends Song {
    consturctor(id, duration) {
        super('soundcloud', id, duration);
    }
}
