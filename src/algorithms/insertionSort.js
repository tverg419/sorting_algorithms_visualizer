export const insertionSort = (arr) => {
    
    let temp;
    
    for (let i = 1; i < arr.length; i++) {

        let current = i;

        while (arr[current] < arr[current - 1]) {
            temp = arr[current - 1]
            arr[current - 1] = arr[current]
            arr[current] = temp

            current--
        }

    }
    return arr
}