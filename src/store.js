import axios from "axios";
const main =  require("./main")
const state = {
    server_domain: "http://localhost:3000/",
    futureGames: [],
    pastGames: [],
    eventLogs: [],
    teams: [],
    currentTeam: "",
}

const actions = {
    setGames: (games)=>{
      state.futureGames = [];
      state.pastGames = [];
      state.eventLogs = [];
      state.teams= [];
      
      games.forEach(async game => {
          state.teams.push(game.hostTeam)
          state.teams.push(game.guestTeam)
          game.matchDate = game.matchDate.split("T")[0];

          if(game.score == null){
              state.futureGames.push(game);
          }
          else{
              state.pastGames.push(game);

            const res = await axios.get(
              `${state.server_domain}matches/searchMatchEventLog/${game.matchId}`,
            );

            res.data.forEach((eventLog) => {
              eventLog.eventDate = eventLog.eventDate.split("T")[0];
              state.eventLogs.push(eventLog);
            })
            
          }
        });
    },
    teamEventListener: () => {
      $(`.table`).on("click", "td", function (row, $el, field) {
        let val = $(this)[0].textContent;
        if (state.teams.includes(val)){
          alert(val);
          state.currentTeam = val
          main.router.push({name: 'teamPage', params: {teamName: val}});
        }
      });
    },
    playerEventListenerImage: () => {
      // let src = $("td").text;
      // console.log(src);
      // $("td").append('<img id="redt" src="Images/redtick.jpg" />');
    }
}

export {state, actions}