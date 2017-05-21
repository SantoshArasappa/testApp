angular.module('app', ['ngDropdowns', 'ngAnimate', 'ngSanitize', 'ui.bootstrap','angular.filter'])

.factory('services', function($http) {
    
    var headers = {
				'Access-Control-Allow-Origin' : '*',
				'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT'
			};
    
    var getData = function(url,dateInLoop,filesUrl,country) {

        // Angular $http() and then() both return promises themselves 
        return $http({method:"GET", url:url}).then(function(result){
            var object = {
              url:  '',
              value: ''
            };
            // What we return here is the data that will be accessible 
            // to us after the promise resolves
            object.url = url;
            object.filesUrl = filesUrl;
            object.value = result.data;
            object.dateInLoop = dateInLoop;
            object.country = country;
            return object;
        });
    };

    return { getData: getData };
})

.controller('AppCtrl', function($scope, $http, services) {
  this.activeDate = null;
  var test123456 = null;
  this.activeDate2 = null;
  $scope.showEvents = false;  
  $scope.isLoading = false;    
  $scope.selectedDates = undefined;
  $scope.selectedDates2 = [new Date().setHours(0, 0, 0, 0)];
  this.type = 'individual';
  var ical_file = 'https://cdn.rawgit.com/SantoshArasappa/testApp/117485d1/nfcnorth.ics';
  var fileUrl ='https://cdn.rawgit.com/SantoshArasappa/testApp/ac934c65';
  fileUrl = 'https://raw.githubusercontent.com/SantoshArasappa/testApp/master/Games';   
    $scope.loadPng = 'https://raw.githubusercontent.com/SantoshArasappa/testApp/master/Loading.png';
 // var parentFolder = 'https://github.com/SantoshArasappa/testApp/tree/7e0ef7ffb8e09571e575da7c8b05031fda7d28ca/Games';
    //'https://github.com/SantoshArasappa/testApp.git/tree/master/Games?raw=true';
    
    
  var parentFolder = '/Games';
  $scope.show2pickers = false;
 // $scope.countries = [];
 // $scope.games = [];
  $scope.dateTypesMap = [];
  $scope.datesList = [];    
  
  $scope.isError = false;  
  
  /*$scope.countries.push('Australia');    
  $scope.countries.push('Bangladesh');    
  $scope.countries.push('Europe'); 
  
  $scope.countries.push('India');    
  $scope.countries.push('New_Zealand');    
  $scope.countries.push('Pakistan'); 
  
  $scope.countries.push('South_Africa');    
  $scope.countries.push('Sri_Lanka');    
  $scope.countries.push('United_Kingdom'); 
  
  $scope.countries.push('United_States_of_America');    
  $scope.countries.push('West_Indies');    
  $scope.countries.push('Zimbabwe'); */
  
    
    
    
  /*$scope.games.push('Cricket');     
  $scope.games.push('AFL');
  $scope.games.push('Football');   
  $scope.games.push('Rugby');      

  $scope.games.push('Baseball');     
  $scope.games.push('Basketball');
  $scope.games.push('Boxing'); 
  $scope.games.push('Bike'); */
    
    
       
  
    
  
    

      
    
    
    /*$scope.countries = {
    "Australia": "Australia",
    "Bangladesh": "Bangladesh",
   // "Europe": "Europe",
    
    "India": "India",
    "New_Zealand": "New Zealand",
    "Pakistan": "Pakistan",
        
    "South_Africa": "South Africa",
    "Sri_Lanka": "Sri Lanka",
    "United_Kingdom": "United Kingdom",
       
    "United_States_of_America": "United States of America",
    "West_Indies": "West Indies",
    "Zimbabwe": "Zimbabwe",
        
    "Ireland": "Ireland",
    "England": "England",
    "Wales": "Wales",
    
    "Scotland": "Scotland",
    "Italy": "Italy",    
    
};*/
    
   
    
  /*  $scope.countries = {
    "Country":"Country",    
    "England": "England",
    "India": "India",
    "Italy": "Italy",    
    "Spain": "Spain",
    "Wales": "Wales",
    "West_Indies": "West Indies"
};*/
    
    $scope.datesList = {
    "Day/Dates":"Day/Dates",    
    "Today": "Today",
    "week": "One Week",
    "TwoWeeks": "Two Weeks",    
    "Custom": "Date Range"
};

    
    /*var countriesMap = new Map();    
     countriesMap.set('Australia','Australia');
     countriesMap.set('Bangladesh','Bangladesh');
     countriesMap.set('India','India');
     countriesMap.set('New_Zealand','New Zealand');
     countriesMap.set('Pakistan','Pakistan');
     countriesMap.set('South_Africa','South Africa');
     countriesMap.set('Sri_Lanka','Sri Lanka');
     countriesMap.set('United_Kingdom','United Kingdom');
     countriesMap.set('United_States_of_America','United States of America');
     countriesMap.set('West_Indies','West Indies');
     countriesMap.set('Zimbabwe','Zimbabwe');
    
     countriesMap.set('Ireland','Ireland');
     countriesMap.set('England','England');
     countriesMap.set('Wales','Wales');
     countriesMap.set('Scotland','Scotland');
     countriesMap.set('Italy','Italy');*/
    
    
    
     
    
    /*$scope.games = {
    "Cricket": "Cricket",
    "AFL": "AFL",
    "Football": "Football",
    
    "Rugby": "Rugby",
    "New_Zealand": "New Zealand",
    "Pakistan": "Pakistan",
        
    "South_Africa": "South Africa",
    "Sri_Lanka": "Sri Lanka",
    "United_Kingdom": "United Kingdom",
       
    "United_States_of_America": "United States of America",
    "West_Indies": "West Indies",
    "Zimbabwe": "Zimbabwe"
    
    
};*/
    // $scope.multiGamesList.push('Football'); 
    
  /*$scope.multiGamesList.push('Bike'); 
    $scope.multiGamesList.push('Rugby'); */
    
  var countryMap = new Map();    
     countryMap.set('Qatar','MotoGP.ics');
     countryMap.set('Argentina','MotoGP.ics');
     countryMap.set('America','MotoGP.ics');
     countryMap.set('Spain','MotoGP.ics');
     countryMap.set('France','MotoGP.ics');
     countryMap.set('Netherlands','MotoGP.ics');
     countryMap.set('Germany','MotoGP.ics');
     countryMap.set('Austria','MotoGP.ics');
     countryMap.set('Czech Republic','MotoGP.ics');
     countryMap.set('Great Britain','MotoGP.ics');
     countryMap.set('Italy','MotoGP.ics');
     countryMap.set('Japan','MotoGP.ics');
     countryMap.set('Australia','MotoGP.ics');
     countryMap.set('Malaysia','MotoGP.ics');
     countryMap.set('Valencia','MotoGP.ics');
     countryMap.set('default','MotoGP.ics');
    
    
     var RugbyMap = new Map();
    // RugbyMap.set('Wales','Pro12.ics');
     RugbyMap.set('Ireland','Pro12.ics');
     RugbyMap.set('England','Pro12.ics');
     RugbyMap.set('Scotland','Pro12.ics');
     RugbyMap.set('Italy','Pro12.ics');
     RugbyMap.set('default','Pro12.ics');
    
     RugbyMap.set('Australia','Super_Rugby.ics,Rugby_Championship.ics');
     RugbyMap.set('South_Africa','Super_Rugby.ics,Rugby_Championship.ics');
     RugbyMap.set('New_Zealand','Super_Rugby.ics,Rugby_Championship.ics');
     RugbyMap.set('Singapore','Super_Rugby.ics');
     RugbyMap.set('Japan','Super_Rugby.ics');
     RugbyMap.set('Argentina','Super_Rugby.ics,Rugby_Championship.ics');
     RugbyMap.set('Fiji','Super_Rugby.ics');
     RugbyMap.set('Samoa','Super_Rugby.ics');
     RugbyMap.set('France','Rugby_Union_Top_14.ics');
    
     var engFootballMap = new Map();
    
    //engFootballMap.set('default','English_Premier_League.ics'); 
    engFootballMap.set('England','English_Premier_League.ics');
    engFootballMap.set('Wales','English_Premier_League.ics,UEFA_Champions_League_Final.ics');
    engFootballMap.set('Sweden','UEFA_Champions_League_Final.ics');
    
    var boxingMap = new Map();
    
    boxingMap.set('Sweden','UFC.ics'); 
    boxingMap.set('Brazil','UFC.ics');
    boxingMap.set('New_Zealand','UFC.ics');
    boxingMap.set('Singapore','UFC.ics');
    boxingMap.set('USA','UFC.ics'); 
    boxingMap.set('Mexico','UFC.ics');
    boxingMap.set('Netherlands','UFC.ics');
    boxingMap.set('Canada','UFC.ics');
    boxingMap.set('Japan','UFC.ics'); 
    boxingMap.set('Poland','UFC.ics');
    boxingMap.set('Scotland','UFC.ics');
    
    
    
    
    var USAIceHockeyMap = new Map();
    
  //  USAIceHockeyMap.set('USA','NHL_Playoffs.ics');
  //  USAIceHockeyMap.set('Canada','NHL_Playoffs.ics');
    
    var motorRacingMap = new Map();
    
    motorRacingMap.set('Russia','Formula_1.ics');
    motorRacingMap.set('Spain','Formula_1.ics');
    motorRacingMap.set('Monaco','Formula_1.ics');
    motorRacingMap.set('Canada','Formula_1.ics');
    motorRacingMap.set('USA','Formula_1.ics');
    motorRacingMap.set('Azerbaijan','Formula_1.ics');
    motorRacingMap.set('Austria','Formula_1.ics');
    motorRacingMap.set('England','Formula_1.ics');
    motorRacingMap.set('Hungary','Formula_1.ics');
    motorRacingMap.set('Belgium','Formula_1.ics');
    motorRacingMap.set('Italy','Formula_1.ics');
    motorRacingMap.set('Singapore','Formula_1.ics');
    motorRacingMap.set('Malaysia','Formula_1.ics');
    motorRacingMap.set('Japan','Formula_1.ics');
    motorRacingMap.set('USA','Formula_1.ics');
    motorRacingMap.set('Mexico','Formula_1.ics');
    motorRacingMap.set('Brazil','Formula_1.ics');
    motorRacingMap.set('UAE','Formula_1.ics');
     
    
    var mutliCountrySportMap = new Map();    
   // mutliCountrySportMap.set('Bike',countryMap);
    mutliCountrySportMap.set('Football',engFootballMap);
    mutliCountrySportMap.set('Ice_Hockey',USAIceHockeyMap);
    mutliCountrySportMap.set('Motor_Racing',motorRacingMap);
    mutliCountrySportMap.set('Rugby',RugbyMap);
    mutliCountrySportMap.set('Boxing',boxingMap);
    
    
    
    $scope.multiGamesList = [];
    $scope.multiGamesList.push('Football'); 
    $scope.multiGamesList.push('Ice_Hockey');
    $scope.multiGamesList.push('Motor_Racing');
    $scope.multiGamesList.push('Rugby');
    $scope.multiGamesList.push('Boxing');
    
    $scope.gmtMap = new Map();
    
    /*$scope.gmtMap.set('India','GMT +05:30');
    $scope.gmtMap.set('Spain','GMT +02:00');
    $scope.gmtMap.set('West_Indies','GMT -05:00');*/
    
    
    //Russia
    //Spain
  
    
    
    
    // Changes for any new files start
    
    //Any new sport type added
  /*  $scope.games.push('');
    $scope.games.push('Car_Racing');
    $scope.games.push('');     
    $scope.games.push('');
    $scope.games.push('');
  //  $scope.games.push('Ice_Hockey');
    $scope.games.push('');
    $scope.games.push('');
    $scope.games.push('');*/
    
    $scope.games = {
        "Sport":"Sport",
        "Baseball":"Baseball",
        "Basketball":"Basketball",
        "Cricket":"Cricket",
        "Football": "Football",
        "Golf": "Golf",
        "Motor_Racing": "Motor Racing",
        "Rugby": "Rugby",
        "Tennis": "Tennis"
    };
    
    // Any new country List
    
   
    
    $scope.countries = {
        "Country":"Country",
        "Argentina":"Argentina",
        "Azerbaijan":"Azerbaijan",
        "Australia": "Australia",
        "Austria": "Austria",
        "Belgium": "Belgium",
        "Brazil": "Brazil",
        "Canada":"Canada",
        "England": "England",
        "Fiji": "Fiji",
        "France": "France",
        "Hungary": "Hungary",
        "India": "India",
        "Ireland": "Ireland", 
        "Italy": "Italy",
        "Japan": "Japan",
        "Malaysia": "Malaysia",
        "Mexico": "Mexico",
        "Monaco": "Monaco",
        "Poland": "Poland",
        "Netherlands": "Netherlands",
        "New_Zealand":"New Zealand",
        "Russia":"Russia",
        "Scotland": "Scotland",
        "Singapore": "Singapore",
        "South_Africa": "South Africa",
        "Samoa": "Samoa", 
        "Spain": "Spain",
        "Sweden": "Sweden",
        "Wales": "Wales",
        "West_Indies": "West Indies",
        "UAE": "UAE", 
        "USA": "USA"
    };
    
    //Any country added we need to add here to map _ country into space country name
    var countriesMap = new Map();   
     /*countriesMap.set('Canada','Canada');
     countriesMap.set('England','England');
     countriesMap.set('India','India');
     countriesMap.set('Italy', 'Italy');
     countriesMap.set('Wales','Wales');
     countriesMap.set('West_Indies','West Indies');
     countriesMap.set('Spain','Spain');
     countriesMap.set('France','France');
    countriesMap.set("Georgia","Georgia");
    countriesMap.set("USA","USA");
    countriesMap.set("New_Zealand","New Zealand");
    countriesMap.set("Scotland","Scotland");
    countriesMap.set('Russia','Russia');
     countriesMap.set('Monaco', 'Monaco');
     countriesMap.set('Azerbaijan','Azerbaijan');
     countriesMap.set('Austria','Austria');
     countriesMap.set('Hungary','Hungary');
     countriesMap.set('Belgium','Belgium');
    countriesMap.set("Singapore","Singapore");
    countriesMap.set("Malaysia","Malaysia");
    countriesMap.set("Japan","Japan");
    countriesMap.set("Mexico","Mexico");
    countriesMap.set("Brazil","Brazil");
    countriesMap.set("UAE","UAE");
    countriesMap.set("South_Africa","South Africa");
    
    countriesMap.set("Scotland","Scotland");
    
    countriesMap.set("Ireland","Ireland");
    countriesMap.set("Singapore","Singapore");
    countriesMap.set("Japan","Japan");    
    countriesMap.set("Argentina","Argentina");
    countriesMap.set("Fiji","Fiji");
    countriesMap.set("Samoa","Samoa");*/
    
    countriesMap.set('Canada','Canada');
    countriesMap.set('England','England');
    countriesMap.set('India','India');
    countriesMap.set('Italy', 'Italy');
    countriesMap.set('Wales','Wales');
    countriesMap.set('West_Indies','West Indies');
    countriesMap.set('Spain','Spain');
    countriesMap.set('France','France');
    countriesMap.set("Georgia","Georgia");
    countriesMap.set("USA","USA");
    countriesMap.set("New_Zealand","New Zealand");
    countriesMap.set("Scotland","Scotland");
    countriesMap.set('Russia','Russia');
    countriesMap.set('Monaco', 'Monaco');
    countriesMap.set('Azerbaijan','Azerbaijan');
    countriesMap.set('Austria','Austria');
    countriesMap.set('Hungary','Hungary');
    countriesMap.set('Belgium','Belgium');
    countriesMap.set("Singapore","Singapore");
    countriesMap.set("Malaysia","Malaysia");
    countriesMap.set("Japan","Japan");
    countriesMap.set("Mexico","Mexico");
    countriesMap.set("Brazil","Brazil");
    countriesMap.set("UAE","UAE");
    countriesMap.set("South_Africa","South Africa");
	countriesMap.set("Scotland","Scotland");
    countriesMap.set("Ireland","Ireland");
    countriesMap.set("Singapore","Singapore");
    countriesMap.set("Japan","Japan");    
    countriesMap.set("Argentina","Argentina");
    countriesMap.set("Fiji","Fiji");
    countriesMap.set("Samoa","Samoa");
	
	countriesMap.set("Sweden","Sweden");
	countriesMap.set('Netherlands','Netherlands');
    countriesMap.set("Poland","Poland");
    
    
    
    
    //Any new GMT for new country addition
    $scope.gmtMap.set('India','-05:30');
    $scope.gmtMap.set('England','-01:00');
    $scope.gmtMap.set('Italy','-02:00');
    $scope.gmtMap.set('Wales','-01:00');
    $scope.gmtMap.set('Spain','-02:00');
    $scope.gmtMap.set('West_Indies','+05:00');
    $scope.gmtMap.set('France','-02:00');
    $scope.gmtMap.set('Georgia','-02:00');
    $scope.gmtMap.set('USA','-05:00');
    $scope.gmtMap.set('New_Zealand','-12:00');
    $scope.gmtMap.set('Scotland','-01:00');
    $scope.gmtMap.set('Singapore','-08:00');
    $scope.gmtMap.set('Japan','-03:00');
    $scope.gmtMap.set('Argentina','03:00');
    $scope.gmtMap.set('Ireland','-01:00');
    $scope.gmtMap.set('Fiji','00:00');
    $scope.gmtMap.set('Samoa','-13:00');
    $scope.gmtMap.set('Australia','-8:00');
    $scope.gmtMap.set('South_Africa','-2:00');
    $scope.gmtMap.set('Sweden','-02:00');
    $scope.gmtMap.set('Netherlands','-02:00');
    $scope.gmtMap.set('Poland','-02:00');
    
    $scope.gamesMap = new Map();
    $scope.gamesMap.set('Motor_Racing','Motor Racing');
   
    
   
    
    
$scope.gameFileListNew = 
[
	{
		url: "https://raw.githubusercontent.com/SantoshArasappa/testApp/master/Games/India/Cricket",
		value: "Indian_Premier_League.ics"

	},
	{
		url: "https://raw.githubusercontent.com/SantoshArasappa/testApp/master/Games/Australia/Cricket",
		value: "The_Ashes.ics"

	},
	{
		url: "https://raw.githubusercontent.com/SantoshArasappa/testApp/master/Games/Spain/Football",
		value: "La_Liga.ics"

	},
	{
		url: "https://raw.githubusercontent.com/SantoshArasappa/testApp/master/Games/West_Indies/Cricket",
		value: "Pakistan_Tour_of_West_Indies.ics,Afghanistan_tour_of_West_Indies.ics"
	},
    {
		url: "https://raw.githubusercontent.com/SantoshArasappa/testApp/master/Games/South_Africa/Cricket",
		value: "Australia_tour_of_South_Africa.ics,Bangladesh_tour_of_South_Africa.ics"
	},
    {
		url: "https://raw.githubusercontent.com/SantoshArasappa/testApp/master/Games/Scotland/Cricket",
		value: "Zimbabwe_tour_of_Scotland.ics"
	},
    {
		url: "https://raw.githubusercontent.com/SantoshArasappa/testApp/master/Games/Ireland/Cricket",
		value: "Ireland_Tri-Nation_Series.ics,West_Indies_tour_of_Ireland.ics"
	},
    {
		url: "https://raw.githubusercontent.com/SantoshArasappa/testApp/master/Games/England/Football",
		value: "FA_Cup.ics"
	}, 
    {
		url: "https://raw.githubusercontent.com/SantoshArasappa/testApp/master/Games/Italy/Football",
		value: "Serie_A.ics"
	},
	
	{
		url: "https://raw.githubusercontent.com/SantoshArasappa/testApp/master/Games/Multi/Football",
		value: "English_Premier_League.ics"

	},
    /*{
		url: "https://raw.githubusercontent.com/SantoshArasappa/testApp/master/Games/Multi/Ice_Hockey",
		value: "NHL_Playoffs.ics"
	},*/
    {
		url: "https://raw.githubusercontent.com/SantoshArasappa/testApp/master/Games/Multi/Rugby",
		value: "Pro12.ics"
	},
    {
		url: "https://raw.githubusercontent.com/SantoshArasappa/testApp/master/Games/Multi/Motor_Racing",
		value: "Formula_1.ics"
	},
    {
		url: "https://raw.githubusercontent.com/SantoshArasappa/testApp/master/Games/Multi/Boxing",
		value: "UFC.ics"
	},
    {
		url: "https://raw.githubusercontent.com/SantoshArasappa/testApp/master/Games/France/Tennis",
		value: "French_Open.ics"

	},
	
	{
		url: "https://raw.githubusercontent.com/SantoshArasappa/testApp/master/Games/England/Tennis",
		value: "Wimbledon.ics"
	},
    {
		url: "https://raw.githubusercontent.com/SantoshArasappa/testApp/master/Games/England/Golf",
		value: "Golf_The_Open_Championship.ics"
	},
	{
		url: "https://raw.githubusercontent.com/SantoshArasappa/testApp/master/Games/England/Rugby",
		value: "Premiership_Rugby.ics"
	},
    {
		url: "https://raw.githubusercontent.com/SantoshArasappa/testApp/master/Games/England/Cricket",
		value: "NatWest_T20_Blast.ics,Specsavers_County_Championship_Division_One.ics,Specsavers_County_Championship_Division_Two.ics,ICC_Champions_Trophy.ics"
	},
	{
		url: "https://raw.githubusercontent.com/SantoshArasappa/testApp/master/Games/France/Golf",
		value: "Golf_Ryder_Cup.ics"

	},
    {
		url: "https://raw.githubusercontent.com/SantoshArasappa/testApp/master/Games/France/Rugby",
		value: "Top_14.ics"

	},
	{
		url: "https://raw.githubusercontent.com/SantoshArasappa/testApp/master/Games/Scotland/Rugby",
		value: "Champions_Cup.ics,Challenge_Cup.ics"
	},
	{
		url: "https://raw.githubusercontent.com/SantoshArasappa/testApp/master/Games/USA/Golf",
		value: "US_Open.ics,Masters_Tournament.ics,PGA_Championship.ics"

	},
	{
		url: "https://raw.githubusercontent.com/SantoshArasappa/testApp/master/Games/USA/Tennis",
		value: "US_Open.ics"

	},
	{
		url: "https://raw.githubusercontent.com/SantoshArasappa/testApp/master/Games/USA/Baseball",
		value: "Major_League_Baseball.ics"

	},
    {
		url: "https://raw.githubusercontent.com/SantoshArasappa/testApp/master/Games/USA/Basketball",
		value: "NBA.ics"

	},
	{
		url: "https://raw.githubusercontent.com/SantoshArasappa/testApp/master/Games/New_Zealand/Rugby",
		value: "Lions_Cup.ics"

	}


]; 
    
     // Changes for any new files End
    
    
 /*   $scope.gameFileListNew = 
[
	{
		url: "/Games/India/Cricket",
		value: "Indian_Premier_League.ics"

	},
	
	{
		url: "/Games/Pakistan/Cricket",
		value: "Pakistan_Tour_of_West_Indies.ics"
	},
	
	{
		url: "/Games/Spain/Football",
		value: "La_Liga.ics"

	},
	
	{
		url: "/Games/West_Indies/Cricket",
		value: "Pakistan_Tour_of_West_Indies.ics"
	}


]; */
    
    // Date pick start
    
    $scope.today = function() {
        $scope.dt = new Date();
    };
    
    //Ravi
    $scope.fromDateChange = function(value) {
        $scope.dt = new Date();
        var currentDate = new Date(value.getTime());
        currentDate.setDate(currentDate.getDate() + 1);
       // $scope.$apply(function() { 
            $scope.selectedDates2 = currentDate;//new Date(currentDate.getDate() + 1); 
       // });
        
    };
    
  $scope.today();

  $scope.clear = function() {
    $scope.dt = null;
  };

  $scope.inlineOptions = {
    customClass: getDayClass,
    minDate: new Date(),
    showWeeks: true
  };

  $scope.dateOptions = {
    
    formatYear: 'yy',
    maxDate: new Date(2020, 5, 22),
    minDate: new Date(),
    startingDay: 1
  };

  // Disable weekend selection
  function disabled(data) {
    var date = data.date,
      mode = data.mode;
    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
  }

  $scope.toggleMin = function() {
    $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
    $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
  };

  //$scope.toggleMin();

  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

  $scope.open2 = function() {
    $scope.popup2.opened = true;
  };

  $scope.setDate = function(year, month, day) {
    $scope.dt = new Date(year, month, day);
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
  $scope.altInputFormats = ['M!/d!/yyyy'];

  $scope.popup1 = {
    opened: false
  };

  $scope.popup2 = {
    opened: false
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 1);
  $scope.events = [
    {
      date: tomorrow,
      status: 'full'
    },
    {
      date: afterTomorrow,
      status: 'partially'
    }
  ];

  function getDayClass(data) {
    var date = data.date,
      mode = data.mode;
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i = 0; i < $scope.events.length; i++) {
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  }
    
    
    // Date pick end
    
    
    $scope.selectedLoc = "Country";
    $scope.selectedGame = 'Sport';
    $scope.dateType = 'Day/Dates';
    
    
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
    
    
    $scope.getFiles = function(url){
        
        
        /*$http.get(url)
        .then(function(response) {
            //First function handles success
            return response.data;
        }, function(response) {
            //Second function handles error
            $scope.content = "Something went wrong";
        });*/
        
        
        var myDataPromise = services.getData(url,null,null,null);
        myDataPromise.then(function(result) {  

            // this is only run after getData() resolves
            return result;
            
        });
        
        
    }
    
    
    
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
    
    displayDemoWithFilters = function(events,datesRangeMap,countryName){
        var eventsResultsFilteredLocal = [];
        var countryNameInLoop = '';
      //Foreach event
				events.forEach(function(event){
                    //if(datesRangeMap.get(event.start_date) 
                    if(datesRangeMap.get(event.startDateFormat)
                      ){
                        var locList = event.LOCATION.split(',');
                        if(locList.length > 0){
                            countryNameInLoop = (locList)[locList.length - 1] + '';
                            countryNameInLoop = countryNameInLoop.trim();
                        }
                        
                        if(locList.length > 2){
                            event.LOCATION = locList[0] + ", " + locList[1];
                        }
                        
                        if(countryName == null || countryNameInLoop == countryName){
                            eventsResultsFilteredLocal.push(event);
                        }
                    }
				});
        
        return eventsResultsFilteredLocal;
    };
    
ical_parser = function (feed_url, callback,dateFirst,dateInLoop,countryReceived){
	//store of unproccesed data.
	this.raw_data = null;
	//Store of proccessed data.
	this.events = [];
    
    this.url = feed_url;
    this.folds = ((feed_url).substr(1)).split("/");
    this.country = this.folds[1];
    this.game = this.folds[2];
    this.league = this.folds[3];
    this.dateInLoop = dateInLoop;  
	
	/**
	 * loadFile
	 * Using AJAX to load the requested .ics file, passing it to the callback when completed.
	 * @param url URL of .ics file
	 * @param callback Function to call on completion.
	 */
	/*this.loadFile = function(url, callback){
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
	}*/
	
	/**
	 * makeDate
	 * Convert the dateformat used by ICalendar in to one more suitable for javascript.
	 * @param String ical_date 
	 * @return dt object, includes javascript Date + day name, hour/minutes/day/month/year etc.
	 */
	this.makeDate = function(ical_date,dateFirst){
		//break date apart
        
        var dt = {};
        
       /* if(dateFirst){
        
            dt =  {
                year: ical_date.substr(0,4),
                day: ical_date.substr(4,2),
                month: ical_date.substr(6,2),
                hour: ical_date.substr(9,2),
                minute: ical_date.substr(11,2)
            }
        }else{*/
            
            dt =  {
                year: ical_date.substr(0,4),
                month: ical_date.substr(4,2),
                day: ical_date.substr(6,2),
                hour: ical_date.substr(9,2),
                minute: ical_date.substr(11,2)
            }
            
        //}
        
		//Create JS date (months start at 0 in JS - don't ask)
		dt.date = new Date(dt.year, (dt.month-1), dt.day, dt.hour, dt.minute);
		//Get the full name of the given day
		dt.dayname =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][dt.date.getDay()];
        
        dt.monthname =['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][dt.date.getMonth()];
		
		return dt;
	}
	
	/**
	 * parseICAL
	 * Convert the ICAL format in to a number of javascript objects (Each representing a date)
	 *
	 * @param data Raw ICAL data
	 */
	this.parseICAL = function(data,dateFirst,country,game){
		//Ensure cal is empty
		this.events = [];
		
		//Clean string and split the file so we can handle it (line by line)
		cal_array = data.replace(new RegExp( "\\r", "g" ), "").split("\n");
		
		//Keep track of when we are activly parsing an event
		var in_event = false;
		//Use as a holder for the current event being proccessed.
		var cur_event = null;
        var isGmt = false;
        var isOffSet = false;
        
		for(var i=0;i<cal_array.length;i++){
            if(country !== 'Multi'){
			ln = cal_array[i].trim();
			//If we encounted a new Event, create a blank event object + set in event options.
			if(!in_event && ln == 'BEGIN:VEVENT'){
				in_event = true;
				cur_event = {};
			}
            
            if(!isOffSet && ln == 'ISOFFSET:TRUE'){
                isOffSet = true;
			}
                
            if(!isGmt && ln == 'ISGMT:TRUE'){
                isGmt = true;
			}
			//If we encounter end event, complete the object and add it to our events array then clear it for reuse.
			if(in_event && ln == 'END:VEVENT'){
                var addToList = false;
                var locList = cur_event.LOCATION.split(',');
                if(locList.length > 2){
                   var countryInside = locList[2];
                    if(countryInside.trim() === country || country == 'default'){
                        in_event = false;
                        if($scope.gamesMap.get(game)){
                            game = $scope.gamesMap.get(game);
                        }
                        cur_event["sport"] = game;
                        if(country == 'default'){
                            cur_event["country"] = countryInside.trim();
                        }else{
                            cur_event["country"] = country;
                        }
                        
                        cur_event["league"] = this.league.replace(new RegExp("_", 'gi'), " ");
                        addToList = true;
                        
                        
                    }
                }else{  
                    in_event = false;
                    cur_event["sport"] = game;
                    cur_event["country"] = country;
                    cur_event["league"] = this.league.replace(new RegExp("_", 'gi'), " ");
                    addToList = true;
                   // this.events.push(cur_event);
                }
                
                if(addToList){
                    dt = this.makeDate(cur_event.fullDateTime,dateFirst);
					val = dt.date;
					//These are helpful for display
                   
                    
                    
                    if(dt.minute == '99'){
                        cur_event.start_time = 'TBC';
                    }else if(dt.minute == '60'){
                        cur_event.start_time = 'All Day Event';
                    }else{
                        if(isGmt){
                            
                            var gmtList = ($scope.gmtMap.get(cur_event["country"])).split(':');
                            gmtList[0] = gmtList[0]*-1;
                            if((gmtList[0]*-1) < 1){
                                gmtList[1] = gmtList[1] * -1;
                            }
                            
                            
                            
                            var theFutureTime = moment().hour(dt.hour).minute(dt.minute).add(gmtList[0],'hours').format("HH:mm");
                            var gmtList1 = theFutureTime.split(':');
                            theFutureTime = moment().hour(gmtList1[0]).minute(gmtList1[1]).add(gmtList[1],'minutes').format("HH:mm");
                            //cur_event.gmtTime = $scope.gmtMap.get(country) + 0 + cur_event.start_time;
                            cur_event.start_time = theFutureTime + ' local';
                            
                            var mins = parseInt(gmtList[1]) + parseInt(dt.minute);
                            
                            var hoursIn = parseInt(gmtList[0]) + parseInt(dt.hour);
                            
                            if(mins > 60){
                                hoursIn = hoursIn + 1;
                            }
                            
                            var nextDayVar = '';
                            
                            if(hoursIn > 24){
                                nextDayVar = ' (-1)';
                            }else if(hoursIn < 0){
                                nextDayVar = ' (+1)';
                            }
                            
                            
                            cur_event.gmtTime = dt.hour+':'+dt.minute + ' GMT' + nextDayVar;
                            
                            
                        }else{
                            var gmtList = [];
                            if(isOffSet){
                                gmtList = cur_event.OFFSETTIME.split(':');
                            }else{
                                
                                var gmtValue = $scope.gmtMap.get(cur_event["country"]);
                                if(gmtValue){
                                    gmtList = gmtValue.split(':');    
                                }else{
                                    gmtValue = '0:00';
                                    gmtList = gmtValue.split(':'); 
                                }
                                
                            }
                            
                           // var isGmtPos
                            
                            if((gmtList[0]*1) < 1){
                                gmtList[1] = gmtList[1] * -1;
                            }
                            cur_event.start_time = dt.hour+':'+dt.minute + ' local';
                           // cur_event.start_time = dt.hour+':'+dt.minute ;// + ' (' + $scope.gmtMap.get(country)  + ')';
                            var theFutureTime = moment().hour(dt.hour).minute(dt.minute).add(gmtList[0],'hours').format("HH:mm");
                            var gmtList1 = theFutureTime.split(':');
                            theFutureTime = moment().hour(gmtList1[0]).minute(gmtList1[1]).add(gmtList[1],'minutes').format("HH:mm");
                            //cur_event.gmtTime = $scope.gmtMap.get(country) + 0 + cur_event.start_time;
                            
                            var mins = parseInt(gmtList[1]) + parseInt(dt.minute);
                            
                            var hoursIn = parseInt(gmtList[0]) + parseInt(dt.hour);
                            
                            if(mins > 60){
                                hoursIn = hoursIn + 1;
                            }
                            
                            var nextDayVar = '';
                            
                            if(hoursIn > 24){
                                nextDayVar = ' ( +1 day )';
                            }else if(hoursIn < 0){
                                nextDayVar = ' ( -1 day )';
                            }
                            
                            /*var theFutureTimeString = theFutureTime.split(':');
                            if(theFutureTimeString >= 24){
                                theFutureTimeString = (theFutureTime - 24);
                                theFutureTimeString = theFutureTimeString + '( -1 day )';
                            }else if(theFutureTime < 0){
                                theFutureTimeString = (theFutureTime * -1);
                                theFutureTimeString = theFutureTimeString + '( -1 day )';
                            }else{
                                theFutureTimeString = theFutureTime;
                            }*/
                            cur_event.gmtTime = theFutureTime + ' GMT' + nextDayVar;
                        }
                    }
                    
					
                    
					cur_event.start_date = dt.year + '-' + dt.month+'-' + dt.day;
                    cur_event.startDateFormat = dt.dayname + ", " + dt.day + " " + dt.monthname + " " + dt.year;
					cur_event.day = dt.dayname;
                    this.events.push(cur_event);
                    cur_event = null;
                }
                
				
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
                    
                    cur_event.fullDateTime = val;
                    
					
				}
				//If the type is an end date, do the same as above
				//if(type =='DTEND'){
                if(type.indexOf('DTEND') != -1 ){
					dt = this.makeDate(val,dateFirst);
					val = dt.date;
					//These are helpful for display
					cur_event.end_time = dt.hour+':'+dt.minute;
					cur_event.end_date = dt.day+'/'+dt.month+'/'+dt.year;
                    cur_event.endDateFormat = dt.dayname + ", " + dt.day + " " + dt.monthname + " " + dt.year;
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
	/*this.load = function(ical_file,dateFirst){
		var tmp_this = this;
		this.raw_data = null;
		this.loadFile(ical_file, function(data){
			//if the file loads, store the data and invoke the parser
			tmp_this.raw_data = data;
			tmp_this.parseICAL(data,dateFirst);
		});
	}*/
    
    this.load = function(ical_file,dateFirst,dateInLoop,countryReceived){
        var myDataPromise = services.getData(ical_file,dateInLoop,null,countryReceived);
        var tmp_this = this;
		this.raw_data = null;
        myDataPromise.then(function(result) {
            tmp_this.raw_data = result.value;
            this.url = result.url;
            var folds = ((this.url).substr(1)).split("/");
            var leng = folds.length;
            if(result.country){
                this.country = result.country;
                this.countryReceived = 'Multi';
            }else{
                this.country = folds[leng - 3]  // folds[1];
                this.countryReceived = null;
            }
            
            this.game = folds[leng - 2]; // folds[2];
            this.league =   (folds[leng - 1]).replace(".ics",""); //  (folds[3]).replace(".ics","");
            this.dateInLoop = dateInLoop;
			tmp_this.parseICAL(tmp_this.raw_data,dateFirst,country,game);
        });
    }
	
	//Store this so we can use it in the callback from the load function.
	var tmp_this = this;
	//Store the feed url
	this.feed_url = feed_url;
	//Load the file
	this.load(this.feed_url,dateFirst,dateInLoop,countryReceived);
};
    
  ical_parserNew = function (feed_url, callback,dateFirst,dateInLoop,country){
	//store of unproccesed data.
	this.raw_data1 = null;
	//Store of proccessed data.
	this.events = [];
    
    this.url1 = feed_url;
    this.folds1 = ((feed_url).substr(1)).split("/");
    this.country1 = this.folds[1];
    this.game1 = this.folds[2];
    this.league1 = this.folds[3];
    this.dateInLoop1 = dateInLoop;  
	
	/**
	 * loadFile
	 * Using AJAX to load the requested .ics file, passing it to the callback when completed.
	 * @param url URL of .ics file
	 * @param callback Function to call on completion.
	 */
	/*this.loadFile = function(url, callback){
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
	}*/
	
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
	this.parseICAL = function(data,dateFirst,country,game){
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
                cur_event["sport"] = game;
                cur_event["country"] = country;
                cur_event["league"] = this.league;
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
                    if(dt.minute == '99'){
                        cur_event.start_time = 'TBC';
                    }else if(dt.minute == '60'){
                        cur_event.start_time = 'All Day Event';
                    }else{
                        cur_event.start_time = dt.hour+':'+dt.minute;
                    }
					
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
	/*this.load = function(ical_file,dateFirst){
		var tmp_this = this;
		this.raw_data = null;
		this.loadFile(ical_file, function(data){
			//if the file loads, store the data and invoke the parser
			tmp_this.raw_data = data;
			tmp_this.parseICAL(data,dateFirst);
		});
	}*/
    
    this.loadNew = function(ical_file,dateFirst,dateInLoop,country){
        var myDataPromise = services.getData(ical_file,dateInLoop,null,country);
        var tmp_this = this;
		this.raw_data = null;
        myDataPromise.then(function(result) {1
            tmp_this.raw_data = result.value;
            this.url = result.url;
            var folds = ((this.url).substr(1)).split("/");
            var leng = folds.length;
            if(result.country){
                this.country = result.country;
            }else{
                this.country = folds[leng - 3]  // folds[1];
            }
            
            this.game = folds[leng - 2]; // folds[2];
            this.league =   (folds[leng - 1]).replace(".ics",""); //  (folds[3]).replace(".ics","");
            this.dateInLoop = dateInLoop;
			tmp_this.parseICAL(tmp_this.raw_data,dateFirst,country,game);
        });
    }
	
	//Store this so we can use it in the callback from the load function.
	var tmp_this = this;
	//Store the feed url
	this.feed_url = feed_url;
	//Load the file
	this.loadNew(this.feed_url,dateFirst,dateInLoop,country);
};    
  
  this.removeFromSelected = function(dt) {
      
     
    $scope.selectedDates.splice($scope.selectedDates.indexOf(dt), 1);
  }
  
  $scope.getListFromHtml = function(data,foldersToExclude){
      var listReturn = [];
      var exclude = (foldersToExclude.substr(1)).split("/");
      var linkStart = 0
       var linkEnd = 0
       var hrefValue = '';
       var folderName = '';
      var count = 0;
       //while (linkStart <= linkEnd) {
      while (linkStart > -1) {
          linkStart = data.indexOf('<a', linkEnd);
          count = count + 1;
          if (linkStart > -1) {
             linkEnd = data.indexOf('</a>', linkStart);// + 4;

             if (linkEnd > -1) {
                 hrefValue = data.substring(linkStart, linkEnd);
                 folderName = hrefValue.substr((hrefValue.indexOf('">') + 1));
                 //folderName = folderName.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,'');
                 folderName = folderName.replace(/[&\/\\#,+()$~%'":*?<>{}]/g,'');
                 if(exclude.indexOf(folderName) == -1 && folderName != "" && folderName != ".."){
                     listReturn.push(folderName);
                 }
                 
                 data = data.replace("<a","");
                 data = data.replace("</a","");
                /*var hvs = data.indexOf('href="', linkStart) + 6;
                var hve = data.indexOf('"', hvs) - 1;
                var tnvs = data.indexOf('>', linkStart) + 1;
                var tnve = data.indexOf('<', tnvs) - 1;
                if (data.substring(hvs, hve) == data.substring(tnvs, tnve)) {
                   alert(data.substring(tnvs, tnve))
                   operations[data.substring(tnvs, tnve)] = null;
                }*/
             }
          }
       }
      
      return listReturn;
      
      
  }
  
  
  this.getEventsDetails = function(){
       
      //var folderStrut = $scope.getFiles(parentFolder);
     /* $scope.games = [];
      var gameList = [];
      $scope.filesFolderStructure = [];
      $scope.folderStructureList = [];
      $scope.gameFileList = [];
      var object = {
          text:  '',
          value: [
                
            ]
        };*/
      /*var myDataPromise = services.getData(parentFolder,null);
        myDataPromise.then(function(result) {  

            // this is only run after getData() resolves
            var folderStrut = result.value;
            $scope.countries = $scope.getListFromHtml(folderStrut,parentFolder);   
            var length = $scope.countries.length;
            $scope.countries.forEach(function(country){
                    var url = parentFolder + "/" + country;
                    var filesUrl = fileUrl + "/" + country;
					myDataPromise = services.getData(url,null,filesUrl);
                    myDataPromise.then(function(result) {   
                        gameList = $scope.getListFromHtml(result.value,result.url); 
                        
                        
                        
                        gameList.forEach(function(game){
                          
                            url = result.url + "/" + game;
                            filesUrl = result.filesUrl + "/" + game;
                            myDataPromise = services.getData(url,null,filesUrl);
                            myDataPromise.then(function(files) { 
                                
                                var filesList = ($scope.getListFromHtml(files.value,files.url)).join(); 
                                
                                var gameObject = {
                                      text:  '',
                                      value: [

                                        ]
                                    };
                               // gameObject.url = files.url;
                                gameObject.url = files.filesUrl;
                                gameObject.value = filesList;
                                object.value = filesList;
                                 $scope.gameFileList.push(gameObject);
                                object.text = game;
                                $scope.filesFolderStructure.push(object);

                            });
                            
                            
                            if($scope.games.indexOf(game) == -1){
                                $scope.games.push(game);
                            }
                            
                        });
                        
                        
                        
                    });   
                
                object.text = country;
                object.value = gameList;
                $scope.folderStructureList.push(object);
					
            });
            
            
        });*/
      
      
      $scope.folderStructureList1 = $scope.folderStructureList;
      
      
   /*ical_parser(ical_file, function(cal){
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
				},false); */
       
       
       
   };
    
   /* $scope.getDates = function(currentDate, end){
        
        if($scope.selectedDates2 === undefined || $scope.selectedDates2.length > 0) && ($scope.selectedDates.length > 0 || $scope.selectedDates === undefined){
            
            
            while (currentDate <= end) {
                between.push(new Date(currentDate));
                currentDate.setDate(currentDate.getDate() + 1);
            } 
            
        }
        
    }*/
    
    
   this.filterEvents = function(){
       $scope.isError = false;
       $scope.isLoading = true;
       var dateSelectedList = [];
        $scope.eventsResultsFiltered = [];
       var sportsNew = $scope.selectedGameNew;
       $scope.eventsResultsFilteredNew = [];
       
       var dateFirst = false;
      /* if(($scope.selectedGame === 'Sport' || $scope.selectedGame === '' || $scope.selectedGame === null) && ($scope.selectedLoc === 'Country' || $scope.selectedLoc === '' || $scope.selectedLoc === null) && ($scope.selectedDates2 === undefined || $scope.selectedDates2.length > 0) && ($scope.selectedDates === undefined || $scope.selectedDates.length > 0) ){
        
           $scope.errorMessage = "Please select at least one on of the fields to be choosen"
           $scope.isError = true;
           $scope.isLoading = false;
       }*/
       if(!(($scope.dateType == 'Today' || $scope.dateType == 'week' || $scope.dateType == 'TwoWeeks' || $scope.dateType == 'Custom')) ){
               $scope.errorMessage = "Please select one Date Type"
               $scope.isError = true;
               $scope.isLoading = false;
               return;
           }else{
           
        
         /* if((($scope.selectedDates2 === undefined || $scope.selectedDates2.length > 0) && 
             ($scope.selectedDates != undefined || $scope.selectedDates.length == 0)) || (($scope.selectedDates === undefined || $scope.selectedDates.length > 0) && 
             ($scope.selectedDates2 != undefined || $scope.selectedDates2.length == 0))){
                
                
             
             
             }*/
           if(($scope.dateType == 'Custom' && ($scope.selectedDates === undefined || $scope.selectedDates == ''))){
               $scope.errorMessage = "Please select one Date Type"
               $scope.isError = true;
               $scope.isLoading = false;
               return;
           }
           
          
           
           if($scope.dateType == 'week'){
               /*var daysCounted = 0;
                while (daysCounted < 7) {
                dateSelectedList.push(new Date(currentDate));
                currentDate.setDate(currentDate.getDate() + 1);
                    daysCounted = daysCounted + 1;
                }*/
                $scope.selectedDates = new Date();
                var date2 = new Date($scope.selectedDates.getTime());
                date2.setDate(date2.getDate() + 7);
               $scope.selectedDates2 = new Date(date2);
           }else if($scope.dateType == 'TwoWeeks'){
                /*var day = currentDate.getDate() + 1, daysCounted = 0;
                while (day = currentDate.getDate() || daysCounted < 31) {
                dateSelectedList.push(new Date(currentDate));
                currentDate.setDate(currentDate.getDate() + 1);
                    daysCounted = daysCounted + 1;
                }*/
               $scope.selectedDates = new Date();
               var date2 = new Date($scope.selectedDates.getTime());
                date2.setDate(date2.getDate() + 14);
               $scope.selectedDates2 = new Date(date2);
           }else if($scope.dateType == 'Today'){
               $scope.selectedDates = new Date();
               $scope.selectedDates2 = undefined;
           }
           
          
           
           
           
           if(($scope.selectedDates2 === undefined || $scope.selectedDates2.length > 0) && ($scope.selectedDates.length > 0 || $scope.selectedDates === undefined)){
               $scope.errorMessage = "Please select the Date"
               $scope.isError = true;
               $scope.isLoading = false;
               return;
               
           }else {
                if(($scope.selectedDates2 === undefined || $scope.selectedDates2.length > 0)){
                    dateSelectedList.push($scope.selectedDates);
                }else if(($scope.selectedDates === undefined || $scope.selectedDates.length > 0)){
                           dateSelectedList.push($scope.selectedDates2);
                       }else{
                           if($scope.selectedDates > $scope.selectedDates2){
                               $scope.errorMessage = "From date cannot be greater than To date"
                                $scope.isError = true;
                               $scope.isLoading = false;
                           }else{
                               
                               var currentDate = new Date($scope.selectedDates.getTime());
                               while (currentDate <= $scope.selectedDates2) {
                                    dateSelectedList.push(new Date(currentDate));
                                    currentDate.setDate(currentDate.getDate() + 1);
                                }
                           }
                           
                       }
           
           }
           if(!$scope.isError){
       
       $scope.isError = false;
       $scope.showEvents = false;
       //var formatedDates = [];
       var formatedDates = new Map();
       if(($scope.dateType == 'week' || $scope.dateType == 'month')){
                            $scope.selectedDates = new Date();
                            $scope.selectedDates2 = [new Date().setHours(0, 0, 0, 0)];
                        }
               
               
      // dateSelectedList.push($scope.selectedDates);
       dateSelectedList.forEach(function(dt){
           var pattern = /(\d{4})(\d{2})(\d{2})/;
          dt = dt + "";
         // $scope.date = new Date(dt.replace(pattern, '$1-$2-$3'));
          $scope.date = new Date(dt);
           $scope.date2 = $scope.date.day+'/'+$scope.date.month+'/'+$scope.date.year;
            $scope.date1 = $scope.date;
          
          
          var d = new Date(dt),	// Convert the passed timestamp to milliseconds
		yyyy = d.getFullYear(),
		mm = ('0' + (d.getMonth() + 1)).slice(-2),	// Months are zero based. Add leading 0.
		dd = ('0' + d.getDate()).slice(-2),			// Add leading 0.
		time;
			
	d.dayname =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][d.getDay()];
        
        d.monthname =['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][d.getMonth()];
           
           
	
	// ie: 2013-02-18, 8:35 AM	
	//time = mm + '/' + dd + '/' + yyyy;
           
    time = d.dayname + ", " + dd + " " + d.monthname + " " + yyyy;
          
      // formatedDates.push(time);   
           formatedDates.set(time,time);
          
        });
         
        
        formatedDates.forEach(function(dateInLoop){
           $scope.gameFileListNew.forEach(function(folders){

               var folds = ((folders.url).substr(1)).split("/");
               var listValue = folders.value;
               var size = folds.length;
               var country = folds[size - 2]; //folds[1];
               var game = folds[size - 1];

               /*if(game === 'Cricket'){
                   dateFirst = true;
               }else{
                   dateFirst = false;
               }*/
			   if(country === 'United_States_of_America' || country === 'West_Indies' || country === 'Zimbabwe'){
                   dateFirst = false;
               }else{
                   dateFirst = true;
               }
			   
               $scope.multiGamesList.forEach(function(multiGame){
                           
                           if((($scope.selectedGame === 'Sport' || $scope.selectedGame === '' || $scope.selectedGame === null || $scope.selectedGame === game)  && multiGame === game)){
                           
                               if(mutliCountrySportMap.get(multiGame)){
                                   
                                   
                                   
                                   var mutliSportMap = mutliCountrySportMap.get(multiGame);
                                   if($scope.selectedLoc === 'Country' || $scope.selectedLoc === '' || $scope.selectedLoc === null || ($scope.selectedLoc === country && mutliSportMap.get(country)) || (country === 'Multi' && mutliSportMap.get($scope.selectedLoc))){
                                       
                                       if(country === 'Multi' && mutliSportMap.get($scope.selectedLoc)){
                                           country = $scope.selectedLoc;
                                           
                                           
                                       }
                                       
                                       
                                       var multiFileName = '';
                                       if(($scope.selectedLoc === 'Country' || $scope.selectedLoc === '' || $scope.selectedLoc === null) && country === 'Multi'){
                                          // multiFileName = mutliSportMap.get('default');
                                           
                                            mutliSportMap.forEach(function (value, key) {
                                           // Object.keys(mutliSportMap).forEach(function(key) {
                                                //var value = map[key];
                                                var dateFirstLoop = true;
                                                country = key;
                                                var valueList = value.split(','),i;
                                                for (i = 0; i < valueList.length; i++) {
                                               // valueList.forEach(function(fileNameValue){
                                                
                                                var multiFileLocaiton = fileUrl + "/Multi/" + multiGame + "/" + valueList[i];
                                                ical_parser(multiFileLocaiton, function(cal){
                                                    this.events = cal.events;
                                                    var eventsResults = cal.events;
                                                    //$scope.places = [];
                                                    this.game = cal.game;
                                                    var formatedDatesList = new Map();
                                                    formatedDatesList.set(cal.dateInLoop,cal.dateInLoop);
                                                    var countryFilter = '';
                                                    if(cal.countryReceived == null){
                                                        countryFilter = null;
                                                    }else{
                                                        countryFilter = cal.country;
                                                    }

                                                    var returnResults = displayDemoWithFilters(eventsResults,formatedDatesList,countryFilter);
                                                        var getCountyFromMap = '';
                                                        if(countriesMap.get(cal.country)){
                                                            getCountyFromMap = countriesMap.get(cal.country);
                                                        }else{
                                                            getCountyFromMap = cal.country;
                                                        }
                                                        if(returnResults.length > 0){
                                                            if($scope.eventsResultsFiltered.length > 0 && $scope.eventsResultsFiltered.indexOf(cal.dateInLoop)){
                                                                    $scope.findAndReplaceWithTime($scope.eventsResultsFiltered, getCountyFromMap, cal.dateInLoop, returnResults);
                                                            }else{

                                                                var listValue = [
                                                                    {
                                                                        'country':getCountyFromMap,
                                                                        'listValue' : returnResults
                                                                    }

                                                                ]; 
                                                                var Object = {
                                                                    'time':cal.dateInLoop,
                                                                    'timeSort': returnResults[0].start_date,
                                                                    'listValue' : listValue
                                                                };
                                                                $scope.eventsResultsFiltered.push(Object);
                                                            }

                                                    }

                                                    this.showCal = true;

                                                },dateFirstLoop,dateInLoop,country);
                                                
                                               }//);  End loop here
                                           
                                            });
                                           
                                       }else if(mutliSportMap.get(country)){
                                           multiFileName = mutliSportMap.get(country);
                                           
                                           var valuesList = multiFileName.split(','),j;
                                           
                                           for (j = 0; j < valuesList.length; j++) {
                                           
                                           var multiFileLocaiton = fileUrl + "/Multi/" + multiGame + "/" + valuesList[j];
                                       
                                           var dateFirstLoop = true;
                                            ical_parser(multiFileLocaiton, function(cal){
                                                this.events = cal.events;
                                                var eventsResults = cal.events;
                                                //$scope.places = [];
                                                this.game = cal.game;
                                                var formatedDatesList = new Map();
                                                formatedDatesList.set(cal.dateInLoop,cal.dateInLoop);
                                                var countryFilter = '';
                                                if(cal.countryReceived == null){
                                                    countryFilter = null;
                                                }else{
                                                    countryFilter = cal.country;
                                                }

                                                var returnResults = displayDemoWithFilters(eventsResults,formatedDatesList,countryFilter);
                                                    
                                                    var getCountyFromMap = '';
                                                    if(countriesMap.get(cal.country)){
                                                        getCountyFromMap = countriesMap.get(cal.country);
                                                    }else{
                                                        getCountyFromMap = cal.country;
                                                    }
                                                
                                                    if(returnResults.length > 0){
                                                        if($scope.eventsResultsFiltered.length > 0 && $scope.eventsResultsFiltered.indexOf(cal.dateInLoop)){
                                                                $scope.findAndReplaceWithTime($scope.eventsResultsFiltered, getCountyFromMap, cal.dateInLoop, returnResults);
                                                        }else{

                                                            var listValue = [
                                                                {
                                                                    'country':getCountyFromMap,
                                                                    'listValue' : returnResults
                                                                }

                                                            ]; 
                                                            var Object = {
                                                                'time':cal.dateInLoop,
                                                                'timeSort': returnResults[0].start_date,
                                                                'listValue' : listValue
                                                            };
                                                            $scope.eventsResultsFiltered.push(Object);
                                                        }

                                                }

                                                this.showCal = true;

                                            },dateFirstLoop,dateInLoop,country);
                                           
                                           }//add end loop here
                                       }
                                       
                                      
                                      //Change later var multiFileLocaiton = fileUrl + "/Multi/" + multiGame + "/" + multiFileName;
                                        
                                       
                                       
                                   }
                                   
                                   //Add end code here
                               }
                           }
                       });
               
               
               if(($scope.selectedGame === 'Sport' || $scope.selectedGame === '' || $scope.selectedGame === null || $scope.selectedGame === game) && ($scope.selectedLoc === 'Country' || $scope.selectedLoc === '' || $scope.selectedLoc === null || $scope.selectedLoc === country)){

                   var fileList = listValue.split(",");
                   fileList.forEach(function(file){
                       if(country !== 'Multi'){
                       var fileLocation = folders.url + "/" + file;
                        ical_parser(fileLocation, function(cal){
                            this.events = cal.events;
                            $scope.eventsResults = cal.events;
                            $scope.places = [];
                            this.game = cal.game;
                            var formatedDatesList = new Map();
                            formatedDatesList.set(cal.dateInLoop,cal.dateInLoop);
                            var returnResults = displayDemoWithFilters($scope.eventsResults,formatedDatesList,null);
                                
                                var getCountyFromMap = '';
                                if(countriesMap.get(cal.country)){
                                    getCountyFromMap = countriesMap.get(cal.country);
                                }else{
                                    getCountyFromMap = cal.country;
                                }
                            
                                if(returnResults.length > 0){
                                    if($scope.eventsResultsFiltered.length > 0 && $scope.eventsResultsFiltered.indexOf(cal.dateInLoop)){
                                            $scope.findAndReplaceWithTime($scope.eventsResultsFiltered, getCountyFromMap, cal.dateInLoop, returnResults);
                                    }else{

                                        var listValue = [
                                            {
                                                'country':getCountyFromMap,
                                                'listValue' : returnResults
                                            }

                                        ]; 
                                        var Object = {
                                            'time':cal.dateInLoop,
                                            'timeSort': returnResults[0].start_date,
                                            'listValue' : listValue
                                        };
                                        $scope.eventsResultsFiltered.push(Object);
                                    }
                                
                            }

                            this.showCal = true;
                            
                        },dateFirst,dateInLoop,null); 
                       }
                      /* if(){
                           ical_parser(fileLocation, function(cal){
                                this.events = cal.events;
                                $scope.eventsResults = cal.events;
                                $scope.places = [];
                                this.game = cal.game;
                                var formatedDatesList = new Map();
                                formatedDatesList.set(cal.dateInLoop,cal.dateInLoop);
                                var returnResults = displayDemoWithFilters($scope.eventsResults,formatedDatesList);

                                    if(returnResults.length > 0){
                                        if($scope.eventsResultsFiltered.length > 0 && $scope.eventsResultsFiltered.indexOf(cal.dateInLoop)){
                                                $scope.findAndReplaceWithTime($scope.eventsResultsFiltered, cal.country, cal.dateInLoop, returnResults);
                                        }else{

                                            var listValue = [
                                                {
                                                    'country':cal.country,
                                                    'listValue' : returnResults
                                                }

                                            ]; 
                                            var Object = {
                                                'time':cal.dateInLoop,
                                                'listValue' : listValue
                                            };
                                            $scope.eventsResultsFiltered.push(Object);
                                        }

                                }

                                this.showCal = true;
                                return ;
                            },dateFirst,dateInLoop); 
                            
                            
                             countryMap.set('Valencia','MotoGP.ics');
  
    var mutliCountrySportMap = new Map();    
    mutliCountrySportMap.set('Bike',countryMap);
    
    $scope.multiGamesList = [];
    
  $scope.multiGamesList.push('Bike');
                            
                       }*/
                      


                    });


               }



          });
       
      });
       
         
    // }
       
      
                    
       }
       
            setTimeout(function () {
                    $scope.$apply(function () {
                        $scope.message = "Timeout called!";
                        $scope.eventsResultsFilteredNew = $scope.eventsResultsFiltered;
                        $scope.showEvents = true;
                        $scope.isLoading = false;
                        
                    });
                }, 2000); 
           
   }
       
       
       
   }
   
   
   $scope.getBootstrapDeviceSize = function() {
      //return $('#users-device-size').find('div:visible').first().attr('events');
       return '';
    }
   
   this.clearFilters = function(){
     //  $scope.selectedDates = new Date();
     //  $scope.selectedDates = new Date();
     //  $scope.selectedDates2 = [new Date().setHours(0, 0, 0, 0)];
       $scope.selectedDates = undefined;
       $scope.dateType = 'Day/Dates';
       $scope.selectedDates = undefined;
       $scope.selectedDates2 = [new Date().setHours(0, 0, 0, 0)];
       $scope.eventsResultsFiltered = [];
       $scope.selectedLoc = "Country";
        $scope.selectedGame = 'Sport';
       
       $scope.showEvents = false;
       $scope.isError = false;
       $scope.isLoading = false;
   }
   


    $scope.findAndReplace = function(object, value, replacevalue){
        var found = false;
        for(var x in object){
       
        if(!found && object[x].country == value){
            found = true;
            object[x].listValue = object[x].listValue.concat(replacevalue);
          // break; // uncomment to stop after first replacement
        }
      }
        
        if(!found){
            var obj = {
                'country':value,
                'listValue' : replacevalue
            };
            $scope.eventsResultsFiltered.push(obj);
        }
        
    };

    
    $scope.findAndReplaceWithTime = function(object, value, dateInLoop, replacevalue){
        var found = false;
        for(var x in object){
       
        if(!found && object[x].time == dateInLoop){
            found = true;
            var countryFound = false;
            listValues = object[x].listValue; // object[x].listValue.concat(replacevalue);
            
            for(var y in listValues){
                
                if(!countryFound && listValues[y].country == value){
                    countryFound = true;
                    listValues[y].listValue = listValues[y].listValue.concat(replacevalue);
                    object[x].listValue = listValues;
                }
            }
            
            if(!countryFound){
                listValues.push({
                                    'country': value,
                                    'listValue' : replacevalue
                                });    
                /*var obj = {
                    'time':dateInLoop,
                    'listValue' : listValues 
                };*/
                $scope.eventsResultsFiltered[x].listValue = listValues;
            }
            
            
          // break; // uncomment to stop after first replacement
        }
      }
        
        if(!found){
            
            
            var listSubValue = [
                {
                    'country':value,
                    'listValue' : replacevalue
                }

            ]; 



            var Object = {
                'time':dateInLoop,
                'timeSort':listSubValue[0].listValue[0].start_date,
                'listValue' : listSubValue
            };
            $scope.eventsResultsFiltered.push(Object);
            
            /*
            var obj = {
                'country':value,
                'listValue' : replacevalue
            };
            $scope.eventsResultsFiltered.push(obj);*/
        }
        
    };
    
    
  
  this.showCal = false;
  this.getEventsDetails();
  //this.eventsResults = this.getEventsDetails();
  
  
  /*this.removeFromSelected2 = function(dt) {
    $scope.selectedDates2.splice($scope.selectedDates2.indexOf(dt), 1);
  }*/
});