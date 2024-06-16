let count = 0;
let enteredEl = document.getElementById("entered-el");
let totalEl = document.getElementById("total-el");
let entriesEl = document.getElementById("entries-el");
let total = 0;

function increese() {
	count += 1;
	total += 1;
	enteredEl.textContent = count;
	totalEl.textContent = total;
}
function save() {
	let entries = count;

	entriesEl.textContent += " " + count + " -";
	count = 0;
}
function reset() {
	count = 0;
	total = 0;
	enteredEl.textContent = count;
	totalEl.textContent = total;
	entriesEl.textContent = "Previous entries: ";
}
