import React from "react";

// class Thing extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { show: false };
//     this.answer = this.answer.bind(this);
//   }

//   answer = () => {
//     const { show } = this.state;
//     this.setState({ show: !show });
//   };

//   render() {
//     return (
//       <div className="d-flex justify-content-center">
//         {this.state.show && <Response />}
//       </div>
//     );
//   }
// }

// class Response extends Component {
//   render() {
//     return (
//       <div className="input-group-prepend justify-content-center">
//         <button
//           onClick={this.answer}
//           className="btn btn-outline-secondary "
//           type="button"
//         >
//           Submit to Oracle
//         </button>

//         <blockquote className="response">
//           <Thing />
//           <Answer className="text-center" />
//         </blockquote>
//       </div>
//     );
//   }
// }

//--------------------------------

const randomNumber = Math.floor(Math.random() * 7);

class Answer extends React.Component {
  renderSwitch(randomNumber) {
    switch (randomNumber) {
      case 0:
        return "It is certain";
      case 1:
        return "I am afraid that ye ol' peon is flooded with questions I no longer wish to provide enlightenment on.  ~~~~ Good day ~~~~";
      case 2:
        return "Reply hazy....try again.";
      case 3:
        return "Silence!!! I'm currently harnessing the energy as a medium between Kurt and Courtney";
      case 4:
        return "By the power vested in the vibrations of the universe........................................................................... no.";
      case 5:
        return "That's lookin' like a big fat hell no, dawg!";
      case 6:
        return "Highly unlikely";
      case 7:
        return "Signs point to yes";
      default:
        return "AHHHHHHHHHHHHHH!!";
    }
  }

  render() {
    return <div>{this.renderSwitch(randomNumber)}</div>;
  }
}

export default Answer;
