arr = ["one", "only", "booms"]


function lengths(arr) {
    for(i=0;i < arr.length; i++){
        arr[i] = arr[i].split("").length
    }
    console.log(arr)
}

lengths(arr)