$(document).ready(function(){

});

$(function() {

var transEndEventNames = {
 'WebkitTransition' : 'webkitTransitionend',
 'MozTransition' : 'transitionend',
 'OTransition' : 'oTransitionend',
 'msTransition' : 'MSTransitionend',
 'transition' : 'transitionend'
 },
 transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
 $wrapper = $( '#custom-inner' ),
 $calendar = $( '#calendar' ),
 cal = $calendar.calendario( {
 onDayClick : function( $el, $contentEl, dateProperties ) {
 if( $contentEl.length > 0 ) {
 showEvents( $contentEl, dateProperties );
 }
 },
 caldata : {
<?= getEvents(); ?> // this is our function to grab our events
 },
 displayWeekAbbr : false
 } ),
 $month = $( '#custom-month' ).html( cal.getMonthName() ),
 $year = $( '#custom-year' ).html( cal.getYear() );
$( '#custom-next' ).on( 'click', function() {
 cal.gotoNextMonth( updateMonthYear );
} );
$( '#custom-today' ).on( 'click', function() {
 cal.gotoNow( updateMonthYear );
} );
$( '#custom-prev' ).on( 'click', function() {
 cal.gotoPreviousMonth( updateMonthYear );
} );
function updateMonthYear() {
 $month.html( cal.getMonthName() );
 $year.html( cal.getYear() );
}
// just an example..
function showEvents( $contentEl, dateProperties ) {
 hideEvents();

 var $events = $( '<div id="custom-content-reveal" class="custom-content-reveal"><h4>Termine am ' + dateProperties.day + '. ' + dateProperties.monthname + ' ' + dateProperties.year + '</h4></div>' ),
 $close = $( '<span class="custom-content-close"></span>' ).on( 'click', hideEvents );
 $events.append( $contentEl.html() , $close ).insertAfter( $wrapper );

 setTimeout( function() {
 $events.css( 'top', '0%' );
 }, 25 );
}
function hideEvents() {
 var $events = $( '#custom-content-reveal' );
 if( $events.length > 0 ) {

 $events.css( 'top', '100%' );
 Modernizr.csstransitions ? $events.on( transEndEventName, function() { $( this ).remove(); } ) : $events.remove();
 }
}

});

function getEvents()
{
$events = wire('pages')->get("/calendar/")->children();

foreach ($events as $event)
{
echo "'$event->title' : '<span>$event->headline</span> ',";
}
}

function displayMenu(){
	var x = document.getElementbyId("iglnav");
	if(x.className === "top-nav"){
		x.className += "responsive";
	} else{
		x.className = "top-nav";
	}
}