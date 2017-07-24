import {RouterModule , Routes} from '@angular/router';

import {PigLatinComponent} from './components/piglatin/piglatin.component';
export const routes: Routes = [
	{ path: '', component: PigLatinComponent },

];

export const appRoutingProviders: any[] = [
];
export const routing =  RouterModule.forRoot(routes);