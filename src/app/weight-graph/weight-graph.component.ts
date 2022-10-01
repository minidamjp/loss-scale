import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { PlotlyService } from 'angular-plotly.js';
import { Subscription } from 'rxjs';
import { WeightRecordService } from '../services/weight-record.service';

@Component({
  selector: 'app-weight-graph',
  templateUrl: './weight-graph.component.html',
  styleUrls: ['./weight-graph.component.scss']
})
export class WeightGraphComponent implements OnDestroy, OnInit {
  public weightGraphData: Partial<Plotly.PlotData> = {
    x: [],
    y: [],
    type: 'scatter',
    mode: 'lines+markers',
    marker: {color: 'red'},
  };
  // グラフには複数の系列が表示できる。
  public graphData: Partial<Plotly.PlotData>[] = [
    this.weightGraphData,
  ];

  // 変更監視
  private changeSubscription = new Subscription();

  constructor(
    private plotly: PlotlyService,
    private weightRecordService: WeightRecordService,
  ) {
  }

  ngOnInit(): void {
    this.update();
    // 新しいデータが追加されたら再描画
    this.changeSubscription.add(this.weightRecordService.onChange().subscribe(() => {
      this.update();
    }));
  }

  ngOnDestroy(): void {
    this.changeSubscription.unsubscribe();
  }

  /**
   * グラフの再描画
   */
  update() {
    const weightRecordList = this.weightRecordService.getAllWeightRecords();
    const x: Date[] = [];
    const y: number[] = [];
    for(const weightRecord of weightRecordList) {
      x.push(weightRecord.recordedAt.toDate()); // plotly が日付型をサポートしていた。
      y.push(weightRecord.weight);
    }
    this.weightGraphData.x = x;
    this.weightGraphData.y = y;
  }

  // ウィンドウサイズが変化したらグラフを自動フィットさせる。
  @HostListener('window:resize')
  onResize() {
    const target = this.plotly.getInstanceByDivId('weight-graph');
    if (!target) {
      return;
    }
    this.plotly.resize(target);
  }
}
