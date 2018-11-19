var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx ,names ,times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.fillStyle = '#000';

  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!\nСписок результатов', 110, 35);

  var maxTime = getMaxElement(times);

  for (var i=0; i<names.length; i++) {
    var RandomRGBA = 'rgba(0, '+getRandomInt(0, 255)+', 255, 1)';
    ctx.fillStyle = RandomRGBA;
    ctx.fillRect(160 + i * 90, 70 + 150, 40, -(150 * times[i] / maxTime));
    if (names[i]==='Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)'
      ctx.fillRect(160 + i * 90, 70 + 150, 40, -(150 * times[i] / maxTime));
    }
    ctx.fillStyle = '#000'
    ctx.fillText(Math.round(times[i]), 160 + i * 90, 60);
    ctx.fillText(names[i], 160 + i * 90, 250);
  }
};
