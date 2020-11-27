
function validaForm() {

    let formulario = document.getElementById("formulario");
   
    let validationDiv = document.getElementById("validationMessages");
    validationDiv.display = "none";

    let ul = document.getElementById("ul");
    let li1= document.getElementById("li1");
    let li2= document.getElementById("li2");
    let li3= document.getElementById("li3");
    let li4= document.getElementById("li4");
    let li5= document.getElementById("li5");
    let li6= document.getElementById("li6");
    let li7= document.getElementById("li7");
    let li8= document.getElementById("li8");
    let li9= document.getElementById("li9");

    li1.innerHTML = "";
    li2.innerHTML ="";
    li3.innerHTML = "";
    li4.innerHTML = "";
    li5.innerHTML = "";
    li6.innerHTML = "";
    li7.innerHTML = "";
    li8.innerHTML = "";
    li9.innerHTML = "";

    li1.className="itemVazio";
    li2.className="itemVazio";
    li3.className="itemVazio";
    li4.className="itemVazio";
    li5.className="itemVazio";
    li6.className="itemVazio";
    li7.className="itemVazio";
    li8.className="itemVazio";
    li9.className="itemVazio";

    let erro;

        if(formulario.nome.value == null || formulario.nome.value ==""){
            validationDiv.display="block";
            li1.innerHTML = "O campo nome da obra não deve ser vazio.";
            ul.className="lista";
            li1.className="item";
            erro = true;
        }
        
    
        if(formulario.nome.value.length < 6){
            validationDiv.display="block";
            li2.innerHTML = "O campo nome da obra deve ter no mínimo 6 caracteres.";
            ul.className="lista";
            li2.className="item";
            erro = true;
        }
        
        if(formulario.autor.value == "" || formulario.autor.value == null) {
            validationDiv.display="block";
            li3.innerHTML = "O campo autor da obra não deve ser vazio.";
            ul.className="lista";
            li3.className="item";
            erro = true;
        }
    
        if(formulario.autor.value.length < 10 ){
            validationDiv.display="block";
            li4.innerHTML = "O campo autor da obra deve ter no mínimo 10 caracteres.";
            ul.className="lista";
            li4.className="item";
            erro = true;
        }
        
    
        if(formulario.ano.value =="" || formulario.ano.value== null){
            validationDiv.display="block";
            li5.innerHTML = "O campo ano não deve ser vazio.";
            ul.className="lista";   
            li5.className="item";
            erro = true;     
        }
        
    
        if(formulario.periodo.value == "dc"){
            let dt = new Date();
            if(formulario.ano.value < 0 || formulario.ano.value > dt.getFullYear()){
                validationDiv.display="block";
                text = document.createTextNode("O campo ano deve ser válido.");
                li6.innerHTML = "O campo ano deve ser válido.";
                ul.className="lista"; 
                li6.className="item";
                erro = true;
                
            }
        } 
    
        if(formulario.periodo.value == "ac"){
            if(formulario.ano.value < 0 || formulario.ano.value > 2050){
                validationDiv.display="block";
                li7.innerHTML = "O campo ano deve ser válido.";
                ul.className="lista"; 
                li7.className="item";
                erro = true;            
            }
        } 
    
        if(formulario.periodo.selectedIndex == 0){
            validationDiv.display="block";
            li8.innerHTML = "O campo período deve ser selecionado.";
            ul.className="lista";
            li8.className="item";  
            erro = true;     
            
        }
     
        if(formulario.tipo.selectedIndex == 0){
            validationDiv.display="block";
            li9.innerHTML = "O campo tipo deve ser selecionado.";
            ul.className="lista";
            li9.className="item"; 
            erro = true;       
        }


    if(!erro){
        alert("Formulário enviado!");
        registraDados();
        zeraCampos();
    }
}

function zeraCampos(){
    let nome = document.getElementById("nome");
    let autor = document.getElementById("autor");
    let ano = document.getElementById("ano");
    let periodo = document.getElementById("periodo");
    let tipo = document.getElementById("tipo");
    let detalhamento = document.getElementById("detalhamento");
    nome.value="";
    autor.value="";
    ano.value="";
    periodo.selectedIndex = 0;
    tipo.selectedIndex = 0;
    detalhamento.value = "";

}

function registraDados(){
    let formulario = document.getElementById("formulario");

    let inclusao = document.getElementById("inclusaoTabela");
    
    inclusao.className = "tabelaCheia";

    let tbody = document.getElementById("tBodyId")

    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let text1 = document.createTextNode(formulario.nome.value);
    td1.appendChild(text1);
    let td2 = document.createElement("td");
    let text2 = document.createTextNode(formulario.autor.value);
    td2.appendChild(text2);
    let td3 = document.createElement("td");
    let text3 = document.createTextNode(formulario.ano.value);
    td3.appendChild(text3);
    let td4 = document.createElement("td");
    let text4 = document.createTextNode(formulario.periodo.value);
    td4.appendChild(text4);
    let td5 = document.createElement("td");
    let text5 = document.createTextNode(formulario.tipo.value);
    td5.appendChild(text5);
    let td6 = document.createElement("td");
    includeDeleteButton(td6);
    let td7 = document.createElement("td");
    let text7 = document.createTextNode(formulario.detalhamento.value);
    td7.appendChild(text7);

    let th = document.getElementById("det");
    td7.className = "detalhamento";
    th.className = "detalhamento";

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);

    td1.onclick = function(){
        window.alert("Detalhamento da Obra: " + text7.data);
    }
    td2.onclick = function(){
        window.alert("Detalhamento da Obra: " + text7.data);
    }
    td3.onclick = function(){
        window.alert("Detalhamento da Obra: " + text7.data);
    }
    td4.onclick = function(){
        window.alert("Detalhamento da Obra: " + text7.data);
    }
    td5.onclick = function(){
        window.alert("Detalhamento da Obra: " + text7.data);
    }
    tbody.appendChild(tr);
}

function includeDeleteButton(parentElement){
    let button = document.createElement("input");
    button.name = "buttonName";
    button.type = "button";
    button.value = "Excluir";
    button.onclick = deleteRow;
    parentElement.appendChild(button);

    
}

function deleteRow(){
    let deleta=confirm("Deseja deletar");
    if (deleta==true){
        let td=this.parentElement;
        let tr=td.parentElement;
        let index=tr.rowIndex;
        let tBody=tr.parentElement;
        let table = tBody.parentElement;
        table.deleteRow(index);
    }
}
