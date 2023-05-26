// // get the loader and content elements
// const loader = document.querySelector('.loader-container');
// const content = document.getElementById('content');

// // hide the content element initially
// content.style.display = 'none';

// // set a timeout of 5 seconds before showing the content and hiding the loader
// setTimeout(() => {
//   loader.style.display = 'none';
//   content.style.display = 'block';
// }, 5000);


// function loader(){
//     document.querySelector('.loader-container').classList.add('fade-out');
// }

// function fadeOut(){
//     setInterval(loader, 4000);
// }   

// window.onload = fadeOut();

$(document).ready(function() {
    // Display the modal pop-up
    function openModal() {
      var modal = document.getElementById("myModal");
      modal.style.display = "block";
    }

    // Close the modal pop-up
    function closeModal() {
      var modal = document.getElementById("myModal");
      modal.style.display = "none";
    }

    // Event listener for the close button of the modal
    var closeBtn = document.getElementsByClassName("close")[0];
    closeBtn.addEventListener("click", closeModal);

    // Event listener to close the modal when clicking outside the content
    $(window).on("click", function (event) {
      var modal = document.getElementById("myModal");
      if (event.target === modal) {
        closeModal();
      }
    });

    // Display the modal pop-up on page load
    $(window).on("load", openModal);

    // Display live clock
    function showTime() {
      var date = new Date();
      var h = date.getHours();
      var m = date.getMinutes();
      var s = date.getSeconds();

      if (h < 10) h = "0" + h;
      if (m < 10) m = "0" + m;
      if (s < 10) s = "0" + s;

      var time = h + ":" + m + ":" + s;
      $("#liveClock").text(time);

      setTimeout(showTime, 1000);
    }

    showTime();
  });