<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark" style="background-color:black">
      <b-navbar-brand :to="{ name: 'main' }">Superliga</b-navbar-brand>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
        <b-nav-item :to="{ name: 'search' }">Search</b-nav-item>
        <b-nav-item :to="{ name: 'currentStage' }">Current Stage</b-nav-item>
        <b-nav-item :to="{ name: 'about' }">About</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto" v-if="!$root.store.username">
          <b-nav-text>Hello Guest </b-nav-text>
          <b-nav-item :to="{ name: 'login' }">Login</b-nav-item>
          <b-nav-item :to="{ name: 'register' }">Register</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto" v-else>
          <b-nav-item :to="{ name: 'gamePage' }" v-if="this.$store.state.userId != -1">Add New Game</b-nav-item>
        <b-nav-item-dropdown right>
          <template #button-content>
            {{$root.store.username}}
          </template>
          <b-dropdown-item :to="{ name: 'favoriteGames' }">Favorite Games</b-dropdown-item>
          <b-dropdown-item :to="{ name: 'ProfilePage' }">Profile</b-dropdown-item>
          <b-dropdown-item href="#" @click="Logout">Log Out</b-dropdown-item>
        </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    Logout() {
      this.$root.store.logout();
      this.$store.state.userId = -1;
      this.$root.toast("Logout", "User logged out successfully", "success");

      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
    }
  }
};
</script>

<style lang="scss">

body
{
  background-image: url('./assets/background.jpg');
    background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

table thead tr {
    background-color: #87a8d1 ;
    color: #ffffff;
    text-align: left;
}

table th,
table td {
    padding: 12px 15px;
}
table tbody tr {
    border-bottom: 1px solid #dddddd;
}

table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

table tbody tr:last-of-type {
    border-bottom: 2px solid #87a8d1 ;
}

#nav {
  padding: 30px;
}



#nav a {
  font-weight: bold;
  color: #000000;
}

.card-body
{
  border-radius:20px;
  color: #343a40 ;
  background-color:#87a8d1;
}
.card.mb-2 {
    border-radius: 20px;
}

h4,h6{
  color: #343a40 ;
}

#nav a.router-link-exact-active {
  color: #ffffff;
}

.text-muted {
    color: #0000 !important;
    
}

 h1.test3 {
  font-family: "Arial Black", sans-serif;
  font-size: 4.7em;
  text-align: center;
  letter-spacing: -1px;
  background-color: #87a8d1;
  color: #ECECEC;
  padding:5px;
  border-radius: 12px;
  margin-top: 8px;
 }

h1.test2 {
  font-family: "Trebuchet MS", sans-serif;
  font-size: 2em;
  letter-spacing: -2px;
  border-bottom: 2px solid black;
  text-transform: uppercase;
  margin-top: 15px;
  text-align: center;
 }


@import "@/scss/form-style.scss";
</style>

