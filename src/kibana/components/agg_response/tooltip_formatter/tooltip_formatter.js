define(function (require) {
  return function PointSeriesTooltipFormatter($compile, $rootScope) {
    var _ = require('lodash');
    var $ = require('jquery');

    var $tooltipScope = $rootScope.$new();
    var $tooltip = $(require('text!components/agg_response/tooltip_formatter/tooltip.html'));
    $compile($tooltip)($tooltipScope);

    return function tooltipFormatter(event) {
      var datum = event.point;
      var point = datum.orig;

      if (!point || !point.aggConfigResult) return '';

      var details = $tooltipScope.details = [];
      var result = { $parent: point.aggConfigResult };
      while ((result = result.$parent) && result.aggConfig) {
        var agg = result.aggConfig;

        details.push({
          value: agg.fieldFormatter()(result.value),
          label: agg.makeLabel()
        });
      }

      $tooltipScope.$apply();
      return $tooltip[0].outerHTML;
    };
  };
});