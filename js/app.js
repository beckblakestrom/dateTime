const days = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];
const d = new Date();
let day = days[d.getDay()];
let month = months[d.getMonth()];
let dayNumber = d.getDate();
let year = d.getFullYear();
let time = d.toLocaleTimeString();

function giveDate(day, dayNumber, month, year) {
	const note = `${day}, ${month} ${dayNumber}, ${year}`;
	return note;
}

function tellTime(newTime, ampm) {
	const tell = `${time}`;
	return tell;
}

console.log(giveDate(day, dayNumber, month, year));
console.log(tellTime(time));
