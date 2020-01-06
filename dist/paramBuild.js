"use strict";
var ParamBuild = /** @class */ (function () {
    function ParamBuild() {
    }
    ParamBuild.prototype.build = function (obj) {
        if (!("PageIndex" in obj)) {
            obj["PageIndex"] = 1;
        }
        if (!obj.hasOwnProperty("PageSize")) {
            obj.PageSize = 20;
        }
        if (!obj.hasOwnProperty("Filters")) {
            obj.Filters = [];
        }
        if (!obj.hasOwnProperty("Orders")) {
            obj.Orders = [];
        }
        return obj;
    };
    return ParamBuild;
}());
//ts
// let builder = new ParamBuild();
// let model = {
//     a: 1
// };
// let result = builder.build(model);
// console.log(result)
//js
// var model = {
//     a: 1
// };
// var builder = new ParamBuild();
// var result = builder.build(model);
// console.log(result);
