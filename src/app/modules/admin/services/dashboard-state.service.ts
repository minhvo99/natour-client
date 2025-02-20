import { Injectable, signal } from '@angular/core';

export interface DashboardState {
  tours: any;
  bookings: any;
  reviews: any;
  users: any;
  tourStast: any;
}

@Injectable({
  providedIn: 'root'
})
export class DashboardStateService {
  private _state = signal<DashboardState>({
    tours: null,
    bookings: null,
    reviews: null,
    users: null,
    tourStast: null,
  });

  public readonly state = this._state.asReadonly();

  constructor() { }

  updateState(newState: Partial<DashboardState>) {
    this._state.update((prevState) => ({ ...prevState, ...newState }));
  }
}
