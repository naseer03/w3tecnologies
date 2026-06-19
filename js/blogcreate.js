document.addEventListener("DOMContentLoaded", function() {
    let modal_body_msg = document.getElementById('blogcreate-modal-body-msg');
      var modal = document.getElementById('blogcreateModal');
      var modalInstance = new bootstrap.Modal(modal);
      let queryString = window.location.search;
      const urlParams =new URLSearchParams(queryString);
      if(urlParams.has('blogcreate')){
        if(urlParams.get('blogcreate')=='success'){
          modal_body_msg.innerHTML ="<b>Blog created Successfully!.<br> you can view the blogs by clicking on View Blogs </b>";
        }
        else if(urlParams.get('blogcreate')=='failed'){
          modal_body_msg.innerHTML ="<b>Failed to create Blog!.<br> Try again !</b>";;
        }
        modalInstance.show();
      }
  })