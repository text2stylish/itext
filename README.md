<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>iText – Stylish Text Generator</title>
  <link href="https://fonts.googleapis.com/css2?family=Rubik+Wet+Paint&family=Dancing+Script&display=swap" rel="stylesheet">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background: linear-gradient(45deg, #2b1055, #7597de);
      min-height: 100vh;
      color: white;
      font-family: 'Arial', sans-serif;
      padding: 20px;
      overflow-x: hidden;
    }

    .container {
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
      padding: 0 15px;
    }

    h1 {
      font-family: 'Rubik Wet Paint', cursive;
      color: #ff6b6b;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
      font-size: 2.5em;
      margin-bottom: 20px;
    }

    .input-section {
      margin: 20px 0;
    }

    textarea {
      width: 100%;
      height: 100px;
      padding: 15px;
      border-radius: 15px;
      border: 3px solid #ff6b6b;
      background: rgba(255,255,255,0.95);
      font-size: 1.1em;
      resize: vertical;
    }

    .style-selector {
      margin: 20px 0;
    }

    select {
      width: 100%;
      padding: 12px;
      border-radius: 25px;
      background: #ff6b6b;
      color: white;
      border: none;
      font-weight: bold;
      font-size: 1em;
      cursor: pointer;
    }

    .output-section {
      background: rgba(255,255,255,0.15);
      padding: 20px;
      border-radius: 20px;
      margin: 20px 0;
      min-height: 100px;
    }

    .styled-text {
      font-size: 1.4em;
      margin: 20px 0;
      word-wrap: break-word;
    }

    .copy-btn {
      width: 100%;
      background: #4CAF50;
      color: white;
      border: none;
      padding: 12px;
      border-radius: 25px;
      cursor: pointer;
      font-size: 1em;
      transition: transform 0.3s;
    }

    .copy-btn:hover {
      transform: scale(1.05);
    }

    .credit {
      margin-top: 30px;
      font-family: 'Dancing Script', cursive;
      font-size: 1.3em;
      color: #ffd93d;
    }

    @media (max-width: 600px) {
      h1 {
        font-size: 2em;
      }

      .styled-text {
        font-size: 1.2em;
      }

      .copy-btn, select, textarea {
        font-size: 1em;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>iText</h1>
    <div class="input-section">
      <textarea id="inputText" placeholder="Enter your text here..."></textarea>
    </div>
    <div class="style-selector">
      <select id="styleSelect">
        <option value="bold">Bold</option>
        <option value="italic">Italic</option>
        <option value="underline">Underline</option>
        <option value="smallcaps">Small Caps</option>
        <option value="bubble">Bubble</option>
        <option value="square">Square</option>
        <!-- Add more styles as needed -->
      </select>
    </div>
    <div class="output-section">
      <div class="styled-text" id="styledText">Your styled text will appear here.</div>
      <button class="copy-btn" onclick="copyText()">Copy Text</button>
    </div>
    <div class="credit">Made with love by <a href="https://instagram.com/zyraon.art/" target="_blank" style="color: #fff600;">Zyraon</a></div>
  </div>

  <script>
    const input = document.getElementById('inputText');
    const output = document.getElementById('styledText');
    const styleSelect = document.getElementById('styleSelect');

    function stylize(text, style) {
      switch (style) {
        case 'bold': return text.split('').map(c => c + '\u0332').join('');
        case 'italic': return '*' + text + '*';
        case 'underline': return text.split('').map(c => c + '\u0332').join('');
        case 'smallcaps': return text.toLowerCase().replace(/[a-z]/g, c => String.fromCharCode(c.charCodeAt(0) + 9327));
        case 'bubble': return text.replace(/[a-z]/gi, c => {
          const base = c.toUpperCase() === c ? 0x1F170 : 0x1F160;
          return String.fromCodePoint(base + c.toUpperCase().charCodeAt(0) - 65);
        });
        case 'square': return text.split('').map(c => c + '\u25A1').join('');
        default: return text;
      }
    }

    input.addEventListener('input', () => {
      const text = input.value;
      const style = styleSelect.value;
      output.textContent = stylize(text, style);
    });

    styleSelect.addEventListener('change', () => {
      input.dispatchEvent(new Event('input'));
    });

    function copyText() {
      const tempInput = document.createElement('textarea');
      tempInput.value = output.textContent;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      alert('Copied to clipboard!');
    }
  </script>
</body>
</html>
return;
      }

      navigator.clipboard.writeText(text)
        .then(() => {
          showCopyMessage("Copied!", "#2ecc71");
        })
        .catch(err => {
          console.error('Copy failed:', err);
        });
    }

    function showCopyMessage(message, bgColor) {
      const originalText = copyBtn.textContent;
      copyBtn.textContent = message;
      copyBtn.style.backgroundColor = bgColor;
      copyBtn.style.opacity = 0.8;

      setTimeout(() => {
        copyBtn.textContent = originalText;
        copyBtn.style.backgroundColor = "#4CAF50";
        copyBtn.style.opacity = 1;
      }, 2000);
    }

    // Helpers
    function toScript(text) {
      const map = {'A':'𝒜','B':'ℬ','C':'𝒞','D':'𝒟','E':'ℰ','F':'ℱ','G':'𝒢','H':'ℋ','I':'ℐ','J':'𝒥','K':'𝒦','L':'ℒ','M':'ℳ','N':'𝒩','O':'𝒪','P':'𝒫','Q':'𝒬','R':'ℛ','S':'𝒮','T':'𝒯','U':'𝒰','V':'𝒱','W':'𝒲','X':'𝒳','Y':'𝒴','Z':'𝒵','a':'𝒶','b':'𝒷','c':'𝒸','d':'𝒹','e':'ℯ','f':'𝒻','g':'ℊ','h':'𝒽','i':'𝒾','j':'𝒿','k':'𝓀','l':'𝓁','m':'𝓂','n':'𝓃','o':'ℴ','p':'𝓅','q':'𝓆','r':'𝓇','s':'𝓈','t':'𝓉','u':'𝓊','v':'𝓋','w':'𝓌','x':'𝓍','y':'𝓎','z':'𝓏'};
      return text.split('').map(c => map[c] || c).join('');
    }

    function toItalic(c) {
      const code = c.charCodeAt(0);
      if (c >= 'A' && c <= 'Z') return String.fromCodePoint(0x1D434 + (code - 65));
      if (c >= 'a' && c <= 'z') return String.fromCodePoint(0x1D44E + (code - 97));
      return c;
    }

    function toGlitch(text) {
      const glitch = {'A':'ꓮ','B':'𐊂','C':'Ͼ','D':'ꓷ','E':'Ɛ','F':'Ϝ','G':'ꓖ','H':'ʜ','I':'Ι','J':'Ϳ','K':'Ҝ','L':'ᒪ','M':'Ⲙ','N':'Ͷ','O':'Ⲟ','P':'ꓑ','Q':'Ⴓ','R':'ꓣ','S':'Ϛ','T':'Ͳ','U':'Ս','V':'Ѵ','W':'ꓪ','X':'ϰ','Y':'Ƴ','Z':'ꓜ'};
      return text.toUpperCase().split('').map(c => glitch[c] || c).join('');
    }

    function toBubble(text) {
      return text.split('').map(c => {
        const code = c.charCodeAt(0);
        if (c >= 'a' && c <= 'z') return String.fromCodePoint(0x24D0 + (code - 97));
        if (c >= 'A' && c <= 'Z') return String.fromCodePoint(0x24B6 + (code - 65));
        return c;
      }).join('');
    }

    inputText.addEventListener('input', updateText);
    styleSelect.addEventListener('change', updateText);
    updateText(); // initial
  </script>
</body>
</html>
