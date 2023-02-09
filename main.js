const app = Vue.createApp({
    name: "AlbumSpotify",
    data() {
        return {
            dischi: [],
        }
    },
    created() {
        axios.get('http://localhost:80/php-dischi-json/api.php').then((res) => {
            this.dischi = res.data;
        })
    }
})
app.mount("#app")



