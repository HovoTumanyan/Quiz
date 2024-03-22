import './LanguageSelector.css'
export default function LanguageSelector({ setUniqueCategories, setCorrectAnswerCount, switchMode, setIsCorrect, setLocale, locale, i18n }) {
  
  const handleLanguageChange = (newLang) => {
    i18n.changeLanguage(newLang);
    setLocale(newLang);
    setCorrectAnswerCount(-1);
    setIsCorrect({ correct: [], incorrect: [] });
    setUniqueCategories([]);
  };

  return (
    <div className="language-selector">
      <p
        className="language-button"
        style={{ borderBottom: switchMode ? '1px solid purple' : '1px solid #ccc' }}
        onClick={() => handleLanguageChange(locale === 'ru' ? 'en' : 'ru')}
      >
        {locale === 'ru' ? 'En' : 'Ru'}
      </p>
    </div>
  );
};
