<template>
  <div>
      <TeamFullDetails :teamId="teamId" :teamName="teamName" :players="players">
      </TeamFullDetails>
  </div>
</template>

<script>
import TeamFullDetails from '../components/TeamFullDetails'
export default {
    components: {
        TeamFullDetails
    },
    data() {
        return {
            teamId: null,
            teamName: "",
            players:[]
        };
    },
    methods:{
        async getTeamDetails(){
        try {
            this.$store.state.pastGames = [];
            this.$store.state.teams = [];
            this.$store.state.futureGames = [];
            this.$store.state.eventLogs = [];

            const response = await this.axios.get(
            `${this.$store.state.server_domain}teams/searchTeamByName/${this.$route.params.teamName}`,
            );
            let team = response.data[0]
            this.teamId = team.team_id
            this.teamName = this.$store.state.currentTeam

            const res = await this.axios.get(
            `${this.$store.state.server_domain}teams/teamFullDetails/${this.teamId}`,
            );
            
            let games = res.data.teamMatches
            this.players = res.data.players

            this.$store.actions.setGames(games)

            let self = this;
            this.players.forEach(player => {
                self.$store.actions.pushPlayer(player.name, player.player_id);
            });



        } catch (error) {
            this.$root.toast("Team Page", "Team does not belong to Superliga", "danger");
            console.log("error in getTeamDetails")
            console.log(error);
        }
        },
        async teamEventListener(){
            this.$store.actions.teamEventListener();
        },
        async playerEventListener(){
            this.$store.actions.playerEventListener();
        }
    },
    mounted() {
        this.getTeamDetails();
        this.teamEventListener();
       // this.playerEventListenerImage();
        this.playerEventListener();

    },
    beforeRouteUpdate(){
        this.getTeamDetails();
        this.teamEventListener();
       // this.playerEventListenerImage();
        this.playerEventListener();

    }, 
}
</script>

<style>

</style>