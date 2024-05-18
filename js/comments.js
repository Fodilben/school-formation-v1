document.addEventListener("DOMContentLoaded", function () {
  var commentForm = document.getElementById("commentForm");

  // Event listener for the comment form submission
  commentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var comment = document.getElementById("comment").value;

    if (email && comment) {
      fetch("http://localhost/second-try/php/comments.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body:
          "email=" +
          encodeURIComponent(email) +
          "&comment=" +
          encodeURIComponent(comment),
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          if (data.status === "success") {
            console.log(data.message);
            window.location.reload();
            // If you want to do something after adding the comment, you can do it here
          } else {
            console.error(data.message);
          }
        })
        .catch(function (error) {
          console.error("Error submitting comment:", error);
        });
    }
  });
});
