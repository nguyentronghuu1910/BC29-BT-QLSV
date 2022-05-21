//dinh nghia lop doi tuong
function SinhVien(_maSV, _tenSV, _loaiSV, _diemToan, _diemVan) {
  //Ham khoi tao (constructor)
  this.maSV = _maSV;
  this.tenSV = _tenSV;
  this.loaiSV = _loaiSV;
  this.diemToan = _diemToan;
  this.diemVan = _diemVan;
  this.diemTB = 0;

  this.tinhDTB = function () {
    this.diemTB = (parseFloat(this.diemToan) + parseFloat(this.diemVan)) / 2;
  };

  this.xepLoai = function () {
    if (8 <= this.diemTB && this.diemTB <= 10) {
      return "Gioi";
    } else if (7 <= this.diemTB && this.diemTB < 8) {
      return "Kha";
    } else if (6 <= this.diemTB && this.diemTB < 7) {
      return "TB";
    } else {
      return "Yeu";
    }
  };
}
