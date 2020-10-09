<template>
  <div>
    <nav>
      <div class="nav-wrapper">
        <router-link to="/" class="brand-logo center"><img class="logo" src="../assets/icons/coding.svg" alt=""></router-link>
        <a href="javascript:;" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        <ul class="left hide-on-med-and-down">
          <router-link class="waves-effect waves-light" tag="li" exact to="/"><a>home</a></router-link>
          <router-link class="waves-effect waves-light" tag="li" to="/docs"><a>docs</a></router-link>
        </ul>
        <ul class="right hide-on-med-and-down">
          <li>
            <a href="javascript:;" class="dropdown-trigger" data-target="dropdown1"><i class="material-icons right">arrow_drop_down</i>{{ name || 'account' }}</a>
          </li>
          <ul id='dropdown1' class='dropdown-content'>
            <router-link to="/profile" tag="li"><a>Profile</a></router-link>
<!--            <li class="divider" tabindex="-1"></li>-->
            <router-link to="/settings" tag="li"><a>Settings</a></router-link>
            <li><a href="javascript:;" @click="logout">Logout</a></li>
          </ul>
        </ul>
      </div>
    </nav>

    <ul class="sidenav" id="mobile-demo">
      <router-link tag="li" exact to="/"><a class="waves-effect waves-red">home</a></router-link>
      <router-link tag="li" to="/docs"><a class="waves-effect waves-red">docs</a></router-link>
      <router-link tag="li" to="/account"><a class="waves-effect waves-red">account</a></router-link>
    </ul>
  </div>
</template>

<script>
// import M from 'materialize-css/dist/js/materialize.min.js'

export default {
  name: 'HeaderArea',
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/login?message=logout')
    }
  },
  mounted() {
    let sidenavElements = document.querySelectorAll('.sidenav')
    M.Sidenav.init(sidenavElements)
    let dropdownElements = document.querySelectorAll('.dropdown-trigger')
    M.Dropdown.init(dropdownElements)
  },
  computed: {
    name() {
      return this.$store.getters.info.name
    }
  }
}
</script>