let ans = document.querySelector("#output");
function getRandomTime() {
  return Math.floor(Math.random() * 3) + 1;
}
const promise1 = () => new Promise((resolve, reject) => {
  let time = getRandomTime();
  setTimeout(() => {
    resolve(['promise1', time]);
  }, time * 1000);
});
const promise2 = () => new Promise((resolve, reject) => {
  let time = getRandomTime();
  setTimeout(() => {
    resolve(['promise2', time]);
  }, time * 1000);
});
const promise3 = () => new Promise((resolve, reject) => {
  let time = getRandomTime();
  setTimeout(() => {
    resolve(['promise3', time]);
  }, time * 1000);
});
function row(name, time) {
  var row = ans.insertRow(-1);
  var col0 = row.insertCell(0);
  var col1 = row.insertCell(1); 
  col0.innerText = name;
  col1.innerText = time;
}
let loadingRow = ans.insertRow(-1);
let loadingData = loadingRow.insertCell(0);
loadingData.innerText = "Loading...";
loadingData.colSpan = 2;  // To make it span 2 columns
let startTime = Date.now();

Promise.all([promise1(), promise2(), promise3()])
  .then((data) => {
    let endTime = Date.now();
    let totalTime = (endTime - startTime) / 1000;
    ans.removeChild(loadingRow);
    data.forEach(item => row(item[0], item[1]));
    row('Total', totalTime);
  });
