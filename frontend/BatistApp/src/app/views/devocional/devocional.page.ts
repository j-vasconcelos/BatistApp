import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DevocionaisService } from 'src/app/provider/devocionais-service.page';
import { EventosService } from 'src/app/provider/eventos-service.page';

@Component({
  selector: 'app-devocional',
  templateUrl: './devocional.page.html',
  styleUrls: ['./devocional.page.scss'],
})
export class DevocionalPage implements OnInit {

  devocional;
  constructor(private route: ActivatedRoute, private router: Router,
  private devocionalService: DevocionaisService) { }

  ngOnInit() {
    const devocionalId = this.route.snapshot.paramMap.get('id');
    if (devocionalId) {
      this.devocionalService.findID(devocionalId).subscribe((devocional) => {
        this.devocional = devocional;
      });
    }
  }

  deleteDevocional(): void {
    this.devocionalService.delete(this.route.snapshot.paramMap.get('id').toString())
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['app/devocionais'])
        },
        error: (e) => console.error(e)
      });
  }

}
