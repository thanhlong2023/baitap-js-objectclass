var dsnv = new DanhSachNhanVien();

var validation = new Validation();

function domID(id) {
    return document.getElementById(id);
}

function setLocalStorage() {
    localStorage.setItem("DSNV", JSON.stringify(dsnv.mangNV));
}
function getLocalStorage() {
    if (localStorage.getItem("DSNV") != null) {
        dsnv.mangNV = JSON.parse(localStorage.getItem("DSNV"));
        hienThiDSNV(dsnv.mangNV);
    }
}

getLocalStorage();

function hienThiDSNV(mang) {
    var content = "";
    mang.map(function (nv) {
        var trELE = `<tr>
        <td>${nv.taiKhoan}</td>
        <td>${nv.tenNV}</td>
        <td>${nv.email}</td>
        <td>${nv.ngayThang}</td>
        <td>${nv.chucVu}</td>
        <td>${nv.tongLuong}</td>
        <td>${nv.xepLoai}</td>
        <td>
            <button class="btn btn-danger" onclick="xoaNhanVien('${nv.taiKhoan}')"   >Xóa</button>
            <button class="btn btn-info" onclick="hienThiChiTiet('${nv.taiKhoan}')" data-toggle="modal" data-target="#myModal">Xem</button>
        </td>
    </tr>`
        content += trELE;
    })
    domID('tableDanhSach').innerHTML = content;
}

domID("btnThemNV").onclick = function () {

    var taiKhoan = domID('tknv').value;
    var ten = domID('name').value;
    var email = domID('email').value;
    var matKhau = domID('password').value;
    var ngayThang = domID('datepicker').value;
    var luong = domID('luongCB').value;
    var chucVu = domID('chucvu').value;
    var gioLam = domID('gioLam').value;

    var isValid = true;

    //* Tài khoản
    isValid &= validation.checkEmpty(taiKhoan, "Không được để trống", "tbTKNV")
        && validation.checkTK(taiKhoan, "Tài khoản không được trùng", "tbTKNV", dsnv.mangNV)
        && validation.checkLengthTK(taiKhoan, "Tài khoản tối đa 4-6 ký số", "tbTKNV")

    //*Tên
    isValid &= validation.checkEmpty(ten, "Không được để trống", "tbTen")
        && validation.checkName(ten, "Tên phải là chữ", "tbTen")

    //*Email
    isValid &= validation.checkEmpty(email, "Không được để trống", "tbEmail")
        && validation.checkEmail(email, "Email chưa đúng định dạng", "tbEmail")

    //*Mật khẩu
    isValid &= validation.checkEmpty(matKhau, "Không được để trống", "tbMatKhau")
        && validation.checkMatKhau(matKhau, "Mật khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)", "tbMatKhau")

    //*Ngày tháng
    isValid &= validation.checkEmpty(ngayThang, "Không được để trống", "tbNgay")
        && validation.checkNgayThang(ngayThang, "Ngày tháng phải có dạng mm/dd/yyyy", "tbNgay")

    //*Lương
    isValid &= validation.checkEmpty(luong, "Không được để trống", "tbLuongCB")
        && validation.checkLuong(luong, "Lương phải từ 1.000.000 - 20.000.000", "tbLuongCB")

    //*Chức vụ
    isValid &= validation.checkEmpty(chucVu, "Hãy chọn chức vụ", "tbChucVu")
        && validation.checkChucVu(chucVu, "Vui lòng chọn chức vụ hợp lệ", "tbChucVu")

    //*Giờ làm
    isValid &= validation.checkEmpty(gioLam, "Không được để trống", "tbGiolam")
        && validation.checkGioLam(gioLam, "Giờ làm từ 80 tới 200 giờ", "tbGiolam")


    if (isValid) {
        var nv = new NhanVien(taiKhoan, ten, email, matKhau, ngayThang, luong, chucVu, gioLam);
        nv.tinhTongLuong();
        nv.xepLoaiNV();

        dsnv.themNV(nv);

        hienThiDSNV(dsnv.mangNV);

        setLocalStorage();

        domID("btnCapNhat").innerHTML = "Cập nhật";

        domID("tbTKNV").style.display = "block";
        domID("tbTKNV").innerHTML = "Thêm người dùng thành công";
        domID("tbTKNV").style.color = "green";
    } else {
        domID("tbTKNV").style.display = "block";
       
        domID("tbTKNV").style.color = "red";
    }

}

