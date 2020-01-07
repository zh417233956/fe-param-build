class ParamBuild {
    //需要检查的key及对应的默认值 
    private modelkey: any = {
        PageIndex: 1,
        PageSize: 20,
        Filters: [],
        Orders: []
    };
    //修改需要补全的key
    init(obj: any): void {
        this.modelkey = obj;
    }
    //进行检查构建补全
    build(obj: any): any {
        for (var element in this.modelkey) {
            console.log(element);
            console.log(this.modelkey[element]);
            if (!obj.hasOwnProperty(element)) {
                obj[element] = this.modelkey[element];
            }
        }
        return obj;
    }
}

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