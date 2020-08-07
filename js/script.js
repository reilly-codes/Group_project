$(document).ready(function(){
    $('input[type="checkbox"]').click(function() 
    {
        var val = 0;
        $('input[type="checkbox"]:checked').each(function(){
            val+=parseInt($(this).val());
        });
          $("#price").val(val);
     });
});