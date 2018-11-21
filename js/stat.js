'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;

var GISTO_WIDTH = 40;
var GISTO_HEIGHT = 150;
var GISTO_GAP = 50;

var CONTENT_INDENT = 60;

var COLUMN_DY = 90;
var NAMES_Y = 260;
var TIMES_DY = 230;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var getMaxElement = function (arrNumbers) {
  var maxElement = arrNumbers[0];

  for (var i = 0; i < arrNumbers.length; i++) {
    if (arrNumbers[i] > maxElement) {
      maxElement = arrNumbers[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  var setGistoCanvasColumn = function (i) {
    ctx.fillRect(CLOUD_X + CONTENT_INDENT + i * (GISTO_GAP + GISTO_WIDTH), COLUMN_DY + GISTO_HEIGHT, GISTO_WIDTH, -(GISTO_HEIGHT * times[i] / maxTime));
  };

  var setGistoCanvasColor = function (i) {
    ctx.fillStyle = RandomRGBA;
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
  };

  var setCanvasNames = function (i) {
    ctx.fillText(names[i], CLOUD_X + CONTENT_INDENT + i * (GISTO_WIDTH + GISTO_GAP), NAMES_Y);
  };

  ctx.fillStyle = '#000';

  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + 10, CLOUD_Y + 40);
  ctx.fillText('Список результатов', CLOUD_X + 10, CLOUD_Y + 55);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    var RandomRGBA = 'rgba(0, ' + getRandomInt(0, 255) + ', 255, 1)';
    setGistoCanvasColor(i);
    setGistoCanvasColumn(i);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), CLOUD_X + CONTENT_INDENT + i * (GISTO_WIDTH + GISTO_GAP), -(GISTO_HEIGHT * times[i] / maxTime) + TIMES_DY);
    setCanvasNames(i);
  }
};
