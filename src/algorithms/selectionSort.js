export const selectionSort = (arr) => {

    if (arr.length === 1) {
        return arr
    }

    let temp, currentMinimum;
    let sortedArray = []
        
    for (let i = 0; i < arr.length; i++) {

        currentMinimum = i

        for (let j = i+1; j < arr.length; j++) {

            if (arr[j] < arr[currentMinimum]) {
                currentMinimum = j
            }
            sortedArray.push(arr[currentMinimum])
        }

        temp = arr[i]
        arr[i] = arr[currentMinimum]
        arr[currentMinimum] = temp

    }
    return arr
}