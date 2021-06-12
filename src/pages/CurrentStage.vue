<template>
  <div >
    <div class="container">
      <div class="first">
        <h1 class="title">Past Games</h1>
        <b-table class="table" striped hover :items="this.$store.state.pastGames" :fields="this.fields">
          <template #cell(favoriteGame)="row">
            <input class="checboxFav" type="checkbox" @change="markFavorite(row.item.matchId)">
          </template>
        </b-table>
        
      </div>
      <br/>
      <div class="third">
        <h1 class="title">Past Matches Event Logs</h1>
        <b-table class="table" striped hover :items="this.$store.state.eventLogs"></b-table>
      </div>
      <br/>
      <div class="second">
        <h1 class="title">Upcoming Games</h1>
        <b-table class="table" striped hover :items="this.$store.state.futureGames" :fields="this.fields" >
          <template #cell(favoriteGame)="row">
            <input  class="checboxFav" type="checkbox" @change="markFavorite(row.item.matchId)">
          </template>
        </b-table>
      </div>
    </div>
  </div>
  
</template>

<script>
import JQuery from 'jquery'
window.$ = JQuery
export default {
  data() {
    return{
      favoriteGames: [],
      fields: ['matchId', 'league', 'season', 'stage', 'matchDate', 'matchHour', 'hostTeam', 'guestTeam', 'stadium', 'refereeId', 'score', 'favoriteGame']
    }  
    },
  methods: {
    async markFavorite(matchId){
      /////////////////////////TODO: post match as favorite to server//////////////////////////////////////////////////////
      console.log(matchId)
    },
    async getGames(){
      try {
        this.$store.state.teams = [];
        this.$store.state.futureGames = [];
        this.$store.state.eventLogs = [];
        
        const response = await this.axios.get(
          `${this.$store.state.server_domain}matches/searchMatches`,
        );
        const games = response.data;

        const res = await this.axios.get(
          `${this.$store.state.server_domain}users/favoriteMatches`,
        );

        const rawFavoriteGames = res.data;   
          rawFavoriteGames.forEach(element => {
          this.$store.actions.pushGame(...[element[0].matchId])
        }); 
        
        this.$store.actions.setGames(games)
      } catch (error) {
        console.log("error in update games")
        console.log(error);
      }
    },
    async teamEventListener(){
      this.$store.actions.teamEventListener();
    },

    async changeFavoriteColumn(){
      let self = this;
      let index = 0;
      let tables = $(".table");
      let tablesArray = [tables[0], tables[2]]

      tablesArray.forEach((table) => {
        for (var i = 0, row; row = table.rows[i]; i++) {
          for (var j = 0, col; col = row.cells[j]; j++) {
            console.log("tablesArray")
            if (i != 0) {
              if (j == 0){
                if (self.$store.state.favoriteGames.includes(parseInt(col.textContent))){
                  let box = row.cells[11].childNodes[0];
                  box.checked = true
                }
              }
            }
            }
          }
        })
    },
  },
  mounted() {
    this.getGames();
    this.teamEventListener();
  },
  beforeUpdate() {
    this.changeFavoriteColumn();
  },
}
</script>

<style >

.container {
    overflow: hidden; /* add this to contain floated children */
}
.left {
    float:left; /* add this */
}
.right {
    float: right; /* add this */
}
</style>