/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InputClimate } from '../models/inputClimate.model';
import { Storage } from '@ionic/storage';
import { RoomZone } from '../models/RoomZone.model';
import { ApiService } from './api.service';
import { Questions } from '../models/questions.model';

const baseUrl = 'https://mentalshower2-api.boti7.com/api/inputClimateNumber';
const questionApiUrl = 'https://mentalshower2-api.boti7.com/api/helpQuestion';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  public inputClimate: InputClimate = {};
  public roomZone: RoomZone = {};

  private storages: Storage | null = null;

  constructor(
    private http: HttpClient,
    private storage: Storage,
    private apiService: ApiService
  ) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this.storages = storage;
  }

  saveZoneDataToStorage(room, zone, gender) {
    this.storages.set('zone', zone);
    this.storages.set('room', room);
    this.storages.set('gender', gender);
  }

  saveAQDataToStorage(aq) {
    this.storages.set('airQuality', aq);
  }

  saveTempDataToStorage(temp) {
    this.storages.set('temperature', temp);
  }

  saveHumidDataToStorage(humidity) {
    this.storages.set('humidity', humidity);
  }

  async getZoneData(): Promise<RoomZone> {
    this.roomZone.zoneNo = await this.storages.get('zone');
    this.roomZone.roomNo = await this.storages.get('room');
    return this.roomZone;
  }

  async postInput() {
    this.inputClimate.roomNo = await this.storages.get('room');
    this.inputClimate.zoneNo = await this.storages.get('zone');
    this.inputClimate.gender = await this.storages.get('gender');
    this.inputClimate.airQuality = await this.storages.get('airQuality');
    this.inputClimate.temperature = await this.storages.get('temperature');
    this.inputClimate.humidity = await this.storages.get('humidity');

    console.log(this.inputClimate);

    this.create(this.inputClimate).subscribe(
      (data) => {
        // this.inputClimateNumbers = data;
        console.log(data);
      },
      (error) => {
        console.log(error.message);
      }
    );
    this.storages.clear();
  }

  getAllHelpQuestion(): Observable<Questions[]> {
    return this.http.get<Questions[]>(questionApiUrl);
  }

  getAll(): Observable<InputClimate[]> {
    return this.http.get<InputClimate[]>(baseUrl);
  }

  get(id: any): Observable<InputClimate> {
    // return this.http.get(`${baseUrl}/${id}`);
    return this.apiService.getItem(id);
  }

  create(data: any): Observable<any> {
    // return this.http.post(baseUrl, data);
    return this.apiService.createItem(data);
  }

  update(id: any, data: any): Observable<any> {
    // return this.http.put(`${baseUrl}/${id}`, data);
    return this.apiService.updateItem(id, data);
  }

  delete(id: any): Observable<any> {
    // return this.http.delete(`${baseUrl}/${id}`);
    return this.apiService.deleteItem(id);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
}
