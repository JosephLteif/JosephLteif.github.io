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
 
  });
