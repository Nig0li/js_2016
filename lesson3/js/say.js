say('Вася');
var phrase = 'Привет';

function say(name) {
    console.log( name + ", " + phrase );
}

/*
Выведет
Вася, undefined
Так как переменная phrase была определена после вызова функции.
 */
