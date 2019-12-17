/*  Array of objects (NBA teams), each object has 2 properites nickname and teamId */
const arrayOfTeams = [
	{
	fullName:"Atlanta Hawks",
	nickname: "Hawks",
	logo: "team_logos/hawks.png",
	primaryColor: "#e21a37",
	teamId: 1610612737 
	},
	{
	fullName:"Boston Celtics",
	nickname: "Celtics",
	logo: "team_logos/celtics.png",
	primaryColor: "#00611b",
	teamId: 1610612738
	},
	{
	fullName:"Brooklyn Nets",
	nickname: "Nets",
	logo: "team_logos/nets.png",
	primaryColor: "#000000",
    teamId: 1610612751	
	},
	{
	fullName:"Charlotte Hornets",
	nickname: "Hornets",
	logo: "team_logos/hornets.png",
	primaryColor: "#00848e",
	teamId: 1610612766
	},
	{
	fullName:"Chicago Bulls",
	nickname: "Bulls",
	logo: "team_logos/bulls.png",
	primaryColor: "#b00203",
	teamId: 1610612741
	},
	{
	fullName:"Cleveland Cavaliers",
	nickname: "Cavaliers",
	logo: "team_logos/cavaliers.png",
	primaryColor: "#860038",
	teamId: 1610612739
	},
	{ 
	fullName:"Dallas Mavericks",
	nickname:"Mavericks",
	logo: "team_logos/mavericks.png",
	primaryColor: "#006bb6",
	teamId:1610612742
	},
	{ 
	fullName:"Denver Nuggets",
	nickname:"Nuggets", 
	logo: "team_logos/nuggets.png",
	primaryColor: "#0e2240",
	teamId:1610612743
	},
	{
	fullName:"Detroit Pistons",
	nickname:"Pistons",
	logo: "team_logos/pistons.png",
	primaryColor: "#fa002c",
	teamId:1610612765
	},
	{
	fullName:"Golden State Warriors",
	nickname:"Warriors",
	logo: "team_logos/warriors.png",
	primaryColor: "#003399",
	teamId:1610612744
	},
	{
	fullName:"Houston Rockets",
	nickname:"Rockets",
	logo: "team_logos/rockets.png",
	primaryColor: "#cd212b",
	teamId:1610612745
	},
	{ 
	fullName:"Indiana Pacers",
	nickname:"Pacers",
	logo: "team_logos/pacers.png",
	primaryColor: "#ffb517",
	teamId:1610612754
	},
	{ 
	fullName:"LA Clippers",
	nickname:"Clippers",
	logo: "team_logos/clippers.png",
	primaryColor: "#ed174b",
	teamId:1610612746
	},
	{
	fullName:"Los Angeles Lakers",
	nickname:"Lakers",
	logo: "team_logos/lakers.png",
	primaryColor: "#fdba33",
	teamId:1610612747
	},
	{
	fullName:"Memphis Grizzlies",
	nickname:"Grizzlies",
	logo: "team_logos/grizzlies.png",
	primaryColor: "#5d76a9",
	teamId:1610612763
	},
	{ 
	fullName:"Miami Heat",
	nickname:"Heat", 
	logo: "team_logos/heat.png",
	primaryColor: "#98002e",
	teamId:1610612748
	},
	{
	fullName:"Milwaukee Bucks",
	nickname:"Bucks",
	logo: "team_logos/bucks.png",
	primaryColor: "#00471b",
	teamId:1610612749
	},
	{ 
	fullName:"Minnesota Timberwolves",
	nickname:"Timberwolves",
	logo: "team_logos/timberwolves.png",
	primaryColor: "#2b6291",
	teamId:1610612750
	},
	{ 
	fullName:"New Orleans Pelicans",
	nickname:"Pelicans",
	logo: "team_logos/pelicans.png",
	primaryColor: "#0c2340",
	teamId:1610612740
	},
	{ 
	fullName:"New York Knicks",
	nickname:"Knicks",
	logo: "team_logos/knicks.png",
	primaryColor: "#f58426",
	teamId:1610612752
	},
	{
	fullName:"Oklahoma City Thunder",
	nickname:"Thunder",
	logo: "team_logos/thunder.png",
	primaryColor: "#002d62",
	teamId:1610612760
	},
	{ 
	fullName:"Orlando Magic",
	nickname:"Magic", 
	logo: "team_logos/magic.png",
	primaryColor: "#0077c0",
	teamId:1610612753
	},
	{ 
	fullName:"Philadelphia 76ers",
	nickname:"76ers",
	logo: "team_logos/76ers.png",
	primaryColor: "#ef0022",
	teamId:1610612755
	},
	{ 
	fullName:"Phoenix Suns",
	nickname:"Suns",
	logo: "team_logos/suns.png",
	primaryColor: "#e76221",
	teamId:1610612756
	},
	{
	fullName:"Portland Trail Blazers",
	nickname:"Trail Blazers",
	logo: "team_logos/trailblazers.png",
	primaryColor: "#cc0000",
	teamId:1610612757
	},
	{ 
	fullName:"Sacramento Kings",
	nickname:"Kings",
	logo: "team_logos/kings.png",
	primaryColor: "#51388a",
	teamId:1610612758
	},
	{ 
	fullName:"San Antonio Spurs",
	nickname:"Spurs",
	logo: "team_logos/spurs.png",
	primaryColor: "#959191",
	teamId:1610612759
    },
    { 
    fullName:"Toronto Raptors",
    nickname:"Raptors",
    logo: "team_logos/raptors.png",
    primaryColor: "#bd1b21",
    teamId:1610612761
	},
	{ 
	fullName:"Utah Jazz",
	nickname:"Jazz",
	logo: "team_logos/jazz.png",
	primaryColor: "#f9a11e",
	teamId:1610612762
	},
	{ 
	fullName:"Washington Wizards",
	nickname:"Wizards",
	logo: "team_logos/wizards.png",
	primaryColor: "#cf142b",
	teamId:1610612764
	}
	];

