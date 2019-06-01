<template>
  <div class="navbar">
    <nav class="deep-purple darken-1">
      <div class="container">
        <router-link to="/" class="logo left">Geo-App</router-link>
        <div class="nav-content">
          <ul>
            <div class="left">
              <li>
                <router-link to="/">Home</router-link>
              </li>
              <li>
                <router-link to="/about">About</router-link>
              </li>
            </div>
            <div class="right">
              <li>
                <router-link :to="{name:'SignUp'}" v-if="!user">Sighup</router-link>
              </li>
              <li>
                <router-link :to="{name:'login'}" v-if="!user">Login</router-link>
              </li>
              <li>
                <a v-if="user">{{user.email}}</a>
              </li>
              <li>
                <a @click="logout()" v-if="user">Log Out</a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  name: "Navbar",
  data() {
    return { user: null };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "login" });
        });
    }
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  }
};
</script>


<style>
.logo {
  font-size: 2em;
  left: 0;
  margin: auto 50px;
}
</style>
