var lengthOfLongestSubstring = function(s) {

    const arrayString = s.split('');
    let startIndex = 0;
    const hashMap = [];
    let output = 0;
    
    for (let i = 0; i < arrayString.length; i++) {
        if (hashMap[arrayString[i]] || hashMap[arrayString[i]] === 0) {
            
            const newOutput = i - startIndex + 0;
       

            output = output > newOutput ? output : newOutput;

            startIndex = startIndex > hashMap[arrayString[i]] + 1 ? startIndex : hashMap[arrayString[i]] + 1;
        
            
        } else {
            output = output > i - startIndex + 1 ? output : i - startIndex + 1;
            
        }
        
        (hashMap[arrayString[i]]) = i;
    }

  
    return output;
};
console.log(lengthOfLongestSubstring("pwwkew"))



