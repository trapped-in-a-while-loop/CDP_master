document.querySelector("#cancel").addEventListener("click", onClick);
document.querySelector("#ok").addEventListener("click", onClickOk);

function onClickOk() {
    if (document.cookie.includes("id=")) {

        const url = backUrl+"project";
        const my_headers = new Headers();
        my_headers.append("Content-Type", "application/json");

        const id = readCookie("id");

        const params = { id: id };

        const my_init = {
            method: "DELETE",
            headers: my_headers,
            mode: "cors",
            cache: "default",
            body: JSON.stringify(params)
        };

        fetch(url, my_init)
            .then(async function (res) {
                if (res.status === 200) {
                    await Swal.fire({
                        icon: "success",
                        text: "Projet supprimé"
                    });
                    document.cookie = "id=no_id; expires=Fri, 01 Jan 2010 00:0:00 UTC; path=./*";
                    document.location.href = "myprojects.html";
                }
                else
                    await Swal.fire({
                        icon: "error",
                        text: res.statusText
                    });
            }).catch(function (err) {
                console.log(err.message);
            });
        
    }
}

function onClick(){
    document.cookie = "id=no_id; expires=Fri, 01 Jan 2010 00:0:00 UTC; path=./*";
    document.location.href = "myprojects.html";
}
