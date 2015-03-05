# meatyjs [![Build Status](https://travis-ci.org/mayfieldrobotics/meatyjs.svg)](https://travis-ci.org/mayfieldrobotics/meatyjs)

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
$ git clone git@github.com:mayfieldrobotics/meaty.js.git
$ cd meaty.js
$ npm install
$ grunt build test
```

# release

Updates version in:

* `package.json`
* `bower.json`

commit those:

```bash
$ git add package.json bower.json
$ git commit -m "{version}"
```

tag the commit:

``` bash
$ git tag "{version}"
$ git push --tags
```

and [bower](http://bower.io/search/?q=meaty.js) will index.
