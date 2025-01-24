const counterDisplay = document.getElementById('counter');
const clickButton1 = document.getElementById('clickButton1');
const clickButton = document.getElementById('clickButton');
const clickButton2 = document.getElementById('clickButton2');
let str = "Привет, нажми на кнопку";
let count = 0;

clickButton.addEventListener('click', () => {
  if (count == 0) {str = "БУУУ!"; count += 1;}
  else if (count == 1) {str = "Не страшно?"; count += 1;}
  else if (count == 2) {str = "Кхм...Хорошо, просто продолжим"; count += 1;}
  else if (count == 3) {str = "По бегущей строчке уже можно понять,\nзачем я скинул тебе этот сайт)"; count += 1;}
  else if (count == 4) {str = "Поздравляю с годовщиной, родная!\nИ предлагаю пройти маленькое тестирование)"; count += 1;}
  else if (count == 5) {str = "Мы начинаем!"; count += 1;}
  else if (count == 6) {str = "1) Дата начала отношений? \n\nА) 26 Декабря 2023 года \nБ) 24 Декабря 2023 года \nВ) 24 Декабря 2022 года"; count += 1; 
    clickButton1.textContent = "Ответ А"; clickButton2.textContent = "Ответ В"; clickButton.textContent = "Ответ Б";
    document.getElementById("clickButton2").style.backgroundColor = "#ff7b00";
    document.getElementById("clickButton1").style.backgroundColor = "#ff7b00";
    document.getElementById("#clickButton:hover").style.backgroundColor = "#ff7b00";
  }
  else if (count == 9) {str = "4) С каким хим элементом ты у меня ассоциируешься? \n\nА) H2O\nБ) Li\nВ) Na"; count += 1;}
  else if (count == 11) {str = "6) Наше место первой встречи? \n\nА) Пляж на Мальдивах\nБ) Дорогой Ресторан\nВ) Желтая Мусорка"; count += 1;}
  else if (count == 14) {str = "9) Что за мем 'А ЧТО ОНИ ДЕЛАЮТ РЯДОМ?!'? \n\nА) Мем появился после неудачного сочетания купленных\nцветов, мятного и лавандового\nБ) Застукали за игрой в Огонь и вода\nВ) Под 'А' душнила"; count += 1;}
  else if (count == 20) {str = "15) Станешь ли моей Пантерой на торте? \n\nА) Да\nБ) Конечно\nВ) Почему бы и нет"; count += 1;}
  counterDisplay.textContent = str;
});

clickButton1.addEventListener('click', () => {
  if (count == 8) {str = "3) Рекорд по урону, поставленный совсем недавно в Genshin Impact? \n\nА) 404.168\nБ) 743.150\nВ) 534.890"; count += 1;}
  else if (count == 16) {str = "???) Призрак, боящийся соли и не наступающий на нее? \n\nА) Пучик\nБ) Обакэ\nВ) Мираж"; count += 1;
    clickButton1.textContent = "Ответ А"; clickButton2.textContent = "Ответ В"; clickButton.textContent = "Ответ Б"; document.getElementById('img1').style.width = "0px";
    document.getElementById('img1').style.height = "0px";}
  else if (count == 18) {str = "13) От какой прикормки дуреет Диля? \n\nА) Каролина\nБ) Пабг Мобаил\nВ) Слайм Ранчер"; count += 1;}
  else if (count == 19) {str = "14) Готова увидеть Дилятортик? \n\nА) Нет\nБ) НЕТ\nВ) Да..."; count += 1;}
  else if (count == 20) {str = "15) Станешь ли моей Пантерой на торте? \n\nА) Да\nБ) Конечно\nВ) Почему бы и нет"; count += 1;}
  counterDisplay.textContent = str;
});

clickButton2.addEventListener('click', () => {
  if (count == 7) {str = "2) Звездная стоимость самого дорогого подарка Дили в тг? \n\nА) 350 звезд\nБ) 250 звезд \nВ) 1000 звезд"; count += 1;}
  else if (count == 10) {str = "5) С каким животным ты ассоциируешься у подруг (тотемное)? \n\nА) Хомяк\nБ) Пантера\nВ) Ягуар"; count += 1;}
  else if (count == 12) {str = "7) Какой из Торговых Центров мы не посещали? \n\nА) Фокус\nБ) Фиеста\nВ) Родник"; count += 1;}
  else if (count == 13) {str = "8) Кто избавился от термоядреного доширака? \n\nА) Диля его доел\nБ) Дарья Зайцева\nВ) Каролина Дубина"; count += 1;}
  else if (count == 15) {str = ""; count += 1;
    document.getElementById('img1').style.width = "300px";
    document.getElementById('img1').style.height = "270px";
    clickButton1.textContent = "YA TUT!"; clickButton2.textContent = "BANANA MAMA"; clickButton.textContent = "NETU";}
  else if (count == 17) {str = "12) Хочешь килограмм кисслого мармелада? \n\nА) Пожалуйся...(Не надо)\nБ)Пожалуй Да\nВ) КОНЕЧНО ДА"; count += 1;}
  else if (count == 20) {str = "15) Станешь ли моей Пантерой на торте? \n\nА) Да\nБ) Конечно\nВ) Почему бы и нет"; count += 1;}
  counterDisplay.textContent = str;
});
