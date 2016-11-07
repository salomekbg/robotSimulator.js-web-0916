'use strict';

function Robot(x, y, direction) {
    this.bearing = direction;
    this.coordinates = [-4, -4]

    this.orient = function(direction) {
      if (direction === "north" || direction === "south" || direction === "east" || direction === "west") {
        this.bearing = direction;
      } else {throw new Error('Invalid Robot Bearing')};
    }

  this.turnRight = function() {
    switch (this.bearing) {
      case "north":
        this.bearing = "east";
        break;
      case "south":
        this.bearing = "west";
        break;
      case "east":
        this.bearing = "south";
        break;
      case "west":
        this.bearing = "north";
        break;
    }
  }

  this.turnLeft = function() {
    switch (this.bearing) {
      case "north":
        this.bearing = "west";
        break;
      case "south":
        this.bearing = "east";
        break;
      case "east":
        this.bearing = "north";
        break;
      case "west":
        this.bearing = "south";
        break;
    }
  }

  this.at = function(x, y) {
    this.coordinates[0] = x;
    this.coordinates[1] = y;
  }

  this.advance = function() {
    switch (this.bearing) {
      case "north":
        this.coordinates[1]++;
        break;
      case "south":
        this.coordinates[1]--;
        break;
      case "east":
        this.coordinates[0]++;
        break;
      case "west":
        this.coordinates[0]--;
        break;
    }
  }

  this.instructions = function(directions) {
    var directions2 = directions.split("")
    var movements = []
    // var thisRobot = this
    directions2.forEach((element) => {
      if(element === "L"){
        this.turnLeft()
        movements.push("turnLeft")
      }
      else if(element === "R"){
        this.turnRight()
        movements.push("turnRight")
      }
      else{
        this.advance()
        movements.push("advance")
      }
    })
  return movements
  }

  this.evaluate = function(directions){
    this.instructions(directions)
  }

  this.place = function(hash) {
    this.coordinates = [hash.x, hash.y]
    this.bearing = hash.direction
  }
}

// Robot.prototype.orient(direction) = function() {
//   this.direction = direction;
// }

// Robot.prototype.bearing = function() {
//   return this.direction;
// }

// Robot.prototype.turnRight = function() {}
//
// Robot.prototype.turnLeft = function() {}
//
// Robot.prototype.at = function() {}
//
// Robot.prototype.instructions = function() {}
//
// Robot.prototype.place = function() {}
//
// Robot.prototype.advance = function() {}
