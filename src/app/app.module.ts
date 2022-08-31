import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { GaugeModule } from 'angular-gauge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { EmployeeComponent } from './employee/employee.component';
import { DataService } from './data.service';
import { MatMenuModule } from '@angular/material/menu';
@NgModule({
  declarations: [AppComponent, EmployeeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    GaugeModule.forRoot(),
    MatTabsModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    AngularFirestoreModule,
    MatMenuModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    MatSliderModule,
    MatCardModule,
    MatInputModule,
    MatCommonModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
