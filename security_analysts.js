/*

- Conv string to array
- detect threat level
- check for occurence of keywords in letters (string)

 */

let convStringArray = (str) => {
  return str.split(" ");
};

let detectThreatLevel = (threats) => {
  let wordsFound = [];
  let threatCounter = 0;
  for (const [key, value] of threats) {
    wordsFound.push(value);
    if (value > threatCounter) {
      threatCounter = value;
    }
  }
  return {
    flagged_words: wordsFound,
    threat_level:
      threatCounter == 1 ? "Risk" : threatCounter == 2 ? "Critical" : "Demon",
  };
};


function keywordOccurence(str, keywords) {
  const threats = new Map();

  
  convStringArray(str).forEach((word) => {
    if (keywords.includes(word)) {
      if (threats.has(word)) {
        threats.set(word, threats.get(word) + 1);
      } else {
        threats.set(word, 1);
      }
    }
  })

  return detectThreatLevel(threats);
}

console.log(keywordOccurence("dara is a verb dak sombodw dara he he son son he ajdn he was doing son verk sad thim=ng", ['dara', 'son']))