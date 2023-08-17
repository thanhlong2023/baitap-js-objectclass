function DanhSachNhanVien() {
    this.mangNV = [];

    this.themNV = function (nv) {
        this.mangNV.push(nv);
    }

    this.xoaNV = function (maXoa) {
        // console.log(maXoa);
        // var indexXoa = this.mangNV.findIndex(function (nv) {
        //     return nv.taiKhoan = maXoa;
        // });
        // console.log(indexXoa);
        // this.mangNV.splice(indexXoa, 1);

        console.log(maXoa);
        var indexXoa = this.mangNV.findIndex(function (nv) {
            return nv.taiKhoan === maXoa;
        });
        console.log(indexXoa);
        if (indexXoa > -1) {
            this.mangNV.splice(indexXoa, 1);
        } else {
            console.log("Không tìm thấy nhân viên có mã số là " + maXoa);
        }

    }

    this.xemNV = function (maXem) {

        var nvFind = this.mangNV.find(function (nv) {
            return nv.taiKhoan == maXem;
        });

        return nvFind;
    }

    this.capNhat = function (svUpdate) {
        var indexUpdate = this.mangNV.findIndex(function (sv) {
            return sv.taiKhoan == svUpdate.taiKhoan;
        });
        if (indexUpdate > -1) {
            this.mangNV[indexUpdate] = svUpdate;
        }
    }
}
// Luyện prototype 
DanhSachNhanVien.prototype.searchByName = function (tuTK) {
    // tạo mảng trống chứa sv sau khi tìm kiếm 
    var mangTK = [];

    // chuyển từ tìm kiếm sang chữ thường và xóa khoảng trắng
    var tuTKXoaSpace = tuTK.toLowerCase().replace(/\s/g, "");

    //duyệt mảng mangSV tìm  đối tượng sv có nv.loai giống với tuTKXoaSpace sử dụng indexOf.
    this.mangNV.map(function (nv) {
        var indexTK = nv.xepLoai.toLowerCase().replace(/\s/g, "").indexOf(tuTKXoaSpace);

        if (indexTK > -1) {
            mangTK.push(nv);
        }
    })
    return mangTK;
}