/*  Define js elements from HTML elements*/
const navbarElement = document.getElementById('navbar');  
const firstPageElement = document.getElementById('firstPage');
const scheduleElement = document.getElementById('schedule');
const standingsElement = document.getElementById('standings');

const scheduleTab = document.getElementById('schedule-tab');
const standingsTab = document.getElementById('standings-tab');

/******************************      firstPage   ***************************************/
function getAllTeams(){

	arrayOfTeams.map(element =>{ 
	const divTeamName = document.createElement('div');
	const logo = document.createElement('img');
	const divTeam = document.createElement('div');

	logo.setAttribute('class', 'logo');
	logo.setAttribute('src', element.logo);

	divTeam.setAttribute('class', 'col-12 col-md-6 col-lg-4 choose-team');
	divTeam.setAttribute('id', element.teamId);
	divTeam.setAttribute('onclick', 'getSchedule(this.id)');

	divTeamName.textContent = element.fullName;

	divTeam.appendChild(logo);
	divTeam.appendChild(divTeamName);
	firstPageElement.appendChild(divTeam);
	});
}

getAllTeams();

/*************************************************************************************/


/*******************************       schedule           ***************************/
let executeOnce = 0;
	
async function getSchedule(team){
	/*  Navbar menu  */
	firstPageElement.style.display = 'none';

	const teamSchedule_API = 'https://cors-anywhere.herokuapp.com/http://data.nba.net/prod/v1/2019/teams/'+ team +'/schedule.json';

	const response = await fetch(teamSchedule_API);
	const json = await response.json();

	const scheduleArray = (json.league.standard);

	/*  Change navbar content and color */
	arrayOfTeams.filter(element => {
		if(team == element.teamId){
			navbarElement.style.backgroundColor = element.primaryColor;
			document.getElementById('team-name').textContent = element.fullName;
			document.getElementById('navbar-text').style.display = 'none';
			document.getElementById('previous').style.display = 'block';
			document.getElementById('myTab').style.display = 'flex';	
		}
	});

	scheduleArray.forEach(element => {

	    /* Get team nickname and logo from own array (arrayOfTeams) based on team id  */
	    const vTeamId = (element.vTeam.teamId);
	    let vTeamNickname;
	    let vTeamLogo;

		arrayOfTeams.forEach(element => {
			if(vTeamId == element.teamId){
				vTeamNickname = element.nickname;
				vTeamLogo = element.logo;
			}
		});

		/* Get team nickname and logo from own array (arrayOfTeams) based on team id  */
		const hTeamId = (element.hTeam.teamId);
		let hTeamLogo;
		let hTeamNickname;

		arrayOfTeams.forEach(element => {
			if(hTeamId == element.teamId){
				hTeamNickname = element.nickname;
					hTeamLogo = element.logo;
			}
		});

		var vTeamScore = (element.vTeam.score);
		var hTeamScore = (element.hTeam.score);

		/* Get game date and time*/
		const startTimeUTC = (element.startTimeUTC);
		const dateObject = new Date(startTimeUTC);
		const date = dateObject.toUTCString().slice(4, 11);
		const time = dateObject.toTimeString().slice(0, 5);

		/* Create html elements*/
		const p1 = document.createElement('p');
		const p2 = document.createElement('p');
		const table = document.createElement('table');
		const tr1 = document.createElement('tr');
		const tr2 = document.createElement('tr');
		const td1 = document.createElement('td');
		const td2 = document.createElement('td');
		const td3 = document.createElement('td');
		const teamNickname1 = document.createElement('div');
		const teamNickname2 = document.createElement('div');
		const logo1 = document.createElement('img');
		const logo2 = document.createElement('img');
		const score1 = document.createElement('div');
		const score2 = document.createElement('div');

		/*Set attributes to created HTML elements*/
		td3.setAttribute('rowspan', '5');
		td3.setAttribute('class', 'dateAndTime');
		td1.setAttribute('class', 'team');
		td2.setAttribute('class', 'team');
		teamNickname1.setAttribute('class', 'teamName');
		teamNickname2.setAttribute('class', 'teamName');
		score1.setAttribute('class', 'score');
		score2.setAttribute('class', 'score');
		table.setAttribute('class', 'col-12 col-md-6 teamSchedule');
		logo1.setAttribute('src', hTeamLogo);
		logo2.setAttribute('src', vTeamLogo);
		logo1.setAttribute('class', 'logo');
		logo2.setAttribute('class', 'logo');

		/*Fill html elements with values from javascript variables*/
		teamNickname1.textContent = hTeamNickname;
		teamNickname2.textContent = vTeamNickname;

		score1.textContent = hTeamScore;
		score2.textContent = vTeamScore;	

		let statusNum = element.statusNum;
		if(statusNum == 3){
			p1.textContent = 'Final';
			p2.textContent = date;

			/* Winner has bold font-weight */
			if(Number(hTeamScore) > Number(vTeamScore)){
				teamNickname2.style.color = 'rgba(0,0,0,.54)';
				score2.style.color = 'rgba(0,0,0,.54)';
			}
			else if(Number(vTeamScore) > Number(hTeamScore)){
				teamNickname1.style.color = 'rgba(0,0,0,.54)';
				score1.style.color = 'rgba(0,0,0,.54)';
			}
		}
		else{
			p1.textContent = date;
			p2.textContent = time;
		}

		/*Append html elements to main html element (scheduleElement)*/
		td1.appendChild(logo1);
		td1.appendChild(teamNickname1);
		td1.appendChild(score1);
		td2.appendChild(logo2);
		td2.appendChild(teamNickname2);
		td2.appendChild(score2);
		td3.appendChild(p1);
		td3.appendChild(p2);
		tr1.appendChild(td1);
		tr1.appendChild(td3);
		tr2.appendChild(td2);

		table.appendChild(tr1);
		table.appendChild(tr2);
		scheduleElement.appendChild(table);

		/*  Scroll to show most recent and expected games in the center of the screen */
		if(statusNum == 1 && executeOnce == 0){
			executeOnce++;
			table.scrollIntoView({block: "center"});
		}

		

	});

getStandings(team);	
}



