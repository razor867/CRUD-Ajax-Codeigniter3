var modalTitle = document.getElementsByClassName("modal-title")[0];
var btnAction = document.getElementsByClassName("btn-primary")[0];
var btnTutup = document.getElementsByClassName("btn-secondary")[0];
var namaInput = document.getElementById("nama");
var jurusanInput = document.getElementById("jurusan");
var urlAksi = "";
var triger = 0;
var html = "";
var id;

function tambah() {
	modalTitle.innerHTML = "Tambah Data";
	btnAction.innerHTML = "Simpan";
	urlAksi = "tambah";

	$("#nama").val("");
	$("#jurusan").val("");
}

function edit(idData) {
	modalTitle.innerHTML = "Edit Data";
	btnAction.innerHTML = "Rubah";
	urlAksi = "edit";
	id = idData;
	showData("editData");
}

function hapus(idData) {
	id = idData;
	urlAksi = "hapus";
	let a = confirm("Yakin ingin hapus data ini?");
	if (a == true) {
		aksi(1, urlAksi);
	}
}

function aksi(trigerAksi, urlAksi) {
	if (trigerAksi == 1) {
		triger = 0;
		if (urlAksi == "tambah") {
			var dataPost = {
				nama: namaInput.value,
				jurusan: jurusanInput.value,
				table: "mahasiswa",
			};
			var pesan = "ditambahkan";
		} else if (urlAksi == "edit") {
			dataPost = {
				id: id,
				nama: namaInput.value,
				jurusan: jurusanInput.value,
				table: "mahasiswa",
			};
			pesan = "dirubah";
		} else {
			dataPost = {
				id: id,
				table: "mahasiswa",
			};
			pesan = "dihapus";
		}
		$.ajax({
			url: "http://localhost/crudjs/home/" + urlAksi,
			data: dataPost,
			method: "post",
			dataType: "json",
			success: function (data) {
				if (data == "berhasil") {
					if (urlAksi == "tambah" || urlAksi == "edit") {
						btnTutup.click();
					}
					showData("tampil");
					showInfoData("Data " + data + " " + pesan);
				} else {
					showInfoData("Data " + data + " " + pesan);
				}
			},
		});
	}
}

function showData(info) {
	if (triger == 0) {
		if (info == "tampil") {
			var dataPost = {
				table: "mahasiswa",
			};
			var url = "tampil";
		} else {
			dataPost = {
				table: "mahasiswa",
				id: id, //id kanan adalah value
			};
			url = "getEditData";
		}
		$.ajax({
			url: "http://localhost/crudjs/home/" + url,
			data: dataPost,
			method: "post",
			dataType: "json",
			success: function (data) {
				if (info == "tampil") {
					html = "";
					for (let i = 0; i < data.length; i++) {
						html +=
							"<tr>" +
							"<td>" +
							data[i].id +
							"</td>" +
							"<td>" +
							data[i].nama +
							"</td>" +
							"<td>" +
							data[i].jurusan +
							"</td>" +
							'<td class="text-center">' +
							'<a href="#" class="btn btn-warning" data-toggle="modal" data-target="#exampleModal" onclick="edit(' +
							data[i].id +
							')">Edit</a>' +
							" | " +
							'<a href="#" class="btn btn-danger" onclick="hapus(' +
							data[i].id +
							')">Hapus</a>' +
							"</td>" +
							"</tr>";
					}
					$("#show-data").html(html);
				} else {
					$("#nama").val(data[0].nama);
					$("#jurusan").val(data[0].jurusan);
				}
			},
		});
	}
}

function showInfoData(pesan) {
	alert(pesan);
}

btnAction.onclick = function () {
	triger = 1;
	if (namaInput.value == "" || jurusanInput.value == "") {
		alert("form harus diisi");
	} else {
		aksi(triger, urlAksi);
	}
};

showData("tampil");
