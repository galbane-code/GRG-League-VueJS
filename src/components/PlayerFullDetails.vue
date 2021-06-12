<template>
<div class="player-preview">
    <div :title="name" class="player-title">
        <b>Player Name:</b> {{ name }}
        <br/>
        <b>Player Id:</b> {{ player_id }}
    </div>
    <br/>
    <ul class="player-content">
      <li> Common Name: {{ common_name }}</li>
      <li> Image: <img src="${image}"/></li>
      <li> Position: {{ position }}</li>
      <li v-on:click="moveToTeamPage($event)" value="${team_name}"> Team Name: {{ team_name }}</li>
      <li> Birth Date: {{ birth_date }}</li>
      <li> Birth Country: {{ birth_country }}</li>
      <li> Height: {{ height }}</li>
      <li> Weight: {{ weight }}</li>
      <li> Nationality: {{ nationality }}</li>
    </ul>
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
      console.log(team)
      this.$router.push({name: 'teamPage', params: {teamName: team}})
    }
  }
}
</script>

<style>
.player-preview {
  display: inline-block;
  width: 400px;
  height: 400px;
  position: relative;
  margin: 10px 10px;
  border-style: solid;
  border-radius: 10px;
  border-width: 5px;
  border-color:cadetblue;
}

.player-preview .player-title {
  text-align: center;
  text-transform: uppercase;
  color:  rgb(111, 197, 157);
}

.player-preview .player-content {
  width: 100%;
  overflow: hidden;
  font-weight: bold
}
</style>