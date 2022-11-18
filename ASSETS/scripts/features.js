"use strict";

const copyText = function () {
  let textBox = document.getElementById("TEXT_INPUT");
  textBox.select();
  document.execCommand("copy");
};
