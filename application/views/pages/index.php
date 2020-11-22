<article style="min-height: 100vh;">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="table-responsive mt-4 bg-light p-3" style="border-top: 7px solid blueviolet;border-radius: 7px">
                    <h5 class="mb-3" style="font-weight: 600;">Data Mahasiswa</h5>
                    <table class="table table-hover table-bordered table-striped">
                        <thead class="text-white" style="background-color: blueviolet;">
                            <tr>
                                <th>ID</th>
                                <th>Nama</th>
                                <th>Jurusan</th>
                                <th class="text-center">
                                    <a href="#" class="btn btn-secondary" data-toggle="modal" data-target="#exampleModal" onclick="tambah()">Tambah data</a>
                                </th>
                            </tr>
                        </thead>
                        <tbody id="show-data">
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</article>
<footer class="bg-dark">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h4 class="text-center text-white p-5">
                    Kali ini belajar membuat CRUD dengan ajax.
                </h4>
            </div>
        </div>
    </div>