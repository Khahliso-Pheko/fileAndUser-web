import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './user/create/create.component';
import { UpdateComponent } from './user/update/update.component';
import { ShowByIdComponent } from './user/show-by-id/show-by-id.component';
import { ShowAllUsersComponent } from './user/show-all-users/show-all-users.component';
import { UploadComponent } from './file/upload/upload.component';
import { ShowAllFilesComponent } from './file/show-all-files/show-all-files.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { WordSearchComponent } from './file/word-search/word-search.component';
//import { FileSearchResultsComponent } from './file/file-search-results/file-search-results.component';
import { FileFrequencyDistibutionComponent } from './file/file-frequency-distibution/file-frequency-distibution.component';
import { ShowfileByIdComponent } from './file/showfile-by-id/showfile-by-id.component';
import { FileSearchComponent } from './file/file-search/file-search.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    UpdateComponent,
    ShowByIdComponent,
    ShowAllUsersComponent,
    UploadComponent,
    ShowAllFilesComponent,
    LoginComponent,
    MainComponent,
    WordSearchComponent,
   // FileSearchResultsComponent,
    FileFrequencyDistibutionComponent,
   ShowfileByIdComponent,
   FileSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule ,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
