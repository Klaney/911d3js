	
	// Timeline start and end date
	var startYear = 1964;
	var endYear = 2015;
	
	// Models of Porsches
	var models = [[1,"911 O, A, and B series", 1963, 1969, "https://en.wikipedia.org/wiki/Porsche_911_(classic)"],
					[2, "C and D series", 1969, 1971, "https://en.wikipedia.org/wiki/Porsche_911_(classic)"],
					[3, "E and F series", 1971, 1973, "https://en.wikipedia.org/wiki/Porsche_911_(classic)"],
					[4, "Carrera RS", 1973, 1974, "https://en.wikipedia.org/wiki/Porsche_911_(classic)"],
					[5, "G and H series", 1974, 1975, "https://en.wikipedia.org/wiki/Porsche_911_(classic)"],
					[6, "Carrera 3.0", 1976, 1977, "https://en.wikipedia.org/wiki/Porsche_911_(classic)"],
					[7, "Turbo Type-930", 1974, 1989, "https://en.wikipedia.org/wiki/Porsche_930"],
					[8, "911 SC", 1978, 1983, "https://en.wikipedia.org/wiki/Porsche_911_(classic)"],
					[9, "3.2 Carrera", 1984, 1989, "https://en.wikipedia.org/wiki/Porsche_911_(classic)"],
					[10, "Porsche 964", 1989, 1994, "https://en.wikipedia.org/wiki/Porsche_964"],
					[11, "Porsche 993", 1993, 1998, "https://en.wikipedia.org/wiki/Porsche_993"],
					[12, "Porsche 996", 1997, 2004, "https://en.wikipedia.org/wiki/Porsche_996"],
					[13, "Porsche 997", 2004, 2012, "https://en.wikipedia.org/wiki/Porsche_997"],
					[14, "Porsche 991", 2012, 2015, "https://en.wikipedia.org/wiki/Porsche_991"],
					];
	
	// individualModels				
	var individualModels = [[1967, "Targa", "Introduced because Ferdinand porsche believed Convertibles were going to be phased out", "#"],
				 [1967, "911T", "210HP Lightweight Racing Model", ""],
				 [1966, "911S", "Power bumped to 160HP", ""],
				 [1963, "A legend is born", "The first 911", "#"],
				 [1969, "B17", "Long Wheelbase 4 seat concept", ""],
				 [1969, "911T", "123HP entry level model", ""],
				 [1969, "911E", "153HP Mid level", ""],
				 [1969, "911S", "180HP top of the line model", ""],
				 [1972, "New 2.4L Engine range", "", ""],
				 [1973, "New 2.7L Engine", "210HP", ""],
				 [1974, "New 3.0L Engine", "230HP", ""],
				 [1981, "Turbo pulled from US market", "Draconian Emissions laws", ""],
				 [1986, "Turbo put back on the market", "Demand and sales skyrocket", ""],
				 [1978, "New 3.0L Engine", "180HP", ""],
				[1979,"911 almost discontinued","almost replaced by 928",""],
				[1984,"New 3.2L Engine ", "207HP US Market 231HP Euro",""],
				[1989,"New 3.6L Engine", "247HP",""],
				[1992,"Carrera RS","260HP Race Variant, not for US",""],
				[1990,"964 Turbo","320HP",""],
				[1992,"Turbo S","376HP version",""],
				[1994,"Turbo 3.6","360HP, 1,500 produced, rare and desireable",""],
				[1990,"Speedster","Drop top with flair",""],
				[1993,"80% new and much inproved","272HP, Multilink suspension and no lift of oversteer",""],
				[1995,"3.6L Turbocharged engine","402HP, All wheel drive",""],
				[1997,"Turbo S","450HP, extremely rare",""],
				[1997,"Carrera S","Turbo body with no turbo",""],
				[1995,"Carrera RS","Not available in US Race variant",""],
				[1993,"911 GT2","Race homologation version",""],
				[1997,"All new water cooled engine for 996","300HP",""],
				[2000,"996 Turbo model","415HP",""],
				[1999,"911 GT3","Lightweight race variant 380HP",""],
				[2002,"911 GT2","Turbo variant of GT3, 489HP",""],
				[2004,"No new engines","",""],
				[2006,"Turbo Model","470HP",""],
				[2007,"911 GT2","523HP Goes over 200MPH",""],
				[2007,"911 GT3","410HP ",""],
				[2008,"Gen2 997","New Engines. Better Reliability. More Power",""],
				[2010,"Turbo S","2.6 0-60 530HP",""],
				[2010,"Gen2 GT3","435HP 3.8L engine",""],
				[2011,"GT3 RS 4.0","Highest Desirability, tripled in value since release",""],
				[2012,"New Chassis","roofline tapers",""],
				 ];
	
		 
	for (var i = 0; i < individualModels.length; i++) {
		for (var j = 0; j < models.length; j++) {
			if (individualModels[i][0] >= models[j][2] && individualModels[i][0] <= models[j][3]) {
				individualModels[i].push(models[j][0]);
				break;
			}
		}
	}
	// determine order of dates
	individualModels.sort(function(a, b) { return (a[0] < b[0] ? -1 : (a[0] > b[0] ? 1 : 0)); });
	
	// Determine order within individualModels 
	var order = 1; var oldVar;
	for (var i = 0; i < individualModels.length; i++) {
		order++;
		if (individualModels[i][0] - oldVar > 100 || order >= 27) {
			order = 1;
		}
		individualModels[i].push(order);
		oldVar = individualModels[i][0];
	}
	
	
	
	// Position of Timeline
	var margin = {top: 20, right: 150, bottom: 25, left: 50},
    width = 2000 - margin.left - margin.right,
    height = 700 - margin.top - margin.bottom;
	
	
	var formatNumber = d3.format(" 1f");

	var x = d3.scale.linear()
		.domain([startYear, endYear])
		.range([0, width]);
		
	var y = d3.scale.linear()
			.domain([0, 30])
			.range([0, height]);

	var xAxis = d3.svg.axis()
		.scale(x)
		.ticks(20)
		.tickFormat(formatNumber)
		.orient("bottom");
		

	var svg = d3.select("body").append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
		.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	var gx = svg.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0," + height + ")")
		.style('fill', 'white')
		.call(xAxis);
		
	var bar = 30;		
	// append the models	
	svg.append("g").selectAll("model")
			.data(models)
			.enter().append("rect")
			.attr("class", "model")
			.attr("x", function(d) {return x(d[2]);})
			.attr("y", function(d) {if (d[0] % 2 == 0) return height - (bar + 4); else return height - (bar + 4) * 2;}  )
			.attr("width", function(d) {return x(d[3]) - x(d[2]);})
			.attr("height", bar)
			.attr("fill", function(d) {  return "hsl(" + (360 - d[0] * 19) + ",50%,50%)" });
			
	// append the specific models
	svg.append("g").selectAll(".individualModel")
			.data(models)
			.enter().append("a")
			.attr("xlink:href", function(d) {return d[4];})
			.append("text")
			.text(function(d) {return d[1];})
			.attr("class", "individualModel")
			.attr ("id", function(d) {return "individualModel" + d[0];})
			.attr("text-anchor", "middle")
			.attr("x", function(d) {return x((d[2] + d[3]) / 2);})
			.attr("y", function(d) {if (d[0] % 2 == 0) return height - (bar + 4); else return height - (bar + 4) * 2;}  )
			.attr("dy", "1.5em")
			.attr("font-weight", "bold");
	
						
	svg.append("g").selectAll("modelLine")
			.data(individualModels)
			.enter().append("line")
			.attr("class", "modelLine")
			.attr("x1", function(d) {return x(d[0]);})
			.attr("y1", function(d) {if (d[4] % 2 == 0) return height - bar; else return height - bar * 2;})
			.attr("x2", function(d) {return x(d[0]);})
			.attr("y2", function(d) {return y(d[5]);})
			.attr("stroke", "purple");
				
	// attach title to individualModels	
	var titles = svg.append("g").selectAll("modelName")
			.data(individualModels)
			.enter().append("a")
			.attr("xlink:href", function(d){if (d[3] === "") return "http://www.wikipedia.org/find?q=" + d[1] + " " + d[2] + "&s=tt"; else return d[3];})
			.attr("class", function(d) {return "modelName";});
	titles.append("text")
			.text(function(d) {return d[1] + " (" +  d[2] + ")";})
			.style("fill", "black")
			.attr("text-anchor", "left")
			.attr("x", function(d) {return x(d[0]);}  )
			.attr("y", function(d) {return y(d[5]);} )
			.attr("dy", "0.75em")
			.attr("dx", "0.25em");

