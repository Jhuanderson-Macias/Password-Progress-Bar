import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})

export class PasswordComponent implements OnInit {
  password = '';
  message = '';
  messages: string[];
  value = 0;

  constructor() { }

  checkPassword() {
    this.message = '';
    this.value = 100;
    if (this.c_length() == false){
      this.message = this.message + "\n The length is of the password is too short"; 
      this.value = this.value-20;
    }
    if (this.c_numberCnt() == false){
      this.message = this.message + "\n Password needs a number";  
      this.value = this.value-20; 
    }
    if (this.c_metaCnt() == true){
      this.message = this.message + "\n password does not contain a special character"; 
      this.value = this.value-20;
    }
    if (this.c_upperCnt() == false){
      this.message = this.message + "\n password does not contain an upper case"; 
      this.value = this.value-20;
    }
    if (this.c_lowerCnt() == false){
      this.message = this.message + "\n The password does not have a lower case";
      this.value = this.value-20;
    }
}

  c_length(): boolean {
    if (this.password.length <= 7) {
      return false;
    }
    return true;
  }

  c_numberCnt(): boolean {
    let lengthOfPass = this.password.length 
    while(--lengthOfPass) {
            switch (this.password.charAt(lengthOfPass)) {
                case "0":
                case "1": 
                case "2": 
                case "3": 
                case "4": 
                case "5": 
                case "6":
                case "7":
                case "8": 
                case "9": 
                return true;
            }
        }
        return false;

  }

  c_metaCnt(): boolean {
    // return false if it contains meta
   return !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(this.password);
  }

  c_upperCnt(): boolean {
    return (/[A-Z]/.test(this.password));

  }

  c_lowerCnt(): boolean {
    return (/[a-z]/.test(this.password));
  }

  resetPassword() {
    this.password = '';
  }

  ngOnInit() {
  }
}

