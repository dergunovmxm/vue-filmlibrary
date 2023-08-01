<template >
  <div class="wrapper">
    <header>
      <div class="navbar">
        <div class="container">
          <div class="navbar-content"><router-link class="header-logo" to="/">FilmLibrary</router-link>
            <div class="button-burger" @click="menuShow = !menuShow" :class="{active: menuShow}"><span class="line line-1"></span><span class="line line-2"></span>
              <span
                class="line line-3">
              </span>
              </div>
            <div class="navbar-list__wrapper" :class="{active: menuShow}">
              <ul class="navbar-list">
                <li class="navbar-item" v-for="link in linkMenu" :key="link.title"  @click="menuShow = false">
                  <router-link class="navbar-link" :to="`${link.url}`">
                    {{ link.title }}
                  </router-link>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
    <router-view />
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {

  },
  data() {
    return {
      menuShow: false,
      linkMenu: [
        { title: 'Home', url: '/' },
        { title: 'Login', url: '/login' },
        { title: 'Registration', url: '/registration' }
      ]
    }
  }
}
</script>

<style lang="stylus">
@import './assets/styles/main.styl'

</style>
