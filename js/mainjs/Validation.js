function Validation() {
    this.checkEmpty = function (value, message, spanID) {
        if (value.trim() != "") {
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }
    //Không trùng tài khoản
    this.checkTK = function (value, message, spanID, mangNV) {
        var isExist = mangNV.some(function (nv) {
            return nv.taiKhoan == value.trim()
        })
        if (isExist) {
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
        document.getElementById(spanID).innerHTML = "";
        document.getElementById(spanID).style.display = "none";
        return true;
    }
    this.checkLengthTK = function (value, message, spanID) {
        var pattern = /^[0-9]+$/;///^[0-9]{9,11}$/ giới hạn ký tự
        if (value.match(pattern) && value.length >= 4 && value.length <= 6) {

            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }

    this.checkName = function (value, message, spanID) {
        var pattern = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/;

        var result = value.match(pattern);
        if (result) {
            //hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        //không hợp lệ
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }
    this.checkEmail = function (value, message, spanID) {
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (value.match(pattern)) {
            domID(spanID).innerHTML = "";
            domID(spanID).style.display = "none";
            return true;
        }
        domID(spanID).innerHTML = message;
        domID(spanID).style.display = "block";
        return false;
    }
    this.checkMatKhau = function (value, message, spanID) {
        var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;
        if (value.match(pattern)) {
            domID(spanID).innerHTML = "";
            domID(spanID).style.display = "none";
            return true;
        }
        domID(spanID).innerHTML = message;
        domID(spanID).style.display = "block";
        return false;
    }
    this.checkNgayThang = function (value, message, spanID) {
        var pattern = /^(0?[1-9]|1[0-2])[\/](0?[1-9]|[12]\d|3[01])[\/](19|20)\d{2}$/g;
        if (value.match(pattern)) {
            domID(spanID).innerHTML = "";
            domID(spanID).style.display = "none";
            return true;
        }
        domID(spanID).innerHTML = message;
        domID(spanID).style.display = "block";
        return false;
    }
    this.checkLuong = function (value, message, spanID) {
        var pattern = /^[0-9]+$/;
        if (value.match(pattern) && value >= 1000000 && value <= 20000000) {
            //hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        //không hợp lệ
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }
    this.checkChucVu = function (value, message, spanID) {
        // debugger;
        var a = ["Sếp", "Trưởng phòng", "Nhân viên"];
        for (var i = 0; i < a.length; i++) {
            if (value === a[i]) {
                return true;
            }
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }
    this.checkGioLam = function (value, message, spanID) {
        var pattern = /^[0-9]+$/;
        if (value.match(pattern) && value >= 80 && value <= 200) {
            // Hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }

        // Không hợp lệ
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }
    



}