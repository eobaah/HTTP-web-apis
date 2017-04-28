# Concept Focus: HTTP & Web APIs


## Description

Explore the inner workings of **HTTP**, and apply your knowledge to interact with an external **web API**.

## HTTP Verbs
[Examples](https://github.com/eobaah/HTTP-web-apis/blob/master/webserver/routes/index.js)

## HTTP Status Codes
[Examples in Routes](https://github.com/eobaah/HTTP-web-apis/blob/master/webserver/routes/index.js)

[Examples in API Hanlder](https://github.com/eobaah/HTTP-web-apis/blob/master/webserver/apihandlers/handler-twitter.js)


## URL Components
[Examples in Routes](https://github.com/eobaah/HTTP-web-apis/blob/master/webserver/routes/index.js)

## Request Headers
[Examples in Passport JS](https://github.com/jaredhanson/passport/blob/master/lib/middleware/authenticate.js)

[Examples in createTweet.js](https://github.com/eobaah/HTTP-web-apis/blob/master/webserver/public/javascripts/createTweet.js)

[Examples in editTweet](https://github.com/eobaah/HTTP-web-apis/blob/master/webserver/public/javascripts/editTweet.js)

[Examples in deleteTweet](https://github.com/eobaah/HTTP-web-apis/blob/master/webserver/public/javascripts/deleteTweet.js)

## Response headers
[Example on line 323](https://github.com/jaredhanson/passport/blob/master/lib/middleware/authenticate.js)

[Example in server.js](https://github.com/eobaah/HTTP-web-apis/blob/master/webserver/server.js)

## Server Resources
[Example](https://github.com/eobaah/HTTP-web-apis/tree/master/webserver/public)

## External API
[Example](https://github.com/eobaah/HTTP-web-apis/blob/master/webserver/apihandlers/handler-twitter.js)

## Raw Request

```
IncomingMessage{
    _readableState: ReadableState{
      objectMode: false,
      highWaterMark: 16384,
      buffer: [
        Object
      ],
      length: 0,
      pipes: null,
      pipesCount: 0,
      flowing: null,
      ended: true,
      endEmitted: false,
      reading: false,
      sync: true,
      needReadable: false,
      emittedReadable: true,
      readableListening: false,
      resumeScheduled: false,
      defaultEncoding: 'utf8',
      ranOut: false,
      awaitDrain: 0,
      readingMore: true,
      decoder: null,
      encoding: null
    },
    readable: true,
    domain: null,
    _events: {

    },
    _eventsCount: 0,
    _maxListeners: undefined,
    socket: Socket{
      connecting: false,
      _hadError: false,
      _handle: [
        Object
      ],
      _parent: null,
      _host: null,
      _readableState: [
        Object
      ],
      readable: true,
      domain: null,
      _events: [
        Object
      ],
      _eventsCount: 10,
      _maxListeners: undefined,
      _writableState: [
        Object
      ],
      writable: true,
      allowHalfOpen: true,
      destroyed: false,
      _bytesDispatched: 0,
      _sockname: null,
      _pendingData: null,
      _pendingEncoding: '',
      server: [
        Object
      ],
      _server: [
        Object
      ],
      _idleTimeout: 120000,
      _idleNext: [
        Object
      ],
      _idlePrev: [
        Object
      ],
      _idleStart: 6355,
      parser: [
        Object
      ],
      on: [
        Function: socketOnWrap
      ],
      _paused: false,
      read: [
        Function
      ],
      _consuming: true,
      _httpMessage: [
        Circular
      ],
      _peername: [
        Object
      ]
    },
    connection: Socket{
      connecting: false,
      _hadError: false,
      _handle: [
        Object
      ],
      _parent: null,
      _host: null,
      _readableState: [
        Object
      ],
      readable: true,
      domain: null,
      _events: [
        Object
      ],
      _eventsCount: 10,
      _maxListeners: undefined,
      _writableState: [
        Object
      ],
      writable: true,
      allowHalfOpen: true,
      destroyed: false,
      _bytesDispatched: 0,
      _sockname: null,
      _pendingData: null,
      _pendingEncoding: '',
      server: [
        Object
      ],
      _server: [
        Object
      ],
      _idleTimeout: 120000,
      _idleNext: [
        Object
      ],
      _idlePrev: [
        Object
      ],
      _idleStart: 6355,
      parser: [
        Object
      ],
      on: [
        Function: socketOnWrap
      ],
      _paused: false,
      read: [
        Function
      ],
      _consuming: true,
      _httpMessage: [
        Circular
      ],
      _peername: [
        Object
      ]
    },
    httpVersionMajor: 1,
    httpVersionMinor: 1,
    httpVersion: '1.1',
    complete: true,
    headers: {
      host: '127.0.0.1:3000',
      connection: 'keep-alive',
      'upgrade-insecure-requests': '1',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36',
      accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      'accept-encoding': 'gzip, deflate, sdch, br',
      'accept-language': 'en-US,en;q=0.8',
      cookie: 'connect.sid=s%3Aq5WxDv3EAFAY5YUQ81xPhxDwvmzpjT3s.zxxV7nfnUe6lF3Ic14KZn9qqK35EXUBCUC9dOvLFTUM'
    },
    rawHeaders: [
      'Host',
      '127.0.0.1:3000',
      'Connection',
      'keep-alive',
      'Upgrade-Insecure-Requests',
      '1',
      'User-Agent',
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36',
      'Accept',
      'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      'Accept-Encoding',
      'gzip, deflate, sdch, br',
      'Accept-Language',
      'en-US,en;q=0.8',
      'Cookie',
      'connect.sid=s%3Aq5WxDv3EAFAY5YUQ81xPhxDwvmzpjT3s.zxxV7nfnUe6lF3Ic14KZn9qqK35EXUBCUC9dOvLFTUM'
    ],
    trailers: {

    },
    rawTrailers: [

    ],
    upgrade: false,
    url: '/feed',
    method: 'GET',
    statusCode: null,
    statusMessage: null,
    client: Socket{
      connecting: false,
      _hadError: false,
      _handle: [
        Object
      ],
      _parent: null,
      _host: null,
      _readableState: [
        Object
      ],
      readable: true,
      domain: null,
      _events: [
        Object
      ],
      _eventsCount: 10,
      _maxListeners: undefined,
      _writableState: [
        Object
      ],
      writable: true,
      allowHalfOpen: true,
      destroyed: false,
      _bytesDispatched: 0,
      _sockname: null,
      _pendingData: null,
      _pendingEncoding: '',
      server: [
        Object
      ],
      _server: [
        Object
      ],
      _idleTimeout: 120000,
      _idleNext: [
        Object
      ],
      _idlePrev: [
        Object
      ],
      _idleStart: 6355,
      parser: [
        Object
      ],
      on: [
        Function: socketOnWrap
      ],
      _paused: false,
      read: [
        Function
      ],
      _consuming: true,
      _httpMessage: [
        Circular
      ],
      _peername: [
        Object
      ]
    },
    _consuming: false,
    _dumped: false,
    next: [
      Function: next
    ],
    baseUrl: '',
    originalUrl: '/feed',
    _parsedUrl: Url{
      protocol: null,
      slashes: null,
      auth: null,
      host: null,
      port: null,
      hostname: null,
      hash: null,
      search: null,
      query: null,
      pathname: '/feed',
      path: '/feed',
      href: '/feed',
      _raw: '/feed'
    },
    params: {

    },
    query: {

    },
    res: [
      Circular
    ],
    _startAt: [
      39433,
      557692826
    ],
    _startTime: 2017-04-28T19: 51: 42.124Z,
    _remoteAddress: '::ffff:127.0.0.1',
    body: {

    },
    secret: undefined,
    cookies: {
      'connect.sid': 's:q5WxDv3EAFAY5YUQ81xPhxDwvmzpjT3s.zxxV7nfnUe6lF3Ic14KZn9qqK35EXUBCUC9dOvLFTUM'
    },
    signedCookies: {

    },
    _parsedOriginalUrl: Url{
      protocol: null,
      slashes: null,
      auth: null,
      host: null,
      port: null,
      hostname: null,
      hash: null,
      search: null,
      query: null,
      pathname: '/feed',
      path: '/feed',
      href: '/feed',
      _raw: '/feed'
    },
    sessionStore: MemoryStore{
      domain: null,
      _events: [
        Object
      ],
      _eventsCount: 2,
      _maxListeners: undefined,
      sessions: {

      },
      generate: [
        Function
      ]
    },
    sessionID: 'c1Yo1r9koIk0dJ9CX7lVgj1r-omFIY1H',
    session: Session{
      cookie: [
        Object
      ]
    },
    _passport: {
      instance: [
        Object
      ]
    },
    route: Route{
      path: '/feed',
      stack: [
        Object
      ],
      methods: [
        Object
      ]
    }
  },
  locals: {

  },
  _startAt: undefined,
  _startTime: undefined,
  writeHead: [
    Function: writeHead
  ],
  __onFinished: {
    [
      Function: listener
    ]queue: [
      [
        Function: logRequest
      ]
    ]
  },
  end: [
    Function: end
  ]
}
```
## Raw Response
```
ServerResponse{
  domain: null,
  _events: {
    finish: [
      [
        Function: boundresOnFinish
      ],
      [
        Function: onevent
      ]
    ],
    end: [
      Function: onevent
    ]
  },
  _eventsCount: 2,
  _maxListeners: undefined,
  output: [

  ],
  outputEncodings: [

  ],
  outputCallbacks: [

  ],
  outputSize: 0,
  writable: true,
  _last: false,
  upgrading: false,
  chunkedEncoding: false,
  shouldKeepAlive: true,
  useChunkedEncodingByDefault: true,
  sendDate: true,
  _removedHeader: {

  },
  _contentLength: null,
  _hasBody: true,
  _trailer: '',
  finished: false,
  _headerSent: false,
  socket: Socket{
    connecting: false,
    _hadError: false,
    _handle: TCP{
      bytesRead: 494,
      _externalStream: {

      },
      fd: 14,
      reading: true,
      owner: [
        Circular
      ],
      onread: [
        Function: onread
      ],
      onconnection: null,
      writeQueueSize: 0,
      _consumed: true
    },
    _parent: null,
    _host: null,
    _readableState: ReadableState{
      objectMode: false,
      highWaterMark: 16384,
      buffer: [
        Object
      ],
      length: 0,
      pipes: null,
      pipesCount: 0,
      flowing: true,
      ended: false,
      endEmitted: false,
      reading: true,
      sync: false,
      needReadable: true,
      emittedReadable: false,
      readableListening: false,
      resumeScheduled: false,
      defaultEncoding: 'utf8',
      ranOut: false,
      awaitDrain: 0,
      readingMore: false,
      decoder: null,
      encoding: null
    },
    readable: true,
    domain: null,
    _events: {
      end: [
        Object
      ],
      finish: [
        Function: onSocketFinish
      ],
      _socketEnd: [
        Function: onSocketEnd
      ],
      drain: [
        Object
      ],
      timeout: [
        Function: boundsocketOnTimeout
      ],
      data: [
        Function: boundsocketOnData
      ],
      error: [
        Object
      ],
      close: [
        Object
      ],
      resume: [
        Function: onSocketResume
      ],
      pause: [
        Function: onSocketPause
      ]
    },
    _eventsCount: 10,
    _maxListeners: undefined,
    _writableState: WritableState{
      objectMode: false,
      highWaterMark: 16384,
      needDrain: false,
      ending: false,
      ended: false,
      finished: false,
      decodeStrings: false,
      defaultEncoding: 'utf8',
      length: 0,
      writing: false,
      corked: 0,
      sync: true,
      bufferProcessing: false,
      onwrite: [
        Function: boundonwrite
      ],
      writecb: null,
      writelen: 0,
      bufferedRequest: null,
      lastBufferedRequest: null,
      pendingcb: 0,
      prefinished: false,
      errorEmitted: false,
      bufferedRequestCount: 0,
      corkedRequestsFree: [
        Object
      ]
    },
    writable: true,
    allowHalfOpen: true,
    destroyed: false,
    _bytesDispatched: 0,
    _sockname: null,
    _pendingData: null,
    _pendingEncoding: '',
    server: Server{
      domain: null,
      _events: [
        Object
      ],
      _eventsCount: 2,
      _maxListeners: undefined,
      _connections: 4,
      _handle: [
        Object
      ],
      _usingSlaves: false,
      _slaves: [

      ],
      _unref: false,
      allowHalfOpen: true,
      pauseOnConnect: false,
      httpAllowHalfOpen: false,
      timeout: 120000,
      _pendingResponseData: 0,
      maxHeadersCount: null,
      _connectionKey: '6::::3000'
    },
    _server: Server{
      domain: null,
      _events: [
        Object
      ],
      _eventsCount: 2,
      _maxListeners: undefined,
      _connections: 4,
      _handle: [
        Object
      ],
      _usingSlaves: false,
      _slaves: [

      ],
      _unref: false,
      allowHalfOpen: true,
      pauseOnConnect: false,
      httpAllowHalfOpen: false,
      timeout: 120000,
      _pendingResponseData: 0,
      maxHeadersCount: null,
      _connectionKey: '6::::3000'
    },
    _idleTimeout: 120000,
    _idleNext: Socket{
      connecting: false,
      _hadError: false,
      _handle: [
        Object
      ],
      _parent: null,
      _host: null,
      _readableState: [
        Object
      ],
      readable: true,
      domain: null,
      _events: [
        Object
      ],
      _eventsCount: 10,
      _maxListeners: undefined,
      _writableState: [
        Object
      ],
      writable: true,
      allowHalfOpen: true,
      destroyed: false,
      _bytesDispatched: 0,
      _sockname: null,
      _pendingData: null,
      _pendingEncoding: '',
      server: [
        Object
      ],
      _server: [
        Object
      ],
      _idleTimeout: 120000,
      _idleNext: [
        Object
      ],
      _idlePrev: [
        Circular
      ],
      _idleStart: 6340,
      parser: [
        Object
      ],
      on: [
        Function: socketOnWrap
      ],
      _paused: false,
      read: [
        Function
      ],
      _consuming: true
    },
    _idlePrev: TimersList{
      _idleNext: [
        Circular
      ],
      _idlePrev: [
        Object
      ],
      _timer: [
        Object
      ],
      _unrefed: true,
      msecs: 120000,
      nextTick: false
    },
    _idleStart: 6355,
    parser: HTTPParser{
      '0': [
        Function: parserOnHeaders
      ],
      '1': [
        Function: parserOnHeadersComplete
      ],
      '2': [
        Function: parserOnBody
      ],
      '3': [
        Function: parserOnMessageComplete
      ],
      '4': [
        Function: boundonParserExecute
      ],
      _headers: [

      ],
      _url: '',
      _consumed: true,
      socket: [
        Circular
      ],
      incoming: [
        Object
      ],
      outgoing: null,
      maxHeaderPairs: 2000,
      onIncoming: [
        Function: boundparserOnIncoming
      ]
    },
    on: [
      Function: socketOnWrap
    ],
    _paused: false,
    read: [
      Function
    ],
    _consuming: true,
    _httpMessage: [
      Circular
    ],
    _peername: {
      address: '::ffff:127.0.0.1',
      family: 'IPv6',
      port: 53085
    }
  },
  connection: Socket{
    connecting: false,
    _hadError: false,
    _handle: TCP{
      bytesRead: 494,
      _externalStream: {

      },
      fd: 14,
      reading: true,
      owner: [
        Circular
      ],
      onread: [
        Function: onread
      ],
      onconnection: null,
      writeQueueSize: 0,
      _consumed: true
    },
    _parent: null,
    _host: null,
    _readableState: ReadableState{
      objectMode: false,
      highWaterMark: 16384,
      buffer: [
        Object
      ],
      length: 0,
      pipes: null,
      pipesCount: 0,
      flowing: true,
      ended: false,
      endEmitted: false,
      reading: true,
      sync: false,
      needReadable: true,
      emittedReadable: false,
      readableListening: false,
      resumeScheduled: false,
      defaultEncoding: 'utf8',
      ranOut: false,
      awaitDrain: 0,
      readingMore: false,
      decoder: null,
      encoding: null
    },
    readable: true,
    domain: null,
    _events: {
      end: [
        Object
      ],
      finish: [
        Function: onSocketFinish
      ],
      _socketEnd: [
        Function: onSocketEnd
      ],
      drain: [
        Object
      ],
      timeout: [
        Function: boundsocketOnTimeout
      ],
      data: [
        Function: boundsocketOnData
      ],
      error: [
        Object
      ],
      close: [
        Object
      ],
      resume: [
        Function: onSocketResume
      ],
      pause: [
        Function: onSocketPause
      ]
    },
    _eventsCount: 10,
    _maxListeners: undefined,
    _writableState: WritableState{
      objectMode: false,
      highWaterMark: 16384,
      needDrain: false,
      ending: false,
      ended: false,
      finished: false,
      decodeStrings: false,
      defaultEncoding: 'utf8',
      length: 0,
      writing: false,
      corked: 0,
      sync: true,
      bufferProcessing: false,
      onwrite: [
        Function: boundonwrite
      ],
      writecb: null,
      writelen: 0,
      bufferedRequest: null,
      lastBufferedRequest: null,
      pendingcb: 0,
      prefinished: false,
      errorEmitted: false,
      bufferedRequestCount: 0,
      corkedRequestsFree: [
        Object
      ]
    },
    writable: true,
    allowHalfOpen: true,
    destroyed: false,
    _bytesDispatched: 0,
    _sockname: null,
    _pendingData: null,
    _pendingEncoding: '',
    server: Server{
      domain: null,
      _events: [
        Object
      ],
      _eventsCount: 2,
      _maxListeners: undefined,
      _connections: 4,
      _handle: [
        Object
      ],
      _usingSlaves: false,
      _slaves: [

      ],
      _unref: false,
      allowHalfOpen: true,
      pauseOnConnect: false,
      httpAllowHalfOpen: false,
      timeout: 120000,
      _pendingResponseData: 0,
      maxHeadersCount: null,
      _connectionKey: '6::::3000'
    },
    _server: Server{
      domain: null,
      _events: [
        Object
      ],
      _eventsCount: 2,
      _maxListeners: undefined,
      _connections: 4,
      _handle: [
        Object
      ],
      _usingSlaves: false,
      _slaves: [

      ],
      _unref: false,
      allowHalfOpen: true,
      pauseOnConnect: false,
      httpAllowHalfOpen: false,
      timeout: 120000,
      _pendingResponseData: 0,
      maxHeadersCount: null,
      _connectionKey: '6::::3000'
    },
    _idleTimeout: 120000,
    _idleNext: Socket{
      connecting: false,
      _hadError: false,
      _handle: [
        Object
      ],
      _parent: null,
      _host: null,
      _readableState: [
        Object
      ],
      readable: true,
      domain: null,
      _events: [
        Object
      ],
      _eventsCount: 10,
      _maxListeners: undefined,
      _writableState: [
        Object
      ],
      writable: true,
      allowHalfOpen: true,
      destroyed: false,
      _bytesDispatched: 0,
      _sockname: null,
      _pendingData: null,
      _pendingEncoding: '',
      server: [
        Object
      ],
      _server: [
        Object
      ],
      _idleTimeout: 120000,
      _idleNext: [
        Object
      ],
      _idlePrev: [
        Circular
      ],
      _idleStart: 6340,
      parser: [
        Object
      ],
      on: [
        Function: socketOnWrap
      ],
      _paused: false,
      read: [
        Function
      ],
      _consuming: true
    },
    _idlePrev: TimersList{
      _idleNext: [
        Circular
      ],
      _idlePrev: [
        Object
      ],
      _timer: [
        Object
      ],
      _unrefed: true,
      msecs: 120000,
      nextTick: false
    },
    _idleStart: 6355,
    parser: HTTPParser{
      '0': [
        Function: parserOnHeaders
      ],
      '1': [
        Function: parserOnHeadersComplete
      ],
      '2': [
        Function: parserOnBody
      ],
      '3': [
        Function: parserOnMessageComplete
      ],
      '4': [
        Function: boundonParserExecute
      ],
      _headers: [

      ],
      _url: '',
      _consumed: true,
      socket: [
        Circular
      ],
      incoming: [
        Object
      ],
      outgoing: null,
      maxHeaderPairs: 2000,
      onIncoming: [
        Function: boundparserOnIncoming
      ]
    },
    on: [
      Function: socketOnWrap
    ],
    _paused: false,
    read: [
      Function
    ],
    _consuming: true,
    _httpMessage: [
      Circular
    ],
    _peername: {
      address: '::ffff:127.0.0.1',
      family: 'IPv6',
      port: 53085
    }
  },
  _header: null,
  _headers: {
    'x-powered-by': 'Express'
  },
  _headerNames: {
    'x-powered-by': 'X-Powered-By'
  },
  _onPendingData: [
    Function: boundupdateOutgoingData
  ],
  _sent100: false,
  _expect_continue: false,
```

## Specifications

- [x] Artifact produced is a GitHub repo.
- [x] GitHub repo contains a web server.
- [x] Can run the command `npm start` to start the web server at port 3000.
- [x] The web server source code is written using the [Express][express] library.
- [x] The web server handles routes for the following HTTP verbs
  - [x] `GET`
  - [x] `POST`
  - [x] `PUT/PATCH`
  - [x] `DELETE`
- [x] Examples of each HTTP verb usage are listed and linked to in the README
- [x] The web server makes use of the following response status codes
  - [x] `200` (OK)
  - [x] `201` (Created)
  - [x] `400` (Bad Request)
  - [x] `301` (Moved Permanently)
  - [x] `403` (Forbidden)
  - [x] `404` (Not Found)
  - [x] `500` (Internal Server Error)
- [x] Examples of each status code usage are listed and linked to in the README
- [x] The web server uses URL components in routing and responding
  - [x] Different paths trigger different routes
  - [x] Values from the URL query string are used in a route
- [x] Examples of routing and query string usage are listed and linked to in the README
- [x] The web server makes use of the following request headers
  - [x] `Accept`
  - [x] `Origin`
  - [x] `Content Type`
  - [x] `Authorization`
  - [x] `Cookie`
- [x] Examples of each request header usage are listed and linked to in the README
- [ ] The web server makes use of the following response headers
  - [x] `Location`
  - [ ] `Set-Cookie`
  - [ ] `Refresh`
  - [x] `Access-Control-Allow-Origin`
  - [x] `Content-Length`
- [ ] Examples of each response header usage are listed and linked to in the README
- [x] The web server serves different types of resources
  - [x] Asset files (CSS, images)
  - [x] Static HTML
  - [x] Static JSON
  - [x] Dynamic resources (content of response changes based on query params, request headers, and/or application state)
- [x] Examples of each response type are listed and linked to in the README
- [x] Example of a raw HTTP request and the server's raw HTTP response are included in the README
  - [x] Examples show full HTTP message header
  - [x] Examples show full HTTP message body
- [x] The web server makes the following request types to an external API
  - [x] Get a resource
  - [x] Create a resource
  - [ ] Update a resource
  - [x] Delete a resource
- [x] Examples of each request type to the external API are listed and linked to in the README
- [x] The best resources you find for learning testing are added to a file `resources.md`
- [x] The artifact produced is properly licensed, preferably with the [MIT license][mit-license]

## Stretch

- [ ] Web server is written using _only the core Node.js modules_ (instead of Express, use the built-in [HTTP module][node-http])
- [x] Web server uses OAuth to authenticate with the external API
- [ ] OAuth routes are listeds and linked to in the README
- [ ] The web server exposes a JSON API at `/api`
  - [ ] API supports all CRUD actions for a resource (Create, Read, Update, Delete)
  - [ ] API follows a the RESTful design convention
  - [ ] API doesn't use database persistence (an in-memory store is fine)
- [ ] Basic documentation for the API and each route is included in the README


## Resources

### Courses, Tutorials, Articles

- Treehouse course on [HTTP Basics][treehouse-http] (67-minute Development Tools Course)
- [Overview of HTTP][ntu-http-overview] from NTU Singapore
- [Tips on HTTP][tutsplus-http] from Tuts+
- [Beginner's Guide to HTTP and REST][tutsplus-http-rest] from Tuts+
- Mozilla Developer Network's [Guide to HTTP][mdn-http]
- 30 min course on the [Basics of HTTP][egghead-http-basics]
- Article on [How the Web Works](https://medium.freecodecamp.com/how-the-web-works-a-primer-for-newcomers-to-web-development-or-anyone-really-b4584e63585c#.3l2bffw28)

### Tools

- [Postman][postman-extension] is a nice GUI for building HTTP requests
- [curl][curl] is a super useful tool for making HTTP requests from the command line

[mit-license]: https://opensource.org/licenses/MIT
[project-ideas]: {{ site.url }}{% link project-ideas.md %}

[express]: http://expressjs.com/
[node-http]: https://nodejs.org/api/http.html


[treehouse-http]: https://teamtreehouse.com/library/http-basics
[ntu-http-overview]: https://www.ntu.edu.sg/home/ehchua/programming/webprogramming/HTTP_Basics.html
[tutsplus-http]: https://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177
[tutsplus-http-rest]: https://code.tutsplus.com/tutorials/a-beginners-guide-to-http-and-rest--net-16340
[curl]: https://curl.haxx.se/
[mdn-http]: https://developer.mozilla.org/en-US/docs/Web/HTTP
[egghead-http-basics]: https://egghead.io/courses/understand-the-basics-of-http
[postman-extension]: https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en
