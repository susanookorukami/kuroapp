<template>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <tbody>
                    <tr v-for="g in gun" :key="g.id">
                        <td>{{ g.gun }}</td>
                        <td>{{ g.range }}</td>
                        <td>{{ g.type }}</td>
                        <td>
                            <router-link :to="{name: 'edit', params: { id: gun.id }}" class="btn btn-primary">Edit
                            </router-link>
                            <button @click.prevent="deleteUser(gun.id)" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import { db } from '../firebaseDb';
    
    export default {
        data() {
            return {
                gun: []
            }
        },
        created() {
            db.collection('gun').onSnapshot((snapshotChange) => {
                this.gun = [];
                snapshotChange.forEach((doc) => {
                    this.gun.push({
                        id: doc.id,
                        gun: doc.data().gun,
                        range: doc.data().range,
                        type: doc.data().type
                    })
                });
            })
        },
        methods: {
            deleteUser(id){
              if (window.confirm("Do you really want to delete?")) {
                db.collection("gun").doc(id).delete().then(() => {
                    console.log("Document deleted!");
                })
                .catch((error) => {
                    console.error(error);
                })
              }
            }
        }
    }
</script>

<style>
    .btn-primary {
        margin-right: 12px;
    }
</style>