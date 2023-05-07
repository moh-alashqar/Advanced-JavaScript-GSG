class Hotel{
    constructor(address, numberOfRooms, minFloor, maxFloor, room){
        this.address = address;
        this.numberOfRooms = numberOfRooms;
        this.#minFloor = minFloor;
        this.#maxFloor = maxFloor;
        this.rooms.push(room);
    }
    function printAdvertisment(){
        console.log("Out hotel is on " + this.address + ", and has ", this.numberOfRooms+ " rooms, and " + this.#maxFloor- #minFloor + " floors.");
    }
    function listBokkedRooms(){
        return this.rooms.filter((r) => r.isBooked);
    }
}

class Room{
    constructor(floorNum, roomNum, price, isBooked){
        this.floorNum = floorNum;
        this.roomNum = roomNum;
        this.price = price;
        this.#isBooked = isBooked;
    }
    function printRoom(){
        console.log("Room no. " + this.roomNum + " in the " + this.floor + " floor ,it costs " + this.price + " USD ,and is " + this.isBooked ? "": "not" + "Booked!");
    }
    function book(){
        this.#isBooked = true;
    }
    function isBooked(){
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