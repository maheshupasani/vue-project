<template>
    <div>
        <div class="box">
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users">
                        <th scope="row">{{ user }}</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import UsersDataService from '@/services/UsersDataService';
export default {
    name: "about",
    // data: {
    //     users: []
    // }
    data(){
        return {
            users: []
        }
    },
    mounted(){
        this.getAllUsers();
    },
    methods:{
        getAllUsers(){
            UsersDataService.getAll()
        .then(response => {
          this.users = response.data.data;
          console.log(this.users)
        })
        .catch(e => {
          console.log(e);
        });
        }
    }
}
</script>