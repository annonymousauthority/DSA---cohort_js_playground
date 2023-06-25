/*

- Conv string to array
- detect threat level
- check for occurence of keywords in letters (string)

let threats_ = new Map();
threats_.set("betray", 3);
threats_.set("elon", 1);
threats_.set("pikachu", 1);
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

detectThreatLevel(threats_);

function keywordOccurence(str, keywords) {
  const threats = new Map();

  // Put your codes here.
  return detectThreatLevel(threats);
}
