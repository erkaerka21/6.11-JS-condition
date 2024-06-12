/* let weeknumber = Number(prompt("Та 1 - 7 хооронд тоо сонгож оруулна уу !!!"));
let garigiinNer;

if (weeknumber === 1) {
  //   console.log("Даваа");
  garigiinNer = "Даваа";
} else if (weeknumber === 2) {
  //   console.log("Мягмар");
  garigiinNer = "Мягмар";
} else if (weeknumber === 3) {
  //   console.log("Лхагва");
  garigiinNer = "Лхагва";
} else if (weeknumber === 4) {
  //   console.log("Пүрэв");
  garigiinNer = "Пүрэв";
} else if (weeknumber === 5) {
  //   console.log("Баасан");
  garigiinNer = "Баасан";
} else if (weeknumber === 6) {
  //   console.log("Бямба");
  garigiinNer = "Бямба";
// } else if (weeknumber === 7) {
//   //   console.log("Ням");
//   garigiinNer = "Ням";
// } else console.log("Таны оруулсан тоонд тохирох гаригийн нэр олдсонгүй.");

// console.log("Таны оруулсан тоо : ", weeknumber);
// console.log("Таны оруулсан тоонд тохирох гаригийн нэр : ", garigiinNer); */

// // let age = 20;
// // let gender = "эр";

// // if (age >= 18 || gender === "эр") {
// //   console.log("Та насанл хүрсэн эсвэл эрэгтэй");
// // } else {
// //   console.log("Та насанд хүрээгүй болон эмэгтэй байна");
// }

// let weeknumber = Number(prompt("Та 1 - 7 хооронд тоо сонгож оруулна уу !!!"));
// let garigiinNer;
// switch(weeknumber) {
//     case 1 : {
//         garigiinNer = "Даваа"
//         break;
//     }
//     case 2 : {
//         garigiinNer = "Мягмар"
//         break;
//     }
//     case 3 : {
//         garigiinNer = "Лхагва"
//         break;
//     }
//     case 4 : {
//         garigiinNer = "Пүрэв"
//         break;
//     }
//     case 5 : {
//         garigiinNer = "Баасан"
//         break;
//     }
//     case 6 : {
//         garigiinNer = "Бямба"
//         break;
//     }
//     case 7 : {
//         garigiinNer = "Ням"
//         break;
//     }
//     default : "Олдсонгүй"
// }

// console.log("Таны оруулсан тоо : ", weeknumber);
// console.log("Таны оруулсан тоонд тохирох гаригийн нэр : ", garigiinNer);

//daalgavar 1
let myAge = 26;
if (myAge > 25) {
  console.log("above 25", myAge);
} else {
  console.log("below 25", myAge);
}

//daalgavar 2
let n = 17;
if (n % 2) {
  console.log("сондгой тоо", n);
} else {
  console.log("тэгш тоо", n);
}

//daalgavar 3
let X = 12;
let Y = 45;
let Z = 30;
if (Y > X) {
  console.log("хамгийн их утга : ", Y);
} else if (X > Y) {
  console.log("хамгийн их утга : ", X);
} else if (Z > Y) {
  console.log("хамгийн их утга : ", Z);
} else if (Z > X) {
  console.log("хамгийн их утга : ", Z);
}

//daalgavar 4
let A = 12;
let B = 45;
let C = 30;
if (A < B) {
  console.log("хамгийн бага утга : ", A);
} else if (B < A) {
  console.log("хамгийн бага утга : ", B);
} else if (C < A) {
  console.log("хамгийн бага утга : ", C);
} else if (C < B) {
  console.log("хамгийн бага утга : ", C);
}

//daalgavar 5
let mounth = Number(
  prompt("Жилийн 12 сарын аль нэг сарын дугаарыг оруулна уу !!!")
);
if (mounth == 2 || mounth == 3 || mounth == 4) {
  console.log("Хаврын улирал", mounth);
}
if (mounth == 5 || mounth == 6 || mounth == 7) {
  console.log("Зуны улирал", mounth);
}
if (mounth == 8 || mounth == 9 || mounth == 10) {
  console.log("Намрын улирал", mounth);
}
if (mounth == 11 || mounth == 12 || mounth == 1) {
  console.log("Өвлийн улирал", mounth);
}

