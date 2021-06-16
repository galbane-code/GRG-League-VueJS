<template>
  <div class="container">
    <h1 class="test3">Main Page</h1> 
    <br>
    <div>
      <h1 class="test2">Current Leauge</h1>
      <div class="col-sm" style="padding-left:30%;padding-right:20%">
      <LeagueInfo></LeagueInfo>
    </div>
    <br>
    <div class="row">
      <LoginPage v-if="!$root.store.username"></LoginPage>
      <FavoriteGames v-else></FavoriteGames>
    </div>
    </div>
  </div>
</template>

<script>
import LeagueInfo from "../components/LeagueInfo";
import FavoriteGames from "../components/FavoriteGames";
import LoginPage from "../pages/LoginPage";
export default {
  components: {
    LeagueInfo, 
    LoginPage, 
    FavoriteGames
  }
};
</script>

<style lang="scss" scoped>
.RandomRecipes {
  margin: 10px 0 10px;
}
.blur {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(2px);
}
::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
}

.container {
    overflow: hidden; /* add this to contain floated children */
}


</style>
