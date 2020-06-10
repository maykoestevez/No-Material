import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableTestComponent } from './table-test.component';
import { TableTestRoutingModule } from './table-test-routing.module';
import { TestOnchangeComponent } from '../test-onchange/test-onchange.component';



@NgModule({
    declarations: [TableTestComponent, TestOnchangeComponent],
    imports: [
        CommonModule,
        TableTestRoutingModule
    ]
})
export class TableTestModule { }
