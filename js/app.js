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

function prettyDate(day, dayNumber, month, year) {
	const note = `Hello. Today is ${day}, ${month} ${dayNumber}, ${year}`;
	return note;
}

function prettyTime(newTime, ampm) {
	const tell = `The time is approximately ${time}`;
	return tell;
}

console.log(prettyDate(day, dayNumber, month, year));
console.log(prettyTime(time));
