// SurahDetail.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const SurahDetail = () => {
    const { surahNumber } = useParams();
    const [surahDetail, setSurahDetail] = useState(null);

    useEffect(() => {
        const fetchSurahDetail = async () => {
                const response = await axios.get(`https://equran.id/api/v2/surat/${surahNumber}`);
                setSurahDetail(response.data.data);
        };

        fetchSurahDetail();
    }, [surahNumber]);

    if (!surahDetail) {
        // Render loading state or return null
        return <p>Loading...</p>;
    }

    return (
        <SurahDetailStyle>
            <Link to="/" className="tombol-kembali">
                Kembali
            </Link>

            <h1>Surah {surahDetail.namaLatin}</h1>
            <p>{surahDetail.arti}</p>
            <div className="quran-container">
                {surahDetail.ayat.map((ayat) => (
                    <div key={ayat.nomor} className="quran-verse">
                        <p className="quran-verse-number">{ayat.nomorAyat}</p>
                        <p className="quran-verse-text">{ayat.teksArab}</p>
                        <p className="quran-verse-text kiri">{ayat.teksLatin}</p>
                        <p className="quran-verse-text kiri">{ayat.teksIndonesia}</p>
                        <audio type="mp" />
                    </div>
                ))}
            </div>
        </SurahDetailStyle>
    );
};

const SurahDetailStyle = styled.div`

    * {
        margin: 10px;
        justify-content: center;
    }

    h1 {
        color: teal;
    }

    .quran-container {
    border: 1px solid #ccc;
    padding: 10px;
    }

    .quran-verse {
    border-bottom: 1px solid #ccc;
    padding: 10px;
    }

    .quran-verse-number {
        background-color: teal; /* Warna hijau */
        color: #fff; /* Warna teks putih */
        font-size: 20px; /* Ukuran teks lebih besar */
        padding: 8px 12px; /* Padding lebih besar di sekitar teks */
        border-radius: 50%; /* Membuat elemen menjadi lingkaran */
        display: inline-block;
        margin-right: 10px; /* Jarak dari elemen lain di sebelah kanan */
        font-weight: bold; /* Tebal teks */
        text-align: center; /* Teks ditengah */
        line-height: 1.2; /* Jarak antarbaris */
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Efek bayangan */
    }
    
    

    .quran-verse-text {
    font-size: 16px;
    line-height: 1.6;
    text-align: right;
    }

    .kiri {
        text-align: left;
    }

    .tombol-kembali {
        display: block;
        width: 60px;
        margin-top: 10px;
        text-decoration: none;
        background-color: darkcyan;
        color: white;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
        text-align: center;
    }

    .tombol-kembali:hover {
        background-color: teal;
    }

`

export default SurahDetail;
