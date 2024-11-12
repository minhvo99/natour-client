import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import csvDownload from 'json-to-csv-export';

@Injectable({
  providedIn: 'root',
})
export class AssetsService {
  private csvOptions = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true,
    showTitle: true,
    title: 'Assets List',
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,
    headers: ['ATM Name', 'Manufacturer', 'Type', 'SerialNumber', 'Image'],
  };

  constructor(private http: HttpClient) {}

  getAllAssets(): Observable<any> {
    return this.http.get(`${environment.api}/assets`);
  }

  addAsset(data: any): Observable<any> {
    return this.http.post(`${environment.api}/assets`, data);
  }

  editAsset(id: string, data: any): Observable<any> {
    return this.http.put(`${environment.api}/assets/${id}`, data);
  }

  deleteAsset(id: string): Observable<any> {
    return this.http.delete(`${environment.api}/assets/${id}`);
  }

  exportToCsv(data: any) {
    const dataToConvert = {
      data: data,
      filename: 'assets-list',
      delimiter: ',',
      headers: ['ATM Name', 'Manufacturer', 'Type', 'SerialNumber', 'Image'],
    };
    csvDownload(dataToConvert);
  }
}
