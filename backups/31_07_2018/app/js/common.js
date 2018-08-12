/*btn up*/
$(document).ready(function () {
    $('.topMenu_left_bottom').on('click',function(){
       $('.block_search').addClass('active');
    });
    $('.topMenu_left_bottom_btn').on('click',function(){
        $('.block_search').removeClass('active');
    });

$('.navbar-nav__left_link').on('click', function(){    
    if($(document).innerWidth()<768){
         $('.extra_menu').toggleClass('open_product');
         $('.navbar-nav__right>li').css('visibility', 'hidden');
         $('.navbar-nav__right .dropdown_product').css('visibility', 'visible');
    }
});
$('.hidden_btn').on('click', function(){
    //$('.extra_menu').removeClass('open_product');
});
$('.sub_menu').on('click', function(){
    $('.extra_menu').removeClass('open_product');
    $('.navbar-nav__right>li').css('visibility', 'visible');
});

var countReverses = true;
 function myReverse(){
    var list = $('.navbar-nav__right');
    var listItems = list.children('li');
    list.append(listItems.get().reverse());
}


var for_clone = $('.block_width');
if($(document).innerWidth()<768){

    if(countReverses){
         myReverse();
        countReverses = false; 
    }

    $('.for_clone_menu').append(for_clone);
    
    $('.btn-link').attr('aria-expanded', 'false');
    $('.card .collapse').removeClass('show');

    $('.btn-link').on('click',function(e){
        e.stopPropagation();
        //console.log(1);
        var qwe = $(this).attr('aria-expanded');
        if(qwe == 'false'){
            $(this).attr('aria-expanded', 'true');
            $(this).addClass('active');
             $('.card .collapse').addClass('in');
        }
        $('.card').css('display', 'none');
        $(this).parents('.card').css('display', 'block');
    });

    $('.hidden_btn').on('click', function(){
       $('.card').css('display', 'block');
       $('.card .collapse').removeClass('show');
       $('.btn-link').attr('aria-expanded', 'false');
       $('.card .collapse').attr('aria-expanded', 'false');
       $('.card .collapse').removeClass('in');
       $('.btn-link').removeClass('active');       
    });
}else{
    $('#navbar .navbar-nav__left').after(for_clone);

       $('.card .collapse').addClass('show');
       $('.btn-link').attr('aria-expanded', 'false');
       $('.card .collapse').attr('aria-expanded', 'false');
       $('.card .collapse').addClass('in');

       $('.navbar-nav__right>li').css('visibility', 'visible');
}

$( window ).resize(function() {    
    if($(document).innerWidth()<768){

        if(countReverses){
             myReverse();
            countReverses = false;
        }

        $('.for_clone_menu').append(for_clone);
        
        $('.btn-link').attr('aria-expanded', 'false');
        $('.card .collapse').removeClass('show');
        $('.card .collapse').removeClass('in');
        $('.btn-link').on('click',function(){
            $('.card').css('display', 'none');
            $(this).parents('.card').css('display', 'block');
        });
        $('.hidden_btn').on('click', function(){
           $('.card').css('display', 'block');
           $('.card .collapse').removeClass('show');
           $('.btn-link').attr('aria-expanded', 'false');
           $('.card .collapse').attr('aria-expanded', 'false');
           $('.card .collapse').removeClass('in');
        });
    }else{

        if(!countReverses){
             myReverse();
            countReverses = true;
        }


        $('#navbar .navbar-nav__left').after(for_clone);
           $('.card .collapse').addClass('show');
           $('.btn-link').attr('aria-expanded', 'false');
           $('.card .collapse').attr('aria-expanded', 'false');
           $('.card .collapse').addClass('in');
           $('.card').css('display', 'block');
           $('.open_product .hidden_for_product').css('display', 'block');
           $('.navbar-nav__right>li').css('visibility', 'visible');
    }
});



$('.sub_menu').on('click', function(){
    $('.extra_menu_menu').addClass('active')
});
$('.extra_menu_close').on('click', function(){
    $('.extra_menu_menu').removeClass('active')
});

$('.signIn_user').on('click',function(){
    $('.drop').toggleClass('active');
});
$('.lang_active').on('click',function(){
    $('.lang').toggleClass('active');
});


$('.tml_1 label,.topMenu_left_top_btn, .tml_2 label').on('click',function(){
    $(this).parent().toggleClass('active');
})
$('.inv_paint').on('click', function(){
    $('body').toggleClass('grayscale');
})
$('.inv_color').on('click', function(){
    $('body').toggleClass('contrast');
})

var inv_plus = 1;
$('.inv_plus').on('click', function(){

if(inv_plus == 1||inv_plus == 0){
     $('*').each(function(i, val){

        fontSize = $(val).css('font-size');

        $(val).css('font-size', '+=2');
        fontSize = $(val).css('font-size');
        console.log(fontSize);
    });
     inv_plus ++;
  }
});


$('.inv_ubctract').on('click', function(){

if(inv_plus == 2||inv_plus == 1){
     $('*').each(function(i, val){

        fontSize = $(val).css('font-size');

        $(val).css('font-size', '-=2');
        fontSize = $(val).css('font-size');
        console.log(fontSize);
    });
     inv_plus --;
  }
});


 $('.select-click.name-ac .opener').click(function () {
        $(this).parent().toggleClass('active');
    });

    var top_show = 150; 
    var delay = 1000; 

    $(window).scroll(function () { 
        
        if ($(this).scrollTop() > top_show) $('#top').fadeIn();
        else $('#top').fadeOut();
    });
    $('#top').click(function () {
        
        $('body, html').animate({
            scrollTop: 0
        }, delay);
    });
/* end btn up*/

    $('.firstBlock_arrowDown').click(function () {
        var benefitsBlock = $('#benefitsBlock').offset().top;
        $('body, html').animate({
           scrollTop: benefitsBlock-100
        }, delay);
    });


//Функция добавления класса active при прокрутке.
//когда скролл находится напротив элемента добавляется класс active
function addActive(className,temeout){
    if ( document.addEventListener || event.type === "load" || document.readyState === "complete" ) {
        $(className).each(function(index, el) {
        var element_top = $(el).offset().top;
        var element = $(el);
        if ($(window).scrollTop() >= element_top-800){
            setTimeout(function(){
                element.addClass('active');
            },temeout)
        }  
        });
    }
    if (temeout === undefined) {
        temeout = 0;
    }
    $(window).scroll(function () {
        $(className).each(function(index, el) {
        var element_top = $(el).offset().top;
        var element = $(el);
        if ($(window).scrollTop() >= element_top-800){
            setTimeout(function(){
                element.addClass('active');
            },temeout)
        }  
        });
    });
    
};

addActive('.regulated_risk', 500);
addActive('.regulated_safe');
addActive('.header_lines'); 

new WOW().init();



$('.hiw_icon2_1').on('mouseenter',function(){
    $('.hiw_icon_js2').css('display','none');
    $('.for_hiw_icon2_1').css('display','block');
}); 
 $('.hiw_icon2_2').on('mouseenter',function(){
    $('.hiw_icon_js2').css('display','none');
    $('.for_hiw_icon2_2').css('display','block');
});        
});

