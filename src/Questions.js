import React from "react";


const userQuestion = Math.floor(Math.random() * 6);

class Question extends React.Component {
  renderSwitch(userQuestion) {
    switch (userQuestion) {
      case 0:
        return "Will the sun rise in the morrow of darkness?";
      case 1:
        return "Is WWIII going to begin within 24hrs?";
      case 2:
        return "Is Donald Trump going to resign from office?";
      case 3:
        return "Can I drink my juice in the hood without being a menace? Asking for a friend?";
      case 4:
        return "Will Trump's wig ever fall off on live tv?";
      case 5:
        return "Will I EVER feel like Peter Frampton?";
      case 6:
        return "Do Magic Eightballs have any metaphysical powers or do they just spout random answers with zero grasp on reality???";

      default:
        return "No Match";
    }
  }

  render() {
    return (
      <div>
        Oh wise one...
        <br />
        {this.renderSwitch(userQuestion)}
      </div>
    );
  }
}

export default Question;
