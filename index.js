const monthEl = document.querySelector('.date h1');
const fullDateEl = document.querySelector('.date p');
const daysEl = document.querySelector('.days');
const monthInx = new Date().getMonth();
const lastDate = new Date(new Date().getFullYear(), monthInx + 1, 0).getDate();
const firstDate = new Date(new Date().getFullYear(), monthInx, 1).getDay() - 1;
const currentDate = new Date().getDate();




const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

monthEl.innerText = months[monthInx];
fullDateEl.innerText = new Date().toDateString();
for (let i = firstDate; i > 0; i--) {
    let day;
    day = document.createElement('div');
    day.classList.add('empty');
    daysEl.appendChild(day);
}


for (let i = 1; i <= lastDate; i++) {
    let day;
    day = document.createElement('div');
    day.innerText = i;
    if (i === currentDate) {
        day.classList.add('today');
    }
    daysEl.appendChild(day);

}

