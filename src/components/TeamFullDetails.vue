<template>
  <div>
    <div>
    </div>

    <div class="container">
            <div>
      <h1 class="test3">{{ teamName }} <h3>Team ID:{{ teamId }}</h3> </h1>

    </div>
      <div class ="row">
          <div class= "col-sm">
                <h1 class="test2">Past Games</h1>
               <b-table class="table" striped hover :items="this.$store.state.pastGames" ></b-table>
          </div>
          <div class= "col-sm">
              <h1 class="test2">Event Logs</h1>
              <b-table class="table" striped hover :items="this.$store.state.eventLogs" ></b-table>
          </div>
      </div>
    </div>
    <div class="container">
      <br/>
      <div class="second">
        <h1 class="test2">Upcoming Games</h1>
        <b-table class="table" striped hover :items="this.$store.state.futureGames"></b-table>
      </div>
    </div>
    <br/>
    <br/>
    <div class="container">
        <h1 class="test3">Players</h1>
        <!-- <b-table class="table" striped hover :items="players"></b-table> -->
        <div class ="row">
          <div class= "col-sm">
              <b-card v-for="(player,index) in players.slice(0,players.length/2)" :key="index"   style="width:100%" class="mb-2">
                <b-row no-gutters v-on:click="playerRoute(player.name,player.id)">
                  <b-col md="6">
                    <b-card-img :src="`${player.image}`"  alt="Image" class="rounded-circle"></b-card-img>
                  </b-col>
                  <b-col md="6">
                    <b-card-body :title="`${player.name}`">
                      <b-card-sub-title style="color:black">Team: <h4>{{player.team_name}}</h4></b-card-sub-title>
                      <b-card-sub-title>Position: <h4>{{player.position}}</h4></b-card-sub-title>
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
          </div>
          <div class= "col-sm">
              <b-card v-for="(player,index) in players.slice(players.length/2,players.length)" :key="index"  style="width:100%" class="mb-2">
                <b-row no-gutters v-on:click="playerRoute(player.name,player.player_id)">
                  <b-col md="6">
                    <b-card-img :src="`${player.image}`"  alt="Image" overlay class="rounded-circle"></b-card-img>
                  </b-col>
                  <b-col md="6">
                    <b-card-body :title="`${player.name}`">
                      <b-card-sub-title>Team: <h4>{{player.team_name}}</h4></b-card-sub-title>
                      <b-card-sub-title>Position: <h4>{{player.position}}</h4></b-card-sub-title>
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
            
          </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
    props:{
        teamId: {
          default: null,
            type: Number,
        },
        teamName: {
            type: String,
            required: true,
        },
        players: {
            type: Array,
            required: true
        },
    },
    methods: 
    {
      async playerRoute(playerNameParam,playerIdParam){
        this.$store.actions.pushPlayer(playerNameParam, playerIdParam);
        this.$store.state.currentPlayer = playerNameParam;
        this.$router.push({name: 'playerPage', params: {playerName: playerNameParam}});
    },
    }
}
</script>

<style>

</style>