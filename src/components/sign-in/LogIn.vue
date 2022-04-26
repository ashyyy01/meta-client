<template>
  <div class="sign-in-container">
    <div class="sign-in-dialog">
      <div class="heading-ribbon">Sign In</div>
      <div class="sign-in-steps" @keyup.enter="verifyUserCredentials()">
        <b-steps
          ref="sign_in_step"
          v-model="activeStep"
          :animated="true"
          type="is-info"
          :has-navigation="false"
          :rounded="true"
        >
          <b-step-item step="1" label="Username" :clickable="false">
            <div class="input-info">
              <span>Enter your Username:</span>
              <b-input placeholder="lan ID" v-model="username"></b-input>
            </div>
          </b-step-item>

          <b-step-item step="2" label="Password" :clickable="false">
            <div class="input-info">
              <span>Enter your LDAP password:</span>
              <b-input type="password" v-model="password" placeholder="password"></b-input>
            </div>
          </b-step-item>

          <b-step-item step="3" label="Access" :clickable="false"></b-step-item>

          <template v-if="activeStep < 2">
            <b-button
              :label="activeStep == 0 ? 'Verify' : 'Submit'"
              type="is-info"
              @click="verifyUserCredentials"
            >
            </b-button>
          </template>
        </b-steps>
        <!-- <span style="margin:2em 0 0 1em;">Don't have an account? <a href=""> Sign Up Now</a></span> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      activeStep: 0,
    };
  },
  methods: {
    verifyUserCredentials() {
      if (this.activeStep == 0) {
        if (this.username == "venrf1") {
          this.activeStep += 1;
        } else {
          this.showError("Invalid username!");
        }
      } else if (this.activeStep == 1) {
        if (this.password == "test") {
          this.$emit("isUserAuthenticated");
        }
      }
    },
  },
};
</script>

<style scoped>
.sign-in-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 100px;
  overflow-y: initial;
}
.sign-in-dialog {
  width: 500px;
  height: 450px;
  align-self: center;
  box-shadow: 0px 0px 50px 0px rgb(0 0 0 / 20%), 0 0px 0px 0 rgb(0 0 0 / 19%);
  -webkit-box-shadow: 0 2px 30px hsla(0, 0%, 80%, 0.4);
}
.heading-ribbon {
  display: initial;
  position: relative;
  top: 25px;
  right: 4px;
  background: #757575;
  color: #fff;
  padding: 5px 10px;
  border-radius: 0 26px 26px 0;
  -webkit-box-shadow: 2px 2px 5px -3px #757575;
  box-shadow: 2px 2px 5px -3px #757575;
  font-size: 11px;
  letter-spacing: 1px;
  margin-bottom: 5px;
  text-transform: uppercase;
}
.heading-ribbon:after {
  content: "";
  position: absolute;
  width: 4px;
  height: 4px;
  border: 2px solid transparent;
  border-top-color: #202020;
  border-right-color: #202020;
  left: 0;
  bottom: -4px;
}
.sign-in-steps {
  margin-top: 60px;
}
.input-info {
  /* margin-top: 50px; */
  align-content: left;
  font-weight: bold;
  margin: 3em 3em 1em 3em;
  width: -webkit-fill-available;
}
.button {
  margin-left: 4em;
  margin-right: 4em;
  width: -webkit-fill-available;
}
</style>
