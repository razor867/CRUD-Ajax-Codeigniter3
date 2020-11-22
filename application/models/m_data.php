<?php

defined('BASEPATH') or exit('No direct script access allowed');

class M_data extends CI_Model
{
    public function getAll($table)
    {
        $query = $this->db->get($table);
        return $query->result();
    }

    public function getBy($table, $where)
    {
        $query = $this->db->get_where($table, $where);
        return $query->result();
    }

    public function insertData($table, $data)
    {
        if ($this->db->insert($table, $data)) {
            $pesan = 'berhasil';
        } else {
            $pesan = 'gagal';
        }
        return $pesan;
    }

    public function editData($table, $data, $id)
    {
        $this->db->where('id', $id);
        if ($this->db->update($table, $data)) {
            $pesan = 'berhasil';
        } else {
            $pesan = 'gagal';
        }
        return $pesan;
    }

    public function hapusData($table, $where)
    {
        if ($this->db->delete($table, $where)) {
            $pesan = 'berhasil';
        } else {
            $pesan = 'gagal';
        }
        return $pesan;
    }
}
