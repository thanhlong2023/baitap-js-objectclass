function NhanVien(taiKhoan, ten, email, matKhau, ngayThang, luong, chucVu, gioLam) {
    this.taiKhoan = taiKhoan;
    this.tenNV = ten;
    this.email = email;
    this.matKhau = matKhau;
    this.ngayThang = ngayThang;
    this.luongCoBan = luong;
    this.chucVu = chucVu;
    this.gioLam = gioLam;

    this.tongLuong = 0;
    this.tinhTongLuong = function () {
        if (this.chucVu == "Sếp") {
            this.tongLuong = this.luongCoBan * 3;
        }
        if (this.chucVu == "Trưởng phòng") {
            this.tongLuong = this.luongCoBan * 2;
        }
        if (this.chucVu == "Nhân viên") {
            this.tongLuong = this.luongCoBan;
        }
        return this.tongLuong;
    }

    this.xepLoai = "";
    this.xepLoaiNV = function () {
       
        if (this.gioLam >= 192) {
            this.xepLoai = "Nhân viên xuất sắc";
        } else if (this.gioLam >= 176) {
            this.xepLoai = "Nhân viên giỏi";
        } else if (this.gioLam >= 160) {
            this.xepLoai = "Nhân viên khá";
        } else if (this.gioLam < 160) {
            this.xepLoai = "Nhân viên trung bình";
        }
        return this.xepLoai;
    }
}