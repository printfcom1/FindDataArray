const array1 = ["a","b","c"]
const array2 = ["b","c","d"]

const connectarray = [...array1, ...array2]


console.log(FindArray(connectarray))

function FindArray (dataArray) {
    var dataArray1 = []
    var dataAuplicate = []
    for (i=0;i<dataArray.length;i++){
        if (!(dataArray1.includes(dataArray[i]))){
            dataArray1.push(dataArray[i])
        }else{
            dataAuplicate.push(dataArray[i])
        }
    }
    var dataArray2 = dataArray1.filter(element => !dataAuplicate.includes(element));
    return [dataArray1,dataArray2]
}

