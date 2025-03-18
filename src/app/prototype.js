// 게임 상태 관리를 위한 클래스
class GameState {
  constructor() {
    this.resources = {
      gold: 1000,
      gas: 500,
      maxGold: 2000,
      maxGas: 1000
    };
    
    this.buildings = [];
    this.units = [];
    this.map = new GameMap(100, 100);
  }
  
  // 자원 추가
  addResources(type, amount) {
    if (type === 'gold') {
      this.resources.gold = Math.min(this.resources.gold + amount, this.resources.maxGold);
      return true;
    } else if (type === 'gas') {
      this.resources.gas = Math.min(this.resources.gas + amount, this.resources.maxGas);
      return true;
    }
    return false;
  }
  
  // 자원 사용
  useResources(type, amount) {
    if (type === 'gold' && this.resources.gold >= amount) {
      this.resources.gold -= amount;
      return true;
    } else if (type === 'gas' && this.resources.gas >= amount) {
      this.resources.gas -= amount;
      return true;
    }
    return false;
  }
  
  // 건물 추가
  addBuilding(building, x, y) {
    if (this.map.canBuild(x, y, building.size)) {
      // 자원 소비 확인
      if (this.useResources('gold', building.cost.gold) && 
          this.useResources('gas', building.cost.gas)) {
        building.position = { x, y };
        this.buildings.push(building);
        this.map.placeBuilding(x, y, building);
        
        // 저장고 건설 시 최대 자원량 증가
        if (building instanceof GoldStorage) {
          this.resources.maxGold += 1000;
        } else if (building instanceof GasStorage) {
          this.resources.maxGas += 500;
        }
        
        return true;
      } else {
        console.log("자원이 부족합니다.");
      }
    } else {
      console.log("해당 위치에 건설할 수 없습니다.");
    }
    return false;
  }
  
  // 유닛 생산
  createUnit(unitType, barracksId) {
    const barracks = this.buildings.find(b => b.id === barracksId && b instanceof Barracks);
    if (!barracks) {
      console.log("유효한 병력 생산 기지가 아닙니다.");
      return false;
    }
    
    let unit;
    switch(unitType) {
      case 'tanker':
        unit = new Tanker();
        break;
      case 'healer':
        unit = new Healer();
        break;
      case 'knight':
        unit = new Knight();
        break;
      case 'archer':
        unit = new Archer();
        break;
      default:
        console.log("알 수 없는 유닛 타입입니다.");
        return false;
    }
    
    if (this.useResources('gold', unit.cost.gold) && 
        this.useResources('gas', unit.cost.gas)) {
      unit.position = { 
        x: barracks.position.x + barracks.size, 
        y: barracks.position.y 
      };
      this.units.push(unit);
      return true;
    } else {
      console.log("자원이 부족합니다.");
      return false;
    }
  }
  
  // 게임 상태 업데이트 (1틱)
  update() {
    // 자원 생산 건물에서 자원 생성
    this.buildings.forEach(building => {
      if (building instanceof GoldMine) {
        this.addResources('gold', building.productionRate);
      } else if (building instanceof GasRefinery) {
        this.addResources('gas', building.productionRate);
      }
    });
  }
}

// 게임 맵 클래스
class GameMap {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.grid = Array(height).fill().map(() => Array(width).fill(0));
  }
  
  // 건설 가능 여부 확인
  canBuild(x, y, size) {
    if (x < 0 || y < 0 || x + size > this.width || y + size > this.height) {
      return false;
    }
    
    for (let i = y; i < y + size; i++) {
      for (let j = x; j < x + size; j++) {
        if (this.grid[i][j] !== 0) {
          return false;
        }
      }
    }
    
    return true;
  }
  
  // 건물 배치
  placeBuilding(x, y, building) {
    for (let i = y; i < y + building.size; i++) {
      for (let j = x; j < x + building.size; j++) {
        this.grid[i][j] = building.id;
      }
    }
  }
}

// 건물 기본 클래스
class Building {
  static nextId = 1;
  
  constructor(name, size, cost) {
    this.id = Building.nextId++;
    this.name = name;
    this.size = size;
    this.cost = cost;
    this.health = 100;
    this.position = { x: 0, y: 0 };
  }
}

// 마을회관 클래스
class TownHall extends Building {
  constructor() {
    super('마을회관', 4, { gold: 400, gas: 200 });
  }
}

// 장인 기지 클래스
class ArtisanBase extends Building {
  constructor() {
    super('장인 기지', 3, { gold: 200, gas: 100 });
  }
  
  // 업그레이드 기능 (구현 예정)
  upgrade(unitType) {
    // 유닛 업그레이드 로직
  }
}

// 병력 생산 기지 클래스
class Barracks extends Building {
  constructor() {
    super('병력 생산 기지', 3, { gold: 150, gas: 100 });
    this.productionQueue = [];
  }
}

// 금 생산 건물 클래스
class GoldMine extends Building {
  constructor() {
    super('금 광산', 2, { gold: 100, gas: 50 });
    this.productionRate = 10; // 틱당 생산량
  }
}

