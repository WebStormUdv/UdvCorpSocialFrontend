import { Component } from '@angular/core';
import { NavigationBar } from '../../components/general-components/navigation-bar/navigation-bar';
import { ListCompetency } from '../../components/matrix/list-competency/list-competency';

@Component({
  selector: 'app-matrix-competency',
  imports: [NavigationBar, ListCompetency],
  templateUrl: './matrix-competency.html',
  styleUrl: './matrix-competency.scss',
})
export class MatrixCompetency {}
