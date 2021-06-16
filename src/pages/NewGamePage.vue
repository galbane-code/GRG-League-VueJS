<template>
  <div class="container">
    <h1 class="test2">New Game</h1>
    <b-form @submit.prevent="onSubmit" >
      <b-form-group
        id="input-group-leagueId"
        label-cols-sm="3"
        label="League ID:"
        label-for="leagueId"
      >
        <b-form-input
          id="leagueId"
          v-model="$v.form.leagueId.$model"
          type="text"
          :state="validateState('leagueId')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.leagueId.required">
          league id is required
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-if="!$v.form.leagueId.integer">
          digits only
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-season"
        label-cols-sm="3"
        label="Season:"
        label-for="season"
      >
        <b-form-input
          id="season"
          type="text"
          v-model="$v.form.season.$model"
          :state="validateState('season')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.season.required">
          season is required
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-if="!$v.form.season.format">
          season pattern must be xxxx/xxxx
        </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
        id="input-group-stage"
        label-cols-sm="3"
        label="Stage:"
        label-for="stage"
      >
        <b-form-input
          id="stage"
          type="text"
          v-model="$v.form.stage.$model"
          :state="validateState('stage')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.stage.required">
          Stage is required
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-if="!$v.form.stage.integer">
          digits only
        </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
        id="input-group-matchDate"
        label-cols-sm="3"
        label="Match Date:"
        label-for="matchDate"
      >
        <b-form-input
          id="matchDate"
          type="text"
          v-model="$v.form.matchDate.$model"
          :state="validateState('matchDate')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.matchDate.required">
          match date is required
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-if="!$v.form.matchDate.format">
          match date pattern must be yyyy-mm-dd, digits only
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-matchHour"
        label-cols-sm="3"
        label="Match Hour:"
        label-for="matchHour"
      >
        <b-form-input
          id="matchHour"
          type="text"
          v-model="$v.form.matchHour.$model"
          :state="validateState('matchHour')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.matchHour.required">
          matchHour is required
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-if="!$v.form.matchHour.format">
          match hour pattern must be xx:xx, digits only
        </b-form-invalid-feedback>
        </b-form-group>

      <b-form-group
        id="input-group-hostTeam"
        label-cols-sm="3"
        label="Host Team:"
        label-for="hostTeam"
      >
        <b-form-input
          id="hostTeam"
          type="text"
          v-model="$v.form.hostTeam.$model"
          :state="validateState('hostTeam')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.hostTeam.required">
          host team is required
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-guestTeam"
        label-cols-sm="3"
        label="guestTeam:"
        label-for="guestTeam"
      >
        <b-form-input
          id="guestTeam"
          type="text"
          v-model="$v.form.guestTeam.$model"
          :state="validateState('guestTeam')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.guestTeam.required">
          guest team is required
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-stadium"
        label-cols-sm="3"
        label="Stadium:"
        label-for="stadium"
      >
        <b-form-input
          id="stadium"
          type="text"
          v-model="$v.form.stadium.$model"
          :state="validateState('stadium')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.stadium.required">
          stadium is required
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-refereeId"
        label-cols-sm="3"
        label="Referee Id:"
        label-for="refereeId"
      >
        <b-form-input
          id="refereeId"
          type="text"
          v-model="$v.form.refereeId.$model"
          :state="validateState('refereeId')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.refereeId.required">
          referee id is required
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-else-if="!$v.form.refereeId.integer">
          digits only
        </b-form-invalid-feedback>
      </b-form-group>


      <b-button type="reset" variant="info">Reset</b-button>
      <b-button
        type="submit"
        variant="dark"
        style="width:250px;"
        class="ml-5 w-75"
        >Submit Game</b-button
      >
      <div class="mt-2">
       <br/>
       <br/>
       <br/>
       <br/>
      </div>
    </b-form>
    <b-alert
      class="mt-2"
      v-if="form.submitError"
      variant="warning"
      dismissible
      show
    >
      Submition failed: {{ form.submitError }}
    </b-alert>
    <!-- <b-card class="mt-3 md-3" header="Form Data Result">
      <pre class="m-0"><strong>form:</strong> {{ form }}</pre>
      <pre class="m-0"><strong>$v.form:</strong> {{ $v.form }}</pre>
    </b-card> -->
  </div>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  alpha,
  alphaNum,
  integer,
  sameAs,
  email
} from "vuelidate/lib/validators";

export default {
  name: "NewGamePage",
  data() {
    return {
      form: {
        leagueId: "",
        season: "",
        stage: "",
        matchDate: null,
        matchHour: "",
        hostTeam: "",
        guestTeam: "",
        refereeId: "",
        stadium: "",
        submitError: undefined
      },
      countries: [{ value: null, text: "", disabled: true }],
      errors: [],
      validated: false
    };
  },
  validations: {
    form: {
      leagueId: {
        required,
        integer
      },
      season: {
        required,
        format: (s) => /\d\d\d\d\/\d\d\d\d/.test(s)
      },
      stage: {
        required,
        integer
      },
      matchDate: {
        required,
        format: (d) => /^(\d{4})\-(\d{1,2})\-(\d{1,2})$/.test(d)
      },
      matchHour: {
        required,
        format: (h) => /^((\d{2}):(\d{2}))$/.test(h)
      },
      hostTeam: {
        required,
      },
      guestTeam: {
        required,
      },
      stadium: {
        required,
      },
      refereeId: {
        required,
        integer
      },
    }
  },
  mounted() {
    // console.log("mounted");
    // console.log($v);
  },
  methods: {
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
    async addMatch() {
      try {
        const response = await this.axios.post(
          `${this.$store.state.server_domain}far/addMatch`,
          {
            league: this.form.leagueId,
            season: this.form.season,
            stage: this.form.stage,
            matchDate: this.form.matchDate,
            matchHour: this.form.matchHour,
            hostTeam: this.form.hostTeam,
            guestTeam: this.form.guestTeam,
            stadium: this.form.stadium,
            refereeId: this.form.refereeId,
          }
        );
        this.$root.toast("New Game", "Game added successfuly", "success");
        this.onReset()
        console.log(response);
      } catch (err) {
        console.log(err.response);
        this.form.submitError = err.response.data.message;
      }
    },
    onSubmit() {
      // console.log("register method called");
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      // console.log("register method go");
      this.addMatch();
    },
    onReset() {
      this.form = {
        leagueId: "",
        season: "",
        stage: "",
        matchDate: "",
        matchHour: "",
        hostTeam: "",
        guestTeam: "",
        stadium: "",
        refereeId: "",
      };
      this.$nextTick(() => {
        this.$v.$reset();
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  max-width: 500px;
}
</style>
