const commentsContainer = document.getElementById("comments-area");

function loadComments() {
  fetch("http://localhost/second-try/php/comments.php")
    .then((response) => response.json()) // Parse response as JSON
    .then((res) => {
      let comments = res.comments;
      console.log(comments);
      commentsContainer.innerHTML = "";
      if (comments.length > 0) {
        var html = "<h2>Commentaires</h2>";
        for (var i = 0; i < comments.length; i++) {
          html += `<div><img src="assets/profile-icon-comments.png" >`;
          "<span><h5>" +
            comments[i].email +
            ":</h5> " +
            "<p>" +
            comments[i].COMMENT +
            "</p> </span> </div>";
        }
        commentsContainer.innerHTML = html;
      } else {
        commentsContainer.innerHTML =
          "<p>Aucun commentaire pour le moment.</p>";
      }
    })
    .catch((error) => {
      console.error("Error loading comments:");
    });
}

// Call the loadComments function on page load
window.addEventListener("load", loadComments);
