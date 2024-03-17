import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Definition.css";

export default function Definition(props) {
  if (props.definition) {
    return (
      <div className="Definition">
        <section>
          <h2>{props.definition.word}</h2>
          {props.definition.phonetics.map(function (phonetics, index) {
            return (
              <div key={index}>
                <Phonetics phonetics={phonetics} />
              </div>
            );
          })}
        </section>
        {props.definition.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
