import React from 'react';

import { withNamespaces } from 'react-i18next';

import "./LanguageChanger.css";

function LanguageChanger ( { t, i18n } ) {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  }

  const languages = [
    {name:"TR", code: "tr"},
    {name:"EN", code: "en"},
    {name:"JA", code: "ja"},
  ]

  const selectedLanguage = i18n.language;

  return (
    <div className="LanguageChanger" >
      {
      languages.map(( language ) => {
        return (
          <button key={language.code} className={selectedLanguage === language.code ? "active" : ""} onClick={ () => changeLanguage( language.code ) }>{language.name}</button>
        );
      })  
      }
    </div>
  )
}

export default withNamespaces()(LanguageChanger);