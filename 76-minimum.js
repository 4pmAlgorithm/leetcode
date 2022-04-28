// https://leetcode.com/problems/minimum-window-substring/

function minWindowSlidingWindow(s, t){
    let min = "", let = 0, right = -1;
    let map = {};

    t.split('').forEach(ele => {
        if(map[ele]===null)map[ele] =1;
        else map[ele] = map[ele]+1
    });

    let count = Object.keys(map).length;

    while(right <= s.length){
        if(count === 0){
            let current = s[left];
            if(map[current] !=== null)map[current]++
        }
    }
}