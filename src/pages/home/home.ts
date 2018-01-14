import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  readtext:string;

  constructor(public navCtrl: NavController, private tts: TextToSpeech) {

    }

    read(){
      this.tts.speak(this.readtext)
        .then(() => alert("done reading"))
          

        .catch((reason: any) => console.log(reason))
    }

}
