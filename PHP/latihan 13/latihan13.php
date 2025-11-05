<?php
//file: latihan13.php

//gunakan 'require_once' untuk file konfigurasi
//Script akan berhenti jika file ini tidak ada
require_once 'konfigurasi.php';
?>

<html>
    <head>
        <title>
            <?php echo NAMA_SITUS; ?> - Halaman Utama
        </title>
    </head>
    <body>
        <h1>Selamat Datang di <?php echo NAMA_SITUS; ?></h1>

        <?php
        //gunkan 'include' untuk menu
        //jika file menu.php tidak ada, halaman tetap tampil
        include 'menu.php';
        ?>

        <h2>Konten Halaman Utama </h2>
        <p>Ini adalah latihan untuk menggabungkan file menggunakan require dan include.</p>

        <br>

        <footer>
            <hr>
            <p>
                Hak Cipta &copy; <?php echo TAHUN_COPYRIGHT; ?> - <?php echo NAMA_SITUS; ?>
            </p>
        </footer>
    </body>
</html>