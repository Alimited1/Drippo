import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge } from '@ionic/react';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './Home';
import './profile.css';

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-padding">Drippo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader class="heading-container" collapse="condense">
          <IonToolbar>
            <IonTitle class="heading-title">Drippo</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonTabs>
        <IonRouterOutlet>
          <Route path="/" component={Home} exact={true} />
        </IonRouterOutlet>

    <IonTabBar slot="bottom">
      <IonTabButton tab="home" href='/'>
        <IonLabel>Home</IonLabel>
      </IonTabButton>

    </IonTabBar>
  </IonTabs>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
