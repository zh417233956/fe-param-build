"use strict";
var ParamBuild = /** @class */ (function () {
    function ParamBuild() {
        //需要检查的key及对应的默认值 
        this.modelkey = {
            PageIndex: 1,
            PageSize: 20,
            Filters: [],
            Orders: []
        };
    }
    //修改需要补全的key
    ParamBuild.prototype.init = function (obj) {
        this.modelkey = obj;
    };
    //进行检查构建补全
    ParamBuild.prototype.build = function (obj) {
        for (var element in this.modelkey) {
            console.log(element);
            console.log(this.modelkey[element]);
            if (!obj.hasOwnProperty(element)) {
                obj[element] = this.modelkey[element];
            }
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
// debugger;
// let result = builder.build(model);
// console.log(result)
//js
// var model = {
//     a: 1
// };
// var builder = new ParamBuild();
// var result = builder.build(model);
// console.log(result);
