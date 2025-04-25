/**
 * MERGE SORT IMPLEMENTATION
 * 
 * SUMMARY:
 * Merge Sort is a divide-and-conquer algorithm that:
 * 1. Divides the input array into two halves (recursively)
 * 2. Sorts each half separately
 * 3. Merges the sorted halves back together
 * 
 * Why recursion is used:
 * - Recursion elegantly breaks down the problem into smaller subproblems
 * - Each recursive call works on a smaller portion of the array
 * - The base case (array of length 0 or 1) is already sorted by definition
 * - Recursive calls build up solutions for larger arrays from smaller ones
 * 
 * What the merge() function does:
 * - Takes two already-sorted arrays and combines them into a single sorted array
 * - Uses pointers to compare elements from both arrays
 * - Always selects the smaller element next, ensuring the result is sorted
 * - This merge operation runs in O(n) time, where n is the total length of both arrays
 */

/**
 * Main merge sort function that implements the recursive divide-and-conquer strategy
 * @param {Array} arr - The array to be sorted
 * @returns {Array} - The sorted array
 */
function mergeSort(arr) {
    // BASE CASE: If the array has 0 or 1 elements, it's already sorted
    if (arr.length <= 1) {
      console.log(`Base case reached with array: [${arr}]`);
      return arr;
    }
    
    // DIVIDE: Find the middle point and divide the array into two halves
    const middle = Math.floor(arr.length / 2);
    console.log(`Dividing array [${arr}] at index ${middle}`);
    
    // Create left and right subarrays
    const leftArray = arr.slice(0, middle);
    const rightArray = arr.slice(middle);
    
    console.log(`Left subarray: [${leftArray}]`);
    console.log(`Right subarray: [${rightArray}]`);
    
    // RECURSIVE STEP: Sort both halves by recursively calling mergeSort
    const sortedLeft = mergeSort(leftArray);
    const sortedRight = mergeSort(rightArray);
    
    console.log(`Sorted left: [${sortedLeft}]`);
    console.log(`Sorted right: [${sortedRight}]`);
    
    // COMBINE: Merge the sorted halves back together
    const result = merge(sortedLeft, sortedRight);
    console.log(`Merged result: [${result}]`);
    return result;
  }
  
  /**
   * Merges two sorted arrays into one sorted array
   * @param {Array} left - First sorted array
   * @param {Array} right - Second sorted array
   * @returns {Array} - Merged and sorted array
   */
  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    console.log(`Merging [${left}] and [${right}]`);
    
    // Compare elements from both arrays and add the smaller one to result
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++; // Move to next element in left array
      } else {
        result.push(right[rightIndex]);
        rightIndex++; // Move to next element in right array
      }
    }
    
    // If there are remaining elements in left array, add them
    while (leftIndex < left.length) {
      result.push(left[leftIndex]);
      leftIndex++;
    }
    
    // If there are remaining elements in right array, add them
    while (rightIndex < right.length) {
      result.push(right[rightIndex]);
      rightIndex++;
    }
    
    return result;
  }
  
  // Test case 1: Unsorted array
  const testArray1 = [38, 27, 43, 3, 9, 82, 10];
  console.log("Original array 1:", testArray1);
  const sortedArray1 = mergeSort(testArray1);
  console.log("Sorted array 1:", sortedArray1);
  
  // Test case 2: Array with duplicates
  const testArray2 = [5, 2, 9, 3, 5, 1, 7, 2];
  console.log("Original array 2:", testArray2);
  const sortedArray2 = mergeSort(testArray2);
  console.log("Sorted array 2:", sortedArray2);
  
  /**
   * EXPLANATION OF THE SORTING PROCESS:
   * 
   * Time Complexity: O(n log n)
   * - Dividing the array takes O(log n) steps
   * - Each level of division requires O(n) work to merge back together
   * - Overall: O(n log n) which is optimal for comparison-based sorting
   * 
   * Space Complexity: O(n)
   * - We need additional space for the left, right, and result arrays
   * - The recursion stack adds O(log n) space
   * 
   * How the Overall Sorting Is Achieved:
   * 1. Divide: Split the array recursively until we reach single elements
   * 2. Conquer: Single elements are trivially sorted
   * 3. Combine: Merge sorted subarrays back together in order
   * 
   * The key insight of merge sort is that while splitting is trivial,
   * the "magic" happens in the merge step where we combine two smaller
   * sorted arrays into one larger sorted array.
   */