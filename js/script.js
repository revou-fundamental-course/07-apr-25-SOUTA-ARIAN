document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nama = this.nama.value.trim();
    const tanggal = this.tanggal.value;
    const jenisKelamin = this.jenis_kelamin.value;
    const pesan = this.pesan.value.trim();

    const messageDisplay = document.getElementById('messageDisplay');
    const currentTime = new Date().toString();

    messageDisplay.innerHTML = `
     <p><strong>Current time</strong> : ${currentTime}</p>
     <p>
      <strong>Nama</strong> : ${nama}<br/>
      <strong>Tanggal Lahir</strong> : ${tanggal}<br/>
      <strong>Jenis Kelamin</strong> : ${jenisKelamin}<br/>
      <strong>Pesan</strong> : ${pesan}
     </p>
    `;
    this.reset();
});
