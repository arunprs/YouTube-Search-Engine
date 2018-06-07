//Searchbar Handler
console.log("'I'm In");
$(function(){
	var searchField=$('#query');
	var icon=$('#search-btn');

	//Focus Event Handler
	$(searchField).on('focus',function(){
             $(this).animate({
             	width:'100%'
             },400);
             $(icon).animate({
             	right:'10px'
             },400); 
	});

	//Blur Event Handler
	$(searchField).on('blur',function(){
          if(searchField.val()===''){
          	$(searchField).animate({
          		width:'45%'
          	},400,function(){});
          	$(icon).animate({
          		right:'360px'
          	},400,function(){});
          } 
	});
	
    $('#search-form').submit(function(e){
       e.preventDefault();  
    });
})

function(){
	//clear Results
	$('#results').html('');
	$('#buttons').html('');

	//Get Form Input
	q= $('query').val();
	
	// Run GET Request on API
	$.get(
           "https://www.googleapis.com/youtube/v3/search",{
           	part:'snippet,id',
            q:q,
            type:'video',
            key:"AIzaSyCvk3NNMQASZgFkCNxIp9jH-18oOPXhDUo"},

            function(data){
                 var nextPageToken= data.nextPageToken;
                 var prevPageToken= data.prevPageToken;

                 console.log(data);
             
            }	
	);
            
            
}