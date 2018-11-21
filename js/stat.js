'use strict';

var CloudWidth = 420;
var CloudHeight = 270;
var CloudX = 100;
var CloudY = 10;

var GistoWidth = 40;
var GistoHeight = 150;
var GistoGap = 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CloudWidth, CloudHeight);
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
  renderCloud(ctx, CloudX + 10, CloudY + 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CloudX, CloudY, '#fff');

  var getGistoСolumn = function () {
    return ctx.fillRect(CloudX + 60 + i * (GistoGap + GistoWidth), 90 + GistoHeight, GistoWidth, -(GistoHeight * times[i] / maxTime));
  };

  var getNamesСolumn = function () {
    return ctx.fillText(names[i], CloudX + 60 + i * 90, 260);
  };

  ctx.fillStyle = '#000';

  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CloudX + 10, CloudY + 40);
  ctx.fillText('Список результатов', CloudX + 10, CloudY + 55);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    var RandomRGBA = 'rgba(0, ' + getRandomInt(0, 255) + ', 255, 1)';
    ctx.fillStyle = RandomRGBA;
    getGistoСolumn();
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      getGistoСolumn();
    }
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), CloudX + 60 + i * 90, -(GistoHeight * times[i] / maxTime) + 230);
    getNamesСolumn();
  }
};
