'use strict';

angular.module('hTeamApp.version', [
  'hTeamApp.version.interpolate-filter',
  'hTeamApp.version.version-directive'
])

.value('version', '0.1');
