class ParamBuild {
    build(obj: any): any {
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
    }
}

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