async function getStandings(team){
	firstPageElement.style.display = 'none';

	const teamStandings_API = 'https://cors-anywhere.herokuapp.com/http://data.nba.net/prod/v1/current/standings_conference.json';

	const response = await fetch(teamStandings_API);
	const json = await response.json();

	const standingsEastArray = (json.league.standard.conference.east);
	const standingsWestArray = (json.league.standard.conference.west);


	const div = document.createElement('div');
	const divWest = document.createElement('div');
	const divEast = document.createElement('div');
	const east = document.createElement('div');
	const west = document.createElement('div');
	const eastwest = document.createElement('div');
	const tableEast = document.createElement('table');
	const tableWest = document.createElement('table');
	const tr1 = document.createElement('tr');
	const th1 = document.createElement('th');
	const th2 = document.createElement('th');
	const th3 = document.createElement('th');
	const th4 = document.createElement('th');
	const th5 = document.createElement('th');
	const th6 = document.createElement('th');
	const th7 = document.createElement('th');
	const th8 = document.createElement('th');
	const th9 = document.createElement('th');
	const th10 = document.createElement('th');
	const th11 = document.createElement('th');
	const th12 = document.createElement('th');

	div.setAttribute('class', 'col-12');
	east.setAttribute('class', 'col-6 east-conference');
	west.setAttribute('class', 'col-6 west-conference');
	eastwest.setAttribute('class', 'row eastwest-row');
	tableEast.setAttribute('class', 'standings-table-east');
	tableWest.setAttribute('class', 'standings-table-west');
	divWest.setAttribute('class', 'col-12 divWest');
	divEast.setAttribute('class', 'col-12 divEast');

	east.textContent = 'Eastern Conference';
	west.textContent = 'Western Conference';
	th1.textContent = 'Team';
	th2.textContent = '';
	th3.textContent = '';
	th4.textContent = 'W';
	th5.textContent = 'L';
	th6.textContent = 'Pct';
	th7.textContent = 'GB';
	th8.textContent = 'Conf';
	th9.textContent = 'Home';
	th10.textContent = 'Away';
	th11.textContent = 'L10';
	th12.textContent = 'Strk';

	eastwest.appendChild(east);
	eastwest.appendChild(west);
	tr1.appendChild(th1);
	tr1.appendChild(th2);
	tr1.appendChild(th3);
	tr1.appendChild(th4);
	tr1.appendChild(th5);
	tr1.appendChild(th6);
	tr1.appendChild(th7);
	tr1.appendChild(th8);
	tr1.appendChild(th9);
	tr1.appendChild(th10);
	tr1.appendChild(th11);
	tr1.appendChild(th12);

	const tr1E = tr1.cloneNode(true);

	tableEast.appendChild(tr1E);
	tableWest.appendChild(tr1);

	div.appendChild(eastwest);

	standingsElement.appendChild(div);
	divEast.appendChild(tableEast);
	divWest.appendChild(tableWest);
	standingsElement.appendChild(divEast);
	standingsElement.appendChild(divWest);


	standingsEastArray.forEach(element => {

		/* Get team nickname and logo  */
		const teamId = (element.teamId);
	   	let teamLogo;
	    let teamNickname;

		arrayOfTeams.forEach(element => {
			if(teamId == element.teamId){
				teamNickname = element.nickname;
				teamLogo = element.logo;
			}
		});

		/* Get the data from standingsEastArray */
		const rank = element.confRank;
		const w = element.win;
		const l = element.loss;
		const pct = element.winPct;
		const gb = element.gamesBehind;
		const conf = element.confWin + '-' + element.confLoss;
		const home = element.homeWin + '-' + element.homeLoss;
		const away = element.awayWin + '-' + element.awayLoss;
		const l10 = element.lastTenWin + '-' + element.lastTenLoss;

		
		if(element.isWinStreak == true){
			var strk = 'W' + element.streak;
		}
		else{
			var strk = 'L' + element.streak;
		}
		
		const tr = document.createElement('tr');
		const td1 = document.createElement('td');
		const td2 = document.createElement('td');
		const logo = document.createElement('img');
		const td3 = document.createElement('td');
		const td4 = document.createElement('td');
		const td5 = document.createElement('td');
		const td6 = document.createElement('td');
		const td7 = document.createElement('td');
		const td8 = document.createElement('td');
		const td9 = document.createElement('td');
		const td10 = document.createElement('td');
		const td11 = document.createElement('td');
		const td12 = document.createElement('td');

		logo.setAttribute('src', teamLogo);
		logo.setAttribute('class', 'standings-logo');
		td2.setAttribute('class', 'td-standings-logo');
		td1.setAttribute('class', 'rank');
		td3.setAttribute('class', 'standings-teamName');

		td1.textContent = rank;
		td3.textContent = teamNickname;
		td4.textContent = w;
		td5.textContent = l;
		td6.textContent = pct;
		td7.textContent = gb;
		td8.textContent = conf;
		td9.textContent = home;
		td10.textContent = away;
		td11.textContent = l10;
		td12.textContent = strk;

		td2.appendChild(logo);
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		tr.appendChild(td5);
		tr.appendChild(td6);
		tr.appendChild(td7);
		tr.appendChild(td8);
		tr.appendChild(td9);
		tr.appendChild(td10);
		tr.appendChild(td11);
		tr.appendChild(td12);

		tableEast.appendChild(tr);

		divEast.appendChild(tableEast);

		standingsElement.appendChild(divEast);

	});


	standingsWestArray.forEach(element => {

		/* Get team nickname and logo  */
		const teamId = (element.teamId);
	   	let teamLogo;
	    let teamNickname;

		arrayOfTeams.forEach(element => {
			if(teamId == element.teamId){
				teamNickname = element.nickname;
				teamLogo = element.logo;
			}
		});

		/* Get the data from standingsEastArray */
		const rank = element.confRank;
		const w = element.win;
		const l = element.loss;
		const pct = element.winPct;
		const gb = element.gamesBehind;
		const conf = element.confWin + '-' + element.confLoss;
		const home = element.homeWin + '-' + element.homeLoss;
		const away = element.awayWin + '-' + element.awayLoss;
		const l10 = element.lastTenWin + '-' + element.lastTenLoss;

		
		if(element.isWinStreak == true){
			var strk = 'W' + element.streak;
		}
		else{
			var strk = 'L' + element.streak;
		}
		
		const tr = document.createElement('tr');
		const td1 = document.createElement('td');
		const td2 = document.createElement('td');
		const logo = document.createElement('img');
		const td3 = document.createElement('td');
		const td4 = document.createElement('td');
		const td5 = document.createElement('td');
		const td6 = document.createElement('td');
		const td7 = document.createElement('td');
		const td8 = document.createElement('td');
		const td9 = document.createElement('td');
		const td10 = document.createElement('td');
		const td11 = document.createElement('td');
		const td12 = document.createElement('td');

		logo.setAttribute('src', teamLogo);
		logo.setAttribute('class', 'standings-logo');
		td2.setAttribute('class', 'td-standings-logo');
		td1.setAttribute('class', 'rank');
		td3.setAttribute('class', 'standings-teamName');

		td1.textContent = rank;
		td3.textContent = teamNickname;
		td4.textContent = w;
		td5.textContent = l;
		td6.textContent = pct;
		td7.textContent = gb;
		td8.textContent = conf;
		td9.textContent = home;
		td10.textContent = away;
		td11.textContent = l10;
		td12.textContent = strk;

		td2.appendChild(logo);
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		tr.appendChild(td5);
		tr.appendChild(td6);
		tr.appendChild(td7);
		tr.appendChild(td8);
		tr.appendChild(td9);
		tr.appendChild(td10);
		tr.appendChild(td11);
		tr.appendChild(td12);

		tableWest.appendChild(tr);

		divWest.appendChild(tableWest);

		standingsElement.appendChild(divWest);

	 	divWest.style.display = 'none';

	});

	east.onclick = function(){
		divWest.style.display = 'none';
		divEast.style.display = 'block';
		east.style.borderBottom = 'thick solid black';
		west.style.borderBottom = 'none';
	}

	west.onclick = function(){
		divWest.style.display = 'block';
		west.style.borderBottom = 'thick solid black';
		east.style.borderBottom = 'none';
		divEast.style.display = 'none';
	}


}






