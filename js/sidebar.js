if (window.innerWidth > 768.0001) {
	function openLink(evt, animName) {

		let x = document.getElementsByClassName("bar__content");
		for (i = 0; i < x.length; i++) {
			x[i].style.display = "none";
		}

		let tablinks = document.getElementsByClassName("tablink");
		for (i = 0; i < x.length; i++) {
			tablinks[i].className = tablinks[i].className.replace(" magenta", "");
		}

		document.getElementById(animName).style.display = "block";
		evt.currentTarget.className += " magenta";

	}
}
