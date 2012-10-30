# Raphael LED gauge
- Raphael plugin
- MIT license

Example
-------

```
var led = Raphael('gauge', 100, 300).ledGauge({
	div: document.getElementById('gauge'),
	min: 0,
	max: 100,
	title: 'CPU Usage',
	unit: '%',
	direction: 0,
	margin: {
		left: '30px',
		right: '30px',
		top: '40px',
		bottom: '40px'
	},
	thresholds: {
		values: [50, 80, 100],
		colors: ['#00ff00', '#f0f000', '#ff0000']
	}
});
led.setTo(99);
```

Options
-------

* div: wrapper div
* min: min number
* max: max number
* title: gauge title
* unit: unit
* direction: 0 | 1    0 - 'vertical', 1 - 'horizontal'
* margin: margin
* thresholds: 
	* values: [50, 80, 100] = [0, 50], [50, 80], [80, 100]
	* colors: color array