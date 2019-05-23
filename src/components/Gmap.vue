<template>
  <div class="map">
    <div class="google-map" id="map"></div>
  </div>
</template>
<script>
import { fb, db } from "../firebase";
export default {
  name: "Gmap",
  data() {
    return { lat: 12.9716, lng: 77.5946 };
  },
  methods: {
    renderMap() {
      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: this.lat, lng: this.lng },
        zoom: 13,
        maxZoom: 15,
        minZoom: 3,
        streetViewControl: false
      });
    }
  },
  mounted() {
    this.renderMap();
    console.log(fb.auth().currentUser);
  }
};
</script>
<style>
.google-map {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: #fff;
  position: absolute;
  left: 0;
  right: 0;
  z-index: -1;
}
</style>