// 가스 생산 건물 클래스
class GasRefinery extends Building {
  constructor() {
    super('가스 정제소', 2, { gold: 100, gas: 75 });
    this.productionRate = 5; // 틱당 생산량
  }
}

// 금 저장고 클래스
class GoldStorage extends Building {
  constructor() {
    super('금 저장고', 2, { gold: 150, gas: 25 });
  }
}

// 가스 저장고 클래스
class GasStorage extends Building {
  constructor() {
    super('가스 저장고', 2, { gold: 100, gas: 100 });
  }
}

// 유닛 기본 클래스
class Unit {
  static nextId = 1;
  
  constructor(name, cost, attackPower, health, range) {
    this.id = Unit.nextId++;
    this.name = name;
    this.cost = cost;
    this.attackPower = attackPower;
    this.health = health;
    this.maxHealth = health;
    this.range = range;
    this.position = { x: 0, y: 0 };
  }
  
  attack(target) {
    // 공격 거리 확인
    const distance = Math.sqrt(
      Math.pow(this.position.x - target.position.x, 2) + 
      Math.pow(this.position.y - target.position.y, 2)
    );
    
    if (distance <= this.range) {
      target.health -= this.attackPower;
      return true;
    }
    
    return false;
  }
  
  move(x, y) {
    this.position.x = x;
    this.position.y = y;
  }
}

// 탱커 유닛 클래스
class Tanker extends Unit {
  constructor() {
    super('탱커', { gold: 100, gas: 75 }, 10, 200, 1);
    this.defense = 15; // 추가 방어력
  }
}

// 힐러 유닛 클래스
class Healer extends Unit {
  constructor() {
    super('힐러', { gold: 75, gas: 100 }, 0, 100, 3);
    this.healPower = 15;
  }
  
  heal(target) {
    const distance = Math.sqrt(
      Math.pow(this.position.x - target.position.x, 2) + 
      Math.pow(this.position.y - target.position.y, 2)
    );
    
    if (distance <= this.range) {
      target.health = Math.min(target.health + this.healPower, target.maxHealth);
      return true;
    }
    
    return false;
  }
}

// 기사 유닛 클래스
class Knight extends Unit {
  constructor() {
    super('기사', { gold: 80, gas: 40 }, 15, 120, 1);
    this.defense = 10;
  }
  
  // 특수 능력: 방패 방어
  shieldDefense() {
    // 일시적으로 방어력 증가
    this.defense += 10;
    setTimeout(() => {
      this.defense -= 10;
    }, 5000); // 5초 동안 방어력 증가
  }
}

// 아처 유닛 클래스
class Archer extends Unit {
  constructor() {
    super('아처', { gold: 60, gas: 60 }, 12, 80, 4);
  }
  
  // 특수 능력: 강화 화살
  powerShot(target) {
    const distance = Math.sqrt(
      Math.pow(this.position.x - target.position.x, 2) + 
      Math.pow(this.position.y - target.position.y, 2)
    );
    
    if (distance <= this.range) {
      target.health -= this.attackPower * 2; // 일반 공격의 2배 데미지
      return true;
    }
    
    return false;
  }
}

// 게임 엔진 클래스 (간단한 예시)
class GameEngine {
  constructor() {
    this.state = new GameState();
    this.tickInterval = null;
  }
  
  // 게임 시작
  start() {
    // 초기 건물 설치 (마을회관)
    const townHall = new TownHall();
    this.state.addBuilding(townHall, 10, 10);
    
    // 게임 틱 시작 (1초마다 업데이트)
    this.tickInterval = setInterval(() => {
      this.update();
    }, 1000);
  }
  
  // 게임 업데이트
  update() {
    this.state.update();
  }
  
  // 게임 종료
  stop() {
    clearInterval(this.tickInterval);
  }
  
  // 건물 건설
  buildStructure(type, x, y) {
    let building;
    
    switch(type) {
      case 'townhall':
        building = new TownHall();
        break;
      case 'artisan':
        building = new ArtisanBase();
        break;
      case 'barracks':
        building = new Barracks();
        break;
      case 'goldmine':
        building = new GoldMine();
        break;
      case 'gasrefinery':
        building = new GasRefinery();
        break;
      case 'goldstorage':
        building = new GoldStorage();
        break;
      case 'gasstorage':
        building = new GasStorage();
        break;
      default:
        console.log("알 수 없는 건물 타입입니다.");
        return false;
    }
    
    return this.state.addBuilding(building, x, y);
  }
  
  // 유닛 생산
  trainUnit(unitType, barracksId) {
    return this.state.createUnit(unitType, barracksId);
  }
}

// 게임 사용 예시
function startGame() {
  const game = new GameEngine();
  game.start();
  
  // 건물 건설 예시
  game.buildStructure('goldmine', 5, 5);
  game.buildStructure('gasrefinery', 15, 5);
  game.buildStructure('barracks', 20, 10);
  
  // 유닛 생산 예시 (병력 생산 기지 ID 3 가정)
  game.trainUnit('knight', 3);
  game.trainUnit('archer', 3);
  
  return game;
}

// 시작 함수 호출
const gameInstance = startGame();