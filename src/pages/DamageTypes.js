import { useState } from "react";

function DamageTypes() {

  const [tip, setTip] = useState("");

  const tips = [
    "Magic damage is reduced by Magic Resist.",
    "Armor reduces physical damage.",
    "True damage ignores all defenses.",
    "Stacking resistances has diminishing returns.",
    "Items and abilities both modify damage output."
  ];

  function showTip() {
    const randomIndex = Math.floor(Math.random() * tips.length);
    setTip(tips[randomIndex]);
  }

  return (
    <div>
      <h2>Types of Damage</h2>

      <p>
        There are three primary types of damage in League of Legends, each interacting differently with defenses.
      </p>

      <h3>Physical Damage</h3>
      <p>Reduced by Armor.</p>

      <h3>Magic Damage</h3>
      <p>Reduced by Magic Resist.</p>

      <h3>True Damage</h3>
      <p>Ignores all defenses.</p>

      <button onClick={showTip}>Show Tip</button>

      <p>{tip}</p>
    </div>
  );
}

export default DamageTypes;