import { Observable } from 'rxjs'

declare module 'rxjs' {
    interface Observable<T> {
        debug: (...any) => Observable<T>;
    }
}

const debuggerOn = true;

Observable.prototype.debug = function (message: string) {
    return this.do(
        nextValue => {
            if (debuggerOn) {
                console.log(message, nextValue);
            }
        },
        err => {
            if (debuggerOn) {
                console.error(message, err);
            }
        },
        () => {
            if (debuggerOn) {
                console.log('Observable completed - ' + message);
            }
        }
    );
};
