'use strict';

angular.module('peachtree.version', [
  'peachtree.version.interpolate-filter',
  'peachtree.version.version-directive'
])

.value('version', '0.1');
