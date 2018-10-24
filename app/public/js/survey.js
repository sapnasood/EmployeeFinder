

// jQuery handler that runs the encapsulated code when the page is ready.
$(function(){
  // Click listener for the submit button
  $('#submit').on('click', function(event){
     event.preventDefault();
  // Here we grab the form elements
     let score = [];
     let ans = '';
     for(let i =1;i <= 10; i++){
      ans = $(`#q${i}`).val();
      score.push(ans);
     };
    console.log(score);

    //  const newSurvey = {
    //     name: $('#name').val().trim(),
    //     photo: $('#photo').val().trim(),
    //     scores: score
    //   };

    //   for(let key in newSurvey){
    //     if(newSurvey[key] === ''){
    //       alert('Please fill out all fields');
    //       return;
    //     }
    //   }
  
    //   console.log(newSurvey); 

    //   $.post('/api/employees', newSurvey,
    //   function(data) {

    //     // If our POST request was successfully processed, proceed on
    //     if (data.success) {

    //       console.log('data', data)

    //       // Clear the form when submitting
    //     //   $('#reserve-name').val('');
    //     //   $('#reserve-phone').val('');
    //     //   $('#reserve-email').val('');
    //     //   $('#reserve-unique-id').val('');
          
    //     //   $('#reserve-name').focus();
    //     } else {

    //       alert('There was a problem with your submission. Please check your entry and try again.');
    //     }
        

    //   });
  });

});