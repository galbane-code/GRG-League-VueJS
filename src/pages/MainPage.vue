<template>
  <div class="container">
    <h1 class="title">Main Page</h1>
    <div class="left">
      <LeagueInfo></LeagueInfo>
    </div>
    <div class="second">
      <LoginPage v-if="!$root.store.username"></LoginPage>
      <FavoriteGames  v-else></FavoriteGames>
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
.left {
    float:left; /* add this */
}
.right {
    float: right; /* add this */
}
</style>
