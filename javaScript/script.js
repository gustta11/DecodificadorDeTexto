const pattern = {
    "e": "enter", 
    "i": "imes", 
    "a": "ai", 
    "o": "ober", 
    "u": "ufat",
    "enter": "e", 
    "imes": "i", 
    "ai": "a", 
    "ober": "o", 
    "ufat": "u"
  }
  const encodeRegex = new RegExp(Object.keys(pattern).slice(0,5).join("|"), "g");
  const decodeRegex = new RegExp(Object.keys(pattern).slice(5).join("|"), "g");
  
  function encoder(option) {
    const text = document.getElementById("textEntry").value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const regex = option === 1 ? encodeRegex : decodeRegex;
    const resultText = text.replace(regex, (match) => option === 1? pattern[match]: pattern[match]);
    alert(resultText);
  }