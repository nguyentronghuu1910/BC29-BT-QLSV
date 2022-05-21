var dssv = new DanhSachSinhVien();
var validation = new Validation();

getLocalStorage();

function getEle(id) {
  return document.getElementById(id);
}

function layThongTinSV(isAdd) {
  //Dom toi cac the input lay value
  var _maSV = getEle("txtMaSV").value;
  var _tenSV = getEle("txtTenSV").value;
  var _email = getEle("txtEmail").value;
  var _pass = getEle("txtPass").value;
  var _ngaySinh = getEle("txtNgaySinh").value;
  var _khoaHoc = getEle("khSV").value;
  var _diemToan = getEle("txtDiemToan").value;
  var _diemLy = getEle("txtDiemLy").value;
  var _diemHoa = getEle("txtDiemHoa").value;

  //flag (cờ) - isValid la true hợp lệ / false: k hợp lệ
  var isValid = true;

  //Check validation
  if (isAdd) {
    //MaSV
    isValid &=
      validation.kiemTraRong(_maSV, "errorMaSV", "(*) Vui long nhap MaSV") &&
      validation.kiemTraDoDaiKiTu(
        _maSV,
        "errorMaSV",
        4,
        8,
        "(*) Vui long nhap ki tu 4 - 8"
      ) &&
      validation.kiemTraMaSVTonTai(
        _maSV,
        "errorMaSV",
        "(*) Ma SV da ton tai",
        dssv.arr
      );
  }

  //TenSV
  isValid &=
    validation.kiemTraRong(_tenSV, "errorTenSV", "(*) Vui long nhap TenSV") &&
    validation.kiemChuoiKiTu(
      _tenSV,
      "errorTenSV",
      "(*) Vui long nhap chuoi ki tu"
    );

  //Email
  isValid &= validation.kiemTraRong(
    _email,
    "errorEmail",
    "(*) Vui long nhap Email"
  );

  //Pass
  isValid &= validation.kiemTraRong(
    _pass,
    "errorMatKhau",
    "(*) Vui long nhap mat khau"
  );

  //ngay sinh
  isValid &= validation.kiemTraRong(
    _ngaySinh,
    "errorNgaySinh",
    "(*) Vui long nhap ngay sinh"
  );

  //KhoaHoc
  isValid &= validation.kiemTraKhoaHoc(
    "khSV",
    "errorKH",
    "(*) Vui long chon KH"
  );

  //toan
  isValid &= validation.kiemTraRong(
    _diemToan,
    "errorToan",
    "(*) Vui long nhap diem toan"
  );

  //ly
  isValid &= validation.kiemTraRong(
    _diemLy,
    "errorLy",
    "(*) Vui long nhap diem ly"
  );

  //hoa
  isValid &= validation.kiemTraRong(
    _diemHoa,
    "errorHoa",
    "(*) Vui long nhap diem hoa"
  );

  //check isValid
  if (!isValid) return;

  //Tao doi tuong sinhVien tu lop doi tuong SinhVien
  var sinhVien = new SinhVien(
    _maSV,
    _tenSV,
    _email,
    _pass,
    _ngaySinh,
    _khoaHoc,
    _diemToan,
    _diemLy,
    _diemHoa
  );

  //tinh DTB
  sinhVien.tinhDTB();

  return sinhVien;
}

/**
 * Them sinh vien
 */
getEle("btnThemSV").onclick = function () {
  var sinhVien = layThongTinSV(true);
  if (sinhVien) {
    //them SV
    dssv.themSV(sinhVien);
    taoBang(dssv.arr);
    setLocalStorage();
  }
};

// function taoBang(data) {
//   var content = "";
//   data.forEach(function (item) {
//     content += "<tr>";
//     content +=      "<td>" + item.maSV + "</td>";
//     content +=      "<td>" + item.tenSV + "</td>";
//     content +=      "<td>" + item.email + "</td>";
//     content +=      "<td>" + item.ngaySinh + "</td>";
//     content +=      "<td>" + item.khoaHoc + "</td>";
//     content +=      "<td>" + item.diemTB + "</td>";
//     content += "</tr>";
//   });
//   getEle("tbodySinhVien").innerHTML = content;
// }

function taoBang(data) {
  var content = "";
  data.forEach(function (item) {
    content += `
        <tr>
            <td>${item.maSV}</td>
            <td>${item.tenSV}</td>
            <td>${item.email}</td>
            <td>${item.ngaySinh}</td>
            <td>${item.khoaHoc}</td>
            <td>${item.diemTB}</td>
            <td>
              <button class="btn btn-info" onclick="suaSV('${item.maSV}')">Sửa</button>
              <button class="btn btn-danger" onclick="xoaSV('${item.maSV}')">Xoá</button>
            </td>
        </tr>
    `;
  });
  getEle("tbodySinhVien").innerHTML = content;
}

/**
 * Xoa SV
 */
function xoaSV(id) {
  dssv.xoaSV(id);
  taoBang(dssv.arr);
  setLocalStorage();
}

/**
 * Sua SV
 */
function suaSV(id) {
  var sv = dssv.suaSV(id);
  if (sv) {
    //Dom tới các thẻ input show value từ sv
    getEle("txtMaSV").value = sv.maSV;
    getEle("txtTenSV").value = sv.tenSV;
    getEle("txtEmail").value = sv.email;
    getEle("txtPass").value = sv.matKhau;
    getEle("txtNgaySinh").value = sv.ngaySinh;
    getEle("khSV").value = sv.khoaHoc;
    getEle("txtDiemToan").value = sv.diemToan;
    getEle("txtDiemLy").value = sv.diemLy;
    getEle("txtDiemHoa").value = sv.diemHoa;

    //Hien thi lai button "Cap Nhat"
    getEle("btnCapNhat").style.display = "inline-block";
    //disable input#txtMaSV
    getEle("txtMaSV").disabled = true;
  }
}

/**
 * Cap nhat SV
 */
getEle("btnCapNhat").onclick = function () {
  var sinhVien = layThongTinSV(false);
  dssv.capNhat(sinhVien);
  taoBang(dssv.arr);
  setLocalStorage();
};

/**
 * Tim kiem SV
 */
getEle("keyword").addEventListener("keyup", function () {
  var keyword = getEle("keyword").value;
  var mangTimKiem = dssv.timKiemSV(keyword);
  taoBang(mangTimKiem);
});

function setLocalStorage() {
  //Convert from JSON to String
  var dataString = JSON.stringify(dssv.arr);
  //luu xuong localStorage
  localStorage.setItem("DSSV", dataString);
}

function getLocalStorage() {
  if (localStorage.getItem("DSSV")) {
    var dataString = localStorage.getItem("DSSV");
    //Convert from String to JSON
    var dataJson = JSON.parse(dataString);
    dssv.arr = dataJson;
    taoBang(dssv.arr);
  }
}
