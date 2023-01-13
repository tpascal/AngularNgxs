import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

// Ngxs modules
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { MaterialUiModule } from './utils/material-ui/material-ui.module';
import { ListComponent } from './components/list/list.component';
import { ListItemInputComponent } from './components/list-item-input/list-item-input.component';
import { ListContainerComponent } from './components/list-container/list-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListState } from './store/list.state';

// App components
const COMPONENTS_ARRAY = [
  NavMenuComponent,
  HomeComponent,
  CounterComponent,
  ListComponent,
  ListItemInputComponent,
  ListContainerComponent
];

// App modules
const MODULES_ARRAY = [
  BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
  HttpClientModule,
  FormsModule,
  RouterModule.forRoot([
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'counter', component: CounterComponent },
    { path: 'fetch-data', component: FetchDataComponent },
    { path: 'item', component: ListItemInputComponent},
    { path: 'list', component: ListContainerComponent},
  ]),
  NgxsModule.forRoot([ListState]),
  NgxsReduxDevtoolsPluginModule.forRoot(),
  MaterialUiModule,
  ReactiveFormsModule,
  BrowserAnimationsModule
];

@NgModule({
  declarations: [AppComponent,
    ...COMPONENTS_ARRAY
  ],
  imports: [
    ...MODULES_ARRAY
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
