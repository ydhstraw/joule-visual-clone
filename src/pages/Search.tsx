import { IonButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonSegment, IonSegmentButton, IonLabel, IonInput, IonIcon, IonRow, IonCard, IonCardHeader, IonCardContent, IonText, IonCol } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import NavButtons from '../components/NavButtons';
import React, { useState } from 'react';
import { searchOutline } from 'ionicons/icons';
import './Search.css';

const Search: React.FC = () => {
    const [searchText, setSearchText] = useState('');
  return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <div className="Search">
                    <IonInput placeholder="Search" onIonChange={input => console.log('toggle Search', input.detail.value)}>
                        <IonIcon icon={searchOutline}></IonIcon>
                    </IonInput>
                    <IonButton routerDirection="back" routerLink="/Home" size="small" color="medium" fill="clear" color-activated="none" class="Cb">
                    Cancel
                    </IonButton>
                    
                </div>
                <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)}>
                    <IonSegmentButton value="all">
                        <IonLabel>All</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="joule">
                        <IonLabel>Joule App</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="chefsteps">
                        <IonLabel>ChefSteps</IonLabel>
                    </IonSegmentButton>
                </IonSegment>
            
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            <IonTitle>
                <h6 className="search-by">Visual Doseness Guides</h6>
            </IonTitle>
            <IonCard class="card-list">
                <IonCardHeader class="card-image-2">
                </IonCardHeader>
                <IonCardContent>
                    <IonText class="card-text-1">
                        Pizza easy way <br></br>
                        <IonText color="medium" class="card-text-2">
                        Easy way to build your Pizza
                        </IonText>
                    </IonText>
                </IonCardContent>
            </IonCard>
            <IonTitle>
                <h6 className="search-by">Just Time & Temp</h6>
            </IonTitle>
            <IonCard>
            <IonRow>
              <IonCol size='5' class="jtt"> 
            <div className="time-temp">
                <p className="range">Range</p>
                <p className="temperatuer">65°C</p>
                <p className="temperatuer">87°C</p>
            </div>
            </IonCol>
               <IonCol size="7">
                   <IonCardContent>
                       <IonText class='head-text'>Pizza Egg</IonText><br/>
                       <IonText class='body-text'>30 MINUTES</IonText>
                   </IonCardContent>
                </IonCol> 
            
            </IonRow>
            </IonCard>
            <IonTitle>
                <h6 className="search-by">ChefSteps.com Results</h6>
            </IonTitle>
            <IonCard>
                <IonRow>
                    <IonCol size='5' class='ccr-pic boxyroxy'>
                        <img src='https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2022/01/05/3426542661.jpg' className="chef-img"></img>
                    </IonCol>
                    <IonCol size='5' class="ccr-big-card"><b className="big-text">Pizza with mozarella</b><p className="mini-text2">ChefSteps.com</p></IonCol>
                </IonRow>
            </IonCard>
        </IonContent>
    </IonPage>
  );
};

export default Search;
