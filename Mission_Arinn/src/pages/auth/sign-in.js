import {
  toggleBtns,
  formFields,
  passwordToggle,
  passwordInput,
  form,
  submitBtn,
  inputs,
  animatedElements,
  optionClass
} from './sign-in-module/dom.js';

import { appState } from '../../core/appState.js';

let savedData = localStorage.getItem("appState")

document.addEventListener('DOMContentLoaded', init);

let isLogin = true;

/* ---------------- INIT ---------------- */
function init() {
  setupToggleButtons();
  setupPasswordToggle();
  setupInputFocus();
  setupFormSubmit();
  setupScrollAnimations();
}

/* ---------------- LOGIN / SIGNUP TOGGLE ---------------- */
function setupToggleButtons() {
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => switchMode(btn));
  });
}

function switchMode(activeBtn) {
  toggleBtns.forEach(b => b.classList.remove('active'));
  activeBtn.classList.add('active');

  isLogin = activeBtn.dataset.mode === 'login';

  toggleVisibility(formFields.name, isLogin);
  toggleVisibility(formFields.forgot, !isLogin);
  toggleVisibility(formFields.terms, isLogin);

  formFields.submitBtnText.textContent =
    isLogin ? 'Sign In' : 'Create Account';
}

/* ---------------- PASSWORD TOGGLE ---------------- */
function setupPasswordToggle() {
  passwordToggle.addEventListener('click', togglePassword);
}

function togglePassword() {
  const show = this.dataset.show === 'true';

  passwordInput.type = show ? 'password' : 'text';
  this.dataset.show = String(!show);
  this.classList.toggle('show', !show);
}

/* ---------------- INPUT FOCUS EFFECT ---------------- */
function setupInputFocus() {
  inputs.forEach(input => {
    input.addEventListener('focus', () => setFocus(input, true));
    input.addEventListener('blur', () => setFocus(input, false));
  });
}

function setFocus(input, state) {
  input.closest('.form-field').classList.toggle('focused', state);
}

/* ---------------- FORM SUBMIT ---------------- */
function setupFormSubmit() {
  form.addEventListener('submit', handleSubmit);
}

function handleSubmit(e) {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(form));

  const error = validateForm(data, isLogin)
  if(error){
    alert(error)
    return
  }

  let authError
  
  if(isLogin){
    authError = loginUser(data)
  }
  else{
    authError = signupUser(data)
  }

  if(authError){
    alert(authError)
    return
  }

  console.log('Form submitted:', { ...data, isLogin });

  animateButton(submitBtn, () => {
    window.location.replace('../dashboard/index.html');
  });
}

/* ---------------- BUTTON ANIMATION ---------------- */
function animateButton(btn, callback) {
  btn.style.transform = 'scale(0.95)';
  setTimeout(() => {
    btn.style.transform = '';
    callback();
  }, 150);
}

/* ---------------- SCROLL ANIMATIONS ---------------- */
function setupScrollAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
      }
    });
  });

  animatedElements.forEach(el => observer.observe(el));
}

/* ---------------- UTILS ---------------- */
function toggleVisibility(element, hide) {
  element.classList.toggle('hidden', hide);
}

// Form Validation

// function loadUser(){
//   const users = JSON.parse(localStorage.getItem("users"))|| []
//   appState.users = users
// }

// function saveUsers(){
//   localStorage.setItem("users")
// }

if(savedData){
  const parsed = JSON.parse(savedData)
  appState.users = parsed.users || []
  appState.system = parsed.system || appState.system
  appState.missions = parsed.missions || []
  appState.activeMission = parsed.activeMission || null
}

function validateForm(data, isLogin){
  if(!isLogin && !data.name) return "Name is required"
  // if(!data.email || !data.email.includes('@gmail.com')) return "Invalid Email"
  // if(!data.password || data.password.length < 8) return "Password Too Short"
  // if(!data.terms && !isLogin) return "Accept terms & conditions"

  const emailError = isValidEmail(data.email)
  if(emailError) return emailError

  const passwordError = isStrongPassword(data.password)
  if(passwordError) return passwordError

  return null
}

// if(isLogin){
//   loginUser(data)
// }
// else{
//   signupUser(data)
// }

function signupUser(data){
  let classIs = optionClass.value
  const exists = appState.users.some(user => user.email === data.email)
  if(exists) return "Email Already Registered"

  const newUser = {
    id : `${crypto.randomUUID()}-${data.name}`,
    name: data.name,
    email: data.email,
    password: data.password,
    points: 0,
    rank: 0,
    streak: 0,
    level: 0,
    classId: classIs
    // missions: missionsBySystem
  }

  appState.users.push(newUser)

  appState.saveAppState()

  localStorage.setItem("currentUser", JSON.stringify(newUser))
  return null
}

function loginUser(data){
    const user = appState.users.find(u => u.email === data.email && u.password === data.password)

    if(!user) return "Invalid email or password"

    localStorage.setItem("currentUser", JSON.stringify(user))
    return null
}

const currentUser = JSON.parse(localStorage.getItem("currentUser"))
if(currentUser){
  window.location.replace("../dashboard/index.html")
}

function logOut(){
  localStorage.removeItem("currentUser")
  window.location.replace("./index.html")
}

function isStrongPassword(password) {
  const minLength = 8
  const hasUppercase = /[A-Z]/.test(password)
  const hasLowercase = /[a-z]/.test(password)
  const hasNumber = /[0-9]/.test(password)
  const hasSymbol = /[!@#$%^&*_\-+]/.test(password)

  if (password.length < minLength) {
    return "Password must be at least 8 characters"
  }
  if (!hasUppercase) {
    return "Password must contain an uppercase letter"
  }
  if (!hasLowercase) {
    return "Password must contain a lowercase letter"
  }
  if (!hasNumber) {
    return "Password must contain a number"
  }
  if (!hasSymbol) {
    return "Password must contain a special symbol"
  }

  return null
}


function isValidEmail(email){
  if(!email) return "Email is required"

  email = email.trim().toLowerCase()

  if(!email.endsWith("@gmail.com")){
    return "Only @gmail.com emails are allowed"
  }

  return null
}

console.log("Gurpreetcl");
