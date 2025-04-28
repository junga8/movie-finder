const LANGUAGE_CODES = {
  English: 'en',
  German: 'de',
  French: 'fr',
  Nepali: 'ne'
};

async function translateText(text, targetLanguage) {
  if (targetLanguage === 'English') return text; // No need to translate if target is English

  const targetLangCode = LANGUAGE_CODES[targetLanguage];
  
  try {
    const response = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLangCode}&dt=t&q=${encodeURIComponent(text)}`);
    const data = await response.json();
    return data[0].map(segment => segment[0]).join('');
  } catch (error) {
    console.error('Translation error:', error);
    return text; // Return original text if translation fails
  }
}

export { translateText, LANGUAGE_CODES }; 