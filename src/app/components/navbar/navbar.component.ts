import { Component, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    (function ($:any){
      $(document).ready(function (){
        // Menu toggle for admin dashboard

        if ($("#nav-toggle").length) {
          $("#nav-toggle").on("click", function(e:any) {
            e.preventDefault();
            $("#db-wrapper").toggleClass("toggled");
          });

        }
      })
    })(jQuery);
  }



}
