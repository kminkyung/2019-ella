/* EVENT */
// 문서 load가 끝나면 시작될 함수
$(document).ready(getData);
$("#bt-wr").click(postData);
$("#bt-up").click(putData);

/* CRUD */
function getData() {
	ajax("/rest-ajax", "get", {}, renderData);
}

function postData() {
	var username = $("#username-wr").val().trim();
	if(username.trim() == "") {
		alert("이름을 입력하세요");
		$("#username-wr").focus();
		return false;
	}
	ajax("/rest-ajax", "post", {username: username}, function(res){
		if(res.code == 200) getData();
		else alert("등록실패");
		$("#username-wr").val("");
	});
}

function putData() {
	var username = $("#username-up").val();
	var id = $("#id-up").val();
	ajax("/rest-ajax", "put", {id:id, username: username}, function(res){
		if(res.code == 200) getData();
		else alert("수정실패");
		$("#id-up").val('');
		$("#username-up").val('').prop("disabled", true);
		$("#bt-up").prop("disabled", true);
	});
}

function delData(btn) {
	if(confirm("정말로 삭제하시겠습니까?")){
		var id = $(btn).parent().find(".sp-id").text();
		ajax("/rest-ajax", "delete", {id: id}, function(res){
			if(res.code == 200) getData();
			else alert("삭제실패");
		})
	};
}


/* DOM */
function chgData(btn) {
	var	id = $(btn).parent().find(".sp-id").text();
	var	username = $(btn).parent().find(".sp-username").text();
	$("#username-up").prop("disabled", false).val(username);
	$("#id-up").val(id);
	$("#bt-up").prop("disabled", false);
}



function renderData(res) {
	// console.log(res);
	var html = '';
	for(var i in res) {
		html += '<li class="p-3 d-flex border rounded m-1">';
		html += '<span class="sp-id mr-2">'+res[i].id+'</span>';
		html += '<span class="sp-username mr-2">'+res[i].username+'</span>';
		html +=	'<button class="btn btn-danger btn-sm mr-2" onclick="delData(this);">삭제</button>';
		html +=	'<button class="btn btn-success btn-sm mr-2" onclick="chgData(this);">수정</button>';
		html +=	'</li>';
	}
	$(".lists").html(html);
}

