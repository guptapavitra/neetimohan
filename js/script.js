(function(){

	var config = {
		// viewFactor : 0.15,
		// duration   : 800,
		// distance   : "100px",
		// scale      : 0.8
	};

	window.sr = ScrollReveal( config );

	if (sr.isSupported()) {
		document.documentElement.classList.add('sr');
	}
})();