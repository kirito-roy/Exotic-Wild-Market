import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
@Injectable({
    providedIn: 'root',
})
export class Msg {
    constructor() {}
    showAlert(message: string, alertType: number) {
        switch (alertType) {
        case 1:
            this.showSuccess(message);
            break;
        case 2:
            this.showWarning(message);
            break;
        case 3:
            this.showError(message);
            break;
        case 4:
            this.showInfo(message);
            break;
        default:
            break;
        }
    }
    showSuccess(message: string) {
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: '' + message,
        });
    }

    showError(message: string) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: '' + message,
        });
    }
    showWarning(message: string) {
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: '' + message,
        });
    }
    showInfo(message: string) {
        Swal.fire({
            icon: 'info',
            title: 'Oops...',
            text: '' + message,
        });
    }
}
