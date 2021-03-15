function even(arr) {
    for (var i = 0; i < arr.length; i++)
    {
        if (Array.isArray(arr[i]))//判断是不是数组，是数组则递归
        {
            even(arr[i]);
        }
        else{
            arrf.push(arr[i]);
        }
    }
}

let arr = [1, [2, [3, 4]]];


/*   非递归，toString数组扁平化
arrn = [];
arr = arr.toString();
for (const key in arr) {
    if (Object.hasOwnProperty.call(arr, key)) {
        const element = arr[key];
        if(arr[key] == ',');
        else{
             arrn.push(+arr[key]);//‘+’转化数据成Number类型
        }
       
    }
}
console.log(arrn);
*/

