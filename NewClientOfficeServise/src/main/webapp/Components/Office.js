$(document).ready(function() {
	$("#alertSuccess").hide();
	$("#alertError").hide();
});

// SAVE ============================================
$(document).on("click", "#btnSave", function(event) {
	// Clear alerts---------------------
	$("#alertSuccess").text("");
	$("#alertSuccess").hide();
	$("#alertError").text("");
	$("#alertError").hide();

	// Form validation-------------------
	var status = validateOfficeForm();
	if (status != true) {
		$("#alertError").text(status);
		$("#alertError").show();
		return;
	}

	// If valid------------------------
	var type = ($("#hidPowerIDSubmit").val() == "") ? "POST" : "PUT";

	$.ajax({
		url : "OfficeAPI",
		type : type,
		data : $("#formPower").serialize(),
		dataType : "text",
		complete : function(response, status) {
			onSaveComplete(response.responseText, status);
		}
	});
});

function onSaveComplete(response, status) {
	if (status == "success") {
		var resultSet = JSON.parse(response);

		if (resultSet.status.trim() == "success") {
			$("#alertSuccess").text("Successfully saved.");
			$("#alertSuccess").show();

			$("#divPowerSourceGrid").html(resultSet.data);
		} else if (resultSet.status.trim() == "error") {
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}

	} else if (status == "error") {
		$("#alertError").text("Error while saving.");
		$("#alertError").show();
	} else {
		$("#alertError").text("Unknown error while saving..");
		$("#alertError").show();
	}

	$("#hidPowerIDSubmit").val("");
	$("#formPower")[0].reset();
}

// UPDATE==========================================
$(document).on(
		"click",
		".btnUpdate",
		function(event) {
			$("#hidPowerIDSubmit").val(
					$(this).closest("tr").find('#hidPowerSourceIDUpdate').val());		
			$("#officeID").val($(this).closest("tr").find('td:eq(0)').text());
			$("#officeName").val($(this).closest("tr").find('td:eq(1)').text());
			$("#officeType").val($(this).closest("tr").find('td:eq(2)').text());
			$("#officeAddress").val($(this).closest("tr").find('td:eq(3)').text());
			$("#officePhone").val($(this).closest("tr").find('td:eq(4)').text());
			$("#officeManager").val($(this).closest("tr").find('td:eq(5)').text());
			
		});

// REMOVE===========================================
$(document).on("click", ".btnRemove", function(event) {
	$.ajax({
		url : "OfficeAPI",
		type : "DELETE",
		data : "ID=" + $(this).data("Office"),
		dataType : "text",
		complete : function(response, status) {
			onDeleteComplete(response.responseText, status);
		}
	});
});

function onDeleteComplete(response, status) {
	if (status == "success") {
		var resultSet = JSON.parse(response);

		if (resultSet.status.trim() == "success") {

			$("#alertSuccess").text("Successfully deleted.");
			$("#alertSuccess").show();

			$("#divPowerSourceGrid").html(resultSet.data);

		} else if (resultSet.status.trim() == "error") {
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}

	} else if (status == "error") {
		$("#alertError").text("Error while deleting.");
		$("#alertError").show();
	} else {
		$("#alertError").text("Unknown error while deleting..");
		$("#alertError").show();
	}
}

// CLIENT-MODEL=========================================================================
// CLIENT-MODEL================================================================
function validateOfficeForm()
{
	 //OfficeID
	 if ($("#officeID").val().trim() == "") {
		return "Insert Office ID.";
	}
	 
	 //OfficeName
	 if ($("#officeName").val().trim() == "") {
		return "Insert Office Name.";
	}
	 
	 //OfficeType
	 if ($("#officeType").val().trim() == "") {
		return "Insert Office Type.";
	}
	 
	 //OfficeAddress
	 if ($("#officeAddress").val().trim() == "") {
		return "Insert Office Address.";
	}
	 
	 //officePhoneNumber
	 if ($("#officePhone").val().trim() == "") {
		return "Insert Phone Number.";
	}
	 
	 //ManagerID
	 if ($("#officeManager").val().trim() == "") {
		return "Insert Manager ID.";
	}
	
	//is numreic
	var tmpMan = $("#officeManager").val().trim();
	if(!$.isNumeric(tmpMan))
	{
		return "Insert a numerical value for ManagerID."
	}

	
	return true;
	
}