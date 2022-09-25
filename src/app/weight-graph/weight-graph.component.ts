import { Component, HostListener } from '@angular/core';
import { PlotlyService } from 'angular-plotly.js';
import { WeightRecordService } from '../services/weight-record.service';

@Component({
  selector: 'app-weight-graph',
  templateUrl: './weight-graph.component.html',
  styleUrls: ['./weight-graph.component.scss']
})
export class WeightGraphComponent {
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

  constructor(
    private plotly: PlotlyService,
    private weightRecordService: WeightRecordService,
  ) {
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
