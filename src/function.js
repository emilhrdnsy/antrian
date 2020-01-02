export default function readOutLoud(message){
  const speech = new SpeechSynthesisUtterance()
  // speech.lang;
  speech.lang = 'ja';
  speech.text = 'Kyū bangō ' + message + ' U~indō 1 de'
  speech.volume = 1
  speech.rate = 1
  speech.pitch = 1
  window.speechSynthesis.speak(speech)

}

