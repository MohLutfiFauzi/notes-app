const changeDate = (createdAt) => {
    const weekday = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
    const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']

    const d = new Date(createdAt)
    const date = d.getDate()
    const day = d.getDay()
    const month = d.getMonth()
    const year = d.getFullYear()
    return {
        hari: weekday[day],
        tanggal: date,
        bulan: months[month],
        tahun: year
    }
}

export default changeDate