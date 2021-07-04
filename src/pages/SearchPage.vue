<template>
  <div>
  <div>
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
<div class="container">
      <h1 class="test3">Search Page</h1>
<div class="row">
  <!-- BEGIN SEARCH RESULT -->
  <div class="col-md-12">
    <div class="grid search">
      <div class="grid-body">
        <div class="row">
          <!-- BEGIN FILTERS -->
          <div class="col-md-3">
            <h2 class="grid-title"><i class="fa fa-filter"></i> Filters</h2>
            <hr>
            <div class="padding"></div>
            
            <!-- BEGIN FILTER BY PRICE -->
            <h4>By Player Position:</h4>
            Between <div id="price1">1</div> to <div id="price2">8</div>
            <div id="playerFilter" class="slider-primary">
              <div class="slider slider-horizontal" style="width: 152px;"><div class="slider-track"><div class="slider-selection" style="left: 30%; width: 50%;"></div><div class="slider-handle round" style="left: 30%;"></div><div class="slider-handle round" style="left: 80%;"></div></div><div class="tooltip top hide" style="top: -30px; left: 50.1px;"><div class="tooltip-arrow"></div><div class="tooltip-inner">300 : 800</div></div><input id="playerInput" disabled=true type="text" class="slider" value="" data-slider-min="0" data-slider-max="1000" data-slider-step="1" data-slider-value="[300,800]" data-slider-tooltip="hide"></div>
            </div>
            <!-- END FILTER BY PRICE -->

            <div class="padding"></div>
            <br/>
            <!-- BEGIN FILTER BY TEAM NAME -->
            <h4>By Team Name:</h4>
            <div id="teamFilter" class="slider-primary">
              Team name from the search results
              <div class="slider slider-horizontal" style="width: 152px;"><div class="slider-track"><div class="slider-selection" style="left: 30%; width: 50%;"></div><div class="slider-handle round" style="left: 30%;"></div><div class="slider-handle round" style="left: 80%;"></div></div><div class="tooltip top hide" style="top: -30px; left: 50.1px;"><div class="tooltip-arrow"></div><div class="tooltip-inner">300 : 800</div></div><input id="teamInput" disabled=true type="text" class="slider" value="" data-slider-min="0" data-slider-max="1000" data-slider-step="1" data-slider-value="[300,800]" data-slider-tooltip="hide"></div>
            </div>
            <!-- END FILTER BY TEAM NAME -->
          </div>
          <!-- END FILTERS -->

          <!-- BEGIN RESULT -->
          <div class="col-md-9">
            <h1 class="test2"><i class="fa fa-file-o" style="margin-right:8px"></i> Result</h1>
            <hr>
            <!-- BEGIN SEARCH INPUT -->
            <div class="input-group">
            <b-input-group style="margin-right:4px" id="search-input">
              <b-form-input size="md" placeholder="Enter Your Search Query" style="margin-right:4px"  v-model="searchQuery"></b-form-input>
              <b-input-group-append>
                <b-button style="margin-right:6px" variant="dark" @click="searchTeams">Search Teams</b-button>
                <b-button style="margin-right:2px"  variant="dark" @click="searchPlayers">Search Players</b-button>
              </b-input-group-append>
            </b-input-group>
            <div style="margin-left:3%">
                <b>Your search Query: {{ searchQuery }}</b>
            </div>
          </div>
            <!-- END SEARCH INPUT -->
            
            <div class="padding"></div>
            
            <div class="row">
              <div class="col-md-6 text-right">
                <div class="btn-group">
                </div>
              </div>
            </div>
            
            <!-- BEGIN TABLE RESULT -->
            <div class="container">
              <div class="playersDiv" v-if="this.players.length > 0">
                <h1 class="title">Players</h1>
                <b-table id="playerTable" class="table" striped hover :items="this.players" :fields="this.playerFields">
                  <template #cell(playerImage)="row">
                    <!-- v-bind:src="row.item.image" ///////add it below --> 
                    <img :src="row.item.image"  overlay class="rounded-circle">
                  </template>
                </b-table>
              </div>
              <div v-else>{{error}}</div>
              <br/>

              <div class="teamsDiv" v-if="this.teams.length > 0">
                <h1 class="title">Teams</h1>
                <b-table id="teamTable" class="table" striped hover :items="this.teams" :fields="this.teamFields">
                  <template  #cell(logo)="row">
                    <img :src="row.item.teamLogo" overlay class="rounded-circle">
                  </template>
                </b-table>
              </div>
              <div v-else>{{error}}</div>
              <br/>
            </div>
            <!-- END TABLE RESULT -->
          </div>
          <!-- END RESULT -->
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  <!-- END SEARCH RESULT -->
</div>
  </div>
