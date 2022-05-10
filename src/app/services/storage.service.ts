import { Inject, Injectable, InjectionToken } from '@angular/core';
import { UserSavesDBService } from '../database/user-saves-db.service';
import { UserSaves } from '../model/users-saves';
import { AuthService } from './auth.service';

export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
  providedIn: 'root',
  factory: () => localStorage,
});

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private listasalvataggi: UserSaves[];

  public CAMPIONATO = 'campionato';

  constructor(
    @Inject(BROWSER_STORAGE) public storage: Storage,
    private userSavesDBServices: UserSavesDBService,
    private authService: AuthService
  ) {
  }

  load() {
    this.userSavesDBServices.readAll().then((data) => {
      data.subscribe((listaIn) => {
        let listaUserSaves = listaIn.map((e) => {
          let userSaves = e.payload.doc.data() as UserSaves;
          userSaves.id = e.payload.doc.id;
          return userSaves;
        });
        this.listasalvataggi = listaUserSaves.filter(
          (usersave) => usersave.idUser === this.authService.user.email
        );
      });
    });
  }

  getSaves(type: string): UserSaves {
    let userSave: UserSaves[];
    userSave = this.listasalvataggi.filter((save) => save.type === type);
    if (userSave && userSave.length === 1) {
      return userSave[0];
    }
    return null;
  }

  createSave(type: string, saves: string) {
    this.userSavesDBServices.create({
      idUser: this.authService.user.email,
      type: type,
      saves: saves,
    });
  }

  updateSaves(userSaves: UserSaves) {
    this.userSavesDBServices.update(userSaves.id, {
      idUser: userSaves.idUser,
      type: userSaves.type,
      saves: userSaves.saves,
    });
  }

  get(key: string): string {
    return this.storage.getItem(key);
  }

  set(key: string, value: string) {
    this.storage.setItem(key, value);
  }

  remove(key: string) {
    this.storage.removeItem(key);
  }

  clear() {
    this.storage.clear();
  }
}
