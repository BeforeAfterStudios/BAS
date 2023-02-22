<?php
  header("Cache-Control: no-cache, must-revalidate"); // HTTP 1.1
  header("Pragma: no-cache"); // HTTP 1.0
  header("Expires: Wed, 1 Jan 2020 00:00:00 GMT");
?>
var foo = "bar";
console.log(foo);