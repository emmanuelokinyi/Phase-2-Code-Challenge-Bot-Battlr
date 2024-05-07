import React from "react";

function YourBotArmy ({ botArmy, onRelease, onDischarge }) {
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {botArmy.map(bot => (
            <div className="column" key={bot.id}>
              <img alt="oh no!" className="ui tiny circular image bordered" src={bot.avatar_url} />
              <div>{bot.name}</div>
              <button className="ui button fluid" onClick={() => onRelease(bot.id)}>Release</button>
              <button className="ui mini red button" onClick={() => onDischarge(bot.id)}>x</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YourBotArmy;

