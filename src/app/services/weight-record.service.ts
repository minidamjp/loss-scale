import * as moment from 'moment-timezone';

import { Injectable } from '@angular/core';

import { SavedWeightRecord, WeightRecord } from '../model/weight-record';

@Injectable({
  providedIn: 'root'
})
export class WeightRecordService {

  weightRecordList: WeightRecord[] = [];

  constructor() { 
    const wr:SavedWeightRecord[] = JSON.parse(localStorage.getItem('weightRecord')??'[]');
    for (const w of wr){
      this.weightRecordList.push({
        recordedAt: moment(w.recordedAt),
        weight: w.weight,
        absolute: true,
      });
    }
  }

  /**
   * 全体重データの取得
   *
   * @param absolute 取得を絶対値で行うか相対値で行うか(今のところ必ず絶対値で返す)
   * @return 体重データの配列
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getAllWeightRecords(absolute?: boolean): WeightRecord[] {
    return this.weightRecordList;
  }

  /**
   * 新しいデータの追加
   *
   * @param weightRecord 追加するデータ
   */
  // eslint-disable-next-line no-unused-vars
  addWeightRecord(weightRecord: WeightRecord) {
    this.weightRecordList.push(weightRecord);
    const ws:SavedWeightRecord[] = [];
    for (const w of this.weightRecordList){
      ws.push({
        recordedAt: w.recordedAt.toISOString(),
        weight: w.weight,
      });
    }
    localStorage.setItem('weightRecord', JSON.stringify(ws));

  }
}
