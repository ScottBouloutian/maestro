const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const axios = require('axios');
const bodyParser = require('body-parser');
const SoundCloud = require('./SoundCloud');
const Playlist = require('./Playlist');

const soundCloudClientId = '86769aaa8892825f77df1e2eba5cdf8d';
const playlist = new Playlist();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to Maestro!');
    res.end();
});

app.put('/playlist', (req, res) => {
    axios
        .get(
            'http://api.soundcloud.com/tracks/13158665',
            {
                params: {
                    client_id: soundCloudClientId,
                },
            },
        )
        .then((response) => {
            const { data } = response;
            const song = new SoundCloud(data.id, data.duration);
            playlist.queue(song);
            res.send(response.data);
            res.end();
        });
});

io.on('connection', (socket) => {
    console.log('a user connected');
});

http.listen(3000, () => {
});
