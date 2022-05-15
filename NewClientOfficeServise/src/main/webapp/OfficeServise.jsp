<%@page import="model.Office" %>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.4.1.min.js"></script>
<script src="Components/Office.js"></script>
</head>
<body>
<div class="container">
		<div class="row">
			<div class="col-6">
				<h1>Office Management</h1>

				<form id="formPower" name="formPower" method="post" action="OfficeServise.jsp">
					
						
						
						
						 Office ID: <input id="officeID" name="officeID" type="text"
						class="form-control form-control-sm">
						<br>
						Office Name:  <input id="officeName" name="officeName" type="text"
						class="form-control form-control-sm">
						<br>
						 Office Type: <input id="officeType" name="officeType" type="text"
						class="form-control form-control-sm">
						<br>
						 Office Address: <input id="officeAddress" name="officeAddress" type="text"
						class="form-control form-control-sm">
						<br>
						 Phone Number: <input id="officePhone" name="officePhone" type="text"
						class="form-control form-control-sm">
						<br>
						 Manager ID: <input id="officeManager" name="officeManager" type="text"
						class="form-control form-control-sm">
						
						
						
						
						
						
						
						
						
						<br> <input id="btnSave" name="btnSave" type="button" value="Save" 
						class="btn btn-primary"> <input type="hidden"
						id="hidPowerIDSubmit" name="hidPowerIDSubmit" value="">
				</form>

				<div id="alertSuccess" class="alert alert-success"></div>
				<div id="alertError" class="alert alert-danger"></div>

				<br>
				<div id="divPowerSourceGrid">
					<%
					Office ps = new Office();
						out.print(ps.readOficeData());
					%>
				</div>
			</div>
		</div>
	</div>
</body>
</html>