// const narsalar =["nok", "banan", "mashina", "asal", "olma", "gul" ,"non"];
// const a =[];

// narsalar.forEach(nharif =>{
//     a.push(nharif);

// })
// console.log(a);

// let nhrifishtroketganharif = boshlangichAray.filter(alfabd => alfabd % n === f);



const harif = ["nok", "banan", "mashina", "asal", "olma", "gul", "non"];

const letters = "nhrif";


function containsNhrif(hariflar) {
  for (let i = 0; i < hariflar.length; i++) {
    if (letters.includes(hariflar[i])) {
      return true;
    }
  }
  return false;
}


const wordsWithNhrif = [];
const wordsWithoutNhrif = [];


harif.forEach(harif => {
  if (containsNhrif(harif)) {
    wordsWithNhrif.push(harif);
  } else {
    wordsWithoutNhrif.push(harif);
  }
});


console.log("n harifi mavjut:", wordsWithNhrif);
console.log(" n harifi mavjut emas:", wordsWithoutNhrif);


// Funksiya ishlashini to'xtatadi va uni chaqirgan joyga qiymatni (agar ko'rsatilgan bo'lsa) qaytaradi.