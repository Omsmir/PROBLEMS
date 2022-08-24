/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {

    const size  = strs.length

    if(size.length == 0){
        return ''

    }else if(size.length == 1){
        return strs[0]

    }

    strs.sort()


    let end = Math.min(strs[0].length,strs[size-1].length)

    let i = 0

    while (i < end && strs[0][i] === strs[size-1][i])
        i++;

        let pre = strs[0].substring(0,i)

        return pre
};


console.log(longestCommonPrefix(["flower","flow","flight"]))