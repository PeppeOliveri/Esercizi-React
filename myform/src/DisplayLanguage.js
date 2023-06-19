import React from "react";
import { LanguageContext } from "./LanguageContext";
import { useContext } from "react";

const strings = {
  en: {
    LanguageDisplay: "You have selected the English language",
  },
  it: {
    LanguageDisplay: "Hai selezionato la lingua Italiana",
  },
};

export default function DisplayLanguage() {
  const language = useContext(LanguageContext);

  return (
    <div>
      <h1>{strings[language].LanguageDisplay}</h1>
    </div>
  );
}
