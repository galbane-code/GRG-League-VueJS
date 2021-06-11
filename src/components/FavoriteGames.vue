<template>
  <div class="container">
  <div v-if="games[0] != '' ">
    <h2 >Your Favorite Future Games</h2>
    <GamePreview
      v-for="g in games.slice(0,3)"
      :load="parseDate(g)"
      :matchId="g.matchId" 
      :hostTeam="g.hostTeam" 
      :guestTeam="g.guestTeam" 
      :matchDate="g.matchDate" 
      :matchHour="g.matchHour" 
      :stadium="g.stadium" 
      :key="g.matchId"></GamePreview>    
  </div>
  <div v-else>
    <h2 >{{error}}</h2>
  </div>
  </div>
</template>

<script>
import GamePreview from "./GamePreview.vue";
export default {
  name: "FavoriteGames",
  components: {
    GamePreview
  }, 
  data() {
    return {
      games: [''],
      error: "No Favorite Games Were Added"
    };
  },
  methods: {
    parseDate(game){      
      game.matchDate = game.matchDate.split("T")[0]
    },
    async updateGames(){
      
      try {
        const response = await this.axios.get(
          "http://localhost:3000/users/favoriteMatches",
        );
        // console.log(response);
        const games = response.data;
        this.games = []
        games.forEach(element => {
          this.games.push(...[element[0]])
        });
        ;
      } catch (error) {
        console.log("error in update games")
        console.log(error);
      }
    }
  }, 
  mounted(){
    this.updateGames(); 
    console.log("favorite games mounted");
  }
};
</script>

<style>
</style>
