import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import config from './../webpack.config.development';

let app,
    compiler;

const HOST = '127.0.0.1',
    PORT = 8000;

app = express();

compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './../../dist/index.html'));
});

app.listen(PORT, HOST, (err) => {
    if (err) {
        /* eslint-disable no-console */
        console.log(err);
        /* eslint-enable no-console */

        return;
    }

    /* eslint-disable no-console */
    console.log('Listening at http://' + HOST + ':' + PORT);
    /* eslint-enable no-console */
});
