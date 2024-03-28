// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function Cadastro()
{
    let paramentros = {
        Nome: $("#nome").val(),
        Email: $("#email").val(),
        Mensgem: $("#mensagem").val()
    };

    $.post("/Home/Cadastrar", paramentros)

    .done(function(data)
    {
        if(data.status=="OK")
        {
            $("#frm").after("<h3> Seu Cadastro foi registrado! </h3> ");
            $("#frm").hide();
        }
        else
        {
            $("#frm").after("<h3> Erro no cadatro! </h3> ");
            $("#frm").hide();
        }
    })
    .fail(function()
    {
        alert("Erro no servidor");
    });
}

$(document).ready(function()
{
    $("#formularioCadastro").submit(function(e)
    {
        e.preventDefault();
        Cadastro();
    });
});
