function DanhSachSinhVien() {
  this.arr = [];

  this.themSV = function (sv) {
    this.arr.push(sv);
  };

  this.timViTriSV = function (maSV) {
    /**
     * tim vi tri
     * 0. Tao bien index = -1
     * 1. Duyet mang arr
     * 2. Neu maSV === object.maSV
     *  => Cap nhat lai gia tri moi cho bien index
     */
    var index = -1;
    this.arr.forEach(function (item, i) {
      if (item.maSV === maSV) {
        index = i;
      }
    });

    return index;
  };

  this.xoaSV = function (maSV) {
    var index = this.timViTriSV(maSV);
    if (index !== -1) {
      this.arr.splice(index, 1);
    }
  };

  this.suaSV = function (maSV) {
    var index = this.timViTriSV(maSV);
    if (index !== -1) {
      return this.arr[index];
    }
    return null;
  };

  this.capNhat = function (sv) {
    var index = this.timViTriSV(sv.maSV);
    if (index !== -1) {
      this.arr[index] = sv;
    }
  };

  this.timKiemSV = function (keyword) {
    /**
     * 0. tao mangTimKiem = []
     * 1. Duyet mang arr
     * 2. Nếu item.tenSV trùng với keyword
     *    => them sv dc tim thay vao mangTimKiem
     * 3. tra ve mangTimKiem
     */
    var mangTimKiem = [];

    this.arr.forEach(function (item) {
      if (item.tenSV.toLowerCase().indexOf(keyword.toLowerCase()) > -1) {
        mangTimKiem.push(item);
      }
    });

    return mangTimKiem;
  };
}
