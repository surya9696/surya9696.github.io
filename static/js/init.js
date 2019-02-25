	
	/*Progressbar animation*/
	var progressBar = $('.progress-bar-graph div');
	for(var i = 0; i < progressBar.length; i++){
		$(progressBar[i]).appear(function(){			
			var percent = $(this).find('span').attr('data-width');
			var $endNum = parseInt($(this).find('.bar-wrap strong i').text(),10);
			
			var $that = $(this);			
			$(this).find('span').animate({
				'width' : percent + '%'
			},1600, function(){
			});			
			$(this).find('.bar-wrap strong').animate({
				'opacity' : 1
			},1400);			
			if(percent == '100'){
				$that.find('bar-wrap strong').addClass('full');
			}	
		});
	}
	
	