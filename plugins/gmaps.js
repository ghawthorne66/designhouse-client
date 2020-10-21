import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps-withscopedautocomp';

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDcOHu_FRGdZGcNduNv58v_wHHfoPIGIbM',
    libraries: 'places'
  }
});