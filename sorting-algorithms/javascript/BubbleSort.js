// Program to sort elements

//Initialising an array 
var arr = [45,67,12,89,1];
console.log("Elements to be sorted:\n" + arr);

//Function to sort elements
function bubbleSort(array) {
    
    var n = array.length;
  
    for(var i=0; i<n; i++) 
    {
        for(var j=0; j<(n-i-1); j++) {
            if(array[j]>array[j+1]) {
                //Swapping of elements
                var temp = array[j+1];
                array[j+1] = array[j];
                array[j] = temp;
            }
        }
    } 
    //Returning sorted elements
    return array;
}

console.log("Sorted elements are :\n"+ bubbleSort(arr));
