// https://github.com/MDSHAWON01/assignment3

//problem 1
function kilometerToMeter(kilo){
    var meter = kilo / 1000;
    return meter;

}
var tableFeet = kilometerToMeter(50000);
console.log(tableFeet);



//problem 2
function budgetCalculator(clock, mobile, laptop){
    var result =clock+mobile+laptop;
    return result;

}
var sum =budgetCalculator(50,100,500);
console.log(sum);



//problem 3
function hotelCost(cost){
    var hotel =0;
    if(cost <=10){
        hotel=cost * 100;

    }
    else if(cost <=20){
        var firstHotel= 10 * 100;
        var remaining=cost-10;
        var secondHotel= remaining * 80;
        hotel=firstHotel + secondHotel;

    }
    else{
        var firstHotel= 10 * 100;
        var secondHotel= 10 * 80;
        var remaining=cost-20;
        var thirdHotel=remaining * 50;
        hotel=firstHotel+secondHotel+thirdHotel;


    }
    return hotel;
}
var count=hotelCost(30);
console.log(count);



//problem 4
 console.log(megaFriend(['joy', 'shawon', 'mushfiq', 'tamim', 'shakib']));

function megaFriend(arr) {
  let word = "";
  for (let i = 0; i < arr.length; i++) {
    if (word.length < arr[i].length) {
      word = arr[i];
    }
  }
  return word;
}

function longestStringReduce(arr) {
  return arr.reduce((a, b) => a.length < b.length ? b : a, "");
}