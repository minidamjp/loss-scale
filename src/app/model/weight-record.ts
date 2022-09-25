import { Moment } from 'moment-timezone';

/**
 * WeightRecord は体重データの1要素です。
 * 内部フォーマットになっていて、特に、日時がmoment型になっています。
 * 実際に保存や表示に使うには変換処理が必要です。
 */
export interface WeightRecord {
  /**
   * recordedAt は体重を記録した日時です。
   * 分以下は実際には0になっています。
   */
  recordedAt: Moment;
  /**
   * weight は体重です。
   * 絶対値の場合と相対値の場合のどちらもあります。
   */
  weight: number;
  /**
   * absolute は体重が絶対値か相対値かを示します。
   */
  absolute: boolean;
}
