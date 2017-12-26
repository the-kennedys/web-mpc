# web-mpc

A Christmas coding project for me - controller for mpd, using mern stack
(probably) and connecting directly to the mpd socket.

Probably also working directly with the media files to get id tags, and
generating a sane interface for internet radion streams.

## Getting started

This runs the express server on 3001, and uses the proxy set in the client
to route API requests. This is only done to support react hot loading.

```
yarn install
PORT=3001 yarn run
cd client
yarn install
yarn start
```
