const input = document.getElementById("task")
const button = document.getElementById("liveToastBtn")
const list = document.getElementById("list")


button.addEventListener("click", go)

// Enter'a bastığımızda da ekleme yapsın. Enter'ın keycode' 13 olduğundan 13'e eşitleriz.
input.addEventListener("keyup", function(enter) {
    if (enter.keyCode == 13) {
        go()
    }
    // localStorage'e veriyi eklemek
    let localItems = JSON.parse(localStorage.getItem("localItem"))
    if (localItems === null){
        taskList = []
    }else{
        taskList = localItems; 
    }
    taskList.push(input.value)
    localStorage.setItem("localItem", JSON.stringify(taskList))
})

function go(){
    if(input.value !== ""){
        var ekle = document.createElement("li")
        ekle.innerText = input.value
        list.appendChild(ekle)
        // listeye eleman ekledikten sonra yazdığımız yazıyı silsin  
        input.value = ""
        // silme butonu ekliyoruz
        let span = document.createElement("span")
        let isaret = document.createTextNode("X")
        span.className = "deleteButton"
        span.appendChild(isaret)
        ekle.appendChild(span)
        
        // x'e tıkladığımızda o satırı kaldırsın
        span.addEventListener("click", function(){
            list.removeChild(ekle)
        })
        
        // yapıldı işareti ekliyoruz
        let yapildiSpan = document.createElement("span")
        let yapildi = document.createTextNode("✓")
        yapildiSpan.className = "yapildiButton"
        yapildiSpan.appendChild(yapildi)
        ekle.appendChild(yapildiSpan)

        // ✓'a tıkladığımızda text'in üzeri çizilsin
        yapildiSpan.addEventListener("click", function(){
           ekle.style.textDecoration = "line-through"
        })
    }else{
        window.alert("Boş ekleme yapamazınız.")
    }
}

