import React from "react";
import dogs from "../dogs.json";

class DogDetail extends React.Component {
  state = {
    name: "",
    age: null,
    breed: "",
    sex: "",
    img: "",
  };

  componentDidMount() {
    const dog = dogs.find(
      (dog) => dog.name === this.props.match.params.dogName
    );

    if (dog) {
      this.setState({ ...dog });
    }
  }

  render() {
    console.log(this.props.match.params);

    return (
      <div>
        <h2>{this.state.name}</h2>

        <img src={this.state.img} alt={this.state.name} className="image" />

        <ul>
          <li>{this.state.age}</li>
          <li>{this.state.breed}</li>
          <li>{this.state.sex}</li>
        </ul>
      </div>
    );
  }
}

export default DogDetail;
