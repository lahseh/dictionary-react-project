import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Definition(props) {
  if (props.definition) {
    return (
      <div className="Definition">
        <h2>{props.definition.word}</h2>
        {props.definition.phonetics.map(function (phonetics, index) {
          return (
            <div key={index}>
              <Phonetics phonetics={phonetics} />
            </div>
          );
        })}

        {props.definition.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
