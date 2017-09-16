import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  type = 'bar';
  data = {
    labels: laguage,
    datasets: [
      {
        data: level,
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 159, 64, 1)'
        ],
      }
    ]
  };
  options = opt;

  lang = [];
  constructor() {
  }

  ngOnInit() {
    for (let i = 0; i < laguage.length; i++) {
      this.lang.push(new LangClass(laguage[i], level[i]));
    }
  }

  gotoHub() {
    window.open('https://github.com/rohitsuratekar', '_blank');
  }

}



class LangClass {
  name;
  value;

  constructor(obj1, obj2) {
    this.name = obj1;
    this.value = obj2;
  }
}

const laguage = ['Python', 'Java', 'C++', 'MatLab', 'Perl', 'JavaScript', 'C#', 'LateX'];
const level = [75, 60, 30, 45, 40, 50, 20, 40];

const opt = {
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true,
        scaleLabel: '<%= \' \' + value%>',
        max: 100,
        callback: function (value, index, values) {
          switch (value) {
            case 0: return 'Just Started';
            case 10: return 'Noob';
            case 30: return 'Can Code';
            case 50: return 'Getting there';
            case 80: return 'Awesome';
            case 100: return 'Ninja';
            default: return '';
          }

        }
      }
    }],
    xAxes: [{
      ticks: {
        autoSkip: false,
      }
    }]
  },
  title: {
    display: true,
    text: 'Programming Skills'
  },
  legend: {
    display: false
  },
  layout: {
    padding: {
      // Any unspecified dimensions are assumed to be 0
      left: 20,
      bottom: 5
    }
  }
};
