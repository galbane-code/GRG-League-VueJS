<template>
  <div >
    <div class="container">
      <h1 class="test3">Stage details</h1>
      <div class="first">
        <h1 class="test2">Past Games</h1>
        <b-table class="table" striped hover :items="this.$store.state.pastGames">
        </b-table>
        
      </div>
      <br/>
      <div class="third">
        <h1 class="test2">Past Matches Event Logs</h1>
        <b-table class="table" striped hover :items="this.$store.state.eventLogs"></b-table>
      </div>
      <br/>
      <div class="second">
        <h1 class="test2">Upcoming Games</h1>
        <b-table class="table" striped hover :items="this.$store.state.futureGames"></b-table>
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
      // pastGames: [],
      // futureGames:[],
      // eventLogs: [],
      // teams: []
    }  
    },
  methods: {
    async getGames(){
      try {
        this.$store.state.pastGames = [];
        this.$store.state.teams = [];
        this.$store.state.futureGames = [];
        this.$store.state.eventLogs = [];
        
        const response = await this.axios.get(
          `${this.$store.state.server_domain}matches/searchMatches`,
        );
        const games = response.data;
        this.$store.actions.setGames(games)
      } catch (error) {
        console.log("error in update games")
        console.log(error);
      }
    },
    async teamEventListener(){
      this.$store.actions.teamEventListener();
    }
  },
  mounted() {
    this.getGames();
    this.teamEventListener();
  },
}
</script>

<style scoped>

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