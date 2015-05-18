var Bench = require('benchmark')
  , suite = new Bench.Suite
  , bench = require('beautify-benchmark')

var obj = {}, map = new Map()

for (var i=0; i<10000; i++) {
  obj[i] = i
  map.set(i, i)
}

suite.add('get object key', function() {
  for (var i=0; i<10000; i++) {
    var a = obj[i]
  }
})

suite.add('get map key', function() {
  for (var i=0; i<10000; i++) {
    var a = map.get(i)
  }
})

suite.on('complete', function() {
  bench.log()
})

suite.on('cycle', function(event) {
  bench.add(event.target)
})

suite.on('start', function() {
  console.log('starting...')
}).run({ async: false })
