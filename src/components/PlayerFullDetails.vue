<template>
  <div class="container">
    <div class="player-preview">
    <div :title="name" class="player-title">
        <h1 class="test3" style="margin-top:2px">{{ name }}
          <h3>Player Id: {{ player_id }}</h3>
        </h1>
    </div>
    <br/>
    <div class="row">
      <div class="col-sm">
      <ul>
      <li> Common Name: {{ common_name }}</li>
      <!-- <li> Image: <img src="${image}"/></li> -->
      <li> Position: {{ position }}</li>
      <li v-on:click="moveToTeamPage($event)" value="${team_name}"> Team Name: {{ team_name }}</li>
      <li> Birth Date: {{ birth_date }}</li>
      <li> Birth Country: {{ birth_country }}</li>
      <li> Height: {{ height }}</li>
      <li> Weight: {{ weight }}</li>
      <li> Nationality: {{ nationality }}</li>
    </ul>
    </div>
    <div class="col-sm" style="padding-left:40%">
      <b-card-img :src= image alt="Image" overlay class="rounded-circle" style="width:80%;margin-bottom:4%; margin-top:0;"></b-card-img>
    </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "PlayerPreview",
  props: {
      player_id: {
        value: [Number, String]
      },
      name: {
        value: [Number, String]
      },
      common_name: {
        value: [Number, String]
      },
      image: {
        value: [Number, String]
      },
      position: {
        value: [Number, String]
      },
      team_name: {
        value: [Number, String]
      },
      birth_date: {
      },
      birth_country: {
        value: [Number, String]
      },
      height: {
        value: [Number, String]
      },
      weight: {
        value: [Number, String]
      },
      nationality: {
        value: [Number, String]
      },
  },
  methods: {
    async moveToTeamPage(event){
      let team = event.target.innerText.split(": ")[1]
      this.$store.state.currentTeam = team;
      this.$router.push({name: 'teamPage', params: {teamName: team}})
    }
  }
}
</script>

<style>
.player-preview {
  display: inline-block;
  width: 100%;
  height: 100%;
  position: relative;
  padding-top: 0;
  padding-left: 2px;
  padding-right: 2px;
  margin: 10px 10px;
  border-style: solid;
  border-radius: 10px;
  border-width: 5px;
  border-color:#87a8d1;
}

.player-preview .player-title {
  text-align: center;
  text-transform: uppercase;
  color:  #87a8d1
}

.col-sm li
{
  padding-bottom: 4%;
}

.player-preview{
  width: 100%;
  overflow: hidden;
  font-weight: bold
}
</style>