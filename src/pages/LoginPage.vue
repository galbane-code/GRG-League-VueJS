<template>
  <div class="container">
    <h1 class="test2" style="margin-bottom:5%;margin-top:4%">Login</h1>
    <b-form @submit.prevent="onLogin">
      <b-form-group
        id="input-group-Username"
        label-cols-sm="3"
        label="Username:"
        label-for="Username"
      >
        <b-form-input
          id="Username"
          v-model="$v.form.username.$model"
          type="text"
          :state="validateState('username')"
        ></b-form-input>
        <b-form-invalid-feedback>
          Username is required
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-Password"
        label-cols-sm="3"
        label="Password:"
        label-for="Password"
      >
        <b-form-input
          id="Password"
          type="password"
          v-model="$v.form.password.$model"
          :state="validateState('password')"
        ></b-form-input>
        <b-form-invalid-feedback>
          Password is required
        </b-form-invalid-feedback>
      </b-form-group>

      <b-button
        type="submit"
        variant="dark"
        style="width:100px;display:block;"
        class="mx-auto w-100"
        @click="Login"
        >Login</b-button
      >
      <div class="mt-2">
        Do not have an account yet?
        <router-link to="register"> Register in here</router-link>
      </div>
    </b-form>
    <b-alert
      class="mt-2"
      v-if="form.submitError"
      variant="warning"
      dismissible
      show
    >
      Login failed: {{ form.submitError }}
    </b-alert>
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
        submitError: undefined
      }
    };
  },
  validations: {
    form: {
      username: {
        required, 
      },
      password: {
        required
      }
    }
  },
  methods: {
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
    async Login() {
      try {
        const response = await this.axios.post(
          `${this.$store.state.server_domain}Login`,
          {
            username: this.form.username,
            password: this.form.password
          }
        );
        this.$root.store.login(this.form.username);
        localStorage.setItem("searchTeams", JSON.stringify([]));
        localStorage.setItem("searchPlayers", JSON.stringify([]));
        localStorage.setItem("searchQuery", "");
        localStorage.setItem("allPlayers", JSON.stringify({}));
        localStorage.setItem("allTeams", JSON.stringify([]));

        const res = await this.axios.get(
          `${this.$store.state.server_domain}allUsers`,
        );
        if (res.data.length > 0){
          this.$store.state.userId = res.data[0]
        }

        this.$router.push("/");
        this.$root.toast("Login", `Welcome ${this.form.username}`, "success");
      } catch (err) {
        this.form.submitError = err.response.data;
      }
    },
    onLogin() {
      this.form.submitError = undefined;
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      this.Login();
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  max-width: 400px;
  // float: right;
}
</style>
