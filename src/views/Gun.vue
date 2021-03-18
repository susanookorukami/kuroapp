<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Gun</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Gun</ion-title>
        </ion-toolbar>
      </ion-header>
      <form @submit.prevent="onFormSubmit">
                <div class="form-group">
                    <label>Gun</label>
                    <input type="text" class="form-control" v-model="gun.gun" required>
                </div>

                <div class="form-group">
                    <label>Range</label>
                    <input type="text" class="form-control" v-model="gun.range" required>
                </div>

                <div class="form-group">
                    <label>Type</label>
                    <input type="text" class="form-control" v-model="gun.type" required>
                </div>

                <div class="form-group">
                    <button class="btn btn-primary btn-block">Add gun</button>
                </div>
                </form>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';

 import { db } from '../firebaseDb';

    export default {
        data() {
            return {
                gun: {}
            }
        },
        methods: {
            onFormSubmit(event) {
                event.preventDefault()
                db.collection('gun').add(this.gun).then(() => {
                    alert("user successfully created!");
                    this.gun.gun = '';
                    this.gun.range = '';
                    this.gun.type = '';
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
