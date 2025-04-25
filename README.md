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