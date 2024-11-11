function checkpalindrome(){
    var value = document.getElementById("palindrome_value").value;
    var digit_sums = sumofdigit(value);

    var a = digit_sums;

    var reverse_a = 0;

    while(a > 0){
        var b = a % 10;
        reverse_a = reverse_a * 10 + b;
        a = Math.floor(a / 10);
    }

    alert(reverse_a);

    if(digit_sums == reverse_a){
        document.getElementById("ex1_result").textContent = 'Is Palindrome';
    }else{
        document.getElementById("ex1_result").textContent = 'Is not Palindrome';
    }
}

function sumofdigit(a){
    // if (isNaN(a) || a.trim() === "") {
    //     alert("Error.")
    //     return;
    // }

    a = Math.abs(a);

    x = a;

    var sum = 0;

    while(a > 0){
        sum += a % 10;
        a = Math.floor(a / 10);
    }

    document.getElementById("digits_sum").textContent = sum;
    return sum;
}

function baishin(){
    var value = document.getElementById("baishin_value").value;

    var davhar = 9;
    var davhar_ail = 4;
    var orts = 3;

    var niit = davhar * davhar_ail * orts;
    var baishin_ail = davhar * davhar_ail;

    orts_result = orts_medeh(value, baishin_ail, niit);
    document.getElementById("orts_result").textContent = orts_result;

    davhar_result = davhar_medeh(value, baishin_ail, niit, davhar_ail);
    document.getElementById("davhar_result").textContent = davhar_result;

    toot_result = toot_medeh(value, baishin_ail, niit);
    document.getElementById("toot_result").textContent = toot_result;
}

function orts_medeh(value, baishin_ail, niit){
    var baishin_ail_1 = baishin_ail;
    var orts_result = 1;
    for (let i = 1; i <= niit; i++){
        if(i > baishin_ail_1){
            baishin_ail_1 = baishin_ail_1 + baishin_ail;
            orts_result++;
        }
        if(i == value){
            return orts_result;
        }
    }
}

function davhar_medeh(value, baishin_ail, niit, davhar_ail){
    var davhar_result = 1;
    var davhar_ail_1 = davhar_ail;
    var baishin_ail_1 = baishin_ail;
    for (let i = 1; i <= niit; i++){
        if(i > davhar_ail_1){
            davhar_ail_1 = davhar_ail_1 + davhar_ail;
            davhar_result++;
        }
        if(i > baishin_ail_1){
            baishin_ail_1 = baishin_ail_1 + baishin_ail;
            davhar_result = 1;
        }
        if(i == value){
            return davhar_result;
        }
    }
}

function toot_medeh(value, baishin_ail, niit){
    var baishin_ail_1 = baishin_ail;
    var toot_result = 1;
    for (let i = 1; i <= niit; i++){
        if(i > baishin_ail_1){
            baishin_ail_1 = baishin_ail_1 + baishin_ail;
            toot_result = 1;
        }
        if(i == value){
            return toot_result;
        }
        toot_result++;
    }
}

function wolf_rabbit(){
    var value = document.getElementById("distance_value").value;

    var wolf_speed = 25;
    var rabbit_speed = 18;

    var relative_speed = wolf_speed - rabbit_speed;

    if (relative_speed <= 0) {
        alert("The wolf cannot catch the rabbit.");
        return;
    }

    var timeinhours = value / relative_speed;
    var timeinminutes = Math.floor(timeinhours * 60);
    var timeinseconds = Math.round((timeinhours * 3600) % 60);

    document.getElementById("minute_result").textContent = timeinminutes;
    document.getElementById("second_result").textContent = timeinseconds;
}

function common_divisor(){
    var divisor_value_1 = document.getElementById("divisor_value_1").value;
    var divisor_value_2 = document.getElementById("divisor_value_2").value;
    var divisor_value_3 = document.getElementById("divisor_value_3").value;
    var divisor_value_4 = document.getElementById("divisor_value_4").value;
    var divisor_value_5 = document.getElementById("divisor_value_5").value;
    let numbers = [divisor_value_1, divisor_value_2, divisor_value_3, divisor_value_4, divisor_value_5];
    let lcd = findgcd(numbers);
    document.getElementById("lcd_result").textContent = lcd;
}

function gcd(a, b){
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function findgcd(array) {
    let result = array[0];
    for (let i = 1; i < array.length; i++) {
        result = gcd(result, array[i]);
        if (result === 1) {
            return 1;
        }
    }
    return result;
}

function calculation(){
    var a = document.getElementById("a_number").value;
    a = parseFloat(a);

    let date = new Date();
    let hour = date.getHours();

    var result;

    if(hour < 18){
        result = a ** 2;
    }else{
        result = Math.sqrt(a);
    }

    document.getElementById("date").textContent = result;
}