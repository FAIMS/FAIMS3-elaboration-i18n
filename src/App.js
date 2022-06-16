import logo from './logo.svg';
import './App.css';
import {useTranslation, Trans} from 'react-i18next'

const langs = {
  en: {nativeName: 'English'},
  de: {nativeName: 'Deutsch'}
}

function App() {
  const { t, i18n } = useTranslation()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          {Object.keys(langs).map((lang) => (
          <button type="submit" key={lang} onClick={() => i18n.changeLanguage(lang)} disabled={i18n.resolvedLanguage === lang}>{langs[lang].nativeName}</button>
          ))}
        </div>
        <p>
          <Trans i18nKey={"description"}>
          Edit <code>src/App.js</code> and save to reload.
          </Trans>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('learn')}
        </a>
        {/*Automatically translate and add new translations using locize (requires $$$ per use) <p>{t('new.key', 'this will be added automatically')}</p> */}
      </header>
    </div>
  );
}

export default App;
