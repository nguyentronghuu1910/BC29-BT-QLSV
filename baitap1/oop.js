function getEle(id) {
  return document.getElementById(id);
}

function hienThiThongTin() {
  /**
   * dom toi cac the input lay value
   */
  var _maSV = getEle("txtMaSV").value;
  var _tenSV = getEle("txtTenSV").value;
  var _loaiSV = getEle("loaiSV").value;
  var _diemToan = getEle("txtDiemToan").value;
  var _diemVan = getEle("txtDiemVan").value;

  //Tao doi tuong sinh vien
  // var sinhVien = {
  //   //key: value
  //   //property
  //   maSV: _maSV,
  //   tenSV: _tenSV,
  //   loaiSV: _loaiSV,
  //   diemToan: _diemToan,
  //   diemVan: _diemVan,
  //   diemTB: 0,

  //   //method
  //   tinhDTB: function () {
  //     this.diemTB = (parseFloat(this.diemToan) + parseFloat(this.diemVan)) / 2;
  //   },

  //   xepLoai: function () {
  //     if (8 <= this.diemTB && this.diemTB <= 10) {
  //       return "Gioi";
  //     } else if (7 <= this.diemTB && this.diemTB < 8) {
  //       return "Kha";
  //     } else if (6 <= this.diemTB && this.diemTB < 7) {
  //       return "TB";
  //     } else {
  //       return "Yeu";
  //     }
  //   },
  // };

  //Tạo thể hiện (đối tượng) từ lớp đối tượng SinhVien
  var sinhVien = new SinhVien(_maSV, _tenSV, _loaiSV, _diemToan, _diemVan);

  //Truy xuat vao thuoc tinh ben trong object
  //   console.log(sinhVien.maSV);
  //   console.log(sinhVien.tenSV);
  //   console.log(sinhVien.loaiSV);
  //   console.log(sinhVien.diemToan);
  //   console.log(sinhVien.diemVan);

  //goi toi phuong thuc tinhDTB
  sinhVien.tinhDTB();
  //goi toi phuong thuc xepLoai
  var loai = sinhVien.xepLoai();

  getEle("spanTenSV").innerHTML = sinhVien.tenSV;
  getEle("spanMaSV").innerHTML = sinhVien.maSV;
  getEle("spanLoaiSV").innerHTML = sinhVien.loaiSV;
  getEle("spanDTB").innerHTML = sinhVien.diemTB;
  getEle("spanXepLoai").innerHTML = loai;
}
