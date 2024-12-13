# Game Server API Documentation

## Base URLs
- API Server: `https://api.shootingdapp.com:3000/api/v1`
- WebSocket Server: `wss://shootingdapp.com:8182`



## REST Endpoints

### Player Management

#### Get Player Token Balance
- **GET** `/players/{playerId}/tokens`
- **Response**:
```json
{
    "mintedBalance": 100,
    "totalBalance": 150
}
```

#### Transfer Tokens
- **POST** `/players/transfer`
- **Body**:
```json
{
    "fromPlayerId": "string",
    "toWalletAddress": "string",
    "amount": number
}
```

#### Claim Ad Reward
- **POST** `/players/adReward`
- **Body**:
```json
{
    "walletAddress": "string"
}
```
- **Response**:
```json
{
    "message": "Reward tokens added successfully",
    "amount": 10
}
```

#### Get Player Stats
- **GET** `/players/{playerId}/stats`
- **Response**:
```json
{
    "stats": {
        "kills": number,
        "hits": number,
        "deaths": number,
        "accuracy": number,
        "survivalStart": string
    },
    "lastActive": string
}
```

### Hall of Fame

#### Get Top Players by Kills
- **GET** `/halloffame/kills`
- **Response**: Array of top players sorted by kills

#### Get Top Players by Hits
- **GET** `/halloffame/hits`
- **Response**: Array of top players sorted by hits

### Achievements

#### Get Player Achievements
- **GET** `/players/{playerId}/achievements`
- **Response**: Array of player achievements with timestamps and rewards

#### Get Achievement Config
- **GET** `/achievements/config`
- **Response**: Configuration for all achievement types and their rewards

#### Track Achievement Progress
- **POST** `/achievements/track`
- **Body**:
```json
{
    "playerId": "string",
    "type": "kills|hits|survivalTime|accuracy",
    "value": number
}
```

## WebSocket Messages

### Client -> Server Messages

#### Join Game
```json
{
    "type": "join",
    "playerId": "string",
    "pushToken": "string",
    "data": {
        "player": {
            "location": {
                "latitude": number,
                "longitude": number,
                "altitude": number,
                "accuracy": number
            },
            "heading": number
        }
    }
}
```

#### Shoot
```json
{
    "type": "shoot",
    "playerId": "string",
    "data": {
        "shotId": "string"
    }
}
```

#### Hit Confirmed
```json
{
    "type": "hitConfirmed",
    "playerId": "string",
    "data": {
        "shotId": "string",
        "targetPlayerId": "string"
    }
}
```

#### Kill
```json
{
    "type": "kill",
    "playerId": "string",
    "data": {
        "targetPlayerId": "string"
    }
}
```

#### Shoot Drone
```json
{
    "type": "shootDrone",
    "playerId": "string",
    "data": {
        "drone": {
            "droneId": "string",
            "position": {
                "x": number,
                "y": number,
                "z": number
            }
        }
    }
}
```

### Server -> Client Messages

#### New Player Announcement
```json
{
    "type": "announced",
    "playerId": "string",
    "data": {
        "player": {
            "location": {
                "latitude": number,
                "longitude": number,
                "altitude": number,
                "accuracy": number
            },
            "heading": number,
            "stats": {
                "kills": number,
                "hits": number,
                "deaths": number,
                "accuracy": number
            }
        }
    }
}
```

#### New Drone Spawn
```json
{
    "type": "newDrone",
    "playerId": "string",
    "data": {
        "droneId": "string",
        "position": {
            "x": number,
            "y": number,
            "z": number
        },
        "reward": number
    }
}
```

#### Drone Shot Confirmed
```json
{
    "type": "droneShootConfirmed",
    "playerId": "string",
    "data": {
        "droneId": "string",
        "position": {
            "x": number,
            "y": number,
            "z": number
        },
        "reward": number
    }
}
```

#### Player Leave
```json
{
    "type": "leave",
    "playerId": "string",
    "data": {
        "player": {
            "id": "string",
            "location": {
                "latitude": number,
                "longitude": number,
                "altitude": number,
                "accuracy": number
            },
            "heading": number,
            "timestamp": string
        }
    }
}
```

## Game Configuration

### Achievement Milestones
- **Kills**: 10, 50, 100, 500, 1000
- **Hits**: 100, 500, 1000, 5000
- **Survival Time**: 1h (3600s), 5h (18000s), 24h (86400s)
- **Accuracy**: 50%, 75%, 90%, 95%

### Token Rewards
- Hit: 1 token
- Kill: 5 tokens
- Drone Shot: 2 tokens
- Ad Watch: 10 tokens

### Drone System
- Maximum 3 drones per player
- Drones spawn every 10 seconds if below maximum
- Drone positions are randomly generated within range -2 to 2 on each axis
- Minimum distance between drones: 0.5 units