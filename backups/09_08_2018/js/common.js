$(document).ready(function () {
/*--*/

if(localStorage.getItem('font_size_b')){
    $('body').addClass('font_size_b');
}
if(localStorage.getItem('font_size_m')){
    $('body').addClass('font_size_m');
}
if(localStorage.getItem('font_size_s')){
    $('body').addClass('font_size_s');
}

$('.tml_font_size_s').on('click',function() {
    $('body').removeClass('font_size_m font_size_b');
    localStorage.removeItem('font_size_b');
    localStorage.removeItem('font_size_m');
    $('body').addClass('font_size_s');
    localStorage.setItem('font_size_s', 'font_size_s');
});
$('.tml_font_size_m').on('click',function() {
    $('body').removeClass('font_size_b font_size_s');
    localStorage.removeItem('font_size_b');
    localStorage.removeItem('font_size_s');
    $('body').addClass('font_size_m');
    localStorage.setItem('font_size_m', 'font_size_m');
});
$('.tml_font_size_b').on('click',function() {
    $('body').removeClass('font_size_m font_size_s');
    localStorage.removeItem('font_size_m');
    localStorage.removeItem('font_size_s');
    $('body').addClass('font_size_b');
    localStorage.setItem('font_size_b', 'font_size_b');
});
$('.tml_font_size_refresh').on('click',function() {
    $('body').removeClass('font_size_b font_size_m font_size_s');
    localStorage.removeItem('font_size_b');
    localStorage.removeItem('font_size_m');
    localStorage.removeItem('font_size_s');
});

/*--*/

if(localStorage.getItem('color_gray')){
    $('body').addClass('color_gray');
}
if(localStorage.getItem('color_blue')){
    $('body').addClass('color_blue');
}
if(localStorage.getItem('color_black')){
    $('body').addClass('color_black');
}

$('.tml_color_gray').on('click',function() {
    $('body').removeClass('color_black color_blue');
    localStorage.removeItem('color_black');
    localStorage.removeItem('color_blue');
    $('body').addClass('color_gray');
    localStorage.setItem('color_gray', 'color_gray');
});
$('.tml_color_black').on('click',function() {
    $('body').removeClass('color_gray color_blue');
    localStorage.removeItem('color_gray');
    localStorage.removeItem('color_blue');
    $('body').addClass('color_black');
    localStorage.setItem('color_black', 'color_black');
});
$('.tml_color_blue').on('click',function() {
    $('body').removeClass('color_gray color_black');
    localStorage.removeItem('color_gray');
    localStorage.removeItem('color_black');
    $('body').addClass('color_blue');
    localStorage.setItem('color_blue', 'color_blue');
});
$('.tml_color_refresh').on('click',function() {
    $('body').removeClass('color_gray color_blue color_black');
    localStorage.removeItem('color_gray');
    localStorage.removeItem('color_black');
    localStorage.removeItem('color_blue');
});

/*--*/

if(localStorage.getItem('zoom')){
    $('body').addClass('zoom');
}
if(localStorage.getItem('links')){
    $('body').addClass('links');
}
if(localStorage.getItem('headers')){
    $('body').addClass('headers');
}

var tml_zoom = true;
$('.tml_zoom').on('click',function() {
    if(tml_zoom){
        $('body').addClass('zoom');
        localStorage.setItem('zoom', 'zoom');
        tml_zoom = false;
    }else{
        $('body').removeClass('zoom');
        localStorage.removeItem('zoom');
        tml_zoom = true;
    }
});

var tml_links = true;
$('.tml_links').on('click',function() {
    if(tml_links){
        $('body').addClass('links');
        localStorage.setItem('links', 'links');
        tml_links = false;
    }else{
       $('body').removeClass('links');
        localStorage.removeItem('links');
        tml_links = true; 
    }
});

var tml_headers = true;
$('.tml_headers').on('click',function() {
    if(tml_headers){
        $('body').addClass('headers');
        localStorage.setItem('headers', 'headers');
        tml_headers = false;
    }else{
       $('body').removeClass('headers');
        localStorage.removeItem('headers');
        tml_headers = true; 
    }
});
/*--*/
$('.all_refresh').on('click',function() {
    $('body').removeClass();
    localStorage.removeItem('font_size_b');
    localStorage.removeItem('font_size_m');
    localStorage.removeItem('font_size_s');

    localStorage.removeItem('color_gray');
    localStorage.removeItem('color_black');
    localStorage.removeItem('color_blue');

    localStorage.removeItem('links');
    localStorage.removeItem('headers');
    localStorage.removeItem('zoom');
});



$('.tml_nav_open').on('click', function(){
    $('.topMenu_left').addClass('active');
});
$('.tml_nav_close').on('click', function(){
    $('.topMenu_left').removeClass('active');
});


$('.owl-carousel').owlCarousel({
    rtl:false,
    loop:true,
    margin:0,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        992:{
            items:2
        }
    }
});

$('.topMenu_left_bottom').on('click',function(){
    $('.block_search').addClass('active');
});

$('.topMenu_left_bottom_btn').on('click',function(){
    $('.block_search').removeClass('active');

});


$('.navbar-nav__left_link').on('click', function(){    
    if($(document).innerWidth()<769){
         $('.extra_menu').toggleClass('open_product');
         $('.navbar-nav__right>li').css('visibility', 'hidden');
         $('.navbar-nav__right .dropdown_product').css('visibility', 'visible');
         $('.navbar-nav__left_link').css('display', 'none');
    }
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
if($(document).innerWidth()<769){

    if(countReverses){
         myReverse();
        countReverses = false; 
    }

    $('.for_clone_menu').append(for_clone);
    
    $('.btn-link').attr('aria-expanded', 'false');
    $('.card .collapse').removeClass('show');

    $('.btn-link').on('click',function(e){
        e.stopPropagation();
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
    if($(document).innerWidth()<769){

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
           $('.navbar-nav__left_link').css('display', 'block');
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

new WOW().init();  



/*video player*/
    $('.video__poster').on('mouseenter', function(){
        $(this).addClass('active');
    });

    Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
        get: function(){
            return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
        }
    });

    $('.video__poster').on('mouseleave', function(){
        var videoElem = $(this).children('video')[0];
        if(!videoElem.playing){
            $(this).removeClass('active');
            
        }

    });
/* end video player*/

});

 