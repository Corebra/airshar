
//show all comments, for this posts
dist_com();

function dist_com(){

    var xmlhttp=new XMLHttpRequest();
    var id = art.getAttribute('name');
       //console.log(id);
       xmlhttp.open("GET","articles.php?status=comments&id="+id, false);
       xmlhttp.send(null);

       document.getElementById("dist_com").innerHTML=xmlhttp.responseText;
   } 

// insert comments
function ins_com(){
    try {
            // Opera 8.0+, Firefox, Safari
            ajaxPOSTTestRequest = new XMLHttpRequest();
        } catch (e) {
            // Internet Explorer Browsers
            try {
                ajaxPOSTTestRequest = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
                try {
                    ajaxPOSTTestRequest = new ActiveXObject("Microsoft.XMLHTTP");
                } catch (e) {
                    // Something went wrong
                    alert("Your browser broke!");
                    return false;
                }
            }
        }
//take name, text and id post
//this simple sistem of comments, it has no input checks
        var name=document.getElementById("comments_name").value;
        var text=document.getElementById("comments_text").value;
        var id = art.getAttribute('name');
        ajaxPOSTTestRequest.onreadystatechange = ajaxCalled_POSTTest;

        var url = "articles.php";
        var params = "name="+name+"&text="+text+"&id="+id+"&statusP=insert_comment";

        ajaxPOSTTestRequest.open("POST", url, true);
        ajaxPOSTTestRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        ajaxPOSTTestRequest.send(params);
    }
    function ajaxCalled_POSTTest() {
        if (ajaxPOSTTestRequest.readyState == 4) {
            dist_com();
            document.getElementById("comments_name").value= "";
            document.getElementById("comments_text").value= "";
        }
    }