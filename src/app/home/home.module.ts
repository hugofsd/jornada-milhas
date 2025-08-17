import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/core/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PromocoesComponent } from './promocoes/promocoes.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent, PromocoesComponent],
  imports: [CommonModule, MaterialModule, SharedModule, HomeRoutingModule],
  exports: [HomeComponent, PromocoesComponent],
})
export class HomeModule {}
