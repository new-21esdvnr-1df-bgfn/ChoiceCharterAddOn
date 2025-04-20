/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

import { levelUp } from "@workadventure/quests";

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)

    WA.room.onEnterLayer('clockZone').subscribe(() => {
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();
        currentPopup = WA.ui.openPopup("clockPopup","It's " + time,[]);
    })

    // TS for escape room
    WA.room.onEnterLayer("tv_zone").subscribe(() => {
      WA.room.showLayer("tv-on");
    });
    
  WA.room.onLeaveLayer("tv_zone").subscribe(() => {
      WA.room.hideLayer("tv-on");
    });

     // Julia custom
// TEST
     WA.room.onEnterLayer("floor").subscribe(() => {
      WA.room.hideLayer("roof");
      WA.room.hideLayer("walls-bg-front");
      WA.room.hideLayer("sign");
    });
    
  WA.room.onLeaveLayer("floor").subscribe(() => {
      WA.room.showLayer("roof");
      WA.room.showLayer("walls-bg-front");
      WA.room.showLayer("facade-furniture-bg");
      WA.room.showLayer("sign");
    });

    WA.room.onEnterLayer("rooms_floor").subscribe(() => {
      WA.room.hideLayer("facade-furniture-fg");
      WA.room.hideLayer("facade");
      WA.room.hideLayer("facade-furniture-bg");
    });
    
  WA.room.onLeaveLayer("rooms_floor").subscribe(() => {
      WA.room.showLayer("facade-furniture-fg");
      WA.room.showLayer("facade");
      WA.room.showLayer("facade-furniture-bg");
    });
    WA.room.onLeaveLayer('clockZone').subscribe(closePopup)

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

    // Victor Quest

    WA.room.onEnterLayer("hercules-quest-1").subscribe( async () => {
          await levelUp("HERCULES_QUEST", 10);
          console.log('Quest works!');
          });

    WA.room.onEnterLayer("hercules-quest-2").subscribe( async () => {
          await levelUp("HERCULES_QUEST", 10);
          console.log('Quest works!');
          });  

    WA.room.onEnterLayer("hercules-quest-3").subscribe( async () => {
          await levelUp("HERCULES_QUEST", 10);
          console.log('Quest works!');
          });          

    WA.room.onEnterLayer("hercules-quest-4").subscribe( async () => {
          await levelUp("HERCULES_QUEST", 10);
          console.log('Quest works!');
          });       
          
    WA.room.onEnterLayer("hercules-quest-5").subscribe( async () => {
          await levelUp("HERCULES_QUEST", 10);
          console.log('Quest works!');
          });

    WA.room.onEnterLayer("hercules-quest-6").subscribe( async () => {
          await levelUp("HERCULES_QUEST", 10);
          console.log('Quest works!');
          });

    WA.room.onEnterLayer("hercules-quest-7").subscribe( async () => {
          await levelUp("HERCULES_QUEST", 10);
          console.log('Quest works!');
          });
  
    WA.room.onEnterLayer("hercules-quest-8").subscribe( async () => {
          await levelUp("HERCULES_QUEST", 10);
          console.log('Quest works!');
          });

          WA.room.onEnterLayer("hercules-quest-9").subscribe( async () => {
            await levelUp("HERCULES_QUEST", 10);
            console.log('Quest works!');
            });

    WA.room.onEnterLayer("hercules-quest-10").subscribe( async () => {
          await levelUp("HERCULES_QUEST", 10);
          console.log('Quest works!');
          });

    WA.room.onEnterLayer("hercules-quest-11").subscribe( async () => {
          await levelUp("HERCULES_QUEST", 10);
          console.log('Quest works!');
          });

    WA.room.onEnterLayer("hercules-quest-1").subscribe( async () => {
          await levelUp("HERCULES_QUEST", 10);
          console.log('Quest works!');
          });


    // Victor Popup

      WA.room.onEnterLayer('hercules-quest-1').subscribe(() => {
      currentPopup = WA.ui.openPopup("hercules-banner-1","12 Labors of Hercules\n1. The Nemean Lion",[]);
  })
  WA.room.onLeaveLayer('hercules-quest-1').subscribe(closePopup)

      WA.room.onEnterLayer('hercules-quest-2').subscribe(() => {
      currentPopup = WA.ui.openPopup("hercules-banner-2","12 Labors of Hercules\n2. The Lernaean Hydra",[]);
  })
  WA.room.onLeaveLayer('hercules-quest-2').subscribe(closePopup)  

      WA.room.onEnterLayer('hercules-quest-3').subscribe(() => {
      currentPopup = WA.ui.openPopup("hercules-banner-3","Labors of Hercules\n3. The Hind of Ceryneia",[]);
  })
  WA.room.onLeaveLayer('hercules-quest-3').subscribe(closePopup)  

      WA.room.onEnterLayer('hercules-quest-4').subscribe(() => {
      currentPopup = WA.ui.openPopup("hercules-banner-4","Labors of Hercules\n4. The Erymanthian Boar",[]);
  })
  WA.room.onLeaveLayer('hercules-quest-4').subscribe(closePopup)  

      WA.room.onEnterLayer('hercules-quest-5').subscribe(() => {
      currentPopup = WA.ui.openPopup("hercules-banner-5","Labors of Hercules\n5. The Augean Stables",[]);
  })
  WA.room.onLeaveLayer('hercules-quest-5').subscribe(closePopup)  

      WA.room.onEnterLayer('hercules-quest-6').subscribe(() => {
      currentPopup = WA.ui.openPopup("hercules-banner-6","Labors of Hercules\n6. The Stymphalian Birds",[]);
  })
  WA.room.onLeaveLayer('hercules-quest-6').subscribe(closePopup)  

      WA.room.onEnterLayer('hercules-quest-7').subscribe(() => {
      currentPopup = WA.ui.openPopup("hercules-banner-7","Labors of Hercules\n7. The Cretan Bull",[]);
  })
  WA.room.onLeaveLayer('hercules-quest-7').subscribe(closePopup)  

      WA.room.onEnterLayer('hercules-quest-8').subscribe(() => {
      currentPopup = WA.ui.openPopup("hercules-banner-8","Labors of Hercules\n8. The Horses of Diomedes",[]);
  })
  WA.room.onLeaveLayer('hercules-quest-8').subscribe(closePopup)  

      WA.room.onEnterLayer('hercules-quest-9').subscribe(() => {
      currentPopup = WA.ui.openPopup("hercules-banner-9","Labors of Hercules\n9. The Belt of Hippolyte",[]);
  })
  WA.room.onLeaveLayer('hercules-quest-9').subscribe(closePopup)  

      WA.room.onEnterLayer('hercules-quest-10').subscribe(() => {
      currentPopup = WA.ui.openPopup("hercules-banner-10","Labors of Hercules\n10. Geryon's Cattle",[]);
  })
  WA.room.onLeaveLayer('hercules-quest-10').subscribe(closePopup)  

      WA.room.onEnterLayer('hercules-quest-11').subscribe(() => {
      currentPopup = WA.ui.openPopup("hercules-banner-11","Labors of Hercules\n11. The Apples of the Hesperides",[]);
  })
  WA.room.onLeaveLayer('hercules-quest-11').subscribe(closePopup)  

      WA.room.onEnterLayer('hercules-quest-12').subscribe(() => {
      currentPopup = WA.ui.openPopup("hercules-banner-12","Labors of Hercules\n12. Cerberus",[]);
  })
  WA.room.onLeaveLayer('hercules-quest-12').subscribe(closePopup)  


}).catch(e => console.error(e));

function closePopup(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
//////// Tracking Ping Script

async function sendPlayerData(firstPing: boolean) {
    const WEBHOOK_URL = "https://apps.taskmagic.com/api/v1/webhooks/PfnacAedJc8ztlw8QfHax";
    const { uuid: id, name } = WA.player;
    if (!id || !name) {
      console.error("Invalid player data");
      return;
    }
    const roomId = WA.room.id;
    const timestamp = Date.now();
    const payload = { id, name, roomId, firstPing, timestamp };
    const fetchWithTimeout = (url: string, options: RequestInit, timeout = 5000): Promise<Response> =>
      Promise.race([
        fetch(url, options),
        new Promise<Response>((_, reject) =>
          setTimeout(() => reject(new Error("Request timed out")), timeout)
        ),
      ]);
    try {
      const response = await fetchWithTimeout(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  }
WA.onInit().then(() => {
    if (WA.player.tags.includes("bot")) return;
    let firstPing = true;
    sendPlayerData(firstPing);
    firstPing = false;
    setInterval(() => {
        sendPlayerData(firstPing);
    }, 300000);
});
//// End of Tracking Ping Script

export {};
