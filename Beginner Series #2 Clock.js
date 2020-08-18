https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript

    function past(h, m, s){
        let past1;
        if (0 <= h <= 23, 0 <= m <= 59, 0 <= s <= 59) {
            past1 = (h * 60 + m) * 60 + s;
            past1 = past1 * 1000;
        }
        return past1;
    }