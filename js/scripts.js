$(document).ready(function() {

    $("form#bank").submit(function(event){
      event.preventDefault();
      var inputtedResult=[];
      var positive=0;
      var negative = 0;

      $("input: checkbox[name=quiz]: checked").each(function(){
        var input = $(this).val();
        inputtedResult.push(input);
      });

      for (i=0; i<inputtedResult.length; i++){
        if (isNaN(inputtedResult[i])){
          negative +=100;
        }
        else{ // if the result is false, it means the array value is a number
          positive += parseFloat(inputtedResult[i]);
        }
      }

      if (negative === 200){
        $(".fortune").text("oooh dude, you are facing a bad luck!!!")
      }

      else if (negative === 100)  {
        positive/=2;
        if(positive<6){
          $(".fortune").text("Your luck is not bad, hopefully not too bad!");

        }
      }

      else{// (negative === 0)
        $(".fortune").text("Dude, you rock! you are so lucky ");
      }



    
    });



});
