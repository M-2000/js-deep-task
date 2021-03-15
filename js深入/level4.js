var data = {
    age: 18,
    name: "liuruchao",
    education: ["小学", "初中", "高中", "大学", undefined, null],
    likesFood: new Set(["fish", "banana"]),
    friends: [
        { name: "summer", sex: "woman" },
        { name: "daWen", sex: "woman" },
        { name: "yang", sex: "man" }],
    work: {
        time: "2019",
        project: { name: "test", obtain: ["css", "html", "js"] }
    },
    play: function () { console.log("玩滑板"); }
}

function isObj(origin){
   return ((typeof origin === "object" || typeof origin === "function") && typeof origin != null) ;
}

function isAr(origin){
    return Array.isArray(origin);
}

function deepClone(origin) {
    let result = isAr(origin) ? []:{};
    for (k in origin) {
        result[k] = isObj(origin[k]) ? deepClone(origin[k]) : origin[k];
    }
    return result;
}

console.log(data);
let fin = deepClone(data);
fin.age = 20;
console.log(fin);//验证