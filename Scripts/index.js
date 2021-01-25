// Wrap every letter in a span
$(document).ready(function () {
    $(document).scroll(function () {
      if ($("#Home").is(":visible")) {
        $("#Homebtn").css("text-decoration-style", "solid");
      }
    });

    $(".ml9 .letters").each(function (index) {
      var characters = $(this).text().split("");

      $this = $(this);
      $this.empty();
      $.each(characters, function (i, el) {
        $this.append('<span class="letter bounce">' + el + "</span");
        $this.animate({
          opacity: "1",
        });
      });
    });

    $(".bounce").mouseover(function () {
      var j = 35;
      for (var i = 1; i <= 3; i++) {
        $(this).animate({ bottom: j }, "fast");
        $(this).animate({ bottom: 0 }, "fast");
        j -= 10;
      }
    });

    function dateDiff(startingDate, endingDate) {
      var startDate = new Date(new Date(startingDate).toISOString().substr(0, 10));
      if (!endingDate) {
          endingDate = new Date().toISOString().substr(0, 10);    // need date in YYYY-MM-DD format
      }
      var endDate = new Date(endingDate);
      if (startDate > endDate) {
          var swap = startDate;
          startDate = endDate;
          endDate = swap;
      }
      var startYear = startDate.getFullYear();
      var february = (startYear % 4 === 0 && startYear % 100 !== 0) || startYear % 400 === 0 ? 29 : 28;
      var daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
      var yearDiff = endDate.getFullYear() - startYear;
      var monthDiff = endDate.getMonth() - startDate.getMonth();
      if (monthDiff < 0) {
          yearDiff--;
          monthDiff += 12;
      }
      var dayDiff = endDate.getDate() - startDate.getDate();
      if (dayDiff < 0) {
          if (monthDiff > 0) {
              monthDiff--;
          } else {
              yearDiff--;
              monthDiff = 11;
          }
          dayDiff += daysInMonth[startDate.getMonth()];
      }
  
      return '(' +yearDiff + ' years ' + monthDiff + ' months) '; + dayDiff + ' days)';
  }

$("#Red-Cross-Time").html(dateDiff("2018-03-23",$.now()));

fetch("https://api.github.com/users/JosephLteif").then((result) => result.json()).then((data) => {
  $("#GitHubName").html(data.name);
  $("#GitHubTitle").html(data.bio);
  $("#GitHubFollowers").html(data.followers);
  $("#GitHubPublicRepos").html(data.public_repos);
  $("#GitHubFollowbtn").attr("onclick","window.location.href='data.html_url'");
  $("#GitHubProfilePicture").html("<picture><img id=\"GitHubImportedImage\" src="+data.avatar_url+ " alt=" +"></picture>")
});
  });
