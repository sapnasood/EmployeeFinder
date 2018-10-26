

// jQuery handler that runs the encapsulated code when the page is ready.
$(function(){
 // Getting references to the name input and author container, as well as the table body
 const name = $('#name');
 const photo = $('#photo');  
  const matchname = $('#match-name');
  const matchphoto = $('#match-img');


   // Click listener for the submit button
  $('#submit').on('click', function(event){
     event.preventDefault();
//  This flag will prevent triggering of ajax call when user do not fill out all the fields before submitting     
     let allInput = '';
  // Logic to grab th answers provided by user in an array and set allInput as X if user doesn't ans all the 10 questions
     let score = [];
     let ans = '';
     for(let i =1;i <= 10; i++){
      ans = $(`#q${i}`).val();
      if(!ans){
        $('#modal-title').text('');
        matchname.text("Please fill out all fields before submitting!");
        return;
      }
      score.push(ans);
     };

  // Build an object for the user input
     const newSurvey = {
        name: name.val().trim(),
        photo: photo.val().trim(),
        scores: score
      };
// Set allInput as X if user doesn't provide value for Name and image
      for(let key in newSurvey){
        if(newSurvey[key] === ''){
          $('#modal-title').text('');
          matchname.text("Please fill out all fields before submitting!");
          return;
        }
     }
// Ajax call to get the best match for an employee      
getMatch(newSurvey); 
  });

});

const getMatch = function(newSurvey){
// Getting references to the name input and author container, as well as the table body
 const name = $('#name');
 const photo = $('#photo');  
  const matchname = $('#match-name');
  const matchphoto = $('#match-img');
  $.ajax(
    {
     method: 'POST',
     url: '/api/employees',
     data: newSurvey
    }).then(function(response){
      $('#modal-title').text('Best Match'); 
      matchname.text(response.name);
       matchphoto.attr('src', response.photo);
        // Clear the form when submitting
        name.val('');
        photo.val('');
        for(let i =1;i <= 10; i++){
           $(`#q${i}`).val('');
         };
    })


};