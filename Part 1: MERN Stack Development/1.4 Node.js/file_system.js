const fs = require('fs');

// Read the input JSON file
const inputFilePath = 'input.json';
const outputFilePath = 'output.json';

fs.readFile(inputFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading ${inputFilePath}: ${err.message}`);
    return;
  }

  try {
    // Parse the JSON data
    console.log(data)
    const userData = JSON.parse(data);

    // Manipulate the data to include the total number of posts for each user
    userData.forEach(user => {
      user.totalPosts = user.posts.length;
    });

    // Convert the modified data back to JSON
    const modifiedData = JSON.stringify(userData, null, 2); // 2 spaces for indentation

    // Write the modified data to a new JSON file
    fs.writeFile(outputFilePath, modifiedData, 'utf8', writeErr => {
      if (writeErr) {
        console.error(`Error writing ${outputFilePath}: ${writeErr.message}`);
        return;
      }
      console.log(`Modified data written to ${outputFilePath}`);
    });
  } catch (parseError) {
    console.error(`Error parsing JSON data: ${parseError.message}`);
  }
});