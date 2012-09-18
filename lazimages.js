#!/usr/bin/env node

function make(){
  var name = base[0]+((times > 1)?"_"+times:"")+"."+(base[1]||'jpg');
  gm(argv.w, argv.h, "#cccccc")
    .font("Arial.ttf", Math.floor(argv.w/10))
    .fill("#ffffff")
    .drawText(0, 0, argv.w+"x"+argv.h,"Center")
    .write(name, function (err) {
      if (!err) {
        times --;
        if (times > 0){
          make();
        } else {
          console.log('done');
        }
      } else {
        console.log(err);
      }
    });
}

var fs = require('fs'),
    gm = require('gm'),
    argv = require('optimist')
      .default('t', 1)
      .default('f', 'image.png')
      .usage('Usage: $0 --width [number] --height [number] --file [string] --times [number]')
      .alias('w', 'width')
      .alias('h', 'height')
      .alias('f', 'file')
      .alias('t', 'times')
      .demand(['w','h'])
      .argv,
    times = argv.t,
    base = (argv.f).split('.');


make();