import { Component, OnInit } from '@angular/core';
import { Config, ConfigService } from "./config.service";
import { MessageService } from "../../../service/message.service";


@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css'],
  providers: [ConfigService]
})
export class ConfigComponent implements OnInit {
  error: any;
  headers: string[];
  config: Config;
  constructor(private configService: ConfigService) { }
  clear() {
    this.config = undefined;
    this.error = undefined;
    this.headers = undefined;

  }
  showConfig() {
    this.configService.getConfig().subscribe((data: Config) => this.config = { ...data },//success
      error => this.error = error//error
    )
  }
  showConfig_v1() {
    this.configService.getConfig_1().subscribe((data: Config) => this.config = { heroesUrl: data['heroesUrl'], textfile: data['textfile'] })
  }

  showConfig_v2() {
    this.configService.getConfig_2().subscribe((data: Config) => this.config = { ...data })
  }
  showConfigResponse() {
    this.configService.getConfigResponse().subscribe(resp => {
      const keys = resp.headers.keys();
      this.headers = keys.map(key => `${key}:${resp.headers.get(key)}`)
    })
  }

  makeError() {
    this.configService.makeIntentionalError().subscribe(null, error => this.error = error)
  }
  ngOnInit() {
  }

}
