import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from 'express';


@Component({
  selector: 'app-crear-producto',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './crear-producto.component.html',
  styleUrl: './crear-producto.component.scss'
})
export class CrearProductoComponent {

}
