<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Home extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();

        $this->load->model('m_data');
    }

    public function index()
    {
        $data['title_web'] = 'CRUD JS';

        $this->load->view('templates/header', $data);
        $this->load->view('pages/index');
        $this->load->view('templates/footer');
    }

    public function tampil()
    {
        echo json_encode($this->m_data->getAll($this->input->post('table')));
    }

    public function getEditData()
    {
        $where['id'] = $this->input->post('id');
        echo json_encode($this->m_data->getBy($this->input->post('table'), $where));
    }

    public function tambah()
    {
        $table = $this->input->post('table');
        $data = array(
            'nama' => $this->input->post('nama'),
            'jurusan' => $this->input->post('jurusan')
        );
        echo json_encode($this->m_data->insertData($table, $data));
    }

    public function edit()
    {
        $table = $this->input->post('table');
        $data = array(
            'nama' => $this->input->post('nama'),
            'jurusan' => $this->input->post('jurusan')
        );
        $id = $this->input->post('id');
        echo json_encode($this->m_data->editData($table, $data, $id));
    }

    public function hapus()
    {
        $table = $this->input->post('table');
        $data['id'] = $this->input->post('id');
        echo json_encode($this->m_data->hapusData($table, $data));
    }
}
