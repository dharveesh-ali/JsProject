function handleFormSubmit(event){
    event.preventDefault();
          var user = {
              expense:event.target.expense.value,
              description:event.target.description.value ,
              category:event.target.category.value
          };

          localStorage.setItem(user.description, JSON.stringify(user));
          displayUsers(user);
      }

      function displayUsers(user) {
         var userList = document.querySelector('ul');
         let listItem = document.createElement('li');
         listItem.appendChild(document.createTextNode(`${user.expense}-${user.description}-${user.category}`));
         let dele_button = document.createElement('button');
         dele_button.appendChild(document.createTextNode('Delete Expense'));
         listItem.appendChild(dele_button);
         let edit_button=document.createElement('button');
          edit_button.appendChild(document.createTextNode('Edit Expense'));
          listItem.appendChild(edit_button);
         userList.appendChild(listItem);
        
         dele_button.addEventListener('click',function(event){
           userList.removeChild(event.target.parentElement);
           localStorage.removeItem(user.description);
           });
  
          edit_button.addEventListener('click',function(event){
            
            userList.removeChild(event.target.parentElement);

            localStorage.removeItem(user.description);

            // Populate the input fields with the existing values
            document.getElementById("expense").value = user.expense;
            document.getElementById("description").value = user.description;
            document.getElementById("category").value = user.category;          
         }); 
        
        }
