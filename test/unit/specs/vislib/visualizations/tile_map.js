define(function (require) {
  var angular = require('angular');
  var _ = require('lodash');
  var $ = require('jquery');

  angular.module('TileMapFactory', ['kibana']);

  describe('Vislib Visualizations Tile Map', function () {
    var vis;
    var data;
    var params = {};

    beforeEach(function () {
      module('TileMapFactory');
    });

    beforeEach(function () {
      inject(function (d3, Private) {
        vis = Private(require('vislib_fixtures/vis_fixture'))(params);
        data = require('vislib_fixtures/mock_data/map/data0');
        require('css!components/vislib/styles/main');

        vis.render(data);
      });
    });

    // Placeholder until we know better regarding garbage collection
    afterEach(function () {
      $(vis.el).remove();
      vis = null;
    });

    // Tests
    describe();
    describe();
    describe();
  });
});
