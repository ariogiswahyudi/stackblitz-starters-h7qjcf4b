/**
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungs `item.displayDetails()`).
 */

class Inventory {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        if (item) {
            this.items.push(item);
            console.log(`Item dengan ID: ${this.id} berhasil ditambahkan!`);
        } else {
            console.error("Gagal menambahkan item: Item tidak valid");
        }
    }

    removeItem(id) {
        const initialLength = this.items.length;
        this.items = this.items.filter(item => item.id !== id);
    
        if (this.items.length < initialLength) {
          console.log(`Item dengan ID ${id} berhasil dihapus.`);
          return true;
        } else {
          console.warn(`Item dengan ID ${id} tidak ditemukan.`);
          return false;
        }
    }

    listItems() {
        if (this.items.length === 0) {
          return "Inventaris kosong.";
        }
    
        const itemDetails = this.items.map(item => {
          if (typeof item.displayDetails === 'function') {
            return item.displayDetails(); // Memanggil method 'displayDetails' dari setiap item
          } else {
            return `Item ID ${item.id} tidak memiliki method displayDetails().`;
          }
        });
    
        return itemDetails.join('\n\n---\n\n'); // Menggabungkan detail item dengan pemisah
    }
}

// Jangan hapus kode di bawah ini!
export default Inventory;
