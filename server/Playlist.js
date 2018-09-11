const _ = require('lodash');

const songBuffer = 1000;

export default class Playlist {
    constructor() {
        this.songs = [];
        this.currentSong = null;
        this.interval = setInterval(() => {
            if (_.isNull(this.currentSong) && !_.isEmpty(this.songs)) {
                const song = this.songs.pop();
                setTimeout(() => {
                    this.currentSong = null;
                }, song.duration + songBuffer);
                this.currentSong = song;
            }
        }, 1000);
    }

    queue(song) {
        this.songs.push(song);
    }
}
