function process_argv() {
    const { argv } = process;
    const result = studentData(argv[2], argv[3]);

    return result;
}

function studentData(name, studentId) {
    let facultyList = [
        ["Fakultas Ekonomi", "Ekonomi"],
        ["Fakultas Ekonomi", "Manajemen"],
        ["Fakultas Ekonomi", "Akuntansi"],
        ["Fakultas Ilmu Sosial dan Politik", "Administrasi Publik"],
        ["Fakultas Ilmu Sosial dan Politik", "Administrasi Bisnis"],
        ["Fakultas Ilmu Sosial dan Politik", "Hubungan Internasional"],
        ["Fakultas Teknik", "Teknik Sipil"],
        ["Fakultas Teknik", "Arsitektur"],
        ["Fakultas Teknologi Informasi dan Sains", "Matematika"],
        ["Fakultas Teknologi Informasi dan Sains", "Fisika"],
        ["Fakultas Teknologi Informasi dan Sains", "Informatika"],
    ];
    const year = studentId.substring(0, 4);
    const programId = studentId.substring(4, 6);
    let prody;

    //nama prodi
    switch (programId) {
    case "21":
        prody = "Ekonomi";
        break;
    case "22":
        prody = "Manajemen";
        break;
    case "23":
        prody = "Akuntansi";
        break;
    case "31":
        prody = "Administrasi Publik";
        break;
    case "32":
        prody = "Administrasi Bisnis";
        break;
    case "33":
        prody = "Hubungan Internasional";
        break;
    case "41":
        prody = "Teknik Sipil";
        break;
    case "42":
        prody = "Arsitektur";
        break;
    case "51":
        prody = "Matematika";
        break;
    case "52":
        prody = "Fisika";
        break;
    case "53":
        prody = "Informatika";
        break;
    default:
        return "Invalid Student's ID";
}
//nama fakultas mengecek fakultas dari function object facultyList
let faculty=``;
facultyList.forEach(function(x){// x = indeks
    if(isInArray(prody,x)){ // fungsi isInarray dimasukan ke loop ini
        faculty = x[0]; // pengecekan dimulai dari indeks 0
    } 
})

// const faculty = facultyList.find(([, id]) => id === programId)?.[0];

const thesisLecturer = getLecturer(prody);

return {
    id: studentId,
    name,
    prody,
    faculty,
    thesisLecturer,
};
}
function isInArray(value, array) {
    return array.indexOf(value) > -1;// karena indeks harus dicek diawal otomotatis dari 0 maka kita bisa mengecek seperti ini
    atau
    //return array.indexOf(value) >= 0;
}
function getLecturer(prody) {
    const lecturerList = [
        ["Dr. Ulbert Silalahi, Drs., MA.", "Administrasi Publik"],
        ["Prof. Dr. Martinus Yuwana Marjuka, M.Si.", "Ekonomi"],
        ["Dott. Thomas Anung Basuki, ST., MKom.", "Informatika"],
        ["Dr. Cecilia Lauw Giok Swan, Ir., M.T.", "Teknik Sipil"],
        ["Catharina Tan Lian Soei,Dra.,MM.", "Manajemen"],
        ["Aldyfra Luhulima Lukman, S.T., M.T., Ph.D.", "Arsitektur"],
        ["Sapta Dwikardana, Drs., M.Si., Ph.D.", "Hubungan Internasional"],
        ["Agus, S.Sos., BAC., MBA., M.Phil", "Administrasi Bisnis"],
        ["Dr. Julius Dharma Lesmono, SSi., SE., MT., MSc.", "Matematika"],
        ["Liem Chin, SSi., MSi.", "Fisika"],
        ["Dr. Elizabeth Tiur Manurung, M.Si.,Ak., CA., CIRR.", "Akuntansi"],
    ];
    //const [lecturer] = lecturerList.find(([, p]) => p === prody) ?? [jika salah];
    //mengambil nilai dari array object lectureList dengan menggunakan function find. di paramter p ke variable prody kemudian jika tidak valid maka akan print string kosong
    //(?? sama kaya elsenya di if else {})
    //kalau mengecek indeks parameter sebelah kiri maka 
    // const lecturer = lecturerList.find(([, p]) => p === prody) ?? [];
    // return lecturer[i];
    //output :jika consoloe.log(nama dosen) hasilnya prodinya
    const [lecturer] = lecturerList.find(([, p]) => p === prody) ?? [];
    return lecturer ?? "Unknown";
}


// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
    console.log(process_argv());
}

module.exports = {
    studentData,
    getLecturer,
};
