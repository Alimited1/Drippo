import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge } from '@ionic/react';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import Profile from './profile';

const Home: React.FC = () => {
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
        <ExploreContainer />
        <IonTabs>
        <IonRouterOutlet>
          <Route path="/profile" component={Profile} exact={true} />
        </IonRouterOutlet>

    <IonTabBar slot="bottom">
      <IonTabButton tab="profile" href='/tabs/profile'>
        <IonLabel>Profil</IonLabel>
      </IonTabButton>
    </IonTabBar>
  </IonTabs>
      </IonContent>
    </IonPage>
  );
};

export default Home;
