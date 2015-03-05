# meatyjs [![Build Status](https://travis-ci.org/mayfieldrobotics/meatyjs.svg)](https://travis-ci.org/mayfieldrobotics/meatyjs) [![Coverage Status](https://coveralls.io/repos/mayfieldrobotics/meatyjs/badge.svg?branch=master)](https://coveralls.io/r/mayfieldrobotics/meatyjs?branch=master)

Simple [media type](https://tools.ietf.org/html/rfc6838) parsing and formatting. Based on work by:

* [content-type](https://github.com/jshttp/content-type)

# usage

Register as a depndency, e.g.:

```bash
$ bower install meatyjs --savedev
```

and then:

```javascript
var mediaType = meaty.parse("application/vnd.mayfield.msg.v1+json; chunksize=512");
assert(mediaType.type === "application"));
assert(mediaType.subType === "mayfield.msg.v1");
assert(mediaType.tree === "vnd");
assert(mediaType.suffix === "json");
assert(mediaType.parameters === {"chunksize": "512"});
assert(mediaType.format() === "application/vnd.mayfield.msg.v1+json; chunksize=512");
```

# dev

```bash
$ git clone git@github.com:mayfieldrobotics/meatyjs.git
$ cd meatyjs
$ npm install
$ grunt build test
```

# release

All is well:

```bash
$ grunt clean build test
```

so update `{version}` in:

* `package.json`
* `bower.json`

then:

``` bash
$ git -am "release v{version}"
$ git tag -a v{version} -m "release v{version}"
$ git push --tags
```

and [bower](http://bower.io/search/?q=meaty.js) will index.
