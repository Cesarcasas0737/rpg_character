function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

function getPercetnage(percent){
    let randomNum = getRandomInt(0,100);

    if(randomNum < percent){
        return true;
    }else{
        return false;
    }
}

function crticalHit(attack,critMultiplier){
     return attack * critMultiplier;
}



let randomNum = getRandomInt(1,10);

console.log(randomNum);

function createPlayer(name, level,health, critChance, baseDamage) {
    return {
        name: name,
        level: level,
        health: health,
        critChance: critChance,
        baseDamage: baseDamage,
        isDead: false,

        if(isDead=true){
            console.log(name + "is dead");
        },
        calculateDamage: function() {
            // Calculate damage with crit chance
            if (getPercetnage(this.critChance) === true) {
            console.log(name + "Landed a crit of" + crticalHit(this.baseDamage,2));
            return crticalHit(this.baseDamage,2);
            } else {
                console.log(name+"did a reg attack boo")
                return this.baseDamage;
            }
        },
        attack: function(receiverOfAttack) {
            let damageDone = this.calculateDamage();
            console.log(name + " attacked " + receiverOfAttack.name + " for " + damageDone + " damage!");
            receiverOfAttack.receiveDamage(damageDone);
        },

        receiveDamage: function(damage) {
            this.health -= damage;
            console.log(name + " received " + damage + " damage! " + name + "'s health: " + this.health);
            
        },
        checkIfDead: function() {
            if (this.health <= 0 ) {
                console.log("you're dead")
                console.log("i have"+this.health)
            }else{
                console.log("im not dead yet!")
                console.log(`im not dead yet i still have ${this.health} health left`)
            }
        }
    };
}

  const jeff = createPlayer("jeff",1,15,100,5);
  const steve = createPlayer("steve",6,35,10, 9);

  jeff.attack(steve);
  
  steve.checkIfDead();