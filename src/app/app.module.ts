import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
//import all the ngprime modules
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputNumberModule} from 'primeng/inputnumber';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import {DialogModule} from 'primeng/dialog';
import { NbThemeModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({ declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        InputTextModule,
        ButtonModule,
        CardModule,
        TableModule,
        DropdownModule,
        InputNumberModule,
        ConfirmDialogModule,
        ToastModule,
        DialogModule,
        NbThemeModule.forRoot(),
        ReactiveFormsModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
