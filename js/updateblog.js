document.addEventListener("DOMContentLoaded", function() {
    let modal_body_msg = document.getElementById('updateblog-modal-body-msg');
      var modal = document.getElementById('updateblogModal');
      var modalInstance = new bootstrap.Modal(modal);
      let queryString = window.location.search;
      const urlParams =new URLSearchParams(queryString);
      if(urlParams.has('updateblog')){
        if(urlParams.get('updateblog')=='success'){
          modal_body_msg.innerHTML ="<b>Blog updated Succesfully </b>";
        }
        else if(urlParams.get('updateblog')=='failed'){
          modal_body_msg.innerHTML ="<b>Unable to update the Blog!.<br> Try again !</b>";;
        }
        modalInstance.show();
      }
  })