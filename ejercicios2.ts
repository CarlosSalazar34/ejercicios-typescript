const array: number[] = [...Array(10).keys()].map(() => {
    return Math.floor(Math.random() * 101);
});

console.log("Original:", array);

const maxValue = (arr: number[]): number => {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) { // Empezamos en 1 porque ya tenemos el 0
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
};

const sortArray = (arr: number[]): number[] => {
    let n = arr.length;
    let sorted = [...arr]; 

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (sorted[j] > sorted[j + 1]) {
                [sorted[j], sorted[j + 1]] = [sorted[j + 1], sorted[j]];
            }
        }
    }
    return sorted;
};

const maxVal: number = maxValue(array);
const newArray = sortArray(array);

console.log("Ordenado:", newArray);
console.log("Valor Máximo:", maxVal);