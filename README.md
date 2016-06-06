# js_2016

**Lesson2**

1) _lesson2/js/var.js_

Есть такой код:
   var a = 1, b = 1, c, d; c = ++a; alert(c); // 2 | 
   d = b++; alert(d); // 1 | 
   c = (2+ ++a); | 
   alert(c); // 5 | 
   d = (2+ b++); alert(d); // 4 | 
   alert(a); // 3 | 
   alert(b); // 3

2) _lesson2/js/nan.js_ 

-+!++NaN; //-1 | 
+!+[]; //1 | 
!NaN+!NaN++; //2
   
2 и 3 - Необходимо разобраться почему работает именно так. Объяснения написать в виде комментария к каждой строчке

3) _lesson2/js/varX.js_ 

Чему будет равен x в примере ниже? | 
var a = 2; | 
var x = 1 + (a *= 2);

4) _lesson2/js/fizzBuzz.js_

Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями.
Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.
Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3 и на 5.


**Lesson1**
1) Вывести «Привет, Javascript» c помощью alert. | 
_lesson1/js/hello.js_

2) Работа с переменными
   Объявите две переменные: admin и name. 
   Запишите в name строку "Василий". 
   Скопируйте значение из name в admin. 
   Выведите admin (должно вывести «Василий»). | 
   _lesson1/js/var.js_
   
3) Напишите функцию, которая будут вычислять площадь геометрической фигуры (круг/квадрат или любой другой),
функция должна возвращать объект со значением результата.
Резултат работы которой должен быть выведен в консоль. | 
_lesson1/js/geometry.js_