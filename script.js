angular.module('app', ['gm.datepickerMultiSelect','ngDropdowns'])
.controller('AppCtrl', function($scope) {
  this.activeDate = null;
  this.activeDate2 = null;
  $scope.showEvents = false;    
  this.selectedDates = [new Date().setHours(0, 0, 0, 0)];
  this.selectedDates2 = [new Date().setHours(0, 0, 0, 0)];
  this.type = 'individual';
  var ical_file = 'https://cdn.rawgit.com/SantoshArasappa/testApp/117485d1/nfcnorth.ics';
  $scope.show2pickers = false;
  $scope.countries = [];
    $scope.selectedLoc = "Not Selected";
    $scope.selectedGame = 'NFL';
  $scope.ddSelectOptions = [
    {
      text: 'NBA',
      value: 'NBA'
    }, {
      text: 'Cricket',
      value: 'Cricket'
    },
      {
      text: 'Soccer',
      value: 'Soccer'
    },
    {
      text: 'Rugby',
      value: 'Rugby'
    }  
  ];         
    
    $scope.locationOptions = [
    {
      text: 'USA',
      value: 'USA'
    }, {
      text: 'India',
      value: 'India'
    },
    {
      text: 'UK',
      value: 'UK'
    }  
  ];
    
    
    $scope.folderStructure = [
        
        {
          text:  'USA',
          value: [
                {
                   text: 'NBA',
                   value: 'NBA'
                }
            ]
        },
         {  text: "India",
            value: [
                {
                   text: 'Cricket',
                   value: 'Cricket'
                }
            ]
         },
          {  text: "UK",
             value: [
                {
                   text: 'Rugby',
                   value: 'Rugby'
                }
            ]
          }
    ];
    
    
    
    $scope.locationdd = [];
    
   $scope.ddSelectSelected = {
    text: "Select an Option"
  };    
     
    
    getCityList1 = function(events){
      var objPush1 = {
      text: 'Not Selected',
      someprop: 'Not Selected'
    };
    
       // $scope.locationdd.push(objPush1);
        //Foreach event
        var uniqueLocs = new Map();
				events.forEach(function(event){
                    
                  if(event.LOCATION && !uniqueLocs.get(event.LOCATION)){    
                       var objPush = {
                              text: event.LOCATION,
                              someprop: event.LOCATION
                            };
                        uniqueLocs.set(event.LOCATION,event.LOCATION);
                        $scope.locationdd.push(objPush);
                  }
				});
        
        
    };
    
    
    
     
    displayDemo = function(events){
      //Foreach event
				events.forEach(function(event){
					//Create a list item
					var li = document.createElement('li');
					//Add details from cal file.
					li.innerHTML = '<strong>' +event.SUMMARY + '</strong><br/> ' +
					event.day + ': ' +event.start_time + ' - ' + event.end_time + ' ('+event.start_date+ ')' ;
					//Add list item to list.
					document.getElementById('calendar').appendChild(li);	
				});
        
        
    };
    
    displayDemoWithFilters = function(events,datesRangeMap){
        var eventsResultsFilteredLocal = [];
        
      //Foreach event
				events.forEach(function(event){
                    if(datesRangeMap.get(event.start_date) 
                       /*&& 
                       ($scope.selectedLoc.text === null || $scope.selectedLoc.text === "" || $scope.selectedLoc.text === event.LOCATION)
                      && 
                      ($scope.selectedGame.text === null || $scope.selectedGame.text === "" || $scope.selectedGame.text === event.LOCATION)*/
                      ){
                        eventsResultsFilteredLocal.push(event);
                        //Create a list item
                        var li = document.createElement('li');
                        //Add details from cal file.
                       // li.innerHTML = '<strong>' +event.SUMMARY + '</strong><br/> ' +
                        //event.day + ': ' +event.start_time + ' - ' + event.end_time + ' ('+event.start_date+ ')' ;
                        //Add list item to list.
                       // document.getElementById('calendar').appendChild(li);
                    }
				});
        
        return eventsResultsFilteredLocal;
    };
    
  ical_parser = function (feed_url, callback,dateFirst){
	//store of unproccesed data.
	this.raw_data = null;
	//Store of proccessed data.
	this.events = [];
    
      
      
	
	/**
	 * loadFile
	 * Using AJAX to load the requested .ics file, passing it to the callback when completed.
	 * @param url URL of .ics file
	 * @param callback Function to call on completion.
	 */
	this.loadFile = function(url, callback){
		//Create request object
		try {xmlhttp = window.XMLHttpRequest?new XMLHttpRequest(): new ActiveXObject("Microsoft.XMLHTTP");}  catch (e) { }
		//Grab file
		xmlhttp.onreadystatechange = function(){
			if ((xmlhttp.readyState == 4) && (xmlhttp.status == 200)) {
				//On success, run callback.
				callback(xmlhttp.responseText);
			}
		}
		xmlhttp.open("GET", url, true);
		xmlhttp.send(null);
	}
	
	/**
	 * makeDate
	 * Convert the dateformat used by ICalendar in to one more suitable for javascript.
	 * @param String ical_date 
	 * @return dt object, includes javascript Date + day name, hour/minutes/day/month/year etc.
	 */
	this.makeDate = function(ical_date,dateFirst){
		//break date apart
        
        var dt = {};
        
        if(dateFirst){
        
            dt =  {
                year: ical_date.substr(0,4),
                day: ical_date.substr(4,2),
                month: ical_date.substr(6,2),
                hour: ical_date.substr(9,2),
                minute: ical_date.substr(11,2)
            }
        }else{
            
            dt =  {
                year: ical_date.substr(0,4),
                month: ical_date.substr(4,2),
                day: ical_date.substr(6,2),
                hour: ical_date.substr(9,2),
                minute: ical_date.substr(11,2)
            }
            
        }
		//Create JS date (months start at 0 in JS - don't ask)
		dt.date = new Date(dt.year, (dt.month-1), dt.day, dt.hour, dt.minute);
		//Get the full name of the given day
		dt.dayname =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][dt.date.getDay()];
		
		return dt;
	}
	
	/**
	 * parseICAL
	 * Convert the ICAL format in to a number of javascript objects (Each representing a date)
	 *
	 * @param data Raw ICAL data
	 */
	this.parseICAL = function(data,dateFirst){
		//Ensure cal is empty
		this.events = [];
		
		//Clean string and split the file so we can handle it (line by line)
		cal_array = data.replace(new RegExp( "\\r", "g" ), "").split("\n");
		
		//Keep track of when we are activly parsing an event
		var in_event = false;
		//Use as a holder for the current event being proccessed.
		var cur_event = null;
		for(var i=0;i<cal_array.length;i++){
			ln = cal_array[i];
			//If we encounted a new Event, create a blank event object + set in event options.
			if(!in_event && ln == 'BEGIN:VEVENT'){
				in_event = true;
				cur_event = {};
			}
			//If we encounter end event, complete the object and add it to our events array then clear it for reuse.
			if(in_event && ln == 'END:VEVENT'){
				in_event = false;
				this.events.push(cur_event);
				cur_event = null;
			}
			//If we are in an event
			if(in_event){
				//Split the item based on the first ":"
				idx = ln.indexOf(':');
				//Apply trimming to values to reduce risks of badly formatted ical files.
				type = ln.substr(0,idx).replace(/^\s\s*/, '').replace(/\s\s*$/, '');//Trim
				val = ln.substr(idx+1,ln.length-(idx+1)).replace(/^\s\s*/, '').replace(/\s\s*$/, '');
				
				//If the type is a start date, proccess it and store details
				//if(type =='DTSTART'){
                if(type.indexOf('DTSTART') != -1 ){
					dt = this.makeDate(val,dateFirst);
					val = dt.date;
					//These are helpful for display
					cur_event.start_time = dt.hour+':'+dt.minute;
					cur_event.start_date = dt.day+'/'+dt.month+'/'+dt.year;
					cur_event.day = dt.dayname;
				}
				//If the type is an end date, do the same as above
				//if(type =='DTEND'){
                if(type.indexOf('DTEND') != -1 ){
					dt = this.makeDate(val,dateFirst);
					val = dt.date;
					//These are helpful for display
					cur_event.end_time = dt.hour+':'+dt.minute;
					cur_event.end_date = dt.day+'/'+dt.month+'/'+dt.year;
					cur_event.day = dt.dayname;
				}
				//Convert timestamp
				//if(type =='DTSTAMP') 
                if(type.indexOf('DTSTAMP') != -1 ){
                    val = this.makeDate(val,dateFirst).date;
                }
				//Add the value to our event object.
				cur_event[type] = val;
			}
		}
		//Run this to finish proccessing our Events.
		this.complete();
	}
	/**
	 * complete
	 * Sort all events in to a sensible order and run the original callback
	 */
	this.complete = function(){
		//Sort the data so its in date order.
		this.events.sort(function(a,b){
			return a.DTSTART-b.DTSTART;
		});
		//Run callback method, if was defined. (return self)
		if(typeof callback == 'function') callback(this);
	}
	/**
	 * getEvents
	 * return all events found in the ical file.
	 *
	 * @return list of events objects
	 */
	this.getEvents = function(){
		return this.events;
	}
	
	/**
	 * getFutureEvents
	 * return all events sheduled to take place after the current date.
	 *
	 * @return list of events objects
	 */
	this.getFutureEvents = function(){
		var future_events = [], current_date = new Date();
		
		this.events.forEach(function(itm){
			//If the event starts after the current time, add it to the array to return.
			if(itm.DTSTART > current_date) future_events.push(itm);
		});
		return future_events;
	}
	
	/**
	 * load
	 * load a new ICAL file.
	 *
	 * @param ical file url
	 */
	this.load = function(ical_file,dateFirst){
		var tmp_this = this;
		this.raw_data = null;
		this.loadFile(ical_file, function(data){
			//if the file loads, store the data and invoke the parser
			tmp_this.raw_data = data;
			tmp_this.parseICAL(data,dateFirst);
		});
	}
	
	//Store this so we can use it in the callback from the load function.
	var tmp_this = this;
	//Store the feed url
	this.feed_url = feed_url;
	//Load the file
	this.load(this.feed_url,dateFirst);
};    
  
  this.removeFromSelected = function(dt) {
      
     
    this.selectedDates.splice(this.selectedDates.indexOf(dt), 1);
  }
  
  this.getEventsDetails = function(){
       
   ical_parser(ical_file, function(cal){
					//When ical parser has loaded file
					//get future events
					//events = cal.getFutureEvents();
                    this.events = cal.events;
                    $scope.eventsResults = cal.events;
                    $scope.places = [];
                    var summary = "";
                    $scope.eventsResults.forEach(function(events){
					   summary = events.SUMMARY.split("at ");
                        
                          
                        //Add details from cal file.
                        if(summary.length > 1 && $scope.places.indexOf(summary) === -1){
                           $scope.places.push(events.SUMMARY.split("at ")[1]);
                        }
					
				    });
       
                    this.showCal = true;
                    //return this.eventsResults;
					//And display them
					//this.displayDemo(events);
                    //this.getCityList($scope.eventsResults);
       return ;
				},false); 
       
       
       
   };
    
   this.filterEvents = function(){
       $scope.showEvents = false;
       //var formatedDates = [];
       var formatedDates = new Map();
       this.selectedDates.forEach(function(dt){
           var pattern = /(\d{4})(\d{2})(\d{2})/;
          dt = dt + "";
         // $scope.date = new Date(dt.replace(pattern, '$1-$2-$3'));
          $scope.date = new Date(dt);
           $scope.date2 = $scope.date.day+'/'+$scope.date.month+'/'+$scope.date.year;
            $scope.date1 = $scope.date;
          
          
          var d = new Date(dt * 1),	// Convert the passed timestamp to milliseconds
		yyyy = d.getFullYear(),
		mm = ('0' + (d.getMonth() + 1)).slice(-2),	// Months are zero based. Add leading 0.
		dd = ('0' + d.getDate()).slice(-2),			// Add leading 0.
		hh = d.getHours(),
		h = hh,
		min = ('0' + d.getMinutes()).slice(-2),		// Add leading 0.
		ampm = 'AM',
		time;
			
	if (hh > 12) {
		h = hh - 12;
		ampm = 'PM';
	} else if (hh === 12) {
		h = 12;
		ampm = 'PM';
	} else if (hh == 0) {
		h = 12;
	}
	
	// ie: 2013-02-18, 8:35 AM	
	time = mm + '/' + dd + '/' + yyyy;
          
      // formatedDates.push(time);   
           formatedDates.set(time,time);
          
        });
     $scope.folderStructure.forEach(function(folders){
      if($scope.selectedLoc.text === folders.text){
          
          var game = folders.value[0].text;
          
          $scope.eventsResultsFiltered = [];
          if($scope.selectedGame.text === undefined || $scope.selectedGame.text === "" || $scope.selectedGame.text === game){
                var fileLocation = folders.text + '/' + game + '.ics';
                $scope.gameSelected = game;
                $scope.placeSelected = folders.text;
              var dateFirst = false;
              if(game === 'Cricket'){
                  
                  dateFirst = true;
              }
              ical_parser(fileLocation, function(cal){
                        //When ical parser has loaded file
                        //get future events
                        //events = cal.getFutureEvents();
                        this.events = cal.events;
                        $scope.eventsResults = cal.events;
                        $scope.places = [];
                        //$scope.eventsResultsFiltered = cal.events;
                        var returnResults = displayDemoWithFilters($scope.eventsResults,formatedDates);
                        $scope.$apply(function(){$scope.eventsResultsFiltered = returnResults;$scope.showEvents = true;});
                        
                        var summary = "";
                        $scope.eventsResults.forEach(function(events){
                           summary = events.SUMMARY.split("at ");


                            //Add details from cal file.
                            if(summary.length > 1 && $scope.places.indexOf(summary) === -1){
                               $scope.places.push(events.SUMMARY.split("at ")[1]);
                            }

                        });

                        this.showCal = true;
                        //return this.eventsResults;
                        //And display them
                        //this.displayDemo(events);
                       // this.getCityList($scope.eventsResults);
                        return ;
                    },dateFirst); 
          
            }

          }
          
      });
         
         
         
    // }
       
      
                      
       
       
      // displayDemoWithFilters($scope.eventsResults,formatedDates);
       
       
   }
   
   this.clearFilters = function(){
       this.selectedDates = [new Date().setHours(0, 0, 0, 0)];
       $scope.eventsResultsFiltered = [];
       $scope.selectedLoc = "Not Selected";
        $scope.selectedGame = 'Not Selected';
       $scope.showEvents = false;
   }
   
   
  this.showCal = false;
  this.getEventsDetails();
  //this.eventsResults = this.getEventsDetails();
  
  
  this.removeFromSelected2 = function(dt) {
    this.selectedDates2.splice(this.selectedDates2.indexOf(dt), 1);
  }
});