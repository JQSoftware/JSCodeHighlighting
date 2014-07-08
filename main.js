console.log("Run js");

function escapeRegExp(string) {

    return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");

}

function replaceAll(string, find, replace) {

  return string.replace(new RegExp(escapeRegExp(find), 'g'), replace);

}

function highlightCode() {

  var red = '#ff8888';
  var colors = ['#8888ff', red, red, '#ccff66', '#ccff66'];
  var keywords = ['func', '(', ')', '{', '}'];

 // $('pre').css('background-color', '#333');
  
  var types = ['CGRect', 'CGContextRef'];

  keywords = keywords.concat(types);


  var keywordColor = '#99ff99';
  for(var i=0;i<keywords.length;i++) {
    colors.push(keywordColor);
  }
  

  $('pre').each(function() {
  
    for(var i=0;i<keywords.length;i++) {
      var keyword = keywords[i];
      var color = colors[i];

      console.log(keyword+' : '+color);
      
      var replaceText = replaceAll( $('pre').html(), keyword, '<span style="color:'+color+';">'+keyword+'</span>');
      $(this).html( replaceText );

    }  


    // Now do background color for indents
    color = '#000';
    var bgcolor = "#444";
    keyword = "  ";
    var asciiSpace = "  ";
    var replaceText = replaceAll( $('pre').html(), keyword, '<span class="indentation">'+asciiSpace+'</span>');

    $(this).html( replaceText );

  });

}

function addLineNumber() {

  $('pre').each(function() {
    var i = 0;
    var code = $(this).html();
    var lines = code.split('\n');
    var numberedResult = "";
    $.each(lines, function(line) {
      var myLine = "<span class='line'><span class='lineNumber'>"+i+"</span>" + lines[line] + "</span>";
      console.log(myLine);
      numberedResult += myLine + "\n";
      i++;
    });
    $(this).html(numberedResult);
    i++;
  });

}

function addListeners() {
  $(".line").click(function() {
    $("#previewTextField").val( $(this).text() );
  });
}

// Entry point
$(document).ready(function() {

  highlightCode();
  addLineNumber();
  addListeners();

});

console.log("Ran js");
