function update()
{
  var idoc = document.getElementById('iframe').contentWindow.document;
  idoc.open()
  idoc.write(editor.getValue());
  idoc.close()
}
function setupEditor()
{
  window.editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/html");
editor.setValue(`
















  `,1); //1 = moves cursor to end

editor.getSession().on('change', function() {
update();
});

editor.focus();


editor.setOptions({
fontSize: "16pt",
showLineNumbers: true,
showGutter: false,
vScrollBarAlwaysVisible:true,
enableBasicAutocompletion: false, enableLiveAutocompletion: false
});

editor.setShowPrintMargin(false);
editor.setBehavioursEnabled(false);
}
function ready(){
  setupEditor();
  update();

}
function openForm1() {
  var text = "</a href=><a>";
var pos = ace.edit("editor");
editor.getSession().setMode("ace/mode/html")
var session = editor.session;

session.insert({
row:7, // or you can use "pos.row"
column:10 ,
}, " " + text + " ");

//document.getElementById("myForm1").style.display = "block";
  }
function openForm2() {
  //document.getElementById("myForm2").style.display = "block";

  var text = "<nav></nav>";
  var pos = editor.selection.getCursor();
  var session = editor.session;

  session.insert({
  row: 9, // or you can use "pos.row"
  column: 10,
  }, " " + text + " ");
    //1 = moves cursor to end




}
function openForm3() {
  //document.getElementById("myForm3").style.display = "block";
  var text = "<title></title>";
var pos = editor.selection.getCursor();
var session = editor.session;

session.insert({
row:3, // or you can use "pos.row"
column:19,
}, " " + text + " ");

}
function openForm4() {
  //document.getElementById("myForm4").style.display = "block";
  var text = "<footer></footer>";
var pos = editor.selection.getCursor();
var session = editor.session;

session.insert({
row: 1, // or you can use "pos.row"
column: 10,
}, " " + text + " ");
}
function openForm5() {
  //document.getElementById("myForm5").style.display = "block";
  var text = "</body><body>";
  var pos = editor.selection.getCursor();
  var session = editor.session;

  session.insert({
  row: 10, // or you can use "pos.row"
  column: 6,
  }, " " + text + " ");
}
function openForm6()
{
  //document.getElementById("myForm6").style.display = "block";
  var text = "<header></header>";
var pos = editor.selection.getCursor();
var session = editor.session;

session.insert({
row: 0, // or you can use "pos.row"
column: 5,
}, " " + text + " ");
}
function openForm7()
{
  //document.getElementById("myForm7").style.display = "block";
  var text = "<!DOCTYPE html>\n<head>\n</html>\n<head>\n</html>";
  var pos = editor.selection.getCursor();
  var session = editor.session;

  session.insert({
  row:6, // or you can use "pos.row"
  column: 5,
  }, " " + text + " ");
}

function reset()
{
  document.getElementById("myForm7").style.display = "none";
  window.editor = ace.edit("editor");
  editor.setValue(`

























    `,1);
}
function submitt(){
  editor.setOptions({
  fontSize: "16pt",
  showLineNumbers: true,
  showGutter: true,
  vScrollBarAlwaysVisible:true,
  enableBasicAutocompletion: true, enableLiveAutocompletion: true
  });
}
