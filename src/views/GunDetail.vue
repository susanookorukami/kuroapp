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
        TEST
      <div id="container">
        <strong class="capitalize">ratchet et clank</strong>
        <p>ratchet and clank<a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
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
