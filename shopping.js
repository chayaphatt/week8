window.onload = pageLoad;

function pageLoad() {
    const xhr = new XMLHttpRequest(); 
    xhr.open("GET", "cloth.json"); 

    xhr.onload = function() {
       
        if (xhr.status >= 200 && xhr.status < 300) { 
            try {
                const jsdata = JSON.parse(xhr.responseText);
                showData(jsdata);
            } catch (e) {
                console.error("Error parsing JSON:", e);
                alert("ข้อมูลสินค้าเสียหาย ไม่สามารถแสดงผลได้");
            }
        } else {
            alert(`ไม่สามารถโหลดไฟล์: ${xhr.status} ${xhr.statusText}`);
        }
    };

    xhr.onerror = function() {
        alert("ERROR: มีปัญหาในการเชื่อมต่อเครือข่าย");
    };

    xhr.send();
}

function showData(top) {
    const showdivs = document.querySelectorAll("#layer > div");
    const keys = Object.keys(top);
    for (let i = 0; i < showdivs.length && i < keys.length; i++) {
        const item = top[keys[i]];
        showdivs[i].innerHTML = `
            <img src="${item.img}" alt="${item.brand}">
            <p><b>${item.brand}</b></p>
            <p>Price: ${item.price} Baht</p>
        `;
    }
}