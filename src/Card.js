import React, { Component } from "react";
import Input from "./Input";

export default ({
  id,
  name,
  initiative,
  hitPoints,
  onNameChange,
  onInitiativeChange,
  onHitPointChange,
  onRemovePlayer
}) => (
  <div className="card">

    <Input label="Name" type="text" value={name} onChange={e => onNameChange(id, e)} />

    <Input label="Initiative" type="number" value={initiative} onChange={e => onInitiativeChange(id, e)} />

    <Input label="Hit Points" type="number" value={hitPoints} onChange={e => onHitPointChange(id, e)} />

    <button onClick={() => onRemovePlayer(id)}>Remove Player</button>

  </div>
);
