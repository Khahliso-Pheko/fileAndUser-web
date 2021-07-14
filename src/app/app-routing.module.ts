import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './user/create/create.component';
import { ShowAllUsersComponent } from './user/show-all-users/show-all-users.component';
import { ShowByIdComponent } from './user/show-by-id/show-by-id.component';
import { UpdateComponent } from './user/update/update.component';
import { ShowAllFilesComponent } from './file/show-all-files/show-all-files.component';
import { UploadComponent } from './file/upload/upload.component';
import { MainComponent } from './main/main.component'
import { WordSearchComponent } from './file/word-search/word-search.component'
import { FileFrequencyDistibutionComponent } from './file/file-frequency-distibution/file-frequency-distibution.component';
import { ShowfileByIdComponent } from './file/showfile-by-id/showfile-by-id.component'
//import { FileSearchComponent } from './file/file-search-results/file-search-results.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'user/create', component: CreateComponent},
  { path: 'user/show', component: ShowAllUsersComponent},
  { path: 'user/show/id', component: ShowByIdComponent},
  { path: 'user/update', component: UpdateComponent},
  { path: 'file/show', component: ShowAllFilesComponent},
  { path: 'file/upload', component: UploadComponent},
  { path: 'file/search', component: WordSearchComponent},
  //{ path: 'file/file-results', component: FileSearchResultsComponent},
  { path: 'file/frequency', component: FileFrequencyDistibutionComponent},
  { path: 'file/show/filename', component: ShowfileByIdComponent},
  { path: 'main', component: MainComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
