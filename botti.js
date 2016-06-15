var readline = require('readline');
var config = require("./config.json");
var DocomoAPI = require('docomo-api');
var api= new DocomoAPI(config.apiKey);
var rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

rl.on("line", function(line) {
  api.createDialogue(line, config.botParams, function(error, data){
    console.log("(´・ω・`) < " + data.utt);
  });
});
