import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardComponent } from "../../card/card.component";
import { priceProfiles } from 'src/app/demo/pages/authentication/interfaces/IpriceProfiles';


@Component({
  selector: 'app-criar-evento',
  standalone: true,
  imports: [CommonModule, FormsModule, CardComponent, ReactiveFormsModule],
  templateUrl: './criar-evento.component.html',
  styleUrls: ['./criar-evento.component.scss'],
})
export class CriarEventoComponent implements OnInit {
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

  Galerias: string[] = [
    'Galeria Um',
    'Galeria Dois',
    'Galeria Três'
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

  priceProfiles: priceProfiles[] = [
    {
      title: 'Download Imediato A',
      details: [
        'Alta 3450 Pixels Download Imediato = R$ 14.90',
        'Média 2700 Pixels Download Imediato = R$ 11.90',
        'Baixa 1500 Pixels Download Imediato = R$ 8.90',
      ],
      discounts: ['3 Fotos = 15%', '6 Fotos = 25%', '10 Fotos = 35%'],
      validity: '7 dias',
      price: 'R$ 14.90',
    },
    {
      title: 'Download Imediato B',
      details: [
        'Alta 3450 Pixels Download Imediato = R$ 16.90',
        'Média 2700 Pixels Download Imediato = R$ 12.90',
        'Baixa 1500 Pixels Download Imediato = R$ 10.90',
      ],
      discounts: ['3 Fotos = 15%', '6 Fotos = 25%', '10 Fotos = 35%'],
      validity: '7 dias',
      price: 'R$ 16.90',
    },
    {
      title: 'Download Imediato C',
      details: [
        'Alta 3450 Pixels Download Imediato = R$ 18.90',
        'Média 2700 Pixels Download Imediato = R$ 15.90',
        'Baixa 1500 Pixels Download Imediato = R$ 12.90',
      ],
      discounts: ['3 Fotos = 15%', '6 Fotos = 25%', '10 Fotos = 35%'],
      validity: '7 dias',
      price: 'R$ 18.90',
    },
    
      {
        title: "Download Imediato D",
        details: [
          "Alta 3450 Pixels Download Imediato = R$ 19.90",
          "Média 2700 Pixels Download Imediato = R$ 16.90",
          "Baixa 1500 Pixels Download Imediato = R$ 11.90"
        ],
        discounts: ["3 Fotos = 15%", "6 Fotos = 25%", "10 Fotos = 35%"],
        validity: "7 dias",
        price: "R$ 19.90"
      },
      {
        title: "Download Imediato E",
        details: [
          "Alta 3450 Pixels Download Imediato = R$ 18.90",
          "Média 2700 Pixels Download Imediato = R$ 15.90",
          "Baixa 1500 Pixels Download Imediato = R$ 12.90"
        ],
        discounts: ["3 Fotos = 15%", "6 Fotos = 25%", "10 Fotos = 35%"],
        validity: "7 dias",
        price: "R$ 18.90"
      },
      {
        title: "Download Imediato Premium",
        details: [
          "Premium 4500 Pixels Download Imediato = R$ 25.90",
          "Alta 3450 Pixels Download Imediato = R$ 21.90",
          "Baixa 1500 Pixels Download Imediato = R$ 16.90"
        ],
        discounts: ["3 Fotos = 13%", "6 Fotos = 25%", "10 Fotos = 35%"],
        validity: "7 dias",
        price: "R$ 25.90"
      },
      {
        title: "Download Imediato Premium - Alternativo",
        details: [
          "Premium 4500 Pixels Download Imediato = R$ 17.90",
          "Alta 3450 Pixels Download Imediato = R$ 15.90",
          "Média 2700 Pixels Download Imediato = R$ 12.90",
          "Baixa 1500 Pixels Download Imediato = R$ 9.90"
        ],
        discounts: ["3 Fotos = 15%", "6 Fotos = 25%", "10 Fotos = 35%"],
        "validity": "7 dias",
        "price": "R$ 17.90"
      },
      {
        title: "Download Imediato Premium - Econômico",
        details: [
          "Premium 4500 Pixels Download Imediato = R$ 14.90",
          "Alta 3450 Pixels Download Imediato = R$ 13.90",
          "Média 2700 Pixels Download Imediato = R$ 11.90",
          "Baixa 1500 Pixels Download Imediato = R$ 9.90"
        ],
        discounts: ["3 Fotos = 15%", "6 Fotos = 25%", "10 Fotos = 35%"],
        validity: "7 dias",
        price: "R$ 14.90"
      }
    
    
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
    this.filteredPrices = this.priceProfiles;
  }

  // Filtrar preços com base na barra de busca
  getFilteredPrices() {
    this.filteredPrices = this.priceProfiles.filter((price) =>
      price.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  selectPrice(price: priceProfiles): void {
    this.selectedPrice = price;
  }

  nextStep(): void {
    if (this.currentStep === 1 && !this.eventForm.valid) {
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
