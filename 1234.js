let dataIn = document.querySelector('.date');
let inputIn = document.querySelector('.input-in');
let nameIn = document.querySelector('.name');
let priceIn = document.querySelector('.price');
let button = document.querySelector('button');

       console.log('ok');

let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

// Adding the entire table to the body tag

let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = 'Дата';
let heading_2 = document.createElement('th');
heading_2.innerHTML = 'Место проведения';
let heading_3 = document.createElement('th');
heading_3.innerHTML = "Имена Молодоженов";
let heading_4 = document.createElement('th');
heading_4.innerHTML = 'Сумма';
document.getElementById('body').appendChild(table);

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
row_1.appendChild(heading_4);
thead.appendChild(row_1);


var lastResFind=""; // последний удачный результат
var copy_page=""; // копия страницы в ихсодном виде

button.onclick = function (){

let a = dataIn.value;   
let b = inputIn.value;
let c = nameIn.value;
let d = +priceIn.value;
dataIn.value = '';
inputIn.value = '';
nameIn.value = '';
priceIn.value = ''; 

// Creating and adding data to second row of the table
let row_2 = document.createElement('tr');
let row_2_data_1 = document.createElement('td');
row_2_data_1.innerHTML = a;
let row_2_data_2 = document.createElement('td');
row_2_data_2.innerHTML = b;
let row_2_data_3 = document.createElement('td');
row_2_data_3.innerHTML = c;
let row_2_data_4 = document.createElement('td');
row_2_data_4.innerHTML = d;

row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
row_2.appendChild(row_2_data_3);
row_2.appendChild(row_2_data_4);
tbody.appendChild(row_2);
}
function TrimStr(s) {
     s = s.replace( /^\s+/g, '');
  return s.replace( /\s+$/g, '');
}

function FindOnPage(inputId) {//ищет текст на странице, в параметр передается ID поля для ввода
  var obj = window.document.getElementById(inputId);
  var textToFind;
 
  if (obj) {
    textToFind = TrimStr(obj.value);//обрезаем пробелы
  } else {
    alert("Введенная фраза не найдена");
    return;
  }
  if (textToFind == "") {
    alert("Вы ничего не ввели");
    return; 
  }
 
  if(document.body.innerHTML.indexOf(textToFind)=="-1")
  alert("Ничего не найдено, проверьте правильность ввода!");
 
  if(copy_page.length>0)
        document.body.innerHTML=copy_page;
  else copy_page=document.body.innerHTML;

 
  document.body.innerHTML = document.body.innerHTML.replace(eval("/name="+lastResFind+"/gi")," ");//стираем предыдущие якори для скрола
  document.body.innerHTML = document.body.innerHTML.replace(eval("/"+textToFind+"/gi"),"<a name="+textToFind+" style='background:red'>"+textToFind+"</a>"); //Заменяем найденный текст ссылками с якорем;
  lastResFind=textToFind; // сохраняем фразу для поиска, чтобы в дальнейшем по ней стереть все ссылки
  window.location = '#'+textToFind;//перемещаем скрол к последнему найденному совпадению
 }




