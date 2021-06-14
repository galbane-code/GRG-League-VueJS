import axios from "axios";
import $ from 'jquery'
const main =  require("./main")

const state = {
    userId: -1,
    server_domain: "http://localhost:3000/",
    futureGames: [],
    pastGames: [],
    eventLogs: [],
    teams: [],
    currentTeam: "",
    players: {},
    currentPlayer: "",
    favoriteGames: [],
    searchPlayers: [],
    searchTeams: [],
    searchQuery: ""
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

          if(game.score == null || game.score == 'null'){
            game.score = null;
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
    pushPlayer: (playerName, playerId) => {
      if (!(playerName in state.players)){
        state.players[playerName] = playerId;
      }
    },
    pushFavoriteGame: (matchId) => {
      state.favoriteGames.push(matchId);
    },
    deleteFavoriteGame: (matchId) => {
      let index = state.favoriteGames.indexOf(matchId);
      if (index !== -1){
        state.favoriteGames.splice(index, 1)
      }
    },
    playerEventListener: () => {
      $(`.table`).on("click", "td", function (row, $el, field) {
        let playerName = $(this)[0].textContent;
        if (playerName in state.players){
          alert(playerName);
          state.currentPlayer = playerName
          main.router.push({name: 'playerPage', params: {playerName: playerName}});
        }
        // if (state.teams.includes(playerName)){
        //   alert(playerName);
        //   state.currentTeam = playerName
        //   main.router.push({name: 'teamPage', params: {teamName: playerName}});
        // }
      });
    },
    setTable: (oldTable, newTable) => {
      oldTable = newTable;
    },
    pushTeamFromSearch: (teamName) => {
      let index = state.teams.indexOf(teamName);
      if (index == -1){
        state.teams.push(teamName)
      }
    },
}

export {state, actions}
