import * as moment from 'moment-timezone';

import { Component } from '@angular/core';

import { WeightRecordService } from '../services/weight-record.service';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.scss']
})
export class AddRecordComponent {
  recordedAt = moment().toISOString();
  weight = 0;

  constructor(
    private weightRecordService: WeightRecordService,
  ) { }

  onClickAdd():void{
    this.weightRecordService.addWeightRecord({
      recordedAt: moment(this.recordedAt),
      weight: this.weight,
      absolute: true,
    });    
  }
}
