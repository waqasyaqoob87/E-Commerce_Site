<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="
                            text-center
                            display-2
                            blue--text
                            justify-content-center
                          "
                        >
                          <v-avatar class="blue" size="103">
                            <v-icon dark size="120">
                              mdi-account-circle
                            </v-icon>
                          </v-avatar>
                          <br /><br />
                          SIGN IN
                        </h1>

                        <v-form ref="form" v-model="valid" lazy-validation>
                          <v-text-field
                            label="Email"
                            v-model="email"
                            :rules="emailRules"
                            name="Email"
                            prepend-icon="email"
                            type="text"
                            color="blue"
                          />

                          <v-text-field
                            prepend-icon="lock"
                            label="password"
                            :rules="passwordRules"
                            v-model="password"
                            type="password"
                            color="blue"
                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-3">
                        <v-btn rounded color="blue" dark @click="login()"
                          >SIGN IN</v-btn
                        >
                      </div>
                    </v-col>
                    <v-col cols="12" md="4" class="blue">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Hello, Friend!</h1>
                        <h5 class="text-center">
                          Enter your personal details and start journay with us
                        </h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step++"
                          >SIGN UP</v-btn
                        >
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="blue">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Welcome Back!</h1>
                        <h5 class="text-center">
                          To Keep connected with us please login with your
                          personnel info
                        </h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step--"
                          >Sign in</v-btn
                        >
                      </div>
                    </v-col>

                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2 blue--text text--grey">
                          <v-avatar class="blue" size="103">
                            <v-icon dark size="120">
                              mdi-account-circle
                            </v-icon>
                          </v-avatar>
                          <br /><br />
                          CREATE ACCOUNT
                        </h1>

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
                      </v-card-text>
                      <div class="text-center mt-n5" @click="registerUser()">
                        <v-btn rounded color="blue" dark @click="validate()"
                          >SIGN UP</v-btn
                        >
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    name: "Home1",
    data() {
      return {
        username: "",
        email: "",
        password: "",
        validated: "",
        arrayUser: [],
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
    registerUser() {
      
      let user = {
        username: this.username,
        email: this.email,
        password: this.password
      };
      alert(this.username)
      localStorage.setItem('users',JSON.stringify(user))
      // store user in local storage
      if (localStorage.users) {
        let lsUsers = localStorage.users;
        lsUsers = JSON.parse(lsUsers);
        for(let i=0; i< lsUsers.length; i++){
          if (lsUsers[i].email == this.email && lsUsers[i].username == this.username){
            alert("User already exists");
          }
          else{
            if (this.validated == true) {
              this.arrayUser.push(user);
              // localStorage.setItem("users", JSON.stringify(this.arrayUser));
              alert("User signed up successfully");
              this.username = "";
              this.email = "";
              this.password = "";
              this.step++;
            }
          }
        }
      }
    },
    validate() {
      var validated = this.$refs.form.validate();
      if (validated == true) {
        this.validated = true;
      }
    },
    // login() {
    //   var validated = this.$refs.form.validate();
    //   if (validated == true) {
    //     let lsUsers = localStorage.users;
    //     lsUsers = JSON.parse(lsUsers);
    //     for(let i=0; i< lsUsers.length; i++){
    //       if (lsUsers[i].email == this.email && lsUsers[i].password == this.password){
    //         alert("User logged in successfully");
    //         this.$router.push("/1");
    //       }
    //     }
    //     alert("Login Failed");
    //   }
    // },

    login() {
      var validated = this.$refs.form.validate();
      if (validated == true) {
        let lsUsers = localStorage.users;
        lsUsers = JSON.parse(lsUsers);
        if (lsUsers.email == this.email && lsUsers.password == this.password){
          alert("User logged in successfully");
          this.$router.push("/1");
        }
        else {
          alert("Login Failed");
        }
      }
    },
  },
};
</script>
