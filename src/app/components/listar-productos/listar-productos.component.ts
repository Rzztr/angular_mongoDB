import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-listar-productos',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './listar-productos.component.html',
  styleUrl: './listar-productos.component.scss'
})
export class ListarProductosComponent {

}
