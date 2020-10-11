import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-pinjaman-page',
  templateUrl: './pinjaman-page.component.html',
  styleUrls: ['./pinjaman-page.component.css']
})

export class PinjamanPageComponent implements OnInit {
  public pinjamanForm: FormGroup;
  public test = '';


  public selectedKota = [];
  public msData = [
    {
      provinsi: 'Jawa Barat',
      kota: ['Bandung', 'Sukabumi', 'Cianjur'],
    },

    {
      provinsi: 'Jawa Timur',
      kota: ['Surabaya', 'Semarang', 'Malang'],
    },
  ]

  constructor(
    private formBuilder: FormBuilder
  ) { 
    this.pinjamanForm = this.formBuilder.group({
      nama: ['', Validators.compose([Validators.required])],
      alamat: ['', Validators.compose([Validators.required])],
      no_tlp: ['',Validators.compose([Validators.required])],
      pinjaman: ['', [
        Validators.required, // Validators
        Validators.min(1000000),
        Validators.max(1000000)
      ]],
      provinsi: [''],
      kota: [''],
    }) 
  }

  ngOnInit(): void {
    this.pinjamanForm.valueChanges.subscribe(
      res=>{
        console.log(res);
        const props = this.msData.filter((item)=>(
          item.provinsi === res.provinsi
        ))
        console.log(props);
        this.selectedKota = props[0].kota;
        console.log(this.selectedKota);
      }
    )
  }

  onSave(){
    this.test = this.pinjamanForm.controls.nama.value;
  }

}