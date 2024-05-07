import React, { useState, useEffect } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

function BotsPage() {
  const [bots, setBots] = useState([]);
  const [botArmy, setBotArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then(response => response.json())
      .then(data => setBots(data))
      .catch(() => console.log("Failed to fetch bots"));
  }, []);

    const enlistBot = (bot) => {
    setBotArmy([...botArmy, bot]);
  };

      const releaseBot = (botId) => {
    setBotArmy(botArmy.filter(bot => bot.id !== botId));
  };

    const dischargeBot = (botId) => {
    fetch(`http://localhost:8002/bots/${botId}`, {
      method: 'DELETE',
    })
    .then(() => {
      setBotArmy(botArmy.filter(bot => bot.id !== botId));
    });
  };

  return (
    <div>
      <YourBotArmy botArmy={botArmy} onRelease={releaseBot} onDischarge={dischargeBot} />
      <BotCollection bots={bots} onEnlist={enlistBot} />
    </div>
  );
}

export default BotsPage;
