javascript: (function () {
	function tn( tagname ){
		return document.getElementsByTagName(tagname);
	}
	function create( elem ) { 
		return document.createElementNS ? 
		document.createElementNS( 'http://www.w3.org/1999/xhtml', elem ) : 
		document.createElement( elem ); 
	}
	function append( parent, elem ) { 
		parent.appendChild( elem );
	}
	function jqReady( f ) { 
		// If the DOM is already loaded, execute the function right away 
		if (jqReady.done) return f();
		if (jqReady.timer) {
		    // Add it to the listof functions to execute 
		    jqReady.queue.push(f);
		} else {
		    // First time, create an array of functions to queue
		    jqReady.queue = [f];
		    jqReady.timer = setInterval(isJQReady, 13);
		}
	}
	function isJQReady() {
	    if (jqReady.done) return false;
	    // Check to see if a number of functions and elements are 
	    // able to be accessed 
	    if ($) {
	        // If ready, kill timer 
	        clearInterval(jqReady.timer);
	        jqReady.timer = null;
	        // Execute all the functions in queue 
	        for (var i = 0; i < jqReady.queue.length; i++)
	        	jqReady.queue[i](); 
	        jqReady.queue = null; // Clear function queue
	        jqReady.done = true; // Remember that we're now done
	    }
	}

	var code = create("script");
	code.setAttribute("type", "text/javascript");
	code.setAttribute("src", "http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js");
	append(tn("head")[0], code);

	jqReady(function(){
		$("a").each(function(){
			if (/.+\.(jpe?g|gif|png)$/.test($(this).attr("href"))){
				var noob = $("<img>");
				noob.attr("src", $(this).attr("href"));
				noob.css("display","none");
				noob.css("position","absolute");
				$(this).append(noob);
				$(this).hover(function(e){
					noob.css("left",e.pageX+40);
					noob.css("top",e.pageY-40);
					noob.css("display","block");
				}, function(e){
					noob.css("display","none");
				});
			}
		});
	});
})()