import { Component, OnInit } from '@angular/core';
import { EmployeDataService } from '../employe-data.service';
import{EmployeData} from '../employe-data';


@Component({
  selector: 'app-employe-data',
  templateUrl: './employe-data.component.html',
  styleUrls: ['./employe-data.component.css']
})
export class EmployeDataComponent implements OnInit {

  constructor(private employedataservice:EmployeDataService) { }

  ngOnInit(): void {
  }

}
