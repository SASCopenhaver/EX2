<!--- header.cfm ---> 
<!---
<cfoutput>
<div id="divHeaderImg"><img id="imgHeader" src="#application.path.img#exordium.jpg" ></div>
<div><img  id="imgHeader" src=""> </div>
<div id="divHeaderAppName">_#application.name#_</div>
<div id="divHeaderSalutation">Hello, #session.vUserFullName#</div>
</cfoutput>
--->

	<!---
	Section 7 Lecture 20 - 11:37!!!! 
	 --->
	<!---https://stackoverflow.com/questions/28650327/responsive-images-srcset-not-working--->
	<!---<img srcset="../assets/img/header1--1920x654.jpg"  >--->
	<!---<img srcset="../assets/img/header1--480x163-i.jpg 570w, ../assets/img/header1--960x326-i.jpg 960w, ../assets/img/header1--1920x654-i.jpg 1920w" >--->
	<!---<picture>
		<img src="#app.img#header2--1920x654.jpg" alt="Peru. Sunrise in Machu Picchu" >
	</picture>--->
	<!---
	<picture>
		<source srcset="#app.img#header1--1920x654.jpg 1920w, #app.img#header1--1920x654.jpg 3000w" media="(min-width: 1380px)" >
		<source srcset="#app.img#header1--960x326.jpg 1380w, #app.img#header1--960x326.jpg 2760w " media="(min-width: 990px)">
		<img srcset="#app.img#header1--480x163.jpg 640w, #app.img#header1--480x163.jpg 1380w" alt="Peru. Sunrise in Machu Picchu" >
	</picture>
	--->
<cfoutput>
<div class="cdivHeaderApp">
	
	<img src="#app.img#header2--1920x654.jpg" 
		 alt="Peru. Sunrise in Machu Picchu." 
		 class="cdivHeaderApp__image" >
	
	<div class="cdivHeaderApp__text-content">
		<div class="wrapper">
			<h1 class="cdivHeaderApp__title">#app.name#</h1>
			<h2 class="cdivHeaderApp__subtitle">Hello and Welcome<h2>
			
			<p class="cdivHeaderApp__description">
				This site is a training ground.
			</p>
		</div>
	</div>
	
</div>
</cfoutput>	
<!---	
	<!---<img src="#application.path.img#header--large.jpg" >--->
	
	<!--- Art Direction --->
	<!---
	<picture>
		<img src="#application.path.img#header--small.jpg" >
		<source srcset="#application.path.img#header--large.jpg" media="(min-width:1200px)">
		<source srcset="#application.path.img#header--medium.jpg" media="(min-width:760px)">
	</picture>
	--->
	
	<!--- Image resolution (file size) --->
	<img srcset="#application.path.img#header--small.jpg 1210w, " 
				 "#application.path.img#header--medium.jpg 1820w,"
				 "#application.path.img#header--large.jpg 3640w">
	
	
	<div class="class-headerApp__text-content">
		<h1 class="class-headerApp__AppName">#application.name#</h1>
		<h2 class="class-headerApp__AppSalutation">Hello and Welcome</h2>
		<p class="class-headerApp__AppDescription">
			This web site does not represent any particular application or system.
			<br>
			It supposed to be used as a reference.
		</p>
	</div>
--->
