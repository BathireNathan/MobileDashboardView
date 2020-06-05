const data = {
  Today: 20,
  'Last 7 Days': 190,
};

const dataCnt = {
  Problem: 300,
  Incident: 190,
  PlannedEvent: 50,
  MajorEvent: 10,
};

const gColors = [
  'linear-gradient(315deg, #48c6ef 0%, #48c6ef 74%);',
  'linear-gradient(315deg, #13547a 0%, #80d0c7 74%);',
  'linear-gradient(315deg, #09203f 0%, #537895 74%);',
  'linear-gradient( 112.9deg, rgba(112,255,151,1) 6.2%, rgba(70,195,255,1) 99.7% )',
  'linear-gradient(315deg, #a1c4fd 0%, #a1c4fd 74%);',
  'linear-gradient(315deg, #ffecd2 0%, #fcb69f 74%);',
];

const colors = ['#ffffff', '#ffffff', '#ffffff', , '#ffffff'];

class Tiles {
  constructor (data, element) {
    this.data = data;
    this.element = element;
    console.log (this.data);

    this.buildTiles ();
    drawChart ();
  }

  buildTiles () {
    try {
      let parent = $ ('<div/>', {class: 'tiles-container'});
      Object.keys (this.data).forEach ((key, idx) => {
        if (idx != 0 && idx % 2 == 0)
          parent = $ ('<div/>', {
            class: 'tiles-container',
            style: 'margin-top:4px;',
          });
        let tile = this.getTile (key, this.data[key], idx);
        parent.append (tile);
        $ (this.element).append (parent);
      });
    } catch (err) {
      console.log (err);
    }
    console.log ($ (this.element));
  }

  getTile (key, value, idx) {
    let parent = $ ('<div/>', {
      class: 'tiles-type1',
      style: 'background:' + colors[idx],
    });
    $ ('<div/>', {text: key, class: 'head'}).appendTo (parent);
    let valueDiv = $ ('<div/>', {
      style: 'width: 100%;display: flex;padding: 7px 5px 5px 5px;',
    }).appendTo (parent);
    $ ('<div/>', {class: 'iconspace'}).appendTo (valueDiv);
    $ ('<div/>', {text: value, style:'width:50%', class: 'value'}).appendTo (valueDiv);
    return parent;
  }
}

function drawChart () {
  var ctx = document.getElementById ('myChart').getContext ('2d');
  var myChart = new Chart (ctx, {
    type: 'pie',
    data: {
      labels: ['Green', 'Blue', 'Purple', 'Yellow', 'Red'],
      datasets: [
        {
          backgroundColor: [
            '#2ecc71',
            '#3498db',
            '#9b59b6',
            '#f1c40f',
            '#e74c3c',
            '#3498db',
            '#9b59b6',
            '#f1c40f',
            '#e74c3c',
          ],
          data: [12, 19, 17, 28, 24],
        },
      ],
    },
    options: {
      legend: {
        position: 'right',
        align: 'middle',
      },
    },
  });
}

new Tiles (data, '.ttsummary');
