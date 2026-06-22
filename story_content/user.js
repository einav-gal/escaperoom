window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  setTimeout(function() {

  var inputs = window.document.querySelectorAll('input[type="text"]');

  inputs.forEach(function(input) {

    input.setAttribute('autocomplete', 'off');

    input.setAttribute('autocorrect', 'off');

    input.setAttribute('autocapitalize', 'off');

    input.setAttribute('spellcheck', 'false');

  });

}, 1000);

 
}

window.Script2 = function()
{
  var player = GetPlayer();
var fullCode =
  player.GetVar("Code1") +
  player.GetVar("Code2") +
  player.GetVar("Code3") +
  player.GetVar("Code4") +
  player.GetVar("Code5");

player.SetVar("FullCode", fullCode);
player.SetVar("UserEntry", "");
}

window.Script3 = function()
{
  var player = GetPlayer();
var current = player.GetVar("UserEntry");
player.SetVar("UserEntry", current + "1");
}

window.Script4 = function()
{
  var player = GetPlayer();
var current = player.GetVar("UserEntry");
player.SetVar("UserEntry", current + "2");
}

window.Script5 = function()
{
  var player = GetPlayer();
var current = player.GetVar("UserEntry");
player.SetVar("UserEntry", current + "3");
}

window.Script6 = function()
{
  var player = GetPlayer();
var current = player.GetVar("UserEntry");
player.SetVar("UserEntry", current + "4");
}

window.Script7 = function()
{
  var player = GetPlayer();
var current = player.GetVar("UserEntry");
player.SetVar("UserEntry", current + "5");
}

window.Script8 = function()
{
  var player = GetPlayer();
var current = player.GetVar("UserEntry");
player.SetVar("UserEntry", current + "6");
}

window.Script9 = function()
{
  var player = GetPlayer();
var current = player.GetVar("UserEntry");
player.SetVar("UserEntry", current + "7");
}

window.Script10 = function()
{
  var player = GetPlayer();
var current = player.GetVar("UserEntry");
player.SetVar("UserEntry", current + "8");
}

window.Script11 = function()
{
  var player = GetPlayer();
var current = player.GetVar("UserEntry");
player.SetVar("UserEntry", current + "9");
}

window.Script12 = function()
{
  var player = GetPlayer();
var current = player.GetVar("UserEntry");
player.SetVar("UserEntry", current + "0");
}

window.Script13 = function()
{
  var player = GetPlayer();
var current = player.GetVar("UserEntry") || "";
player.SetVar("UserEntry", current.substring(0, current.length - 1));
}

window.Script14 = function()
{
  var player = GetPlayer();
player.SetVar("UserEntry", "");
}

};
