/**
 * TODO
 * Selesaikan kode pembuatan class Item dengan ketentuan:
 * - Memiliki properti `id` (number), `name` (string), `quantity` (number), dan `price` (number).
 * - Memiliki method `updateDetails()` untuk mengubah nilai `name`, `quantity`, dan `price`.
 * - Memiliki method `displayDetails()` yang mengembalikan informasi detail dari Item dengan format:
 *   ```
 *     ID: ${id}, Name: ${name}, Quantity: ${quantity}, Price: ${price}
 *   ```
 */

class Item {
    constructor(id, name, quantity) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }

    updateDetails(newName, newQuantity, newPrice) {
        this.name = newName;
        this.quantity = newQuantity;
        this.price = newPrice;
        console.log(`Detail item ID ${this.id} berhasil diperbarui!`);
    }

    displayDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Quantity: ${this.quantity}, Price: ${this.price}`;
    }

}

// Jangan hapus kode di bawah ini!
export default Item;
