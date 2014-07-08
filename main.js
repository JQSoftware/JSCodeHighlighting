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

  $('pre').css('background-color', '#333');
  
  var types = ['CGRect', 'CGContextRef'];

  keywords = keywords.concat(types);


  var keywordColor = '#99ff99';
  for(var i=0;i<keywords.length;i++) {
    colors.push(keywordColor);
  }
  
  for(var i=0;i<keywords.length;i++) {
    var keyword = keywords[i];
    var color = colors[i];

    console.log(keyword+' : '+color);
    
    var replaceText = replaceAll( $('pre').html(), keyword, '<span style="color:'+color+';">'+keyword+'</span>');
    $('pre').html( replaceText );

  }  


  // Now do background color for indents
  color = '#000';
  var bgcolor = "#444";
  keyword = "  ";
  var asciiSpace = "  ";
  var replaceText = replaceAll( $('pre').html(), keyword, '<span style="color:'+color+';background-color:'+bgcolor+';">'+asciiSpace+'</span>');
  $('pre').html( replaceText );

}

function addLineNumber() {
  var code = $('pre').html();
}

// Entry point
$(document).ready(function() {
  highlightCode();
  addLineNumber();
});

console.log("Ran js");
