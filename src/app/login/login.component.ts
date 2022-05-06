import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private authService:AuthService,private toastr:ToastrService) { }

  ngOnInit(): void {

  }

  submitData(userForm){
    this.authService.login(userForm.value.email,userForm.value.password)
    .subscribe(
      data=>{
        this.toastr.success('Login Successful', 'Success',{timeOut:3000})
        this.router.navigate(["/dashboard"])
      },
      err=>{
        console.log(err.error.msg)
        this.toastr.error(err.error.msg, 'Error',{timeOut:3000})
      }
    )
  }

}
