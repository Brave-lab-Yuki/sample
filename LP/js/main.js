'use strict';
// ========
// スライド
// ========

let fadeContsLeft = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  for (let i = 0; i < fadeContsLeft.length; i++){
    const rect = fadeContsLeft[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight; // 現在のブラウザの高さ
    if (scroll > offset - windowHeight + 150) {
      fadeContsLeft[i].classList.add('scroll-in');
    }
  }
});


var chartEl1 = document.getElementById("chart1");
var chartEl2 = document.getElementById("chart2");
var chartFlag1 = false;
var chartFlag2 = false;


// 1つ目のグラフ
var chartFunc1 = function() {
  var ctx = chartEl1.getContext('2d');
      ctx.canvas.height = 500;
      let chart;
  chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: [],
      datasets: [{
      label: "Sample data",
      data: [80, 20],
      backgroundColor: [
        '#CCB57A',
        '#A5A5A5',
        '#AEAEAE',
        ]
      }]
    },
    options: { 
      animation: {
        duration: 3000,
    },
        legend: {
        labels: {
          fontColor: "#0049A3",
          fontSize: 14,
          responsive: true,
          maintainAspectRatio: false,
        }
      }
    }
  });
};


// 2つ目のグラフ
var chartFunc2 = function() {
  var ctx = chartEl2.getContext('2d');
      ctx.canvas.height = 170;
  let chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Data1", "Data2",],
        datasets: [{
        label: "",
        backgroundColor: "rgba(8,108,139,1)",
        data: [12, 19, 7, 10, 10]
      }]
    },
    options: { 
      animation: {
        duration: 3000,
    },
      responsive: true,
      // maintainAspectRatio: false,
      scales: {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          display: false,
        }],
      },
      legend: { 
        display:false,
      }
    }
  });
};

// スクロール処理
var graphAnim = function() {
  var wy = window.pageYOffset,
    // wb = wy + screen.height - 300, // スクリーンの最下部位置を取得
      wb = wy + window.innerHeight, // ブラウザの最下部位置を取得
      
      // チャートの位置を取得
    chartElPos1 = wy + chartEl1.getBoundingClientRect().top,
    chartElPos2 = wy + chartEl2.getBoundingClientRect().top;

  // チャートの位置がウィンドウの最下部位置を超えたら起動
  if ( wb > chartElPos1 && chartFlag1 == false ) {
    chartFunc1();
    chartFlag1 = true;
  }
  
  if ( wb > chartElPos2 && chartFlag2 == false ) {
    chartFunc2();
    chartFlag2 = true;
  }
};

window.addEventListener('load', graphAnim); // 読み込み時の処理
window.addEventListener('scroll', graphAnim); // スクロール時の処理