//daalgavar 6 bagshaas asuuh
let XY = 85;
let ZD = 75;
let CB = 96;
let SE = 69;
if (XY > 80 && ZD > 80 && CB > 80 && SE > 80) {
  console.log("80 аас их тоонуудын нийлбэр", XY + ZD + CB + SE);
} else if (XY < 80 && ZD > 80 && CB > 80 && SE > 80) {
  console.log("80 аас их тоонуудын нийлбэр", ZD + CB + SE);
} else if (XY > 80 && ZD < 80 && CB > 80 && SE > 80) {
  console.log("80 аас их тоонуудын нийлбэр", XY + CB + SE);
} else if (XY > 80 && ZD > 80 && CB < 80 && SE > 80) {
  console.log("80 аас их тоонуудын нийлбэр", ZD + XY + SE);
} else if (XY > 80 && ZD > 80 && CB > 80 && SE < 80) {
  console.log("80 аас их тоонуудын нийлбэр", ZD + CB + XY);
} else if (XY < 80 && ZD < 80 && CB < 80 && SE < 80) {
  console.log("80 аас их тоонуудын нийлбэр");
} else if (XY < 80 && ZD < 80 && CB > 80 && SE > 80) {
  console.log("80 аас их тоонуудын нийлбэр", CB + SE);
} else if (XY < 80 && ZD < 80 && CB < 80 && SE > 80) {
  console.log("80 аас их тоонуудын нийлбэр", SE);
} else if (XY > 80 && ZD > 80 && CB < 80 && SE < 80) {
  console.log("80 аас их тоонуудын нийлбэр", ZD + XY);
} else if (XY > 80 && ZD < 80 && CB < 80 && SE < 80) {
  console.log("80 аас их тоонуудын нийлбэр", XY);
} else if (XY > 80 && ZD < 80 && CB > 80 && SE < 80) {
  console.log("80 аас их тоонуудын нийлбэр", CB + XY);
} else if (XY < 80 && ZD < 80 && CB > 80 && SE < 80) {
  console.log("80 аас их тоонуудын нийлбэр", CB);
} else if (XY < 80 && ZD > 80 && CB > 80 && SE < 80) {
  console.log("80 аас их тоонуудын нийлбэр", ZD + CB);
} else if (XY < 80 && ZD > 80 && CB < 80 && SE < 80) {
  console.log("80 аас их тоонуудын нийлбэр", ZD);
} else if (XY < 80 && ZD > 80 && CB < 80 && SE > 80) {
  console.log("80 аас их тоонуудын нийлбэр", ZD + SE);
} else if (XY > 80 && ZD < 80 && CB < 80 && SE > 80) {
  console.log("80 аас их тоонуудын нийлбэр", SE + XY);
}

// if (XY > 80) {
//   sum = sum + XY;
// } if (ZD > 80) {
//   sum = sum + ZD;
// } if (CB > 80) {
//   sum = sum + CB;
// } if (SE > 80) {
//   sum = sum + SE;
// }

