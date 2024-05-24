'use strict';

const iday = document.querySelector('.day');
const iMonth = document.querySelector('.month');
const iYear = document.querySelector('.year');
const mButton = document.querySelector('.btn');
const oDay = document.querySelector('.oDays');
const oMonth = document.querySelector('.oMonths');
const oYear = document.querySelector('.oYears');

const errED = document.querySelector('.errED');
const errID = document.querySelector('.errID');

const errEM = document.querySelector('.errEM');
const errIM = document.querySelector('.errIM');

const errEY = document.querySelector('.errEY');
const errIY = document.querySelector('.errIY');

const lD = document.querySelector('.lD');
const lM = document.querySelector('.lM');
const lY = document.querySelector('.lY');

let day;
let month;
let year;

const calculateAge = function () {
  //Condition for the day validation
  if (
    iday.value === '' ||
    isNaN(+iday.value) ||
    +iday.value < 1 ||
    +iday.value > 31
  ) {
    iday.style.borderColor = 'hsl(0, 100%, 67%)';
    lD.style.color = 'hsl(0, 100%, 67%)';

    if (iday.value === '') {
      errED.style.display = 'inline';
      errID.style.display = 'none';
    } else {
      errID.style.display = 'inline';
      errED.style.display = 'none';
    }
  } else {
    errED.style.display = 'none';
    errID.style.display = 'none';
    iday.style.borderColor = '';
    lD.style.color = '';

    day = +iday.value;
  }

  //Condition for Month Validation
  if (
    iMonth.value === '' ||
    isNaN(+iMonth.value) ||
    +iMonth.value < 1 ||
    +iMonth.value > 12
  ) {
    iMonth.style.borderColor = 'hsl(0, 100%, 67%)';
    lM.style.color = 'hsl(0, 100%, 67%)';

    if (iMonth.value === '') {
      errEM.style.display = 'inline';
      errIM.style.display = 'none';
    } else {
      errIM.style.display = 'inline';
      errEM.style.display = 'none';
    }
  } else {
    errEM.style.display = 'none';
    errIM.style.display = 'none';
    iMonth.style.borderColor = '';
    lM.style.color = '';

    month = +iMonth.value - 1;
  }

  //Condition for Year Validation
  if (
    iYear.value === '' ||
    isNaN(+iYear.value) ||
    +iYear.value < 1 ||
    +iYear.value > new Date().getFullYear()
  ) {
    iYear.style.borderColor = 'hsl(0, 100%, 67%)';
    lY.style.color = 'hsl(0, 100%, 67%)';

    if (iYear.value === '') {
      errEY.style.display = 'inline';
      errIY.style.display = 'none';
    } else {
      errIY.style.display = 'inline';
      errEY.style.display = 'none';
    }
  } else {
    errEY.style.display = 'none';
    errIY.style.display = 'none';
    iYear.style.borderColor = '';
    lY.style.color = '';

    year = +iYear.value;
  }
  console.log(year, month, day);
  ////////////////
  //Master condition
  let age;
  if (year && month && day) {
    console.log(year, month, day);
    age = new Date(year, month, day);

    console.log(age);
    const ageS = age.getTime();
    console.log(ageS);
    const nowS = Date.now();

    const tD = nowS - ageS;
    console.log(tD);

    const cD = new Date(tD);
    console.log(cD);

    const yearI = cD.getFullYear();
    const monthZ = cD.getMonth();
    const dateZ = cD.getDate();

    console.log(yearI, monthZ, dateZ);

    const yearZ = yearI - 1970;

    oDay.textContent = dateZ;
    oMonth.textContent = monthZ;
    oYear.textContent = yearZ;

    console.log(
      `You have lived for ${yearZ} years,  ${
        monthZ > 1 ? monthZ + ' months' : 'a month'
      }  and ${dateZ > 1 ? dateZ + ' days' : 'a day'}!!!`
    );
  } else {
    return;
  }

  //////////////////
  //Functionality
};

mButton.addEventListener('click', calculateAge);
// const dec = 'April 1 2007 ';
// console.log(dec);
// console.log(calculateAge());
