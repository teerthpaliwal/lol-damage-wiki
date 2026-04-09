function Home() {
  return (
    <div>
      <h2>Overview</h2>

      <p>
        League of Legends uses three main damage types that interact differently with defenses.
        Understanding these is key to maximizing damage output.
      </p>

      <ul>
        <li>Physical Damage</li>
        <li>Magic Damage</li>
        <li>True Damage</li>
      </ul>

      <img src="damage_types.png" alt="Damage Types" width="300" />

      <h3>Quick Comparison</h3>

      <table border="1">
        <tr>
          <th>Type</th>
          <th>Reduced By</th>
        </tr>
        <tr>
          <td>Physical</td>
          <td>Armor</td>
        </tr>
        <tr>
          <td>Magic</td>
          <td>Magic Resist</td>
        </tr>
        <tr>
          <td>True</td>
          <td>Nothing</td>
        </tr>
      </table>
    </div>
  );
}

export default Home;