
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardComponent } from "../../card/card.component";
import { priceProfiles } from 'src/app/demo/pages/authentication/interfaces/IpriceProfiles';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-galeria',
  imports: [CommonModule, FormsModule, CardComponent, ReactiveFormsModule],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss'
})
export class GaleriaComponent {
currentStep: number = 1;
  eventForm!: FormGroup;
  timelineStatus: string = 'Passos de Criação';
  selectedPrice: priceProfiles = null;
  searchTerm: string = '';
  filteredPrices: priceProfiles[] = [];
  activeTab: string = 'Galeria Unica'; //alternar abas

  TiposEvento: string[] = [
    'Corrida de Rua',
    'Futebol',
    'Vôlei',
    'Basquete',
    'Ciclismo',
    'Triatlo',
    'Maratona Aquática',
    'Surfe',
    'Tênis',
    'Esportes de Aventura (Trail Running, Trekking)',
    'Motocross',
    'Automobilismo (Rali, Kart, Fórmula)',
    'Artes Marciais (MMA, Jiu-Jitsu, Judô)',
    'CrossFit e Treinamento Funcional',
    'Skate',
    'Eventos Náuticos (Vela, Regatas)',
    'Handebol',
  ];

  Estado: string[] = [
    'Acre',
    'Alagoas',
    'Amapá',
    'Amazonas',
    'Bahia',
    'Ceará',
    'Distrito Federal',
    'Espírito Santo',
    'Goiás',
    'Maranhão',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Minas Gerais',
    'Pará',
    'Paraíba',
    'Paraná',
    'Pernambuco',
    'Piauí',
    'Rio de Janeiro',
    'Rio Grande do Norte',
    'Rio Grande do Sul',
    'Rondônia',
    'Roraima',
    'Santa Catarina',
    'São Paulo',
    'Sergipe',
    'Tocantins',
  ];

  

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.eventForm = this.fb.group({
      eventType: ['', Validators.required],
      eventName: ['', Validators.required],
      eventDate: ['', Validators.required],
      publishDate: ['', Validators.required],
      tags: [''],
      state: ['Distrito Federal'],
      city: [''],
    });
    
  }

  

  

  nextStep(): void {
    if (this.currentStep === 1) {
      alert('Preencha todos os campos obrigatórios!');
      return;
    }
    if (this.currentStep === 2 && !this.selectedPrice) {
      alert('Por favor, selecione um perfil de preço!');
      return;
    }

    this.currentStep++;
    if (this.currentStep === 2) {
      this.timelineStatus = 'Selecionando Perfil de Preço';
    } else if (this.currentStep === 3) {
      this.timelineStatus = 'Finalizando Evento';
    }
  }

  previousStep(): void {
    this.currentStep--;
    if (this.currentStep === 1) {
      this.timelineStatus = 'Formulário Inicial';
    } else if (this.currentStep === 2) {
      this.timelineStatus = 'Selecionando Perfil de Preço';
    }
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}
