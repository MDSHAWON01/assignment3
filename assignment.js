// https://github.com/MDSHAWON01/assignment3

//problem 1
function kilometerToMeter(kiloMeter){
  var meter =kiloMeter*1000;
  return meter;
}
var convertToMeter=kilometerToMeter(20);
console.log(convertToMeter);
  

  


   



//problem 2
function budgetCalculator(clock, mobile, laptop){
    var clockPrice =clock*50;
    var watchPrice =mobile*100;
    var laptopPrice =laptop*500;

    

      var output=clockPrice+watchPrice+laptopPrice;
      return total;
    }
      




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