//daalgavar 7
let X1 = 3; //XY
let X2 = 7; //ZD
let X3 = 2; //CB
let X4 = 4; //SE
let urjver = 1;
// if (X1 < 5 && X2 < 5 && X3 < 5 && X4 < 5) {
//   console.log("5 аас бага тоонуудын үржвэр", X1 * X2 * X3 * X4);
// } else if (X1 > 5 && X2 < 5 && X3 < 5 && X4 < 5) {
//   console.log("5 аас бага тоонуудын үржвэр", X2 * X3 * X4);
// } else if (X1 < 5 && X2 > 5 && X3 < 5 && X4 < 5) {
//   console.log("5 аас бага тоонуудын үржвэр", X1 * X3 * X4);
// } else if (X1 < 5 && X2 < 5 && X3 > 5 && X4 < 5) {
//   console.log("5 аас бага тоонуудын үржвэр", X2 * X1 * X4);
// } else if (X1 < 5 && X2 < 5 && X3 < 5 && X4 > 5) {
//   console.log("5 аас бага тоонуудын үржвэр", X2 * X3 * X1);
// } else if (X1 > 5 && X2 > 5 && X3 > 5 && X4 > 5) {
//   console.log("5 аас бага тоонуудын үржвэр");
// } else if (X1 > 5 && X2 > 5 && X3 < 5 && X4 < 5) {
//   console.log("5 аас бага тоонуудын үржвэр", X3 * X4);
// } else if (X1 > 5 && X2 > 5 && X3 > 5 && X4 < 5) {
//   console.log("5 аас бага тоонуудын үржвэр", X4);
// } else if (X1 < 5 && X2 < 5 && X3 > 5 && X4 > 5) {
//   console.log("5 аас бага тоонуудын үржвэр", X2 * X1);
// } else if (X1 < 5 && X2 > 5 && X3 > 5 && X4 > 5) {
//   console.log("5 аас бага тоонуудын үржвэр", X1);
// } else if (X1 < 5 && X2 > 5 && X3 < 5 && X4 > 5) {
//   console.log("5 аас бага тоонуудын үржвэр", X3 * X1);
// } else if (X1 > 5 && X2 > 5 && X3 < 5 && X4 > 5) {
//   console.log("5 аас бага тоонуудын үржвэр", X3);
// } else if (X1 > 5 && X2 < 5 && X3 < 5 && X4 > 5) {
//   console.log("5 аас бага тоонуудын үржвэр", X2 * X3);
// } else if (X1 > 5 && X2 < 5 && X3 > 5 && X4 > 5) {
//   console.log("5 аас бага тоонуудын үржвэр", X2);
// } else if (X1 > 5 && X2 < 5 && X3 > 5 && X4 < 5) {
//   console.log("5 аас бага тоонуудын үржвэр", X2 * X4);
// } else if (X1 < 5 && X2 > 5 && X3 > 5 && X4 < 5) {
//   console.log("5 аас бага тоонуудын үржвэр", X4 * X1);
// }

if (X1 < 5) {
  urjver = urjver * X1;
}
if (X2 < 5) {
  urjver = urjver * X2;
}
if (X3 < 5) {
  urjver = urjver * X3;
}
if (X4 < 5) {
  urjver = urjver * X4;
}
console.log("5 аас бага тоонуудын үржвэр", urjver);

//daalgavar 8
let Bat = 67;
let Ochir = 59;
let BatiinAvsanUnelgee;
let OchiriinAvsanUnelgee;
if (Bat < 60) {
  BatiinAvsanUnelgee = "Маш муу";
} else if ((Bat) => 60 && Bat < 70) {
  BatiinAvsanUnelgee = "Хангалттай";
} else if ((Bat) => 70 && Bat < 80) {
  BatiinAvsanUnelgee = "Дунд";
} else if ((Bat) => 80 && Bat < 90) {
  BatiinAvsanUnelgee = "Сайн";
} else if ((Bat) => 90 && Bat <= 100) {
  BatiinAvsanUnelgee = "Маш сайн";
}
console.log("Батын авсан дүн : 67 - ", BatiinAvsanUnelgee);

if (Ochir < 60) {
  OchiriinAvsanUnelgee = "Маш муу";
} else if ((Bat) => 60 && Bat < 70) {
  OchiriinAvsanUnelgee = "Хангалттай";
} else if ((Bat) => 70 && Bat < 80) {
  OchiriinAvsanUnelgee = "Дунд";
} else if ((Bat) => 80 && Bat < 90) {
  OchiriinAvsanUnelgee = "Сайн";
} else if ((Bat) => 90 && Bat <= 100) {
  OchiriinAvsanUnelgee = "Маш сайн";
}
console.log("Очирын авсан дүн : 59 - ", OchiriinAvsanUnelgee);

//daalgavar 9
let huvisagch1 = 120;
let huvisagch2 = 33;
let huvisagch3 = 10;
let huvisagch4 = 12;
if (huvisagch1 > huvisagch2) {
  console.log("Хамгийн бага утга нь : ", huvisagch2);

