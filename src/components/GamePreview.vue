<template>
  <div class="game-preview">
    <div :title="matchId" class="game-title">
      <b>Game Id:</b> {{ matchId }}
    </div>
    <ul class="game-content">
      <li> Host: {{ hostTeam }}</li>
      <li> Guest: {{ guestTeam }}</li>
      <li> Date: {{ matchDate }}</li>
      <li> Time: {{ matchHour }}</li>
      <li> Stadium: {{ stadium }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "GamePreview",
  props: {
      matchId: {
        type: Number,
        required: false
      },
      hostTeam: {
        type: String,
        required: false
      },
      guestTeam: {
        type: String,
        required: false
      },
      matchDate: {
        type: String,
        required: false
      },
      matchHour: {
        type: String,
        required: false
      },
      stadium: {
        type: String,
        required: false
      }
  }, 
  mounted(){
    console.log("game preview mounted")
  } 
};
</script>

<style>
.game-preview {
  display: inline-block;
  width: 250px;
  height: 200px;
  position: relative;
  margin: 10px 10px;
  border-style: solid;
  border-radius: 10px;
  border-width: 5px;
  border-color:cadetblue;
}

.game-preview .game-title {
  text-align: center;
  text-transform: uppercase;
  color:  rgb(111, 197, 157);
}

.game-preview .game-content {
  width: 100%;
  overflow: hidden;
}



</style>