</template>

<script>
import JQuery from 'jquery'
window.$ = JQuery
export default {
 data() {
    return {
      teamFields: [{key: 'teamName', sortable: true},
                  {key: 'logo', sortable:false}
                  ],
      playerFields: [
              {key: 'player_id', sortable: false},
              {key: 'name', sortable: true},
              {key: 'playerImage', sortable: false},
              {key: 'position', sortable: false},
              {key: 'team_name', sortable: true}              
              ],
      srcImg: {
        id: 'img',
        src: "", 
      },
      searchQuery:"",
      teams: [""],
      players: [""],
      error: "No matches to your search query"
    };
  },
  methods: {
    async loadTeamImages(){
      let table = $("#teamTable");
      table = table[0]

      for (var i = 0, row; row = table.rows[i]; i++) {
        for (var j = 0, col; col = row.cells[j]; j++) {
          if (i != 0) {
            row.cells[1].childNodes[0].click()
          }
          }
        }
    },
    async loadPlayerImages(){
      let table = $("#playerTable");
      table = table[0]

      for (var i = 0, row; row = table.rows[i]; i++) {
        for (var j = 0, col; col = row.cells[j]; j++) {
          if (i != 0) {
            row.cells[2].childNodes[0].click()
          }
          }
        }
    },
    async showTeamImage(event, teamLogo){
      event.target.src = teamLogo
    },
    async showPlayerImage(event, playerImg){
      event.target.src = playerImg
      // this.srcImg.src = playerImg
    },
    async searchTeams(){
      try{
        this.teams = [""];
        this.players= [""];
        $(".teamsDiv").show();
        $(".playersDiv").hide();
        $("#playerInput").attr('disabled', true);
        $("#teamInput").attr('disabled', false);
        localStorage.setItem("searchQuery", this.searchQuery)
        localStorage.setItem("searchPlayers", JSON.stringify([]))
        localStorage.setItem("searchTeams", JSON.stringify([]))

        const response = await this.axios.get(
          `${this.$store.state.server_domain}teams/searchTeamByName/${this.searchQuery}`,
        );

        let teams = response.data
        let self = this;
        teams.forEach(elem => {
          let team = {};
          team.teamName = elem.team_name;
          team.teamLogo = elem.logo;
          let allTeams = JSON.parse(localStorage.getItem("allTeams"));
          let index = allTeams.indexOf(elem.team_name);

          if (index == -1){
            allTeams.push(elem.team_name)
            localStorage.setItem("allTeams", JSON.stringify(allTeams))
          }
          self.teams.push(team);
        });

        let newTeams = this.teams.filter(team => 
          ((typeof team === 'object') && (team !== null))
        )
        this.teams = newTeams;
        localStorage.setItem("searchTeams", JSON.stringify(this.teams))

        this.addTeamEventListener();

      }catch(err){
        this.teams = []
        console.log(err)
      }
    },
    async searchPlayers(){
      try{
        this.teams = [""];
        this.players = [""]
        $(".playersDiv").show();
        $(".teamsDiv").hide();
        $("#playerInput").attr('disabled', false);
        $("#teamInput").attr('disabled', true);
        localStorage.setItem("searchQuery", this.searchQuery);
        localStorage.setItem("searchTeams", JSON.stringify([]))

        const response = await this.axios.get(
          `${this.$store.state.server_domain}players/searchPlayerByName/${this.searchQuery}`,
        );

        let players = response.data
        let self = this;
        players.forEach(elem => {
          if (elem != null && ('player_id' in elem) && ('team_name' in elem)
          && ('name' in elem) && ('image' in elem)
          && ('position' in elem)){
            let allPlayers = JSON.parse(localStorage.getItem("allPlayers"));
            let allTeams = JSON.parse(localStorage.getItem("allTeams"));
            
            allPlayers[elem.name] = elem.player_id
            allTeams.push(elem.team_name)
            localStorage.setItem("allPlayers", JSON.stringify(allPlayers))
            localStorage.setItem("allTeams", JSON.stringify(allTeams))
            //TODO: add (elem.name, elem.player_id) to the localStorage

            self.players.push(elem)
          }
                      
        });
        let newPlayers = this.players.filter(player => 
          ((typeof player === 'object') && (player != null))
        )
        this.players = newPlayers;
        localStorage.setItem("searchPlayers", JSON.stringify(this.players))

        this.playerEventListener();
        this.addTeamEventListener();


      }catch(err){
        this.players = []
        console.log(err)
      }
    },
    async addTeamEventListener(){
      this.$store.actions.teamEventListener(true)
    },
    async playerEventListener(){
      this.$store.actions.playerEventListener(true);
    },
    async checkLastSearch(){
      if ((JSON.parse(localStorage.getItem("searchPlayers"))).length != 0){
        this.players = JSON.parse(localStorage.getItem("searchPlayers"));
        $(".playersDiv").show();
        $(".teamsDiv").hide();
        $("#playerInput").attr('disabled', false);
        $("#teamInput").attr('disabled', true);
        this.searchQuery = localStorage.getItem("searchQuery");
        this.playerEventListener();
        this.addTeamEventListener();
      }

      if ((JSON.parse(localStorage.getItem("searchTeams"))).length != 0){
        this.teams = JSON.parse(localStorage.getItem("searchTeams"));
        $(".teamsDiv").show();
        $(".playersDiv").hide();
        $("#playerInput").attr('disabled', true);
        $("#teamInput").attr('disabled', false);
        this.searchQuery = localStorage.getItem("searchQuery");
        this.addTeamEventListener();
      }
    },
  },
  mounted(){
    $(".playersDiv").hide();
    $(".teamsDiv").hide();
    $("#playerInput").attr('disabled', true);
    $("#teamInput").attr('disabled', true);
    this.checkLastSearch()
  },
  beforeUpdate() {

    $(document).ready(function(){
      $("#playerInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#playerTable tbody tr").filter(function() {
          $(this).toggle($(this.cells[3]).text().indexOf(value) > -1)
        });
      });
    });

    $(document).ready(function(){
      $("#teamInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#teamTable tbody tr").filter(function() {
          $(this).toggle($(this.cells[0]).text().toLowerCase().indexOf(value.toLowerCase()) > -1)
        });
      });
    });
  },
  updated(){
    // this.loadPlayerImages();
    // this.loadTeamImages();
     
  }
}
</script>

<style scoped>

#search-input {
  margin-left: 20px; 
  width: 1000px; 
}

body{margin-top:20px;
background:#F7F7F7;
}

.btn {
    margin-bottom: 5px;
}

.grid {
    position: relative;
    width: 100%;
    background: #F7F7F7;
    color: #666666;
    border-radius: 2px;
    margin-bottom: 25px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
}

.grid .grid-body {
    padding: 15px 20px 15px 20px;
    font-size: 0.9em;
    line-height: 1.9em;
}

.search table tr td.rate {
    color: #f39c12;
    line-height: 50px;
}

.search table tr:hover {
    cursor: pointer;
}

.search table tr td.image {
	width: 50px;
}

.search table tr td img {
	width: 50px;
	height: 50px;
}

.search table tr td.rate {
	color: #f39c12;
	line-height: 50px;
}

.search table tr td.price {
	font-size: 1.5em;
	line-height: 50px;
}

.search #price1,
.search #price2 {
	display: inline;
	font-weight: 600;
}
</style>