import { Component } from '@angular/core';
import { Header } from '../../components/general-components/header/header';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout-matrix',
  imports: [Header, RouterModule],
  templateUrl: './layout-matrix.html',
  styleUrl: './layout-matrix.scss',
})
export class LayoutMatrix {}
