describe('meaty.parse', function () {
    it('parses "text/plain"', function () {
      expect(meaty.parse('text/plain')).toEqual(
        new meaty.MediaType({
          type: 'text',
          tree: null,
          subType: 'plain',
          suffix: null,
          parameters: {}
        })
      );
    });

    it('parses "application/vnd.mayfield.msg.v1+json; chunksize=512"', function () {
      expect(meaty.parse('application/vnd.mayfield.msg.v1+json; chunksize=512')).toEqual(
        new meaty.MediaType({
          type: 'application',
          tree: 'vnd',
          subType: 'mayfield.msg.v1',
          suffix: 'json',
          parameters: {
            chunksize: '512'
          }
        })
      );
    });

    it('throws on "blah"', function () {
      expect(function () {
        meaty.parse('blah');
      }).toThrow(new Error('Invalid media type "blah".'));
    });
});

describe('meaty.format', function () {
  it('formats "text/plain"', function () {
    expect(meaty.format({
      type: 'text',
      subType: 'plain'
    })).toEqual('text/plain');
  });

  it('formats "application/vnd.mayfield.msg.v1+json; chunksize=512"', function () {
    expect(meaty.format({
      type: 'application',
      tree: 'vnd',
      subType: 'mayfield.msg.v1',
      suffix: 'json',
      parameters: {
        chunksize: '512'
      }
    })).toEqual('application/vnd.mayfield.msg.v1+json; chunksize=512');
  });
});

describe('meaty.MediaType', function () {
  it('can be created from map', function () {
    expect(new meaty.MediaType({
      type: 'application',
      tree: 'vnd',
      subType: 'mayfield.msg.v1',
      suffix: 'json',
      parameters: {
        chunksize: '512'
      }
    })).toEqual(jasmine.objectContaining({
      type: 'application',
      tree: 'vnd',
      subType: 'mayfield.msg.v1',
      suffix: 'json',
      parameters: {
        chunksize: '512'
      }
    }));
  });

  it('can be created from string', function () {
    expect(new meaty.MediaType(
      "application/vnd.mayfield.msg.v1+json; chunksize=512"
    )).toEqual(jasmine.objectContaining({
      type: 'application',
      tree: 'vnd',
      subType: 'mayfield.msg.v1',
      suffix: 'json',
      parameters: {
        chunksize: '512'
      }
    }));
  });
});
