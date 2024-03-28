var uzs = 11000.34;
var euro = 12354.03;

var airplane = 500,
  airplaneUzs = airplane * uzs,
  hospital = 250,
  hospitalUzs = hospital * uzs,
  museum = 120, // euro
  museumUzs = museum * euro;

var costUzs = airplaneUzs + hospitalUzs + museumUzs;

var userMoney = +prompt(`Pulingizni kiriting !`, 870);

var userMoneyUzs = userMoney * uzs;

var i = 1;

while (i > userMoney) {
  if (userMoney === 0) {
    var userMoney = +prompt(`Pulingizni kiriting !`, 870);
  }
  i++;
}

if (isNaN(userMoney)) {
  alert('Pulingizni sonlar bilan kiriting va $ blegisini ishlatmang !');
} else if (userMoneyUzs >= costUzs) {
  console.log('Yaxshi dam olib keling !');
} else if (userMoneyUzs < costUzs) {
  console.log("Ozgina sabr qilib o'tirishingiz kerak ekan !");
}
