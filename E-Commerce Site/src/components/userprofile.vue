<template>
  <v-card
    class="mx-auto my-10"
    max-width="370"
  >

    <v-img
      height="200"
      :src="require('../assets/img/home/slider3.jpg')"
    ></v-img>
    <v-card-title>Title</v-card-title>
    <v-card-text>
    </v-card-text>
 <v-form ref="form" v-model="valid" lazy-validation>
                          <v-text-field
                            v-model="username"
                            label="Name"
                            :rules="nameRules"
                            name="Name"
                            prepend-icon="person"
                            type="text"
                            color="blue"
                          />
                          <v-text-field
                            v-model="email"
                            label="Email"
                            name="Email"
                            :rules="emailRules"
                            prepend-icon="email"
                            type="text"
                            color="blue"
                          />

                          <v-text-field
                            v-model="password"
                            label="Password"
                            :rules="passwordRules"
                            name="password"
                            prepend-icon="lock"
                            type="password"
                            color="blue"
                          />
                        </v-form>
                        <div class="text-right mt-1 mr-2" @click="registerUser()">
                        <v-btn color="blue" dark @click="validate()"
                          >Update</v-btn
                        >
                      </div>
                      <br>

  </v-card>
   
</template>
<script>
  export default {
    // data: () => ({
    //   loading: false,
    //   selection: 1,
    // }),
     data: () => ({
    name: "Home1",
    data() {
      return {
        Name: "",
        Email: "",
        password: "",
        validated: "",
        users: [],
      };
    },
    step: 1,
    valid: true,
    Name: "",

    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    Email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    password: "",
    passwordRules: [
      (v) => !!v || "password is required",
      (v) =>
        /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
          v
        ) || "Password must be valid",
    ],
  }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
      registerUser() {
      let user = {
        username: this.username,
        email: this.email,
        password: this.password,
      };

      // store user in local storage
      if (localStorage.users) {
        alert("data")
        let lsUsers = localStorage.users;
        this.users = JSON.parse(lsUsers);
      }
      if (this.validated == true) {
        this.users.push(user);
        localStorage.setItem("users", JSON.stringify(this.users));
        this.username = "";
        this.email = "";
        this.password = "";
        this.step++;
      }
    },
    validate() {
      var validated = this.$refs.form.validate();
      if (validated == true) {
        alert("User updated successfully");
        this.validated = true;
      }
    },
    },
  }
</script>