import React from "react";
import DisplayLanguage from "./DisplayLanguage";
import { LanguageContext } from "./LanguageContext";

export default class Language extends React.Component {
  state = {
    language: "en",
  };

  handleLanguage = (event) => {
    this.setState({
      language: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <select onChange={this.handleLanguage}>
          <option value="en">Inglese</option>
          <option value="it">Italiano</option>
        </select>
        <LanguageContext.Provider value={this.state.language}>
          <DisplayLanguage />
        </LanguageContext.Provider>
      </div>
    );
  }
}
