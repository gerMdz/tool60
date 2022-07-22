// =======================================================================================
// 
// YoseModal v1
//
// Author: Klerith
// Page: http://codecanyon.net/user/klerith
// Email: fernando.herrera85@gmail.com BUT, first send me a message through codecanyon page.
//        That's because some people stole the code and ask me support when they are not a customer :(
//
// =======================================================================================
(function ($) 
{

var ymCount = 0;
var ymInit  = 0;

// Mobile check
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);


// ====== Yose Modal
$.yosemodal = function(settings, callback){

	var content = "";
		ymCount = ymCount + 1;

	settings = $.extend({
			position: "center",
			top: undefined,
			bottom: undefined,
			left: undefined,
			right: undefined,
			animation: undefined,
			animationout: "fade",
			intime: 0.6,
			indelay: 0,
        	width: "300px",
        	height: undefined,
        	showbuttons: true,
        	red: true,
        	yellow:true,
        	green:true,
        	title: undefined,
			content: "",
        	faicon: undefined,
        	img: undefined,
        	imgrounded: false,
        	theme: "white",
			backscreen: true,
			backcolor: "#000000",
			bgopacity: 0.5,
			iframe: undefined,
			iframecache: true,
			loadingmessage: "loading",
			loadingicon: "fa-gear",
			timeout: undefined,
			closeonclick: false,
			youtube: undefined,
			youtubecontrols:false,
			youtubeinfo:false,
			divwithclass: undefined,
			mobilehidebuttons: false,
        }, settings);


	// Background placemant
	if( settings.backscreen ){

		var bg = '<div id="ym'+ ymCount +'b" class="YoseBg" style="background-color:'+ settings.backcolor +'; "></div>';
		$("body").append(bg);
		var ymBg = $("#ym" + ymCount + "b");
		TweenMax.to(ymBg, 0.3, { opacity:settings.bgopacity });
	}

	if( settings.youtubecontrols === false ){
		settings.youtubecontrols = 0;
	}else{
		settings.youtubecontrols = 1;
	}
	if( settings.youtubeinfo === false ){
		settings.youtubeinfo = 0;
	}else{
		settings.youtubeinfo = 1;
	}


	// check if exist the small container
	if( $(".divYoseMinContainer").length == 0){
		$("body").append('<div id="divYoseMinContainer"></div>');
	}


	// Check Youtube
	if( settings.youtube != undefined ){
		console.log( settings.youtubecontrols );
		settings.iframe = "https://www.youtube.com/embed/"+ settings.youtube +"?autoplay=1&controls="+ settings.youtubecontrols +"&disablekb=1&showinfo="+ settings.youtubeinfo +"&autohide=0&color=white";
		settings.iframecache = false;
	}

	if( jQuery.browser.mobile === true && settings.timeout == undefined && settings.mobilehidebuttons == false){
		settings.showbuttons = true;
	}

	var iframeScrollClass = "";
	if (jQuery.browser.mobile === true){
		iframeScrollClass = "scroll-wrapper";
	}


	// Initial position
	var DefStyle = "";

	if( settings.position != "center" ){

		if( settings.bottom === undefined ){
			DefStyle = "top: " + settings.top + ";";
		}else{
			DefStyle = "bottom: " + settings.bottom + ";";
		}

		if( settings.right === undefined ){
			DefStyle += "left: " + settings.left + ";";
		}else{
			DefStyle += "right: " + settings.right + ";";		
		}

	}

	// Width
	DefStyle += "width: " + settings.width + ";";

	// height
	if( settings.height != undefined){
		DefStyle += "height: " + settings.height + ";";
	}

	if( settings.iframe != undefined && settings.height == undefined ){
		DefStyle += "height: 250px;";
	}



	if(settings.divwithclass == undefined){

		content += "<div id='ym"+ ymCount +"' class='YoseModalBox " + settings.theme +"' style='" + DefStyle + "' data-defstyle='"+ DefStyle +"' data-animationout='"+ settings.animationout +"' data-theme='"+ settings.theme +"' data-closeonclick='"+ settings.closeonclick +"' data-mouseover='0' data-position='"+ settings.position +"'>";
		
		var hasButTittle = false;
		if( settings.showbuttons ===true ||	settings.title !=undefined ) {
			hasButTittle = true;

		content += 	"<div class='YoseTopBar'>";

		if(settings.showbuttons){
		// The user wants a normal Modal
		content += 		"<div class='YoseWindowButtons'>";
			if(settings.red)
				content += 			"<span class='YoseButton fa fa-circle YoseRed botClose"+ ymCount +"' data-modal='ym"+ymCount+"'></span> ";
			else
				content += 			"<span class='fa fa-circle YoseGray'></span> ";
			if(settings.yellow)
				content += 			"<span class='YoseButton fa fa-circle YoseYellow' data-clicked='0'></span> ";
			else
				content += 			"<span class='fa fa-circle YoseGray'></span> ";
			if(settings.green)
				content += 			"<span class='YoseButton fa fa-circle YoseGreen'></span> ";
			else
				content += 			"<span class='fa fa-circle YoseGray'></span> ";
		content += 		"</div>";
		}// End of showbuttons


		if(settings.title !=undefined){
		content += 		"<div class='YoseWindowTitle' align='center'>";
		content += 			settings.title;
		content += 		"</div>";
		}


		content += 	"</div>"; // end YoseTopBar
		}// end of has tittle or buttons

		//The user wants an iFrame
		if(settings.iframe != undefined){
				content +=	"<div class='YoseContentIframe "+ iframeScrollClass +"'>";

				if(settings.iframecache === true){
				content +=		"<div class='YoseLoading' align='center'>";
				content +=			"<i class='fa "+ settings.loadingicon +" fa-spin fa-2x'></i>";
				content +=			"<br>";
				content +=			settings.loadingmessage;
				content +=		"</div>";
				}else{
				content +=		"<iframe src='"+ settings.iframe +"' allowfullscreen></iframe>";
				}
				content +=	"</div>";

		}else{

		if(settings.faicon !=undefined || settings.img !=undefined){

			content += 	"<div class='YoseIconImage'>";

			if( settings.faicon !=undefined){
			content += 		"<i class='fa "+ settings.faicon +"' data-type='fa' data-content='" + settings.faicon + "'></i>";
			}else if( settings.imgrounded ){
			content += 		"<img src='"+ settings.img +"' class='YoseModalRound' data-type='imground' data-content='"+ settings.img +"'>";
			}else{
			content += 		"<img src='"+ settings.img +"' data-type='img' data-content='"+ settings.img +"'>";
			}
			content += 	"</div>";

		}


		content += 	"<div class='YoseContent'>";
		content += 		settings.content;
		content += 	"</div>";

		} // Endif iframe or not

		content += "</div>";



		$("body").append(content);


	}
	else{  
		// Settings.div. User wants to convert a div into a YoseModal
		var YoseModal = $("."+settings.divwithclass);

		var isInited = YoseModal.attr("data-mouseover");


		if( isInited != undefined ){ // Because if is already initialized, I just need to show it again
			// Show Again the modal
			YoseModal.fadeIn();
		}else{

			if(YoseModal.length == 0){
				alert("YoseModal cant find a div with the class " + settings.divwithclass);
				return false;
			}else if(YoseModal.length >1){
				alert("YoseModal detects " + YoseModal.length + " divs, with the class " + settings.div + ", please, use a unique class");
				return false;
			}

			var OriginalClass = YoseModal.attr("class");

			YoseModal.attr("id","ym"+ ymCount)
					 .attr("class", "YoseModalBox YoseModalDiv " + settings.theme + " " + settings.divwithclass)
					 .attr("style", DefStyle)
					 .attr("data-origin",OriginalClass)
					 .attr("data-theme",settings.theme)
					 .attr("data-closeonclick",settings.closeonclick)
					 .attr("data-animationout",settings.animationout)
					 .attr("data-position",settings.position)
					 .attr("data-mouseover",0)
					 .attr("data-defstyle", DefStyle);

			var content  = "";

			if( settings.showbuttons == true || settings.title !=undefined ){

				content += "<div class='YoseTopBar'>";

				if(settings.showbuttons){
				// The user wants a normal Modal
				content += 		"<div class='YoseWindowButtons'>";
					if(settings.red)
						content += 			"<span class='YoseButton fa fa-circle YoseRed botClose"+ ymCount +"' data-modal='ym"+ymCount+"'></span> ";
					else
						content += 			"<span class='fa fa-circle YoseGray'></span> ";
					if(settings.yellow)
						content += 			"<span class='YoseButton fa fa-circle YoseYellow' data-clicked='0'></span> ";
					else
						content += 			"<span class='fa fa-circle YoseGray'></span> ";
					if(settings.green)
						content += 			"<span class='YoseButton fa fa-circle YoseGreen'></span> ";
					else
						content += 			"<span class='fa fa-circle YoseGray'></span> ";
				content += 		"</div>";
				}// End of showbuttons


				if(settings.title !=undefined){
				content += 		"<div class='YoseWindowTitle' align='center'>";
				content += 			settings.title;
				content += 		"</div>";
				}


				content += 	"</div>"; // end YoseTopBar
				}// end of has tittle or buttons

				YoseModal.prepend(content);
				YoseModal.show();
		} //End of Exist modal
		

	} // End of Div or not


	// Create the new YoseModal
	var YoseModal = $("#ym"+ymCount);


	// Adjust Width
	YoseWidthFix( YoseModal );


	// set it open
	setTimeout(function() {
		YoseModal.attr("data-isopen","1");
	}, 100);

	// Some position Corrections
	if( settings.position == "center" ){
		SetMiddle(YoseModal);
	}

	//Loading Correction
	if( settings.iframe !=undefined ){
		LoadingMiddle(YoseModal);
		LoadiFrameContent(YoseModal,settings.iframe, hasButTittle, settings.iframecache);
	}


	// In Animation
	var tl = new TimelineMax();


	if(settings.animation === undefined){

		tl.to(YoseModal, settings.intime, { autoAlpha: 1, delay: settings.indelay });

	}else{
		var Animation = Animations(settings.animation);

		// Depending on top or bottom, change the animation
		if(settings.bottom === undefined){
			tl.to(YoseModal, settings.intime, { autoAlpha: 1, delay: settings.indelay })
			  .from(YoseModal, 1, { top:"-=50", ease:Animation }, "-="+settings.intime );
		}else{
			tl.to(YoseModal, settings.intime, { autoAlpha: 1, delay: settings.indelay })
			  .from(YoseModal, 1, { bottom:"+=50", ease:Animation }, "-="+settings.intime );
		}
	}



	// Close Buttom
	$(".botClose"+ymCount).on("click",function(){

		if (typeof callback == "function") 
        {   
            if(callback) callback("ModalClosed");
        }

        var YoseModalID = $(this).attr("data-modal");
        var YoseModal   = $("#"+YoseModalID);

        HideModal(YoseModal);

	}); // End Respores


	if( settings.timeout != undefined){

		settings.timeout *= 1000;
		setTimeout(function() {

			if(YoseModal.attr("data-mouseover") == 1){
				YoseModal.on("mouseout",function(){
					HideModal($(this));	
					if (typeof callback == "function") 
			        {   
			            if(callback) callback("ModalClosed");
			        }
				});
			}else{
				HideModal(YoseModal);
				if (typeof callback == "function") 
		        {   
		            if(callback) callback("ModalClosed");
		        }
			}
			

		}, settings.timeout);

	}



	// Close on click outside
	if ( ymInit == 0 ){

		$("body").on("click",function(){

			$(".YoseModalBox").each(function(){

				var YoseModal = $(this);

				var IsOpen       = YoseModal.attr("data-isopen");
				var CloseOnClick = YoseModal.attr("data-closeonclick");
				var MouseOver    = YoseModal.attr("data-mouseover");

				if( IsOpen==1 && CloseOnClick == "true" && MouseOver == 0){

					var tl = new TimelineMax();
					var ID = YoseModal.attr("id");
					var Bg = ID+"b";
					var Bg = $("#" + Bg);
					
					if(YoseModal.find("YoseRed").length > 0){
						YoseModal.find("YoseRed").click();
					}else{
						TweenMax.to(YoseModal, 0.3, {autoAlpha:0, onComplete:function(){
							YoseModal.remove();
							Bg.remove();
						}})
					}

					TweenMax.to( Bg, 0.3, { autoAlpha:0 } );

					// tl.to( YoseModalMini, 0.5, {autoAlpha:0, onComplete:CloseMini(YoseModalMini), left:"-=100" } );
				}

			});

		});

		ymInit = 1;
	}


}; // End YoseModal


// Close all YoseModals
$.yosemodalclose = function(){

	$(".YoseRed").click();
	$(".YoseModalBox").each(function(){
		HideModal($(this));
	});

} 

$(document).ready(function(){

	//Changing the Icon
	$("body").on("mouseover",".YoseButton",function(){
		$(this).removeClass("fa-circle").addClass("fa-dot-circle-o");
	});

	$("body").on("mouseout",".YoseButton",function(){
		$(this).removeClass("fa-dot-circle-o").addClass("fa-circle");
	});


	// Yellow Button click
	$("body").on("click",".YoseYellow",function(){
		
		var YellowButtom = $(this)
		var isClicked = YellowButtom.attr("data-clicked");

		console.log(isClicked);

		if( isClicked == "0" ){
			$(this).attr("data-clicked","1");
			setTimeout(function() {
				YellowButtom.attr("data-clicked","0");
			}, 400);
		}else{
			return false;
		}

		var tl = new TimelineMax();
		var YoseModal   = $(this).parent().parent().parent();
		var BgID        = YoseModal.attr("id").replace("p","b");
		var Bg          = $("#"+ BgID + "b");


		if( YoseModal.hasClass("yosemodaldiv")==true || YoseModal.hasClass("YoseModalDiv") == true ){
			YoseModal.fadeOut(300);

			Bg = $(".YoseBg");

			tl.to(YoseModal, 0.3, { onComplete:ShowMinimized(YoseModal) })
				  .to(Bg, 0.3, {autoAlpha:0 },"-=0.3");

		}else{

			var YoseContent = YoseModal.find(".YoseContent");
			var YoseTitle   = YoseModal.find(".YoseWindowTitle");

				YoseModal.attr("data-minimized","1");

		
				tl.to(YoseModal, 0.3, { autoAlpha:0 ,onComplete:ShowMinimized(YoseModal) })
				  .to(Bg, 0.3, {autoAlpha:0 },"-=0.3");
		}

	});


	// Green Button Click
	$("body").on("click",".YoseMiniButton.YoseGreen",function(){
		
		var tl = new TimelineMax();
		var YoseModalMini   = $(this).parent().parent().parent();
		
		var ID = YoseModalMini.attr("id");
		var ParentID = ID.replace("p","");
		var Bg       = ID.replace("p","b");

		var YoseModal = $("#" + ParentID);
		var Backgroud = $("#" + Bg);


		if( YoseModal.hasClass("yosemodaldiv")==true || YoseModal.hasClass("YoseModalDiv") == true ){

			YoseModal.fadeIn(300);
			tl.to( Backgroud, 0.3, { autoAlpha:0.3 },"-=0.3");

		}else{

			

			tl.to( YoseModal, 0.3, { autoAlpha:1 } )
			  .to( Backgroud, 0.3, { autoAlpha:0.3 },"-=0.3");
		}

		YoseModalMini.find(".YoseIconImage").fadeOut(100);

		YoseModalMini.find(".YoseMiniButton").animate({opacity:0},100);
		YoseModalMini.find("YoseIconImage").hide();


		YoseModalMini.animate({width:'-=80'},360,function(){
			$(this).remove();
		});



	});


	$("body").on("click",".YoseMiniButton.YoseRed",function(){

		var tl = new TimelineMax();
		var YoseModalMini = $(this).parent().parent().parent();

		var ID       = YoseModalMini.attr("id");
		var ParentID = ID.replace("p","");
		var Bg = ID.replace("p","b");

		var YoseModal = $("#"+ParentID);
		var Bg = $("#" + Bg);
	
		YoseModal.find("YoseRed").click();

		TweenMax.to( Bg, 0.3, { autoAlpha:0 } );

		tl.to( YoseModalMini, 0.5, {autoAlpha:0, onComplete:CloseMini(YoseModalMini), left:"-=100" } );

	});


	//MouseOver a Modal
	$("body").on("mouseover",".YoseModalBox",function(){
		$(this).attr("data-mouseover","1");
	});

	$("body").on("mouseout",".YoseModalBox",function(){
		$(this).attr("data-mouseover","0");
	});

	


}); //End Ready Functions


function YoseWidthFix(YoseModal){

	var WW = $(window).width();
	var YW = YoseModal.width() + 20; // Padding and other stuff
	
	var WH = $(window).height();
	var YH = YoseModal.height() + 20;

	var isCenter = YoseModal.attr("data-position");
	var isTop    = YoseModal.attr("style").indexOf("top");


	
	//I need to apply some corrections
	if(WW <= YW){
		YoseModal.css("width", (WW-20) + "px");
	}

	if(WH <= YH){
		YoseModal.css("height", (WH-20) + "px");	
	}


	if(isCenter != "center" && isTop >= 0){
		YoseModal.css("top","10");
	}else{
		YoseModal.css("bottom","10");
	}





}


var Rezising;
$(window).on("resize",function(){

	clearTimeout(Rezising);
	Rezising = setTimeout(function() {


		$(".YoseModalBox").each(function(){

			var YoseModal = $(this);
			var DefStyle =  YoseModal.attr("data-defstyle");

			YoseModal.fadeOut(200,function(){

				var tl = new TimelineMax();
				tl.from( YoseModal, 0.3, {autoAlpha:0, onComplete:function(){
						YoseModal.removeAttr("style")
								 .attr("style",DefStyle);
						YoseWidthFix( YoseModal );
					} 
				} )
					.to(YoseModal, 0.9, {autoAlpha: 1});
			})




		});

		

	}, 350);

});


function CloseMini(YoseModalMini){

	YoseModalMini.find(".YoseMiniButton").animate({opacity:0},100);
	YoseModalMini.animate({width:'toggle'},350);
}


function ShowMinimized(YoseModal){

	
	var Icon = '';
	var Theme = YoseModal.attr("data-theme");

	if( YoseModal.find(".YoseIconImage").length > 0 ){
		// Exist an Icon or Image
		var Content = YoseModal.find(".YoseIconImage").children(0);
		if( Content.attr("data-type") == "fa"){
			Icon = '<i class="fa '+ Content.attr("data-content") +'"></i>';
		}else if( Content.attr("data-type") == "img" ){
			Icon = '<img src="'+ Content.attr("data-content") +'" class="YoseMini">'
		}else{
			Icon = '<img src="'+ Content.attr("data-content") +'" class="YoseModalRound YoseMini">'
		}
	}else{
		// Image or icon do not exist
		Icon = '&nbsp;<i class="fa fa-tablet"></i>';
	}


	var ID = YoseModal.attr("id");
		ID = ID+"p";


	var content = "";
	content += 	'<div class="YoseModalBoxMini '+ Theme +'" id="'+ ID +'">';
	content += 		'<div class="YoseTopBar">';
	content += 			'<div class="YoseWindowButtons">';
	content += 				'<span class="YoseButton fa fa-circle YoseMiniButton YoseRed"></span> ';
	content += 				'<span class="YoseButton fa fa-circle YoseMiniButton YoseGray"></span> ';
	content += 				'<span class="YoseButton fa fa-circle YoseMiniButton YoseGreen"></span> ';
	content += 			'</div>';
	content += 		'</div>';
	content += 		'<div class="YoseIconImage">';
	content += 			Icon;
	content += 		'</div>';
	content += 	'</div>';

	$("#divYoseMinContainer").append(content);

	var MiniYose = $("#" + ID);

	var tl = new TimelineMax();
		tl.from(MiniYose, 0.3, { autoAlpha: 0 })
		  .from(MiniYose, 1, { top:"-=30", ease:"Bounce.easeOut" }, "-=0.3" );


	// if( YoseModal.hasClass("yosemodaldiv")==true || YoseModal.hasClass("YoseModalDiv") == true ){
	// 	// YoseModal.fadeOut(300);
	// }
}


function SetMiddle(YoseModal){

	var YoseWidth  = YoseModal.width();
	var YoseHeight = YoseModal.height();

	var WindowWidth = $(window).width();
	var WindowHeight = $(window).height();

	var MiddleW = (WindowWidth/2) - (YoseWidth/2);
	var MiddleH = (WindowHeight/2) - (YoseHeight/2);


	YoseModal.css({
		"left": MiddleW + "px",
		"top": MiddleH +"px",
	});

}

function LoadingMiddle(YoseModal){

	var ContainerHeight = YoseModal.height();
	var LoadingHeight   = YoseModal.find(".YoseLoading").height();
	var Middle = (ContainerHeight/2) - (LoadingHeight/2);

	YoseModal.find(".YoseLoading").css("top",(Middle-10)+"px");
}

function LoadiFrameContent(YoseModal,iframeURL, hasButTittle, iframecache){

	// Create an <iframe>.
	if( iframecache === true){
		$iframe = $('<iframe class="YoseIframe">');
		$iframe.attr({src: iframeURL });

		$iframe.appendTo( YoseModal.find('.YoseContentIframe') );

		var YoseContent = YoseModal.find('.YoseIframe');

		$iframe.load(function() {
		    YoseModal.find('.YoseLoading').remove();
		    $iframe.fadeIn(200);

		    if(hasButTittle===false){
				YoseContent.css("top","-14px");
				YoseContent.css("height","100%");
		    }else{
		    	YoseContent.css("top","-8px");
		    	YoseContent.css("height","100%");
		    	YoseContent.css("height","-=27");
		    }
		});
	}else{
		// The user don't need a cache
		var YoseContent = YoseModal.find('iframe');

	    if(hasButTittle===false){
			YoseContent.css("top","-15px");
			YoseContent.css("height","100%");
	    }else{
	    	YoseContent.css("top","-8px");
	    	YoseContent.css("height","100%");
	    	YoseContent.css("height","-=27");
	    }
	}

}


function HideTitleContent(YoseModal){

	var YoseContent = YoseModal.find(".YoseContent");
	var YoseTitle   = YoseModal.find(".YoseWindowTitle");
	setTimeout(function() {
		$(YoseContent, YoseTitle).slideUp();
	}, 200);
}

function ShowTitleContent(YoseModal){
	var YoseContent = YoseModal.find(".YoseContent");
	var YoseTitle   = YoseModal.find(".YoseWindowTitle");

	setTimeout(function() {
		$(YoseContent, YoseTitle).slideDown(300);		
	}, 730);
}


function HideModal(YoseModal){

	var Bg = YoseModal.attr("id");
		Bg = $("#" + Bg + "b");

		TweenMax.to( Bg, 0.3, { autoAlpha:0 } );

	var AnimationOut = YoseModal.attr("data-animationout");
	switch(AnimationOut){
		case "fade":
			TweenMax.to(YoseModal, 0.3, { autoAlpha:0, onComplete:DestroyModal(YoseModal) });
		break;

		case "side":
			var tl = new TimelineLite();
			if( YoseModal.attr("style").indexOf("right")>0 ){

				tl.to(YoseModal, 0.3, { autoAlpha:0 })
				  .to(YoseModal, 1, { right: "-=300", onComplete:DestroyModal(YoseModal) }, "-=0.3");

			}else{

				tl.to(YoseModal, 0.3, { autoAlpha:0 })
						.to(YoseModal, 1, { left: "-=300", onComplete:DestroyModal(YoseModal) }, "-=0.3");

			}
		break;
	}

}

function DestroyModal(YoseModal){

	if( YoseModal.hasClass("yosemodaldiv")==true || YoseModal.hasClass("YoseModalDiv") == true ){
		YoseModal.hide();

		var Origin = YoseModal.attr("data-origin");

		YoseModal.find(".YoseTopBar").remove();

		YoseModal.removeAttr("id")
		         .removeAttr("class")
		         .removeAttr("style")
		         .removeAttr("data-theme")
		         .removeAttr("data-closeonclick")
		         .removeAttr("data-animationout")
		         .removeAttr("data-mouseover");

		YoseModal.attr("class",Origin);

	}else{
		setTimeout(function() {
			YoseModal.remove();
		}, 300);
	}


}

function DestroyModalMini(YoseModalMini){

	setTimeout(function() {

		YoseModalMini.nextAll().animate({
			left: "-=83"
		},0);
		
		YoseModalMini.remove();
	}, 300);

}


function Animations(pAnimation){
	
	var NewAnimation;

	switch(pAnimation) {
	    case "bounceIn":
	        NewAnimation = "Bounce.easeOut";
	        break;
	    // case n:
	    //     code block
	    //     break;
	    default:
	        NewAnimation = "";
		}

	return NewAnimation;
}

 
})(jQuery);