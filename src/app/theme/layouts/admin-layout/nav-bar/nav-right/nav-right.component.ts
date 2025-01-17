import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconDirective, IconService } from '@ant-design/icons-angular';
import { BellOutline, GiftOutline, LogoutOutline, MessageOutline, SettingOutline, UserOutline, WalletOutline } from '@ant-design/icons-angular/icons';

import { NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { AuthService } from 'src/app/demo/pages/authentication/services/auth.service';

@Component({
  selector: 'app-nav-right',
  imports: [RouterModule, NgScrollbarModule, NgbNavModule, NgbDropdownModule,IconDirective, CommonModule],
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss'],
})
export class NavRightComponent implements OnInit {
  userName: string = 'Usuário';
  unreadNotifications: number = 0;

  profile = [
    { icon: 'edit', title: 'Edit Profile' },
    { icon: 'user', title: 'View Profile' },
    { icon: 'profile', title: 'Social Profile' },
    { icon: 'wallet', title: 'Billing' },
  ];

  setting = [
    { icon: 'question-circle', title: 'Support' },
    { icon: 'user', title: 'Account Settings' },
    { icon: 'lock', title: 'Privacy Center' },
    { icon: 'comment', title: 'Feedback' },
  ];

  notifications = [
    { icon: 'gift', title: "Cristina's Birthday", description: "It's Cristina's birthday today.", time: '2 min ago' },
    { icon: 'message', title: 'New Comment', description: 'Aida commented on your post.', time: '10 min ago' },
  ];

  

  constructor(private authService: AuthService,private iconService: IconService) {
    this.iconService.addIcon(
      WalletOutline, // Adicione este ícone aqui
      BellOutline,
      SettingOutline,
      GiftOutline,
      MessageOutline,
      LogoutOutline,
      UserOutline
    );
  }

  getIconType(icon: string): string {
    const registeredIcons = ['edit', 'user', 'profile', 'wallet', 'logout', 'setting']; // Lista de ícones registrados
    return registeredIcons.includes(icon) ? icon : 'question-circle'; // Retorna um ícone padrão caso o ícone não esteja registrado
  }
  

  ngOnInit(): void {
    const currentUser = this.authService.getCurrentUser();
    console.log("usuario que vem:", this.userName)
    
    if (currentUser) {
      this.userName = `${currentUser.primeiroNome || ''} ${currentUser.segundoNome || ''}`.trim();
    }
    this.unreadNotifications = this.notifications.length;
  }

  logout(): void {
    this.authService.logout();
  }
}
