function showTime() {
  const time = new Date();
  const hour = time.getHours();
  const minutes = addLeadingZero(time.getMinutes());
  const seconds = addLeadingZero(time.getSeconds());
  const isAm = hour < 12 || hour === 0;
  let amPm = isAm ? 'AM' : 'PM';

  const displayTime = `${formatHour(hour)}:${minutes}:${seconds} ${amPm}`;
  document.getElementById('clock').innerText = displayTime;
}

function addLeadingZero(number) {
  return number < 10 ? '0' + number : number;
}

function formatHour(hour) {
  hour = hour >= 13 ? hour - 12 : hour;

  hour = hour === 0 ? hour + 12 : hour;
  return hour;
}

function showDate() {
  const date = new Date();

  const day = days[date.getDay()];
  const month = months[date.getMonth()];
  const dateToday = date.getDate();
  const year = date.getFullYear();

  const displayDate = `${day}, ${month} ${formatDateSuffix(dateToday)} ${year}`;

  document.getElementById('calendar').innerText = displayDate;
}

function formatDateSuffix(date) {
  if (date < 10 || date > 20) {
    switch (date % 10) {
      case 1:
        return `${date}st`;
      case 2:
        return `${date}nd`;
      case 3:
        return `${date}rd`;
    }
  }
  return `${date}th`;
}

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

showTime();
showDate();

setInterval(() => {
  showTime();
  showDate();
}, 1000);
