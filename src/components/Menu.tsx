import {
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonMenuToggle,
    IonItem,
    IonLabel,
    IonIcon,
    IonText,
  } from "@ionic/react";

  import './Menu.css';
  import { openOutline, settingsOutline, helpCircleOutline, homeOutline, sunnyOutline } from "ionicons/icons";
  
  const Menu = () => {
    return (
      <IonMenu side="start" contentId="main" type="push">
        {/* <IonHeader>
          <IonToolbar color="light">
            <IonTitle>MENU</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        <IonContent>
          <IonList>
            <IonMenuToggle auto-hide="false">
              <IonItem button routerLink={"/home"} routerDirection="none">
                <IonIcon class="menu-icons" icon={homeOutline}/>
                <IonLabel>Home</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle auto-hide="false">
              <IonItem button routerLink={"/tips"} routerDirection="none">
                <IonIcon class="menu-icons" icon={sunnyOutline}/>
                <IonLabel>Tips & Tricks</IonLabel>
              </IonItem>
              <IonItem button routerLink={"/help"} routerDirection="none">
                <IonIcon class="menu-icons" icon={helpCircleOutline}/>
                <IonLabel>Help & Support</IonLabel>
              </IonItem>
              <IonItem button routerLink={"/settings"} routerDirection="none">
                <IonIcon class="menu-icons" icon={settingsOutline}/>
                <IonLabel>Settings</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
          <IonList class="menu-bg">
          <IonText class="bubble-Text">
            Get your Claws around <br></br> Joule today! <br></br>
            <IonText class="txt-link">Check it out </IonText> <IonIcon color="primary" ></IonIcon>
            <IonIcon icon={openOutline} class="open-icon"/>
          </IonText>
          <div className='crap' ></div>
          </IonList>
        </IonContent>
      </IonMenu>
    );
  };

export default Menu;