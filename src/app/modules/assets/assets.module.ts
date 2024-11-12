import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { AssetsRouqingModule } from './assets-routing.module';
import { AssetsComponent } from './assets.component';
import { AddAssetComponent } from './add-asset/add-asset.component';
import { EditAssetComponent } from './edit-asset/edit-asset.component';

const imports = [CommonModule, SharedModule, AssetsRouqingModule];

const declarations = [AssetsComponent, EditAssetComponent, AddAssetComponent];

@NgModule({
  declarations: [...declarations],
  imports: [...imports],
  exports: [],
})
export class AssetsModule {}
