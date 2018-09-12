import { Component, OnInit } from '@angular/core';
// import io from 'socket.io-client';
import hexParticle from './hexParticle';

const port = 3000;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'maestro';
  public particleOptions: any = null;
  public connected = false;
  public particleStyle: any = null;

  constructor() {
      this.particleOptions = hexParticle;
      this.particleStyle = {
          backgroundColor: '#2c2e43',
          height: '100%',
          width: '100%',
      };
      console.log('hi');
      console.log(hexParticle);
  }

  public ngOnInit(): void {
      window.particlesJS('particles-js', hexParticle);
      // const socket = io('http://localhost:3000');
      // socket.on('connect', this.connected = true);
      // socket.on('event', console.log());
      // socket.on('disconnect', this.connected = false);
  }
}
