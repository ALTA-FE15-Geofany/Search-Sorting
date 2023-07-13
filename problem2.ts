const dataKaryawan: Array<{}> = [{
    id: 101,
    nama: "Rani"
}, {
    id: 203,
    nama: "Andi"
}, {
    id: 305,
    nama: "Budi"
}, {
    id: 401,
    nama: "Cindy"
}, {
    id: 520,
    nama: "Dodi"
}, {
    id: 635,
    nama: "Eka"
}, {
    id: 742,
    nama: "Fani"
}]
const target: number = 742
const binarySearchKaryawan = (dataKaryawan: Array<{}>, target: number) => {
    let start = 0
    let end = dataKaryawan.length - 1

    while (start <= end) {
        const mid = Math.floor((start + end) / 2)
        let karyawan: any = dataKaryawan[mid]
        if (karyawan.id === target) {
            return karyawan
        }
        if (karyawan.id < target) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }

    return null
}
const karyawan = binarySearchKaryawan(dataKaryawan, target);
if (karyawan) {
    console.log(karyawan);
} else {
    console.log(null);
}