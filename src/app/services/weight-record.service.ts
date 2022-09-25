import { Injectable } from '@angular/core';
import { WeightRecord } from '../model/weight-record';
import { TESTDATA } from './testdata';

@Injectable({
  providedIn: 'root'
})
export class WeightRecordService {
  constructor() { }

  /**
   * 全体重データの取得
   *
   * @param absolute 取得を絶対値で行うか相対値で行うか(今のところ必ず絶対値で返す)
   * @return 体重データの配列
   */
  // eslint-disable-next-line no-unused-vars
  getAllWeightRecords(absolute?: boolean): WeightRecord[] {
    return TESTDATA;
  }

  /**
   * 新しいデータの追加
   *
   * @param weightRecord 追加するデータ
   */
  // eslint-disable-next-line no-unused-vars
  addWeightRecord(weightRecord: WeightRecord) {
  }
}
