'use client'

import { useEffect, useRef } from 'react'
import Phaser from 'phaser'

// Game configuration types
interface TrashItem {
  sprite: Phaser.GameObjects.Sprite
  type: WasteType
  speed: number
}

interface Bin {
  sprite: Phaser.GameObjects.Sprite
  type: WasteType
}

enum WasteType {
  GENERAL = 'general',
  PLASTIC = 'plastic',
  GLASS = 'glass',
  ORGANIC = 'organic',
  PAPER = 'paper'
}

// Game scene class
class GameScene extends Phaser.Scene {
  private bin!: Bin
  private trashItems: TrashItem[] = []
  private score = 0
  private scoreText!: Phaser.GameObjects.Text
  private binButtons: { [key in WasteType]: Phaser.GameObjects.Rectangle } = {} as any
  private binButtonTexts: { [key in WasteType]: Phaser.GameObjects.Text } = {} as any
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys
  private wasdKeys!: { [key: string]: Phaser.Input.Keyboard.Key }
  private trashSpawnTimer = 0
  private gameWidth = 800
  private gameHeight = 600

  constructor() {
    super({ key: 'GameScene' })
  }

  preload() {
    // Create colored rectangles for trash items and bin (placeholder graphics)
    this.load.image('bin-general', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==')
    
    // Create simple colored rectangles for different waste types
    this.createColoredTexture('bin-general', 0x666666)
    this.createColoredTexture('bin-plastic', 0x3B82F6)
    this.createColoredTexture('bin-glass', 0x10B981)
    this.createColoredTexture('bin-organic', 0xF59E0B)
    this.createColoredTexture('bin-paper', 0xEF4444)
    
    // Trash item textures
    this.createColoredTexture('trash-general', 0x999999)
    this.createColoredTexture('trash-plastic', 0x60A5FA)
    this.createColoredTexture('trash-glass', 0x34D399)
    this.createColoredTexture('trash-organic', 0xFBBF24)
    this.createColoredTexture('trash-paper', 0xF87171)
  }

  private createColoredTexture(key: string, color: number) {
    const graphics = this.add.graphics()
    graphics.fillStyle(color)
    graphics.fillRect(0, 0, 60, 60)
    graphics.generateTexture(key, 60, 60)
    graphics.destroy()
  }

  create() {
    // Create background
    this.add.rectangle(this.gameWidth / 2, this.gameHeight / 2, this.gameWidth, this.gameHeight, 0x87CEEB)
    
    // Create bin at bottom center
    this.bin = {
      sprite: this.add.sprite(this.gameWidth / 2, this.gameHeight - 100, 'bin-general'),
      type: WasteType.GENERAL
    }
    this.bin.sprite.setScale(0.8)
    
    // Create score text
    this.scoreText = this.add.text(16, 16, 'Score: 0', {
      fontSize: '24px',
      color: '#000'
    })
    
    // Create bin type buttons
    this.createBinButtons()
    
    // Setup input
    this.cursors = this.input.keyboard!.createCursorKeys()
    this.wasdKeys = this.input.keyboard!.addKeys('W,S,A,D') as any
    
    // Add instructions
    this.add.text(this.gameWidth / 2, 50, 'Move: Arrow Keys or WASD | Switch Bin: Click buttons below', {
      fontSize: '16px',
      color: '#000',
      align: 'center'
    }).setOrigin(0.5)
    
    // Start spawning trash
    this.time.addEvent({
      delay: 2000,
      callback: this.spawnTrash,
      callbackScope: this,
      loop: true
    })
  }

  private createBinButtons() {
    const buttonWidth = 120
    const buttonHeight = 40
    const buttonY = this.gameHeight - 30
    const totalWidth = buttonWidth * 5 + 20 * 4 // 5 buttons with 20px spacing
    const startX = (this.gameWidth - totalWidth) / 2 + buttonWidth / 2
    
    const binTypes = [
      { type: WasteType.GENERAL, color: 0x666666, label: 'General' },
      { type: WasteType.PLASTIC, color: 0x3B82F6, label: 'Plastic' },
      { type: WasteType.GLASS, color: 0x10B981, label: 'Glass' },
      { type: WasteType.ORGANIC, color: 0xF59E0B, label: 'Organic' },
      { type: WasteType.PAPER, color: 0xEF4444, label: 'Paper' }
    ]
    
    binTypes.forEach((binType, index) => {
      const x = startX + (buttonWidth + 20) * index
      
      const button = this.add.rectangle(x, buttonY, buttonWidth, buttonHeight, binType.color)
      button.setInteractive()
      button.on('pointerdown', () => this.switchBinType(binType.type))
      
      const text = this.add.text(x, buttonY, binType.label, {
        fontSize: '14px',
        color: '#fff'
      }).setOrigin(0.5)
      
      this.binButtons[binType.type] = button
      this.binButtonTexts[binType.type] = text
      
      // Highlight current bin type
      if (binType.type === this.bin.type) {
        button.setStrokeStyle(4, 0xFFFFFF)
      }
    })
  }

  private switchBinType(newType: WasteType) {
    // Remove highlight from current button
    this.binButtons[this.bin.type].setStrokeStyle(0)
    
    // Update bin
    this.bin.type = newType
    this.bin.sprite.setTexture(`bin-${newType}`)
    
    // Highlight new button
    this.binButtons[newType].setStrokeStyle(4, 0xFFFFFF)
  }

  private spawnTrash() {
    const wasteTypes = Object.values(WasteType)
    const randomType = wasteTypes[Math.floor(Math.random() * wasteTypes.length)]
    
    const trash = this.add.sprite(
      Math.random() * (this.gameWidth - 60) + 30,
      -30,
      `trash-${randomType}`
    )
    trash.setScale(0.6)
    
    this.trashItems.push({
      sprite: trash,
      type: randomType,
      speed: 50 + Math.random() * 50 // Random speed between 50-100
    })
  }

  update() {
    // Handle bin movement
    const binSpeed = 300
    
    if (this.cursors.left.isDown || this.wasdKeys.A.isDown) {
      this.bin.sprite.x = Math.max(30, this.bin.sprite.x - binSpeed * (1/60))
    } else if (this.cursors.right.isDown || this.wasdKeys.D.isDown) {
      this.bin.sprite.x = Math.min(this.gameWidth - 30, this.bin.sprite.x + binSpeed * (1/60))
    }
    
    // Update trash items
    this.trashItems.forEach((trashItem, index) => {
      trashItem.sprite.y += trashItem.speed * (1/60)
      
      // Check collision with bin
      if (this.checkCollision(trashItem.sprite, this.bin.sprite)) {
        this.handleTrashCollection(trashItem, index)
      }
      
      // Remove trash that fell off screen
      if (trashItem.sprite.y > this.gameHeight + 50) {
        trashItem.sprite.destroy()
        this.trashItems.splice(index, 1)
      }
    })
  }

  private checkCollision(trash: Phaser.GameObjects.Sprite, bin: Phaser.GameObjects.Sprite): boolean {
    const distance = Phaser.Math.Distance.Between(trash.x, trash.y, bin.x, bin.y)
    return distance < 50 // Simple collision detection
  }

  private handleTrashCollection(trashItem: TrashItem, index: number) {
    const isCorrect = trashItem.type === this.bin.type
    
    if (isCorrect) {
      this.score += 10
      this.showFeedback('Correct! +10', trashItem.sprite.x, trashItem.sprite.y, 0x00FF00)
    } else {
      this.score -= 5
      this.showFeedback('Wrong! -5', trashItem.sprite.x, trashItem.sprite.y, 0xFF0000)
    }
    
    this.scoreText.setText(`Score: ${this.score}`)
    
    // Remove trash item
    trashItem.sprite.destroy()
    this.trashItems.splice(index, 1)
  }

  private showFeedback(text: string, x: number, y: number, color: number) {
    const feedback = this.add.text(x, y, text, {
      fontSize: '16px',
      color: `#${color.toString(16).padStart(6, '0')}`
    }).setOrigin(0.5)
    
    // Animate feedback text
    this.tweens.add({
      targets: feedback,
      y: y - 50,
      alpha: 0,
      duration: 1000,
      ease: 'Power2',
      onComplete: () => feedback.destroy()
    })
  }
}

export default function GameComponent() {
  const gameRef = useRef<HTMLDivElement>(null)
  const phaserGame = useRef<Phaser.Game | null>(null)

  useEffect(() => {
    if (gameRef.current && !phaserGame.current) {
      const config: Phaser.Types.Core.GameConfig = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        parent: gameRef.current,
        backgroundColor: '#87CEEB',
        scene: [GameScene],
        physics: {
          default: 'arcade',
          arcade: {
            gravity: { x : 0,y: 0 },
            debug: false
          }
        }
      }

      phaserGame.current = new Phaser.Game(config)
    }

    return () => {
      if (phaserGame.current) {
        phaserGame.current.destroy(true)
        phaserGame.current = null
      }
    }
  }, [])

  return (
    <div className="flex flex-col items-center">
      <div ref={gameRef} className="game-canvas" />
      <div className="mt-4 text-center">
        <p className="text-gray-600">
          Use arrow keys or WASD to move the bin. Click the colored buttons to switch bin types.
        </p>
      </div>
    </div>
  )
}