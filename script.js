//your JS code here. If required.
function setCookie(name, value, days = 365) {
	const d = new Date();
	d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
	document.cookie = `${name}=${value};expires${d.toUTCString()};path=/`;
}

function getCookie(name) {
	const cname = name + "=";
	const decodedCookie = decodeURIComponent(document.cookie);
	const ca = decodedCookie.split(";");
	for(let i = 0; i < ca.length; i++){
		let c = ca[i].trim();
		if(c.indexOf(cname) === 0){
			return c.substring(cname.length, c.length);
		}
	}
	return "";
}
function applyPreferences(){
	const savedFontSize = document.getElementById('fontsize');
	const savedFontColor = document.getElementById('fontcolor');

	if(savedFontSize){
		document.documentElement.style.setProperty(
			"--fontsize",
			savedFontSize + "px"
		)
		document.getElementById('fontsize').value = savedFontSize;
	}
	if(savedFontColor){
		documnet.documentElment.style.setProperty(
			"--fontcolor", savedFontColor
		)
		document.getElementById('fontcolor').value = savedFontColor;
	}
} 

document.getElementById('settingForm').addEventListener('submit', (e) => {
	e.preventDefault();

	const fontSize = document.getElementById('fontsize').value;
	const fontColor = document.getElementById('fontcolor').value;

	setCookie('fontsize', fontSize);
	setCookie('fontcolor', fontColor);

	applyPreferences();
	alert("Preferences saved!");
})

window.onload = applyPreferences;

	