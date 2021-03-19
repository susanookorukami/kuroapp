<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Accueil</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Accueil</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-item v-for="element in gun" :key="element.id">
                    Nom : {{element.gun}} <br>
                    Type : {{element.range}} <br>
                    Lieux : {{element.type}} <br>
          </ion-item>
       <!-- TEST-->
      <div id="container">
        <!--<strong class="capitalize">ratchet et clank</strong>-->
        <button @click.prevent="deleteUser(this.$route.params.id)" class="btn btn-danger">Delete</button>
        <!--<p>ratchet and clank<a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p> -->
      </div>

    </ion-content>
  </ion-page>
</template>

<script>
    import { db } from '../firebaseDb';
    import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
    export default {
        name: 'GunDetail',
        components: {
          IonButtons,
          IonContent,
          IonHeader,
          IonMenuButton,
          IonPage,
          IonTitle,
          IonToolbar
        },
        data() {
            return {
                gun: []
            }
        },
        ionViewDidEnter(){
            this.gun =[];
            this.getinfos();
        },
        
        methods: {
            getinfos(){
                 db.collection("gun").doc(this.$route.params.id).get().then((doc) => {
                     
            console.log(doc.data());
            
            this.gun.push({
              id: doc.id,
              gun: doc.data().gun,
              range:doc.data().range,
              type:doc.data().type,
            })
          
        });
            
            },
            
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