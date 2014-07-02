var FunnyPictures = FunnyPictures || {

  backgroundLayer: new Kinetic.Layer(),
  pavlingLayer: new Kinetic.Layer(),
  danLayer: new Kinetic.Layer(),
  hanaLayer: new Kinetic.Layer(),
  paulLayer: new Kinetic.Layer(),
  samLayer: new Kinetic.Layer(),
  alexLayer: new Kinetic.Layer(),
  mustacheLayer: new Kinetic.Layer(),
  hatLayer: new Kinetic.Layer()
};

FunnyPictures.hideAll = function() {
  FunnyPictures.pavlingLayer.hide();
  FunnyPictures.danLayer.hide();
  FunnyPictures.hanaLayer.hide();
  FunnyPictures.paulLayer.hide();
  FunnyPictures.samLayer.hide();
  FunnyPictures.alexLayer.hide();
  FunnyPictures.backgroundLayer.hide();
}

FunnyPictures.createLayer = function(layer, stage, url) {
  var background = new Image();
  background.src = url;
  background.onload = function() {
    var background_k = new Kinetic.Image({
      x: 0,
      y: 0,
      image: background,
      width: 480,
      height:480,
    });
    layer.add(background_k);
    stage.add(layer);
    layer.moveToBottom();
    layer.draw();
  };
};

FunnyPictures.createForegroundLayer = function(layer, stage, url, width, height) {
  var mustache = new Image();
  mustache.src = url;

  mustache.onload = function() {
    var mustache_k = new Kinetic.Image({
      x: 240-(width/2),
      y: 240-(height/2),
      image: mustache,
      width: width,
      height: height,
      draggable: true
    });
    mustache_k.on('mouseover', function() {
      document.body.style.cursor = 'pointer';
    });
    mustache_k.on('mouseout', function() {
      document.body.style.cursor = 'default';
    });
    layer.add(mustache_k);
    stage.add(layer);
    mustache_k.moveToTop();
    layer.hide();
  };
};



FunnyPictures.setup = function() {

  // Setup layers
  var stage = new Kinetic.Stage({
    container: 'container',
    width: 480,
    height: 480
  });
  

  FunnyPictures.createLayer(FunnyPictures.danLayer, stage, 'images/dan.png');
  FunnyPictures.createLayer(FunnyPictures.hanaLayer, stage, 'images/hana.png');
  FunnyPictures.createLayer(FunnyPictures.paulLayer, stage, 'images/paul.png');
  FunnyPictures.createLayer(FunnyPictures.samLayer, stage, 'images/sam.png');
  FunnyPictures.createLayer(FunnyPictures.pavlingLayer, stage, 'images/pavling.png');
  FunnyPictures.createLayer(FunnyPictures.alexLayer, stage, 'images/alex.png');
  FunnyPictures.createLayer(FunnyPictures.backgroundLayer, stage, 'images/silhouette.png');

  FunnyPictures.createForegroundLayer(FunnyPictures.mustacheLayer, stage, 'images/mustache.png', 100, 38);
  FunnyPictures.createForegroundLayer(FunnyPictures.hatLayer, stage, 'images/top_hat.png', 190, 162)

  FunnyPictures.hideAll();
  FunnyPictures.backgroundLayer.show();
  var show_mustache_toggle = false;
  var show_hat_toggle = false;


  // add button event bindings
  document.getElementById('mustache').addEventListener('click', function() {
    if (show_mustache_toggle === false) {
      FunnyPictures.mustacheLayer.show();
      FunnyPictures.mustacheLayer.draw();
      show_mustache_toggle = true;
    } else {
      FunnyPictures.mustacheLayer.hide();
      FunnyPictures.mustacheLayer.draw();
      show_mustache_toggle = false;
    };
  }, false);

  document.getElementById('hat').addEventListener('click', function() {
    if (show_hat_toggle === false) {
      FunnyPictures.hatLayer.show();
      FunnyPictures.hatLayer.draw();
      show_hat_toggle = true;
    } else {
      FunnyPictures.hatLayer.hide();
      FunnyPictures.hatLayer.draw();
      show_hat_toggle = false;
    };
  }, false);

  document.getElementById('background').addEventListener('click', function() {
        FunnyPictures.hideAll();
        FunnyPictures.backgroundLayer.show();
        FunnyPictures.backgroundLayer.draw();
    }, false);

  document.getElementById('pavling').addEventListener('click', function() {
      FunnyPictures.hideAll();
      FunnyPictures.pavlingLayer.show();
      FunnyPictures.pavlingLayer.draw();
  }, false);

  document.getElementById('dan').addEventListener('click', function() {
      FunnyPictures.hideAll();
      FunnyPictures.danLayer.show();
      FunnyPictures.danLayer.draw();
  }, false);

  document.getElementById('hana').addEventListener('click', function() {
      FunnyPictures.hideAll();
      FunnyPictures.hanaLayer.show();
      FunnyPictures.hanaLayer.draw();
  }, false);

  document.getElementById('paul').addEventListener('click', function() {
      FunnyPictures.hideAll();
      FunnyPictures.paulLayer.show();
      FunnyPictures.paulLayer.draw();
  }, false);

  document.getElementById('sam').addEventListener('click', function() {
      FunnyPictures.hideAll();
      FunnyPictures.samLayer.show();
      FunnyPictures.samLayer.draw();
  }, false);

  document.getElementById('alex').addEventListener('click', function() {
      FunnyPictures.hideAll();
      FunnyPictures.alexLayer.show();
      FunnyPictures.alexLayer.draw();
  }, false);


  // Save button
  $('#generate').on('click', function() {
    stage.toDataURL({
      callback: function(dataUrl) {
        document.getElementById('canvasImg').src = dataUrl;
            }
    });
  });

  
};

$(FunnyPictures.setup)