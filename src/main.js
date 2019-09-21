import Vue from 'vue';
import Home from './App.vue';
import NotFound from './pages/NotFound.vue';
import About from './pages/About.vue';
import * as VueGoogleMaps from 'vue2-google-maps';

const routes = {
  '/': Home,
  '/about': About
};

Vue.use(VueGoogleMaps, {
  load: {
    // API Key will be given in a separate file not included in git
    // I would suggest making your own one for now
    //key: `${process.env.VUE_APP_GOOGLE_API}`,
    libraries: 'places'
  },

  installComponents: true
});

Vue.config.productionTip = false;

new Vue({
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent() {
      return routes[this.currentRoute] || NotFound;
    }
  },
  render(h) {
    return h(this.ViewComponent);
  }
}).$mount('#app');
