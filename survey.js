// Import readline
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// User questions
rl.question("What's your name? Nicknames are also acceptable :) ", (answer1) => {
  
  rl.question("What's an activity you like doing? ", (answer2) => {
  
    rl.question("What do you listen to while doing that? ", (answer3) => {
  
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer4) => {
  
        rl.question("What's your favourite thing to eat for that meal? ", (answer5) => {
  
          rl.question("Which sport is your absolute favourite? ", (answer6) => {
  
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer7) => {
              
              // Print all of the user's inputs into one paragraph.
              console.log(`${answer1} likes listening to ${answer3} while ${answer2}, devouring ${answer5} for ${answer4}, prefers ${answer6} over any other sport, and is amazing at ${answer7}.`);
              
              // Close the application
              rl.close();
            });
          });
        });
      });
    });
  });
});
