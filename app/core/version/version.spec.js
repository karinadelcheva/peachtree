'use strict';

describe('peachtree.version module', function() {
  beforeEach(module('peachtree.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
