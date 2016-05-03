(function () {
	// var button1 = document.getElementById('button1');
	// var button2 = document.getElementById('button2');
	// var button3 = document.getElementById('button3');
	// var button4 = document.getElementById('button4');

	benotify.debug = true;

	document.querySelector('#button1').addEventListener('click', function () {
		console.log('click 1');
		benotify.show({ title: 'Gretting', text: 'Good Morning' });
	})

	document.querySelector('#button2').addEventListener('click', function () {
		console.log('click 2');
		benotify.show({ title: 'Gretting', text: 'Good Afternoon', timeout: 10000 });
	})

	document.querySelector('#button3').addEventListener('click', function () {
		console.log('click button 3');
		benotify.show({ title: 'Gretting', text: 'Good Night', timeout: 90000 });
	})

	document.querySelector('#button4').addEventListener('click', function () {
		benotify.show({ title: 'Gretting', text: 'Good Long Wikend', timeout: 120000 });
	})
}());
