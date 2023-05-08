class Hotel{
    #minFloor;
    #maxFloor;
    constructor(address, numberOfRooms, minFloor, maxFloor, rooms){
        this.address = address;
        this.numberOfRooms = numberOfRooms;
        this.#minFloor = minFloor;
        this.#maxFloor = maxFloor;
        this.rooms = rooms;
    }
    printAdvertisment(){
        console.log("# Advertisment #\n our hotel is on " + this.address + ", and has "+ this.numberOfRooms+ " rooms.");
    }
    listBookedRooms(){
        return this.rooms.filter((r) => r.isBooked());
    }
}

class Room{
    #isBooked;
    constructor(floorNum, roomNum, price, isBooked){
        this.floorNum = floorNum;
        this.roomNum = roomNum;
        this.price = price;
        this.#isBooked = isBooked;
    }
    printRoom(){
        console.log("# Room Info #\n room no. " + this.roomNum + " in the " + this.floor + " floor ,it costs " + this.price + " USD ,and is " + this.#isBooked ? "": "not" + "Booked!");
    }
    book(){
        this.#isBooked = true;
    }
    isBooked(){
        return this.#isBooked;
    }
}

class SleepingRoom extends Room{
    constructor(floorNum, roomNum, price, isBooked, personCapacity){
        super(floorNum, roomNum, price, isBooked);
        this.personCapacity = personCapacity;
    }
}

class RoomWithView extends Room{
    constructor(floorNum, roomNum, price, isBooked, view, numberOfBeds){
        super(floorNum, roomNum, price, isBooked);
        this.view = view;
        this.numberOfBeds = numberOfBeds;
    }
}

var r1 = new SleepingRoom(1, 5, 20, true, 2);
var r2 = new RoomWithView(3, 32, 50, false, 'sea', 1);
var h1 = new Hotel('Ramallah', 50, 1, 5, [r1, r2]);
console.log("####################")
// console.log(h1.rooms)
console.log("# Report #\n address " + h1.address + ", number of rooms "+ h1.numberOfRooms + ", and has", h1.rooms);
console.log("####################")
h1.printAdvertisment();
console.log("####################")
console.log("# List of booked rooms #\n", h1.listBookedRooms());
console.log("####################")
h1.rooms.forEach((r) => console.log("# Room #\n", r, "\n", r.isBooked()? "": " not", "booked"));

