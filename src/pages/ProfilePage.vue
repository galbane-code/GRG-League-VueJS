<template>
    <div> 
        <div class="container">
            <h1 class="test2">User Profile</h1>
            <div class ="row">
                <b-card style="width:80%; margin-left:15%;margin-right:15%" class="mb-2">
                    <b-row no-gutters>
                    <b-col md="6" style="width:25%;background-color:#F8F8F8 ;border-radius:50px">
                        <b-card-img :src= image alt="Image" overlay class="rounded-circle" style="width:80%; margin-left:10%;margin-right:10%"></b-card-img>
                    </b-col>
                    <b-col md="6" style="padding-left:10%">
                        <b-card-body :title="`${this.firstname}` + ' ' + `${this.lastname}`">
                        <b-card-sub-title>Country: <h4>{{this.country}}</h4></b-card-sub-title>
                        <b-card-sub-title>Email: <h4>{{this.email}}</h4></b-card-sub-title>
                        </b-card-body>
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
            image: ""
        };
    },
    methods: 
    {
        async getUserDetails(){

        try {
             const response = await this.axios.get(
            `${this.$store.state.server_domain}profile/${this.$root.store.username}`,
            );

            let userProfile = response.data[0];
            this.firstname = userProfile.firstname;
            this.lastname = userProfile.lastname;
            this.country = userProfile.country;
            this.email = userProfile.email;
            console.log(userProfile.image);
            if(!userProfile.image)
            {
                this.image = userProfile.image;
            }
            else 
            {
                this.image = "https://i.ibb.co/87TRWg1/user-logo.png"
            }
            
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