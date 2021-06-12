<template>
  <div>
      <PlayerFullDetails :player_id="player.player_id" :name="player.name"
       :common_name="player.common_name" :image="player.image" 
       :position="player.position" :team_name="player.team_name"
      :birth_date="player.birth_date" :birth_country="player.birth_country" :height="player.height"
      :weight="player.weight" :nationality="player.nationality">
      </PlayerFullDetails>

  </div>
</template>

<script>
import PlayerFullDetails from '../components/PlayerFullDetails'
export default {
    components: {
        PlayerFullDetails
    },
    data() {
        return {
            player: {player_id: "", name: "", common_name: "", image: "",
                    position: "", team_name: "", birth_date: "", birth_country: "",
                    height: "", weight: "", nationality: ""
            }
        }
    },

    methods: {
        async getPlayer(){
            let playerId = this.$store.state.players[this.$store.state.currentPlayer]
            const response = await this.axios.get(
            `${this.$store.state.server_domain}players/playerFullDetails/${playerId}`,
            );
            this.player = response.data[0];

            for (const [key, value] of Object.entries(this.player)) {
                if (this.player[key] == null){
                    this.player[key] = "missing data"
                }
            }
        }
    },
    mounted(){
        console.log("player page mounted");
        this.getPlayer()
    },
}
</script>

<style>

</style>