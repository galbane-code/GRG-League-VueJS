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
      <li> Team Name: {{ team_name }}</li>
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
        type: Number,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      common_name: {
        type: String,
        required: true
      },
      image: {
        type: String,
        required: true
      },
      position: {
        type: Number,
        required: true
      },
      team_name: {
        type: String,
        required: true
      },
      birth_date: {
        type: String,
        required: true
      },
      birth_country: {
        type: String,
        required: true
      },
      height: {
        type: String,
        required: true
      },
      weight: {
        type: String,
        required: true
      },
      nationality: {
        type: String,
        required: true
      },
  },
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