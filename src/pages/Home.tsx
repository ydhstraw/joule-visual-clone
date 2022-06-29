import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import NavButtons from '../components/NavButtons';
import {copyOutline, searchOutline, qrCode} from 'ionicons/icons';
import Splash from '../components/Splash';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Home: React.FC = () => {

  const [mostrarSplash, setMostrarSplash] = useState(false);

  const { name } = useParams<{ name: string; }>();

  useEffect(() =>{
    setMostrarSplash(true);
    setTimeout(()=>{
        setMostrarSplash(false);
    }, 2000)
  }, [])

  return (
    <IonPage>
      {
        mostrarSplash? <Splash />: null

      }
      <IonHeader>
        <IonToolbar>
          {/* <IonTitle>Blank</IonTitle> */}
          <IonButtons slot="start">
            <NavButtons/>
          </IonButtons>
          <IonItem slot="end" button routerLink={"/search"} routerDirection="none">
            <IonLabel class="search-text">Search</IonLabel> <IonIcon icon={searchOutline}/>
          </IonItem>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonFab vertical="bottom" horizontal="start" slot="fixed">
          <IonButton color="light" shape="round" type="button" size="large" class="floating-button">
            <IonText class="floating-button-text" color="#ccffff">Search for Joule</IonText>
          </IonButton>
        </IonFab>
          
        <IonFab vertical="bottom" horizontal="end" slot="fixed" class='floating-button'>
          <IonFabButton>
            <IonIcon icon={qrCode} />
          </IonFabButton>
        </IonFab>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonRow className="menu-image">
          <img src="./assets/images/cooking.jpg" alt=""/>
          {/* <IonTitle class="image-text">
          Get your Joule. Be <br></br>happy.
          </IonTitle>
          <IonText class="image-text-2">
            Explore
          </IonText> */}
        </IonRow>
        <IonRow>
          <IonTitle id="search-by">
            <h6 className="line-text">Search By Type</h6>
          </IonTitle>
        </IonRow>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard class='grid-card'>
                <IonCardContent class='background-card pork'>
                  
                </IonCardContent>
                <IonCardContent>
                  <p className="grid-text">Pork</p>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard class='grid-card'>
                <IonCardContent class='background-card game'>
                  
                </IonCardContent>
                <IonCardContent>
                  <p className="grid-text">Game</p>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard class='grid-card'>
                <IonCardContent class='background-card beef'>
                  
                </IonCardContent>
                <IonCardContent>
                  <p className="grid-text">Beef</p>
                </IonCardContent>
              </IonCard>
            </IonCol>
            
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard class='grid-card'>
                <IonCardContent class='background-card poultry'>
                  
                </IonCardContent>
                <IonCardContent>
                  <p className="grid-text">Poultry</p>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard class='grid-card'>
                <IonCardContent class='background-card lamb'>
                  
                </IonCardContent>
                <IonCardContent>
                  <p className="grid-text">Lamb</p>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard class='grid-card'>
                <IonCardContent class='background-card seafood'>
                  
                </IonCardContent>
                <IonCardContent>
                  <p className="grid-text">Seafood</p>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard class='grid-card'>
                <IonCardContent class='background-card vegetables'>
                  
                </IonCardContent>
                <IonCardContent>
                  <p className="grid-text">Vegetables</p>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard class='grid-card'>
                <IonCardContent class='background-card desserts'>
                  
                </IonCardContent>
                <IonCardContent>
                  <p className="grid-text">Deserts</p>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard class='grid-card'>
                <IonCardContent class='background-card other'>
                  
                </IonCardContent>
                <IonCardContent>
                  <p className="grid-text">Other</p>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonRow>
          <IonTitle id="search-by">
            <h6 className="line-text">Cooking Guides</h6>
          </IonTitle>
          
        </IonRow>
        
        <IonGrid>
          <IonRow>
            <IonCard class="card">
              <IonCardHeader class='card-image'>
                  
              </IonCardHeader>
              <IonCardContent>
                <IonText class="card-text">
                  Get Started: Basic Guides
                </IonText>
                <IonIcon class="icon-square" icon={copyOutline} />
              </IonCardContent>
            </IonCard>
            <IonCard class="card">
              <IonCardHeader class='card-image'>
                  
              </IonCardHeader>
              <IonCardContent>
                <IonText class="card-text">
                  Get Started: Basic Guides
                </IonText>
                <IonIcon class="icon-square" icon={copyOutline} />
              </IonCardContent>
            </IonCard>
          </IonRow>
          
          
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
