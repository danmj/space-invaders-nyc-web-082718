class CrewMember {
  constructor(position, currentShip='Looking for a Rig') {
    this.position = position
    this.currentShip = currentShip
  }

  engageWarpDrive() {
    if (this.currentShip === 'Looking for a Rig') {
      return "had no effect"
    }
  }

  setsInvisibility(){
    if (this.currentShip === 'Looking for a Rig') {
      return "had no effect"
    }
    else {
      if (this.position === 'Defender') {
        this.currentShip.cloaked = true
      }
    }
  }

  chargePhasers() {
    if (this.currentShip === 'Looking for a Rig') {
      return "had no effect"
    }
  }


}
