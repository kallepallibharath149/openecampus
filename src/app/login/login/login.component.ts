import { Component, OnInit } from '@angular/core';
import { ServiveService } from 'src/app/service/servive.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:ServiveService) { }

  ngOnInit() {
    console.log(this.service.obj.logInStatus);
    this.service.logInStatusChange(true);
    console.log(this.service.obj.logInStatus);

    $(document).ready(function(){
      alert(screen.width+''+screen.height);
      $('body').css({'min-height':'100vh',
                      
      "background-image":"linear-gradient(120deg,#3498db,#8e44ad)"
                      });
                // $("*").css({"margin":"0",
                //              "font-family":"montserrat",
                //             "box-sizing":"border-box",
                //           " margin":'0',
                //         "padding":'0'});
                       $(".txtb input").on("focus",function(){
                        $(this).addClass("focus");
                      });
                
                      $(".txtb input").on("blur",function(){
                        if($(this).val() == "")
                        $(this).removeClass("focus");
                      });
                      $('input').on('click',function(){
                        $('.this:parent').css({
                          "border-bottom":"1px solid blue"})
                      })
    });
    
  }

}
