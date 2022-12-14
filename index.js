let birthdayYear = +prompt('Your birthday Year');
let city = prompt('Enter your city');
let sport = prompt('Enter your sport');

if (birthdayYear >= 1900 && birthdayYear <= 2020) {
    birthdayYear =(`Тобі ${2022 - birthdayYear} років`);
}else{
    birthdayYear =(`Шкода, що Ви не захотіли ввести свій вік`);
}

if (city === 'Київ' || city === 'Лондон' || city === 'Вашингтон') {
    city = (`Ти живеш у столиці ${city}`);
}else if (city) {
    city = (`Ти живеш у місті ${city}`)
}else{
    city = (`Шкода, що Ви не захотіли ввести своє місто`);
}

if (sport === 'Теніс') {
    sport = (`Ти хочеш бути як Світоліна Еліна`);
}else if(sport === 'Шахи') {
    sport = (`Ти хочеш бути як Павло Ельянов`);
}else if(sport === 'Покер') {
    sport = (`Ти хочеш бути як Євген Качалов`);
}else if(sport) {
    sport = (`Ти хочеш бути як відомі спортсмени`);
}else{
    sport = (`Шкода, що Ви не захотіли ввести улюблений спорт`);
}

let myInfo =(`${birthdayYear} \n${city} \n${sport}`)

alert(myInfo);