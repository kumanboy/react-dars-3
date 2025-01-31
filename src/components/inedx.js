function smth(arr,fn){
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        let res = fn(arr[i], i)
        if (res) newArr.push(arr[i])
    }
    return newArr
}

console.log(smth([1,2,3]))

