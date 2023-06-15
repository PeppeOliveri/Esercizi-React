import React from "react";
import { LanguageContext } from "./LanguageContext";

const strings = {
  en: {
    LanguageDisplay: "You have selected the English language",
  },
  it: {
    LanguageDisplay: "Hai selezionato la lingua Italiana",
  },
};

export default class DisplayLanguage extends React.Component {
  render() {
    return (
      <div>
        <LanguageContext.Consumer>
          {(language) => {
            return (
              <div>
                <h1>{strings[language].LanguageDisplay}</h1>
              </div>
            );
          }}
        </LanguageContext.Consumer>
      </div>
    );
  }
}
