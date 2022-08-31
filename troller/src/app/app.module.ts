import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { StaticAPageComponent } from './pages/static-apage/static-apage.component';
import { StaticBPageComponent } from './pages/static-bpage/static-bpage.component';
import { StaticCPageComponent } from './pages/static-cpage/static-cpage.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ListComponent } from './components/list/list.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { LoginboxComponent } from './components/loginbox/loginbox.component';
import { ListModalComponent } from './components/modal/list-modal/list-modal.component';
import { TicketModalComponent } from './components/modal/ticket-modal/ticket-modal.component';
import { ListNameModalComponent } from './components/modal/list-name-modal/list-name-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DashboardPageComponent,
    StaticAPageComponent,
    StaticBPageComponent,
    StaticCPageComponent,
    HeaderComponent,
    FooterComponent,
    ListComponent,
    TicketComponent,
    LoginboxComponent,
    ListModalComponent,
    TicketModalComponent,
    ListNameModalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, DragDropModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
