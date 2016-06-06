var a = 1;

while (a < 101) {
    if (0 == a % 3 && 0 == a % 5) {
        console.log('FizzBuzz');
    } else if (0 == a % 3) {
        console.log('Fizz');
    } else if (0 == a % 5) {
        console.log('Buzz');
    } else {
        console.log(a);
    }
    a++;
}