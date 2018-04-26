$(document).ready(function(){
	$(".tab-panels .tabs li").on("mouseenter",function(){
		var panelToShow = $(this).attr('rel');
		$(".tab-panels .panel.active").hide(0,function(){
			$(this).removeClass("active");
			$("#"+panelToShow).show(0,function(){
				$(this).addClass("active");
			});
		})
	})
});