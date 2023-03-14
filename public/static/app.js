$(document).ready(function (){

    $('#getData').click(function(){

        $.get('/loginData', function(data){
            console.log(data)
        }, 'json');
        return false;
    })
    
});