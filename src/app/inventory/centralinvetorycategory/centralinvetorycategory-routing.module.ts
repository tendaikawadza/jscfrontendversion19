import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CentralinventoryictComponent } from '../centralinventoryict/centralinventoryict.component';
import { CentralinventorystationeryComponent } from '../centralinventorystationery/centralinventorystationery.component';
import { CentralinventorydetergentsandcleaningmaterialComponent } from '../centralinventorydetergentsandcleaningmaterial/centralinventorydetergentsandcleaningmaterial.component';
import { CentralinventoryconsumablesComponent } from '../centralinventoryconsumables/centralinventoryconsumables.component';
import { CentralinventoryteasandprovisionsComponent } from '../centralinventoryteasandprovisions/centralinventoryteasandprovisions.component';
import { CentralinventorysecurityitemsComponent } from '../centralinventorysecurityitems/centralinventorysecurityitems.component';
import { CentralinvetorycategoryComponent } from './centralinvetorycategory.component';
import { CentralinventorystationerypensComponent } from '../centralinventorystationerypens/centralinventorystationerypens.component';

const routes: Routes = [

  { path: 'centralinventoryict', component: CentralinventoryictComponent },
  { path: 'centralinventorystationery', component: CentralinventorystationeryComponent },
  { path: '', component: CentralinventorydetergentsandcleaningmaterialComponent},
  { path: 'centralinventoryconsumables', component: CentralinventoryconsumablesComponent},
  { path: 'centralinventoryteasandprovisions', component: CentralinventoryteasandprovisionsComponent},
  { path: 'centralinventorystationerypens', component: CentralinventorystationerypensComponent},
  { path: 'centralinventorysecurityitems', component: CentralinventorysecurityitemsComponent},
  { path: '', component: CentralinvetorycategoryComponent},
];
// you need define here route
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CentralinvetorycategoryRoutingModule { }
