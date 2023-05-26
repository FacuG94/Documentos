import { AuthService } from 'src/app/auth.service';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output, Directive } from "@angular/core";
import { BehaviorSubject, Observable } from 'rxjs';
import { Empresa } from '../authentication/login/login.interface';
import { API_DEFINITIONS } from './api-definitions.constant';
import { lastValueFrom } from 'rxjs';


@Directive()
@Injectable({
  providedIn: 'root'
})
export class EstructuraSeleccionadaService {

  private readonly _estructura_seleccionada: BehaviorSubject<Empresa> = new BehaviorSubject<Empresa>({});
  public readonly estructura_seleccionada$: Observable<Empresa> = this._estructura_seleccionada.asObservable();
  private disabled = false;

  @Output() change: EventEmitter<boolean> = new EventEmitter();
  constructor(private http: HttpClient, private auth:AuthService) { }

  public get estructura_seleccionada(): Empresa {
    return this._estructura_seleccionada.getValue();
  }

  public set estructura_seleccionada(val: Empresa) {
    this._estructura_seleccionada.next(val);
  }

  public update_estructura_seleccionada() {
    this._estructura_seleccionada.next(this._estructura_seleccionada.getValue());
  }

  public setDisabled(validator: boolean) {
    this.disabled = validator;
    this.change.emit(this.disabled)
  }


  public getEstructuras(): Promise<Empresa[]> {
    return lastValueFrom(this.http.get<Empresa[]>(API_DEFINITIONS.URL_EMPRESA))
  }


}