function initMiracle() {
	var $posters = $('.video__poster');
	
	$posters.each(function(k, vBlock){
		var jBlock = $(vBlock);
		initialiseMediaPlayer(jBlock);
	});
}

function initialiseMediaPlayer(block) {
	
	var playPauseBtn = $('.panel_item_btn.play', block);
	var playNext = $('.panel_item_btn.play_next', block); //to 10% video
	var playPrev = $('.panel_item_btn.play_back', block); //to -10% video
	var progressBar = $('.progress-bar', block); 
	var mediaPlayer = block.find('video')[0];
	mediaPlayer.controls = false;
	mediaPlayer.currentTime = 0;
	$('.panel_item.panel_item_all_time', block)[0].innerHTML = (mediaPlayer.duration / 60).toFixed(2); //здесь сделай в минутах
	var jMediaPlayer = $(mediaPlayer);
	var muteBtn = $('.panel_item_btn.play_volume', block); //mute/unmute
	var timeLeftBlock = $('.panel_item.panel_item_time_left', block)[0]; 
	timeLeftBlock.innerHTML = (mediaPlayer.duration / 60).toFixed(2);
	playPauseBtn.on('click', function() {
		//десь допиши изменение кнопочки
		if (mediaPlayer.paused) {
			mediaPlayer.play(); 
		} else {
			mediaPlayer.pause();
		}
	})

	jMediaPlayer.on('timeupdate', function() {
		var percentage = Math.floor((100 / this.duration) * this.currentTime);
		// Update the progress bar's value
		progressBar.width(percentage);
	
		timeLeftBlock.innerHTML = ((mediaPlayer.duration - mediaPlayer.currentTime) / 60).toFixed(2);
	});
	
	muteBtn.on('click', function () {
		//кнопочку изменишь звука
		if (mediaPlayer.muted) {
			mediaPlayer.muted = false;
		}
		else {
			mediaPlayer.muted = true;
		}
	});

	playPrev.on('click', function() {
		var goPercent = (mediaPlayer.duration / 100) * 10 ;
		mediaPlayer.currentTime -= goPercent;
	});
	
	playNext.on('click', function() {
		var goPercent = (mediaPlayer.duration / 100) * 10 ;
		mediaPlayer.currentTime += goPercent;
	});	

    
 
    

}