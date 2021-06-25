<template>
  <div class="container" >
  <div v-if="games[0] != '' ">
    <h1 class="test2" >Your Favorite Future Games</h1>
    <GamePreview
      style="width:30%"
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
    <h1 class="test2" >{{error}}</h1>
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
          `${this.$store.state.server_domain}users/favoriteMatches`,
        );

        if(response.data != "NO"){
          const games = response.data;
          this.games = []
          games.forEach(element => {
            this.games.push(...[element[0]]);
          });
        }

      } catch (error) {
        console.log("error in update games")
        console.log(error);
      }
    }
  }, 
  mounted(){
    this.updateGames(); 
  }
};
</script>

<style>
</style>
