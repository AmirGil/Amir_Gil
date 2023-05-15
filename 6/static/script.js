const button = document.getElementById('flip-button');
let rotation = 0;

function flipButton() {
  rotation = rotation + 90;
  if (rotation === 360) {
    button.classList = 'rotate-360';
  } else {
    button.classList = `rotate-${rotation % 360}`;
  }
  button.style.transform = `rotate(${rotation}deg)`;
}

button.addEventListener('click', flipButton);

var d = new Date();
console.log(d);
var y = d.getHours();
console.log(y);

var alon = {
    age:21,
    Family: "Levy",
    Time: new Date()
};


console.log(alon);

var H =d.getHours();
console.log(H);

var H = 21;

if(H < 6){
document.getElementById("greetingH1").innerHTML = "ZZZ";    
} 
else if(H<12){
document.getElementById("greetingH1").innerHTML = "Good morning";
}
else if(H<16){
    document.getElementById("greetingH1").innerHTML = "Good Afternoon";
}
else if(H<20){
    document.getElementById("greetingH1").innerHTML = "Good eavning";
    document.getElementById("body").classList.add("NightStyle");
}
else{
    document.getElementById("greetingH1").innerHTML = "Good night";
}

function TimeFunc(){
    document.getElementById("Time").innerHTML = d.getMinutes();
    document.getElementsByTagName("button")[0].innerHTML = "that's it";
    document.getElementById("IMG_cars").src = carsIMG[0];
}

var cars = ["mazda", "volvo", "ferrari","mazarti","lamborghini"];
var l = cars.length;

for(let i = 0; i < cars.length; i++){
    var text = cars[i] +"<br>";
    document.getElementById("Time").innerHTML =text;
    console.log(text);
}

var carsIMG = [
    "https://www.topgear.com/sites/default/files/2023/02/Maserati%20GranTurismo%20Trofeo%20Rosso%20GranTurismo%20%2812%29.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/2024-maserati-granturismo-trofeo-101-1664572206.jpg"
]



