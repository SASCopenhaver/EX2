<!--- TEST: --->
<!---
<br><cfdump var="application.urlstart  = #application.urlstart#">
<br><cfdump var="application.httphost  = #application.httphost#" >
<br><cfdump var="application.path.root = #application.path.root#" >
<p>
Dot notation:<br>
<br><cfdump var="app.assets = #app.assets#">
<br><cfdump var="app.img = #app.img#">
<br><cfdump var="app.assets_styles = #app.styles#">
<br><cfdump var="app.ui = #app.ui#">
<br><cfdump var="app.builds = #app.builds#">
<br><cfdump var="app.build_styles = #app.build_styles#">
</p>
<cfabort >
--->
<!--- TEST. --->

<cflocation url="controller.cfm?urlController=authenticate" addtoken="true" >