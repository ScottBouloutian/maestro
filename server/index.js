const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const axios = require('axios');
const bodyParser = require('body-parser');
const log = require('loglevel');
const _ = require('lodash');
const SoundCloud = require('./SoundCloud');
const Playlist = require('./Playlist');

const soundCloudClientId = '86769aaa8892825f77df1e2eba5cdf8d';
const apiRoot = 'https://api.soundcloud.com';
const soundCloudRegex = /https:\/\/soundcloud\.com\//;
const playlist = new Playlist();
const port = 3000;

function addSoundCloudUrl(url) {
    axios.get(
        `${apiRoot}/resolve`,
        {
            params: {
                url,
                client_id: soundCloudClientId,
            },
        },
    ).then((response) => {
        const { tracks } = response.data;
        const { id } = _.first(tracks);
        log.debug(`the track id is ${id}`);
        return axios.get(
            `${apiRoot}/tracks/${id}`,
            {
                params: {
                    client_id: soundCloudClientId,
                },
            },
        );
    }).then((response) => {
        const { data } = response;
        const song = new SoundCloud(data.id, data.duration);
        playlist.queue(song);
        log.debug(song);
    }).catch(error => log.error(error));
}

log.setLevel('debug');
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send('Welcome to Maestro!');
    res.end();
});
app.put('/playlist', (request, response) => {
    const { url } = request.body;
    log.info(`received url ${url}`);
    if (soundCloudRegex.test(url)) {
        log.info('found a SoundCloud url');
        addSoundCloudUrl(url);
    }
    response.send('done');
    response.end();
});
io.on('connection', () => log.debug('a user connected'));
http.listen(port, () => log.info(`server started on port ${port}`));
