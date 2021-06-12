<template>
  <div>
    <div>
    </div>
    <div class="container" style="color:green">
    <div :title="teamName" class="game-title">
      <h1 class="title">{{ teamName }}</h1>
      <b>Team ID:</b> {{ teamId }}
    </div>
    </div>
    <br/>
    <br/>
    <div class="container">
      <div class="first">
        <h1 class="title">Past Games</h1>
        <b-table class="table" striped hover :items="this.$store.state.pastGames">
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
        <b-table class="table" striped hover :items="this.$store.state.futureGames"></b-table>
      </div>
    </div>
    <br/>
    <br/>
    <div class="container">
      <div :title="teamName" class="game-title">
        <h1 class="title">Players</h1>
        <b-table class="table" striped hover :items="players"></b-table>
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
    methods: {

    }
}
</script>

<style>

</style>