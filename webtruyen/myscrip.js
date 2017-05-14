var domainurl = "http://webtruyen.com";
function collapseNav() {
    var x = document.getElementById("nav");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}
// SIDENAV
function openSideNav() {
    document.getElementsByClassName("sidenav-category")[0].style.display = "block";
    document.getElementsByClassName("w3-overlay")[0].style.display = "block";
}
 
function closeSideNav() {
    document.getElementsByClassName("sidenav-category")[0].style.display = "none";
    document.getElementsByClassName("w3-overlay")[0].style.display = "none";
}

// OPEN CONTENT
function openContent(id) {
    document.getElementById(id).classList.toggle("w3-show");
}

var slideIndex = 1;
//showDivs(slideIndex);
function plusDivs(n) {
  showDivs(slideIndex += n);
}
function currentDiv(n) {
  showDivs(slideIndex = n);
}
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}

// OPEN MODAL
function openModal(id) {
    document.getElementById(id).style.display = "block";
}
function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

// OPEN DROP
function openDrop() {
    document.getElementById(id)[0].style.display = "block";
}
function closeDrop() {
    document.getElementById(id)[0].style.display = "none";
}


function go_search_by_cate(link, id)
{
	var url = domainurl+link+$("#"+id).select().val()+'/';
	if(link == "/searching/all/lastupdate/all/")
		url = domainurl+'/'+$("#"+id).select().val()+'/';
	window.location.replace(url);
};
function button_go_search_by_cate(link, cat)
{
	var url = domainurl+link+cat+'/';
	if(link == "/searching/all/lastupdate/all/")
		url = domainurl+'/'+cat+'/';
	window.location.replace(url);
};

function go_search()
{
	var order = $("#drop_order").select().val();
	var status = $("#drop_status").select().val();
	var cate = $("#drop_cate").select().val()

	var url = domainurl+'/searching/all/'+order+'/'+status+'/'+cate+'/';
	
	//alert(url);
	window.location.replace(url);
};


// SCROLL TO TOP
$(document).ready(function(){ 
  $(window).scroll(function(){ 
    if ($(this).scrollTop() > 100) { 
      $('#scroll').fadeIn(); 
    } else { 
      $('#scroll').fadeOut(); 
    } 
  }); 
  $('#scroll').click(function(){ 
    $("html, body").animate({ scrollTop: 0 }, 600); 
    return false; 
  }); 
});

function search(){ var txt = $("#key").val(); if(txt.length == 0){$('#display').html('').hide();} else if(txt.length >= 3){var url=domainurl+"/home/search?key="+txt;$.ajax({type: "POST",url: url,cache: false,beforeSend:function(){$("#display").html("");},success:function(html){$('#display').html(html).show();},error:function(){$('#display').html('Fails').show();}});}};
$('html').click(function(e){
	if(e.target.id == 'key') {
	    $('#display').show();
	} else {
	    $('#display').hide();
	}
});
//history reading
function his_read(){
    var url=domainurl+"/Method/get_history/";
    $.ajax({
        type:"POST",
        url:url,
        cache:false,
        beforeSend:function(){$("#recent").html("");},
        success:function(html){
        	$("#btn-more").css("display", 'none');
            $("#recent").html(html);
        },
        error:function(){$("#recent").html('Hãy thử đọc 1 chương');}
    });
};

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-71163629-1', 'auto');
ga('send', 'pageview');