const luongCoBan = 100000;
document.getElementById("btnTinhLuong").onclick = function(){
    var soNgay = document.getElementById("soNgay").value;
    var tongLuong = soNgay * luongCoBan;
    document.getElementById("tienLuong").innerHTML = `tieng luong tra cho ${soNgay} ngay lam viec la ${tongLuong} VND`;
}
document.getElementById("btnTrungBinh").onclick = function(){
    var so1 = document.getElementById("soThu1").value*1;
    var so2 = document.getElementById("soThu2").value*1;
    var so3 = document.getElementById("soThu3").value*1;
    var so4 = document.getElementById("soThu4").value*1;
    var so5 = document.getElementById("soThu5").value*1;
    var trungBinh = (so1 + so2 + so3 + so4 + so5)/5;
    console.log(trungBinh);
    document.getElementById("soTrungBinh").innerHTML = `so trung binh la ${trungBinh}`;
}
const rateUSD = 23500;
document.getElementById("btnDoiTien").onclick = function(){
    var tienUSD = document.getElementById("tienUSD").value * 1;
    var tienVND = tienUSD * rateUSD;
    document.getElementById("tienDoi").innerHTML = `So tien duoc quy doi la ${tienVND} VND`;
}
document.getElementById("btnTinh").onclick = function() {
    var chieuDai = document.getElementById("chieuDai").value * 1;
    var chieuRong = document.getElementById("chieuRong").value * 1;
    var chuVi = (chieuDai + chieuRong) * 2;
    var dienTich = chieuDai * chieuRong;
    document.getElementById("chuViDienTich").innerHTML = `Hinh chu nhat co chu vi = ${chuVi} va dien tich = ${dienTich}`;
}
document.getElementById("btnTinhTong").onclick = function(){
    var so = document.getElementById("txtSo").value * 1;
    var tong = (so % 10) + Math.floor(so / 10);
    document.getElementById("2KySo").innerHTML = `tong 2 ky so = ${tong}`;
}