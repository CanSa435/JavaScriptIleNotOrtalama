const kullaniciArayuzu = new UI();

function Average(vize1,vize2,final){
    this.vize1 = vize1;
    this.vize2 = vize2;
    this.final = final;
}

Average.prototype.sumAverage = function(exam1,exam2,final){
    exam1 = Number(exam1);
    exam2 = Number(exam2);
    final = Number(final);
    let average = (exam1 * 3.5 + exam2 * 3.5 + final * 0.7);
    if(average >= 50){
        kullaniciArayuzu.sonucuYaz.innerHTML = `<h1 style="color:green font-size:15px">Sonuç ${average} başarılı</h1>`;
    }else{
        kullaniciArayuzu.sonucuYaz.innerHTML = `<h1 style="color:red font-size:15px">Sonuç ${average} başarısız</h1>`;
    }
}


