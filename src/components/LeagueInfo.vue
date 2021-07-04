<template>
    <div class="league-preview">
      <b-card
      style="width:100%; height:100%"
      class="mb-2"
    >
      <b-card-title style="margin-left:15%; margin-right:35%">{{leagueName}}</b-card-title>
      <b-card-text  style="margin-left:15%; margin-right:15%">
        Season: {{ season }}
        <br/>
        Stage: {{ stage }}
        <br/>
        Next Game: {{ nextGame }}
      </b-card-text>
      <!-- <b-button :to="{name: 'currentStage'}" variant="primary">Stage Games Table</b-button> -->
    </b-card>
  </div>
</template>

<script>
export default {
//  data() {
//     return {
//       leagueName: "superliga", 
//       season: "season", 
//       stage: "stage"
//     };
//   },
  data() {return {
    leagueName: "",
    season: "",
    stage: "",
    nextGame: "",
    } 
  },
  methods: {
    async getLeagueDetails(){
      try{
        const response = await this.axios.get("http://localhost:3000/league/getLeagueDetails",);
        this.leagueName = response.data.league_name;
        this.season = response.data.current_season_name;
        this.stage = response.data.current_stage_name;
        this.nextGame = response.data.nextGame;

        if(this.stage == null){
          this.stage = "Season is over"
        }
        if(this.nextGame == null){
          this.nextGame = "Season is over"
        }
      }
      catch(err){
        console.log("error in LeagueInfo")
        console.log(error);
      }
    }
  },
  mounted(){
    this.getLeagueDetails();
  } 
}
</script>

<style>
.league-preview {
  display: inline-block;
  width: 80%;
  height: 200px;
  position: relative;
  margin: 10px 10px;
  border-style: solid;
  border-radius: 20px;
  border-width: 3px;
  border-color:#424242;
  padding-bottom:0px;
}

.card-body
{
  border-radius:20px;
  color: #343a40 ;
  background-color:#F7F7F7 !important;
}
.league-preview .league-title {
  text-align: center;
  text-transform: uppercase;
  color:  rgb(111, 155, 197);
}

.league-preview .league-content {
  width: 100%;
  overflow: hidden;
}

</style>