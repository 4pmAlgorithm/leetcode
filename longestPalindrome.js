    function is_Palindrome(str1) {
    let rev = str1.split("").reverse().join("");
    console.log(":;str1 =>  ", str1)
    console.log("::rev =>  ", rev)
    return str1 == rev;
    }
    
    function longest_palindrome(str1){
    
    let max_length = 0,
    maxp = '';
    
    for(let i=0; i < str1.length; i++) {
        let subs = str1.substr(i, str1.length); //without the first letter
    
        for(var j = subs.length; j>=0; j--) {
            let sub_subs_str = subs.substr(0, j);//without last letter
            if (sub_subs_str.length <= 1) 
            continue;
        
            console.log(":::", is_Palindrome(sub_subs_str))
            
            if (is_Palindrome(sub_subs_str)){
                if (sub_subs_str.length > max_length){
                    max_length = sub_subs_str.length;
                    maxp = sub_subs_str;
                    }
            }
        }
    }
    
    return maxp;
    }

console.log(longest_palindrome("abracadabra"));

