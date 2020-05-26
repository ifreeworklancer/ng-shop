import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IUser, ICurrentUser } from '../models/user';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<ICurrentUser>;
    public currentUser: Observable<ICurrentUser>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<ICurrentUser>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): ICurrentUser {
        return this.currentUserSubject.value;
    }

    public register(user: IUser) {
        return this.http.post<ICurrentUser>(environment.apiUri.concat('register/'), user);
    }

    public login(username: string, password: string) {
        return this.http.post<ICurrentUser>(environment.apiUri.concat('login/'), { username, password })
            .pipe(map(user => {
                if (user && user.token) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }
                return user;
            }));
    }

    public logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
