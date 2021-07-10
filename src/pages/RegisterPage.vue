<template>
  <div class="container">
    <h1 class="test2" style="margin-bottom:3%;margin-top:8%">Register</h1>
    <b-form @submit.prevent="onRegister" @reset.prevent="onReset">
      <b-form-group
        id="input-group-username"
        label-cols-sm="3"
        label="Username:"
        label-for="username"
      >
        <b-form-input
          id="username"
          v-model="$v.form.username.$model"
          type="text"
          :state="validateState('username')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.username.required">
          Username is required
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-else-if="!$v.form.username.length">
          Username length should be between 3-8 characters long
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-if="!$v.form.username.alpha">
          Username alpha
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-fname"
        label-cols-sm="3"
        label="First Name:"
        label-for="firstName"
      >
        <b-form-input
          id="firstName"
          type="firstName"
          v-model="$v.form.firstName.$model"
          :state="validateState('firstName')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.firstName.required">
          First Name is required
        </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
        id="input-group-lname"
        label-cols-sm="3"
        label="Last Name:"
        label-for="lastName"
      >
        <b-form-input
          id="lastName"
          type="lastName"
          v-model="$v.form.lastName.$model"
          :state="validateState('lastName')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.lastName.required">
          Last Name is required
        </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
        id="input-group-country"
        label-cols-sm="3"
        label="Country:"
        label-for="country"
      >
        <b-form-select
          id="country"
          v-model="$v.form.country.$model"
          :options="countries"
          :state="validateState('country')"
        ></b-form-select>
        <b-form-invalid-feedback>
          Country is required
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-Password"
        label-cols-sm="3"
        label="Password:"
        label-for="password"
      >
        <b-form-input
          id="password"
          type="password"
          v-model="$v.form.password.$model"
          :state="validateState('password')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.password.required">
          Password is required
        </b-form-invalid-feedback>
        <b-form-text v-else-if="$v.form.password.$error" text-variant="info">
          Your password should be <strong>strong</strong>. <br />
          For that, your password should contain one digit and one special character.
        </b-form-text>
        <b-form-invalid-feedback
          v-if="$v.form.password.required && !$v.form.password.length"
        >
          Have length between 5-10 characters long
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-confirmedPassword"
        label-cols-sm="3"
        label="Confirm Password:"
        label-for="confirmedPassword"
        style=""
      >
        <b-form-input
          id="confirmedPassword"
          type="password"
          v-model="$v.form.confirmedPassword.$model"
          :state="validateState('confirmedPassword')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.confirmedPassword.required">
          Password confirmation is required
        </b-form-invalid-feedback>
        <b-form-invalid-feedback
          v-else-if="!$v.form.confirmedPassword.sameAsPassword"
        >
          The confirmed password is not equal to the original password
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-email"
        label-cols-sm="3"
        label="email:"
        label-for="email"
      >
          <b-form-input
            id="email"
            type="text"
            v-model="$v.form.email.$model"
            :state="validateState('email')"
          ></b-form-input>
          <b-form-invalid-feedback v-if="!$v.form.email.required">
            Email is required
          </b-form-invalid-feedback>
          <b-form-invalid-feedback v-else-if="!$v.form.email.verifyMail">
            Email body is incorrect
          </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-image"
        label-cols-sm="3"
        label="Image Url:"
        label-for="imageUrl"
      >
        <b-form-input
          id="imageUrl"
          type="text"
          v-model="$v.form.image_url.$model"
          :state="validateImage()"
          @blur="validateImage()"
        ></b-form-input>
        <b-form-invalid-feedback id="input-live-feedback">
          Enter A Valid Url With Https Prefix
        </b-form-invalid-feedback>
        </b-form-group>

      <b-button type="reset" variant="info">Reset</b-button>
      <b-button
        type="submit"
        variant="dark"
        style="width:250px;"
        class="ml-5 w-75"
        >Register</b-button
      >
      <div class="mt-2">
        You have an account already?
        <router-link to="login"> Log in here</router-link>
      </div>
    </b-form>
    <b-alert
      class="mt-2"
      v-if="form.submitError"
      variant="warning"
      dismissible
      show
    >
      Register failed: {{ form.submitError }}
    </b-alert>
    <!-- <b-card class="mt-3 md-3" header="Form Data Result">
      <pre class="m-0"><strong>form:</strong> {{ form }}</pre>
      <pre class="m-0"><strong>$v.form:</strong> {{ $v.form }}</pre>
    </b-card> -->
  </div>
</template>

<script>
import countries from "../assets/countries";
import {
  required,
  minLength,
  maxLength,
  alpha,
  sameAs,
  email
} from "vuelidate/lib/validators";

export default {
  name: "Register",
  data() {
    return {
      form: {
        username: "",
        firstName: "",
        lastName: "",
        country: null,
        password: "",
        confirmedPassword: "",
        email: "",
        image_url: "",
        submitError: undefined
      },
      countries: [{ value: null, text: "", disabled: true }],
      errors: [],
      validated: false
    };
  },
  validations: {
    form: {
      username: {
        required,
        length: (u) => minLength(3)(u) && maxLength(8)(u),
        alpha
      },
      firstName: {
        required
      },
      lastName: {
        required
      },
      country: {
        required
      },
      password: {
        required,
        length: (p) => minLength(5)(p) && maxLength(10)(p),
        has_number: (p) => /\d/.test(p),
        has_special: (p) => /[!@#\$%\^\&*\)\(+=._-]/.test(p)
      },
      confirmedPassword: {
        required,
        sameAsPassword: sameAs("password")
      },
      image_url: {},
      email: {
        required,
        verifyMail: email
      }
    }
  },
  mounted() {
    // console.log("mounted");
    this.countries.push(...countries);
    // console.log($v);
  },
  methods: {
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
    validateImage() {
      if(this.form.image_url.length == 0)
      {
        return undefined;
      }
      if (/(https?:\/\/.*\.(?:png|jpg))/i.test(this.form.image_url)) {
        return true;
      } else {
        return false;
      }
    },
    async Register() {
      try {
        const response = await this.axios.post(
          "http://localhost:3000/Register",
          {
            username: this.form.username,
            password: this.form.password,
            firstname: this.form.firstName,
            lastname: this.form.lastName,
            country: this.form.country,
            email: this.form.email,
            image: this.form.image_url
          }
        );
        this.$router.push("/login");
        // console.log(response);
      } catch (err) {
        console.log(err.response);
        this.form.submitError = err.response.data.message;
      }
    },
    onRegister() {
      // console.log("register method called");
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      // console.log("register method go");
      this.Register();
    },
    onReset() {
      this.form = {
        username: "",
        firstName: "",
        lastName: "",
        country: null,
        password: "",
        confirmedPassword: "",
        image_url: "",
        email: ""
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
