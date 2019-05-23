<template>
  <div class="navbar">
    <nav class="deep-purple darken-1">
      <div class="container">
        <a href class="logo left">Geo-App</a>
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
                <a href>Sighup</a>
              </li>
              <li>
                <a href>Login</a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {};
  },
  methods: {}
};
</script>


<style>
.logo {
  font-size: 2em;
  left: 0;
  margin: auto 50px;
}
</style>
