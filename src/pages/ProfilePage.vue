<template>
    <div> 
        <div class="container">
            <h1 class="test3">Players</h1>
            <div class ="row">
                <b-card style="width:100%" class="mb-2">
                    <b-row no-gutters>
                    <b-col md="6">
                        <b-card-img :src="`${this.firstname}`"  alt="Image" overlay class="rounded-circle"></b-card-img>
                    </b-col>
                    <b-col md="6">
                        <!-- <b-card-body :title="`${this.firstname}` `${this.lastname}`">
                        <b-card-sub-title>Country: <h4>{{this.country}}</h4></b-card-sub-title>
                        <b-card-sub-title>Email: <h4>{{this.email}}</h4></b-card-sub-title>
                        </b-card-body> -->
                    </b-col>
                    </b-row>
                </b-card>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            firstname: "",
            lastname: "",
            country:"",
            email :"",
            image:""
        };
    },
    methods: 
    {
        async getUserDetails(){

        try {
            console.log("here");            const response = await this.axios.get(
            `${this.$store.state.server_domain}profile/${this.$root.store.username}`,
            );
            console.log(response);
            console.log(response.data);
            /*let userProfile = response.data[0];
            console.log(userProfile);
            this.firstname = userProfile.firstName;
            this.lastname = userProfile.lastName;
            this.country = userProfile.country;
            this.email = userProfile.email;
            this.image = userProfile.image;*/
        } catch (error) {
            console.log("error in getUserProfile")
            console.log(error);
        }
        },
    },
    mounted() {
        this.getUserDetails();
    },
    beforeRouteUpdate(){
        this.getUserDetails();
    }, 
}
</script>

<style>

</style>