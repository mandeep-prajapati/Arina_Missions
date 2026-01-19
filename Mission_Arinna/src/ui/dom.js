// Header
const cyberHeader = document.querySelector('.cyber-header')

// User section
const usernameText = document.querySelector('.username')
const userTitle = document.querySelector('.user-title')
const avatarText = document.querySelector('.avatar-text')
const levelText = document.querySelector('.level-text')

// Stats
const streakValue = document.querySelector('.stat-value.streak')
const pointsValue = document.querySelector('.stat-value.points')
const rankValue = document.querySelector('.stat-value.rank')

// Sidebar
const missionSidebar = document.querySelector('.mission-sidebar')

// Progress
const progressCount = document.querySelector('.progress-count')
const progressFill = document.querySelector('.progress-fill')

// Filters
const filterButtons = document.querySelectorAll('.filter-btn')

// Missions
const missionItems = document.querySelectorAll('.mission-item')

// Mission arena (right panel)
const arenaTitle = document.querySelector('.arena-card .mission-title')
const arenaTime = document.querySelector('.stat-value.time')
const arenaPriority = document.querySelector('.stat-value.priority')
const arenaReward = document.querySelector('.stat-value.reward')

// Start button
const startMissionBtn = document.querySelector('.start-btn')

const attemptsContainer = document.querySelector('.attempts-container')
const attemptOrbs = document.querySelectorAll('.attempt-orb')

const passBtn = document.querySelector('.pass-btn')
const failBtn = document.querySelector('.fail-btn')

const floatingStats = document.querySelectorAll('.stat-orb')
const priorityIcons = document.querySelectorAll('.priority-pill')

const userName = cyberHeader.dataset.username
const userPoints = cyberHeader.dataset.points
const userStreak = cyberHeader.dataset.streak
const userLevel = cyberHeader.dataset.level

export {
  cyberHeader,
  usernameText,
  userTitle,
  avatarText,
  levelText,
  streakValue,
  pointsValue,
  rankValue,
  filterButtons,
  missionItems,
  arenaTitle,
  arenaTime,
  arenaPriority,
  arenaReward,
  startMissionBtn,
  attemptOrbs,
  passBtn,
  failBtn
}
