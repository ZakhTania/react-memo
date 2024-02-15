import { createContext, useState } from "react";
import { getLeadersList } from "../API";

export const LeadersContext = createContext(null);

export function LeadersProvider({ children }) {
  const [leadersList, setLeadersList] = useState(JSON.parse(localStorage.getItem("leaders")) || []);

  function updateLeadersList() {
    getLeadersList()
      .then(data => {
        const leaders = data.leaders.sort((a, b) => {
          return a.time - b.time;
        });
        localStorage.setItem("leaders", JSON.stringify(leaders));
        setLeadersList(JSON.parse(localStorage.getItem("leaders")));
      })
      .catch(error => {
        console.log(error.message);
      });
  }

  return <LeadersContext.Provider value={{ leadersList, updateLeadersList }}>{children}</LeadersContext.Provider>;
}
