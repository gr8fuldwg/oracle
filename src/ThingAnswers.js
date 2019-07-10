import React from 'react';

const randomNumber = Math.floor(Math.random() * 7);

class ThingAnswer extends React.Component {
  renderSwitch(randomNumber) {
    switch (randomNumber) {
      case 0:
        return "It is unfathomably uncertain";
      case 1:
        return "I am afraid that you have flooded The Oracle with questions it no longer wishes to provide enlightenment on.  ~~~~ Good day ~~~~";
      case 2:
        return "Reply hazy....try again, mofo.";
      case 3:
        return "Silence, you f*&^!!!! ";
      case 4:
        return "By the power vested in the vibrations of the universe........................................................................... no.";
      case 5:
        return "That's lookin' like one big fat hell no, dawg!";
      case 6:
        return "Highly freakin unlikely";
      case 7:
        return "Signs point to absofrigginlutely";
      default:
        return "N/A!";
    }
  }

  render() {
    return <div>{this.renderSwitch(randomNumber)}</div>;
  }
}

export default ThingAnswer;