var Clock = (function() {

    function init() {
    	startClock();
    }

   function startClock(){
    	run();
    }

    function run(){
    
		var time = getTime();
		$('#hour-1').attr('class', 'time-'+time["h1"]);
    	$('#hour-2').attr('class', 'time-'+time["h2"]);
    	$('#minute-1').attr('class', 'time-'+time["m1"]);
    	$('#minute-2').attr('class', 'time-'+time["m2"]);
    	$('#second-1').attr('class', 'time-'+time["s1"]);
    	$('#second-2').attr('class', 'time-'+time["s2"]);
	    setTimeout(function(){
    		run();
    	}, 1000);

    }

    function getTime(date){

		var today = new Date();

		var h = today.getHours().toString().split("");
		var m = today.getMinutes().toString().split("");
		var s = today.getSeconds().toString().split("");			

		if(h.length==1){
			h[1]=m[0];
			h[0]=0;
		}if(m.length==1){
			m[1]=m[0];
			m[0]=0;
		}if(s.length==1){
			s[1]=s[0];
			s[0]=0;
		}

		var time = { "h1": h[0], "h2": h[1], "m1": m[0], "m2": m[1], "s1": s[0], "s2": s[1]};
		return time; 
	}
    return {
        init: init
    };

}());


var Main = (function() {
    
    function init() {
       Clock.init();
    }

    return {
        init: init 
    };

})();
