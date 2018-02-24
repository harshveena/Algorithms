//Program to sort elements

//Initialising an array
var arr = [56,12,78,34,2,2];
console.log("Elements to be sorted : \n" + arr);

//Function to sort elements
function selectionSort(array) {

    var n = array.length;
    for(var i=0; i<(n-1); i++) {

        //Set min index as 'i'
        var min = i;
        var min_val = arr[i];
        for(var j=i+1; j<n; j++) {
            if(array[j]<array[min]) {
                min = j;
                min_val = arr[j];
            }
        }

        //Swap min element with 'i'th index element
        var temp = array[min];
        array[min] = array[i];
        array[i] = temp;

    } //Returning sorted elements
    return array;
}

console.log("Sorted elements are: \n" + selectionSort(arr));