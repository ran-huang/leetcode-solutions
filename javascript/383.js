var canConstruct = function(ransomNote, magazine) {
  let magazineLetters = magazine.split('');
  let noteLetters = ransomNote.split('');
  while (noteLetters.length) {
      const index = magazineLetters.indexOf(noteLetters[0])
      if (index === -1) {
          return false;
      }
      magazineLetters = magazineLetters.slice(0,index).join(magazineLetters.slice(index+1));
      noteLetters = noteLetters.slice(1);
  }
  return true;
};

canConstruct("aa", "aab");