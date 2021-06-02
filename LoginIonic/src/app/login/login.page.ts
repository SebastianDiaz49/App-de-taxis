import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: string; // inicializamos la variable donde atraparemos  el usuario
  password: string; // inicializamos la variable donde atraparemos  la contraseña
  
  constructor( public alertController: AlertController,public router:Router) {  
    this.usuario = this.password= "";  // tenemos la variables en blanco
  }

  async logIn(){  // declaramos una funcion asincrona  para emitir una alerta si los datos son incorrectos 
     if(this.usuario == 'user' && this.password == 'user123' || this.usuario == 'admin' && this.password == 'admin123'){
       // Evaluamos los datos introducidos. Si los dato coinciden si usuario=user y password= a contraseña introducida enonces se darta acceso
       let navExtras: NavigationExtras = {
            queryParams:{
              userName: this.usuario
            }
       }
       let infoUser = { // se deccalra una variable temporal para obtener la  informacion del usuario
         userNeme: this.usuario, // Tomamos  en valor de usuario para asignarselo a userNeme
         correo: 'user@gamil.com', // Asignamos  un correo
         tipoUser: this.usuario // Tomamos el valor de usua
       }
       localStorage.setItem('infoUserFacebook',JSON.stringify(infoUser))
      this.router.navigate(['/tabs/tab2'],navExtras)
    } else {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Upps',
        message: 'Usuario Incorrecto',
        buttons: ['OK ']
      });
      await alert.present();
    }
  }
  ngOnInit() {
  }

}
