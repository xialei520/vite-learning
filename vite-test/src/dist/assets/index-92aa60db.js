(function (e) {
    typeof define == "function" && define.amd ? define(e) : e();
})(function () {
    "use strict";
    function e(t, n) {
        return t + n;
    }
    function o(t, n) {
        return t / n;
    }
    var s = { sum: e, div: o };
    console.log(s.sum(1, 3));
});
