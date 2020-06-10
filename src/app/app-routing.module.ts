import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestTimeComponent } from './test-time/test-time.component';


const routes: Routes = [{
    path: 'card',
    component: TestTimeComponent
},
{ path: 'table', loadChildren: './table-test/table-test.module#TableTestModule' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
