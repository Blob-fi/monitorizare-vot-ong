import { RouterModule } from '@angular/router';
import { TabsModule } from 'ng2-bootstrap';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';
import { UIRouterModule } from 'ui-router-ng2/ng2';

@NgModule({
    imports: [FormsModule, CommonModule, PaginationModule, TabsModule, RouterModule],
    exports: [FormsModule, CommonModule, PaginationModule, TabsModule, RouterModule],
})
export class SharedModule {

}