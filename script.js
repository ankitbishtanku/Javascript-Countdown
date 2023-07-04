
		let countDown;
		let timeInterval;

		let endTime = document.querySelector('input[name="endDate"]');
		let clock = document.querySelector('#clock');
		let days  = document.querySelector('.days');
		let hours  = document.querySelector('.hours');
		let minutes = document.querySelector('.minutes');
		let seconds = document.querySelector('.seconds');

		let savedTime = localStorage.getItem("countDown") || false;
		

		if(savedTime){
			startClock(savedTime);
			console.log(savedTime)
			let countDate = new Date(savedTime);
			endTime.valueAsDate = countDate;
			console.log(countDate) 
		}

		endTime.addEventListener('change', function(e){
			e.preventDefault();
			clearInterval(timeInterval);
			// timeRemaining(endTime);
			let tempEndDate = new Date(this.value);
			localStorage.setItem("countDown", tempEndDate)
			startClock(tempEndDate);
		})

		function startClock(endTime){
			console.log(endTime)
			function updateCounter(){
				let rt = timeRemaining(endTime);
				console.log(rt, "aaaaa");
				console.log("show")
				days.innerHTML = rt.days;
				hours.innerHTML = rt.hours;	
				minutes.innerHTML = rt.minutes;	
				seconds.innerHTML = rt.seconds;
				if(rt.total<=0){
					clearInterval(timeInterval);
				}		
			}
			updateCounter();
			timeInterval = setInterval(updateCounter, 1000);

		}


		function timeRemaining(endTime){
			console.log(endTime.value)
			const t = Date.parse(endTime) - Date.parse(new Date());
			let sec = Math.floor((t/1000)%60);
			let min = Math.floor((t/1000/60)%60); 
			let hrs = Math.floor((t/(1000*60*60))%24); 
			let day = Math.floor(t/(1000*60*60*24));  
			console.log(sec, min, hrs, day)
			console.log("hlw")
			return {
				'total' : t,
				'days'	: day,
				'hours' : hrs,		
				'minutes' : min,
				'seconds' : sec,
			}
		}


		