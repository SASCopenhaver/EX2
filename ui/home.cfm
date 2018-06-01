<!--- home.cfm --->
<!DOCTYPE html> <!--- HTML5 --->
<html lang="en">
<head>
<meta charset="utf-8" />
<cfoutput>
	<title>#app.name#</title>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta name="keywords" content="exordium,Exordium,EXORDIUM,Sergey Surikov Site">
  		<meta name="description" content="Website for learning.">
		
		<link rel="stylesheet" href="#app.build_styles#styles.css"></link>
	
</cfoutput>

</head>
<body id="bdyApp">
<div class="divApp">
	<form id="frmPage" name="frmPage" method="post" >
			<nav id="navApp" >
				<cfinclude template="navigation.cfm" >
			</nav>
			<header id="hdrApp">
				<cfinclude template="header.cfm" >
			</header>
			<section id="secApp">
				<cfinclude template="section.cfm" >
			</section>
			<footer id="ftrApp">
				<cfinclude template="footer.cfm" >
			</footer>
	</form>
</div>
</body>
</html>