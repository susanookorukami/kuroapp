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
        <ul>
        <li v-for="element in info" :key="element.id" @click="$router.push('/folder/Accueil/' + element.id)">
            {{ element.gun}} <br/> {{ element.range}} <br/> {{ element.type}}
          </li>
        </ul>
      <div id="container">
        <strong class="capitalize">ratchet et clank</strong>
        <p>ratchet and clank<a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { db } from '../firebaseDb'


export default {
  name: 'Accueil',
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
  },
  data(){
    return{
      info : []
    }
  },
  mounted(){
      console.log("hello");
      this.getinfo();
  },
  methods: {
    getinfo(){
       db.collection("gun").get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            console.log(doc.data());
            
            this.info.push({
              id: doc.id,
              gun: doc.data().gun,
              range:doc.data().range,
              type:doc.data().type,
            })
          });
        });
     },
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
