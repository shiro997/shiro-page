import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from 'src/app/core/models/client.model';
import { Contact } from 'src/app/core/models/contact.model';
import { Mail } from 'src/app/core/models/mail.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent{
  frmContact:FormGroup;

  constructor(private frmBuilder:FormBuilder){
    this.frmContact = this.frmBuilder.group({
      Email: ['',[Validators.required,Validators.email]],
      UsrName:['',Validators.required],
      Device: ['0',Validators.required],
      Msg: [''],
      Tel: ['',[Validators.pattern('[0-9]{10}'),Validators.required]],
      Address: ['',Validators.required]
    })
  }

  contactTo() {
    if (this.frmContact.valid) {
      let contact = new Contact();
      let client = this.createClient();
      let mail = this.createMail();
      contact.Mail = mail;
      contact.Client = client;
    }else{
      console.error('awa');
    }
  }

  createClient():Client{
    let cli = new Client();
    cli.Address = this.frmContact.value;
    cli.Tel = this.frmContact.value;
    cli.UsrName = this.frmContact.value;
    cli.mail = this.frmContact.value;
    return cli;
  }

  createMail():Mail{
    let m = new Mail();
    m.Msg = this.frmContact.value;
    m.subject = 'solicitud servicio/contato <NO-REPLY>';
    return m;
  }
}