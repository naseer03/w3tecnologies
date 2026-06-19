document.addEventListener("DOMContentLoaded", function() {
    let modal_body_msg = document.getElementById('deleteblog-modal-body-msg');
      var modal = document.getElementById('deleteblogModal');
      var modalInstance = new bootstrap.Modal(modal);
      let queryString = window.location.search;
      const urlParams =new URLSearchParams(queryString);
      if(urlParams.has('deleteblog')){
        if(urlParams.get('deleteblog')=='success'){
          modal_body_msg.innerHTML ="<b>Blog Deleted Succesfully </b>";
        }
        else if(urlParams.get('deleteblog')=='failed'){
          modal_body_msg.innerHTML ="<b>Unable to delete the Blog!.<br> Try again !</b>";;
        }
        modalInstance.show();
      }
  })