function xoaNhanVien(maXoa) {
    console.log(maXoa);
    dsnv.xoaNV(maXoa)

    setLocalStorage();
    getLocalStorage();
}
function hienThiChiTiet(maXem) {

    var nvFind = dsnv.xemNV(maXem);


    domID("tknv").value = nvFind.taiKhoan;
    domID("tknv").disabled = true;
    domID("name").value = nvFind.tenNV;
    domID("email").value = nvFind.email;
    domID("password").value = nvFind.matKhau;
    domID("datepicker").value = nvFind.ngayThang;
    domID("luongCB").value = nvFind.luongCoBan;
    domID("chucvu").value = nvFind.chucVu;
    domID("gioLam").value = nvFind.gioLam;



}
domID('reset').onclick = function () {

    domID("formQLNV").reset();
    domID("tknv").disabled = false;
    domID("btnCapNhat").innerHTML = "Cập nhật";
    domID("btnCapNhat").style.backgroundColor = "#33ab4e";

    domID("tbTKNV").style.display = "none";
    domID("tbTen").style.display = "none";
    domID("tbEmail").style.display = "none";
    domID("tbMatKhau").style.display = "none";
    domID("tbNgay").style.display = "none";
    domID("tbLuongCB").style.display = "none";
    domID("tbChucVu").style.display = "none";
    domID("tbGiolam").style.display = "none";

}

domID("btnCapNhat").onclick = function () {
    var taiKhoan = domID('tknv').value;
    var ten = domID('name').value;
    var email = domID('email').value;
    var matKhau = domID('password').value;
    var ngayThang = domID('datepicker').value;
    var luong = domID('luongCB').value;
    var chucVu = domID('chucvu').value;
    var gioLam = domID('gioLam').value;

    var isValid = true;

    //*Tài khoản

    //*Tên
    isValid &= validation.checkEmpty(ten, "Không được để trống", "tbTen")
        && validation.checkName(ten, "Tên phải là chữ", "tbTen")

    //*Email
    isValid &= validation.checkEmpty(email, "Không được để trống", "tbEmail")
        && validation.checkEmail(email, "Email chưa đúng định dạng", "tbEmail")

    //*Mật khẩu
    isValid &= validation.checkEmpty(matKhau, "Không được để trống", "tbMatKhau")
        && validation.checkMatKhau(matKhau, "Mật khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)", "tbMatKhau")

    //*Ngày tháng
    isValid &= validation.checkEmpty(ngayThang, "Không được để trống", "tbNgay")
        && validation.checkNgayThang(ngayThang, "Ngày tháng phải có dạng mm/dd/yyyy", "tbNgay")

    //*Lương
    isValid &= validation.checkEmpty(luong, "Không được để trống", "tbLuongCB")
        && validation.checkLuong(luong, "Lương phải từ 1.000.000 - 20.000.000", "tbLuongCB")

    //*Chức vụ
    isValid &= validation.checkEmpty(chucVu, "Hãy chọn chức vụ", "tbChucVu")
        && validation.checkChucVu(chucVu, "Vui lòng chọn chức vụ hợp lệ", "tbChucVu")

    //*Giờ làm
    isValid &= validation.checkEmpty(gioLam, "Không được để trống", "tbGiolam")
        && validation.checkGioLam(gioLam, "Giờ làm từ 80 tới 200 giờ", "tbGiolam")


    if (isValid) {
        var nvUpdate = new NhanVien(taiKhoan, ten, email, matKhau, ngayThang, luong, chucVu, gioLam);
        nvUpdate.tinhTongLuong();
        nvUpdate.xepLoaiNV();

        dsnv.capNhat(nvUpdate);

        setLocalStorage();
        getLocalStorage();

       
        domID("btnCapNhat").style.backgroundColor = "#33ab4e";

        domID("tbTKNV").style.display = "block";
        domID("tbTKNV").innerHTML = "Cập nhật thành công";
        domID("tbTKNV").style.color = "green";
    } else {
       
        domID("btnCapNhat").style.backgroundColor = "red";

        domID("tbTKNV").style.display = "block";
        domID("tbTKNV").innerHTML = "Cập nhật thất bại";
        domID("tbTKNV").style.color = "red";
    }


}
document.getElementById("btnTimNV").onclick = function () {
    var tuTK = document.getElementById("searchName").value;

    var mangTK = dsnv.searchByName(tuTK);

    hienThiDSNV(mangTK);

}



document.getElementById("searchName").onkeydown = function () {
    var tuTK = document.getElementById("searchName").value;

    var mangTK = dsnv.searchByName(tuTK);

    hienThiDSNV(mangTK);
}
