import React, { Component } from "react";
import "./App.css";
import Card from "./Card";
import { randomID } from "./Utils";
import { initialState } from "./Constants";

class App extends Component {
  constructor(props) {
    super(props);

    //state
    this.state = {
      elements: initialState
    };

    //bindings
    this.removePlayer = this.removePlayer.bind(this);
    this.addCard = this.addCard.bind(this);
    this.updateHitPoints = this.updateHitPoints.bind(this);
    this.updateInitiative = this.updateInitiative.bind(this);
    this.sortElements = this.sortElements.bind(this);
    this.updateName = this.updateName.bind(this);
  }

  removePlayer(id) {
    const { elements } = this.state;
    this.setState({
      elements: elements.filter(el => el.id !== id)
    });
  }

  addCard() {
    const { elements } = this.state;
    const len = elements.length;
    elements[elements.length] = {
      id: randomID(),
      name: len + 1,
      initiative: 7,
      hitPoints: 100
    };
    this.setState({
      elements: elements.sort((l, r) => r.initiative - l.initiative)
    });
  }

  updateHitPoints(id, e) {
    const { value } = e.target;
    const elements = this.state.elements;
    const index = elements.findIndex(el => el.id === id);
    elements[index].hitPoints = Number(value);
    this.setState({ elements });
  }

  updateInitiative(id, e) {
    clearTimeout(this.timeout_);
    const { value } = e.target;
    const elements = this.state.elements;
    const index = elements.findIndex(el => el.id === id);
    elements[index].initiative = Number(value);
    this.setState({
      elements: elements
    });
    this.timeout_ = setTimeout(this.sortElements, 500);
  }

  sortElements() {
    const { elements } = this.state;
    this.setState({
      elements: elements.sort((l, r) => r.initiative - l.initiative)
    });
  }

  updateName(id, e) {
    const { value } = e.target;
    const elements = this.state.elements;
    const index = elements.findIndex(el => el.id === id);
    elements[index].name = value;
    this.setState({ elements });
  }

  render() {
    const { elements } = this.state;
    return (
      <div className='App'>
        <h1>DnD Initiative Sorter</h1>
        <button onClick={this.addCard}>Add New Player</button>
        {elements.map(element => (
          <Card
            key={element.id}
            name={element.name}
            initiative={Math.floor(element.initiative)}
            hitPoints={Math.floor(element.hitPoints)}
            id={element.id}
            onNameChange={this.updateName}
            onInitiativeChange={this.updateInitiative}
            onHitPointChange={this.updateHitPoints}
            onRemovePlayer={this.removePlayer}
          />
        ))}
      </div>
    );
  }
}

export default App;
