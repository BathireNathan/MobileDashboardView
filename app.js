const data = {
  Today: 20,
  'Last 7 Days': 190,
};

class Tiles {
  constructor (data, element) {
    this.data = data;
    this.element = element;
    console.log (this.data);

    this.buildTiles ();
  }

  buildTiles () {
    try {
      Object.keys (this.data).forEach (key => {
        let tile = this.getTile (key, this.data[key]);
        $(this.element).append(tile);
      });
    } catch (err) {
      console.log (err);
    }
  }

  getTile(key, value){
      return $('<div/>', {class : 'tiles-type1'});
  }
}

new Tiles (data, '.summary');
