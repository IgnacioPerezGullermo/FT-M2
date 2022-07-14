$('#loading').hide()
let loadFriends = $('#boton');
loadFriends.click(() =>{
    //alert("hola gato")
    $('#lista').empty()
    $('#loading').show()
    $.get(
        "http://localhost:5000/amigos",
        (data, status) =>{
            for(let el of data){
                let friendItem = document.createElement("li");
                friendItem.className = el.id
                console.log(el);
                friendItem.innerText = el.name;
                $('#lista').append(friendItem)

            }
            $('#loading').hide()
        }
      )
});
let searchFriends = $('#search');
searchFriends.click(()=> {
    let friendId = $("#input").val()
    $.get(
        "http://localhost:5000/amigos/"+ friendId,
        (data, status) =>{
            let friendSpan = $("#amigo");
            console.log(data.name);
            $("#amigo").text(friendId+"."+ data.name);
            $("#input").val("")
        }

    )
});
let deleteFriend = $('#delete');
deleteFriend.click(()=> {
    let idToDelete = $('#inputDelete').val()
    $.get(
        "http://localhost:5000/amigos/"+ idToDelete,
        (data, status) =>{
            let nombreEliminado = data.name
            localStorage.setItem("nombre", nombreEliminado);
        }

    )
    $.ajax({
        url: 'http://localhost:5000/amigos/'+idToDelete,
        type: 'DELETE',
        success: () => {
            //console.log(nombreEliminado )
            $('#success').text(`Tu amigo con el id ${localStorage.getItem("nombre")} fue eliminado exitosamente`)
            $('#inputDelete').val("")
            localStorage.removeItem("titulo");
            $('#lista').remove('#'+idToDelete)
        }
    });
})