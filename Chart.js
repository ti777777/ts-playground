var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Options = /** @class */ (function () {
    function Options() {
    }
    return Options;
}());
var Chart = /** @class */ (function () {
    function Chart() {
    }
    Chart.prototype.render = function () { };
    Chart.prototype.clear = function () { };
    return Chart;
}());
var BarChart = /** @class */ (function (_super) {
    __extends(BarChart, _super);
    function BarChart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BarChart.prototype["super"] = function () {
    };
    BarChart.prototype.Render = function () {
    };
    return BarChart;
}(Chart));
var LineChart = /** @class */ (function (_super) {
    __extends(LineChart, _super);
    function LineChart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LineChart.prototype["super"] = function () {
    };
    LineChart.prototype.Render = function () {
    };
    return LineChart;
}(Chart));
