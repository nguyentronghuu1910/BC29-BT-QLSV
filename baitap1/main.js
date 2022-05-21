function getEle(id) {
  return document.getElementById(id);
}

//Click button "Hiển Thị Thông Tin"
function hienThiThongTin() {
  /**
   * dom toi cac the input lay value
   */
  var maSV = getEle("txtMaSV").value;
  var tenSV = getEle("txtTenSV").value;
  var loaiSV = getEle("loaiSV").value;
  var diemToan = getEle("txtDiemToan").value;
  var diemVan = getEle("txtDiemVan").value;

  var dtb = tinhDTB(diemToan, diemVan);
  var loai = xepLoai(dtb);

  getEle("spanTenSV").innerHTML = tenSV;
  getEle("spanMaSV").innerHTML = maSV;
  getEle("spanLoaiSV").innerHTML = loaiSV;
  getEle("spanDTB").innerHTML = dtb;
  getEle("spanXepLoai").innerHTML = loai;
}

/**
 * Viet ham tinh DTB
 */
function tinhDTB(toan, van) {
  return (parseFloat(toan) + parseFloat(van)) / 2;
}

/**
 * Viet ham xep loai
 */
function xepLoai(dtb) {
  if (8 <= dtb && dtb <= 10) {
    return "Gioi";
  } else if (7 <= dtb && dtb < 8) {
    return "Kha";
  } else if (6 <= dtb && dtb < 7) {
    return "TB";
  } else {
    return "Yeu";
  }
}
