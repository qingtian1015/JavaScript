function deepCopy(obj) {
    let result = {}
    let keys = Object.keys(obj)
    for(let i = 0;i<keys.length;i++){
        key = keys[i]
        if( typeof obj[key] == 'object'){
            result[key] = deepCopy(obj[key])
        }else {
            result[key] = obj[key]
        }
    }
    return result
}

 var obj1 = {
    x:1,
    y:2,
    z:{
        a:1
    }
 }

let obj2 = deepCopy(obj1)
console.log(obj2);
obj1.z.a = 50
console.log(obj1,obj2);

