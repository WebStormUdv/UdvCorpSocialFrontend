import { Component } from '@angular/core';
import { NavigationBar } from '../../components/general-components/navigation-bar/navigation-bar';
import { TypeCommunity } from '../../components/components-community/type-community/type-community';

@Component({
  selector: 'app-create-community',
  imports: [NavigationBar, TypeCommunity],
  templateUrl: './create-community.html',
  styleUrl: './create-community.scss',
})
export class CreateCommunity {}
