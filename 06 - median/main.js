// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number}
//  */



//  var findMedianSortedArrays = function(nums1, nums2) {
//     let merged = nums1.concat(nums2)
//      merged.sort((a, b) => a - b)
//      console.log(merged)
//      if(merged.length % 2 == 1 ){
//         return merged[merged.length / 2 - 0.5]
    
//     }else if(merged.length % 2 == 0){
//         return (merged[merged.length / 2  -1 ] + merged[merged.length / 2]) / 2
    
//     }
// };

// console.log(findMedianSortedArrays([3],[-2,-1])) //Array(6) [-2 -1 3 ]


