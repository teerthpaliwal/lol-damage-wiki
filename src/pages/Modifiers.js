import { useState } from "react";

function Modifiers() {

  const [damage, setDamage] = useState("");
  const [type, setType] = useState("physical");
  const [result, setResult] = useState("");

  function calculateDamage() {

    if (damage === "") {
      alert("Enter a value first");
      return;
    }

    let multiplier;

    if (type === "physical") {
      multiplier = 1.2;
    } else if (type === "magic") {
      multiplier = 1.3;
    } else {
      multiplier = 1.0;
    }

    const finalDamage = damage * multiplier;

    setResult("Final Damage (" + type + "): " + finalDamage);
  }

  return (
    <div>
      <h2>Damage Modifiers</h2>

      <p>Calculate modified damage based on type.</p>

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="physical">Physical</option>
        <option value="magic">Magic</option>
        <option value="true">True</option>
      </select>

      <input
        type="number"
        placeholder="Enter base damage"
        value={damage}
        onChange={(e) => setDamage(e.target.value)}
      />

      <button className="button" onClick={calculateDamage}>Calculate</button>

      <p>{result}</p>
    </div>
  );
}

export default Modifiers;