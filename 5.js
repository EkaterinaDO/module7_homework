class ElectricalAppliance {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isPlugged = false;
    }

    plugIn() {
        console.log(this.name + " is plugged!");
        this.isPlugged = true;
    }

    getPowerUsed() {
        return this.isPlugged ? this.power : 0;
    }
}

const lamp = new ElectricalAppliance('lamp', 1);
const tv = new ElectricalAppliance('tv', 2);

console.log(lamp.getPowerUsed() + tv.getPowerUsed());

lamp.plugIn();
console.log(lamp.getPowerUsed() + tv.getPowerUsed());

tv.plugIn();
console.log(lamp.getPowerUsed() + tv.getPowerUsed());
