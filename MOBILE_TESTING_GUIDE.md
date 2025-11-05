# 📱 Mobile Testing Guide - Tana Green Investments

## 🚀 Quick Start

Your development server is running at: **http://localhost:5173/**

---

## 🧪 Testing Methods

### Method 1: Chrome DevTools (Recommended)

1. **Open the website** in Chrome: http://localhost:5173/
2. **Open DevTools**: Press `F12` or `Ctrl+Shift+I` (Windows) / `Cmd+Option+I` (Mac)
3. **Toggle Device Toolbar**: Press `Ctrl+Shift+M` or click the mobile icon
4. **Select a device** from the dropdown at the top

#### Recommended Test Devices

**iPhone Models:**
- iPhone SE (375 x 667) - Small screen
- iPhone 12 Pro (390 x 844) - Standard
- iPhone 14 Pro Max (430 x 932) - Large screen

**Android Models:**
- Samsung Galaxy S20 (360 x 800)
- Pixel 5 (393 x 851)
- Samsung Galaxy S21 Ultra (384 x 854)

**Tablets:**
- iPad (768 x 1024)
- iPad Pro 12.9" (1024 x 1366)

---

### Method 2: Real Device Testing (Best)

1. **Find your computer's IP address:**
   ```powershell
   ipconfig
   ```
   Look for "IPv4 Address" (usually starts with 192.168.x.x)

2. **On your mobile device:**
   - Connect to the same WiFi network
   - Open browser
   - Navigate to: `http://YOUR_IP:5173`
   - Example: `http://192.168.1.100:5173`

---

## ✅ Mobile Features Testing Checklist

### 1. Navigation Menu (Critical)

**Desktop View (>768px):**
- [ ] Horizontal menu visible in header
- [ ] No hamburger icon visible
- [ ] Menu items have hover effects

**Mobile View (<768px):**
- [ ] Hamburger icon (☰) visible in top-right
- [ ] Hamburger icon is white color
- [ ] Desktop menu is hidden

**When Menu Opens:**
- [ ] Smooth fade-in animation
- [ ] Full-screen green overlay (rgba(45,90,39,0.98))
- [ ] Background blur effect
- [ ] Menu items slide in from right
- [ ] Each item has icon + label
- [ ] Active page is highlighted
- [ ] Close button at bottom
- [ ] Can't scroll background
- [ ] Hamburger transforms to X

**When Menu Closes:**
- [ ] Smooth fade-out
- [ ] Background scroll restored
- [ ] Hamburger icon returns

---

### 2. Header & Logo

**All Sizes:**
- [ ] Logo text is readable
- [ ] Tagline appears below logo
- [ ] Header is sticky on scroll

**Mobile (<768px):**
- [ ] Header height: 70px
- [ ] Logo size: 1rem
- [ ] Tagline size: 0.7rem
- [ ] Fits without wrapping

**Small Mobile (<480px):**
- [ ] Header height: 60px
- [ ] Logo size: 0.9rem
- [ ] Tagline size: 0.6rem

---

### 3. Hero Section

**Desktop:**
- [ ] Full viewport height (100vh)
- [ ] Parallax effect works
- [ ] Large title visible

**Mobile (<768px):**
- [ ] Height: 55vh (not too tall)
- [ ] Minimum height: 350px
- [ ] Title size: 2rem
- [ ] Subtitle size: 1rem
- [ ] No parallax (better performance)
- [ ] Text is readable over image

**Small Mobile (<480px):**
- [ ] Height: 50vh
- [ ] Minimum height: 320px
- [ ] Title size: 1.75rem
- [ ] Subtitle size: 0.9rem

---

### 4. Home Page Features

**Desktop:**
- [ ] Side-by-side image and text
- [ ] Large images visible

**Mobile (<768px):**
- [ ] Images stack above text
- [ ] Image width: 100%
- [ ] Image height: 40vh
- [ ] Text is left-aligned
- [ ] No horizontal scroll

**Content Check:**
- [ ] All 4 main features visible
- [ ] Images load properly
- [ ] Text is readable
- [ ] Spacing looks good

---

### 5. Statistics Section

**Desktop:**
- [ ] 4 cards in a row
- [ ] Centered layout

**Mobile (<768px):**
- [ ] 1 card per row
- [ ] Cards stack vertically
- [ ] Full width cards
- [ ] Large numbers visible
- [ ] Icons animate on scroll

**Stats Animation:**
- [ ] Numbers count up
- [ ] Smooth animation
- [ ] Icons bounce/pulse
- [ ] Cards slide in

---

### 6. Programs Page

**Desktop:**
- [ ] Alternating left/right layout
- [ ] Large images

**Mobile (<768px):**
- [ ] All images on top
- [ ] Text below images
- [ ] Image: 35vh height
- [ ] Good spacing
- [ ] Readable text

**All Programs Visible:**
- [ ] Forest Conservation
- [ ] Strategic Partnerships
- [ ] Afforestation
- [ ] Urban Greening
- [ ] Women-Centered Empowerment
- [ ] Climate-Smart Agriculture
- [ ] Nursery Beds
- [ ] Sustainable Land Acquisition

---

### 7. Partners Section

**Desktop:**
- [ ] 4-column grid
- [ ] Background image

**Mobile (<768px):**
- [ ] 1 column
- [ ] Text is readable over background
- [ ] Logo carousel visible
- [ ] Logos scroll/animate

**Partner Logos:**
- [ ] All 7 logos visible
- [ ] Logos are clear
- [ ] Names below logos
- [ ] Animation is smooth

---

### 8. About Page

**Mobile Layout:**
- [ ] Mission/Vision/Values cards stack
- [ ] Team member cards stack
- [ ] Photos are circular
- [ ] Text is centered
- [ ] Good spacing

**Team Members:**
- [ ] Yusuf Ahmed (with photo)
- [ ] Mohammed Ismail (with photo)
- [ ] Mohammed Ahmed (avatar)
- [ ] Ali Hassan (avatar)

---

### 9. Contact Page

**Form Inputs:**
- [ ] Full Name field
- [ ] Email field
- [ ] Organization field
- [ ] Message textarea
- [ ] Submit button

**Mobile Behavior:**
- [ ] No zoom when tapping inputs
- [ ] Keyboard appears correctly
- [ ] Submit button is large
- [ ] Form is easy to fill

**Contact Info Cards:**
- [ ] Email card
- [ ] Phone card
- [ ] Address card
- [ ] Social media card
- [ ] Cards stack on mobile

---

### 10. Footer

**Mobile (<768px):**
- [ ] Single column layout
- [ ] All sections visible
- [ ] Links are tappable
- [ ] Text is centered
- [ ] Copyright at bottom

**Footer Sections:**
- [ ] Who We Are
- [ ] What We Do
- [ ] Quick Links
- [ ] Contact Info

---

## 🎯 Performance Tests

### Loading Speed
- [ ] Page loads in < 3 seconds
- [ ] Images appear quickly
- [ ] No long white screens

### Scrolling
- [ ] Smooth momentum scroll
- [ ] No jank or stutter
- [ ] Animations don't slow it down
- [ ] No horizontal scroll anywhere

### Animations
- [ ] Menu open/close is smooth
- [ ] Card animations are fluid
- [ ] Counter animations work
- [ ] No lag on low-end devices

---

## 👆 Touch Interaction Tests

### Tap Targets
- [ ] All buttons are easy to tap
- [ ] Links are spaced well
- [ ] No accidental taps
- [ ] Buttons feel responsive

### Gestures
- [ ] Swipe to scroll works
- [ ] Pinch to zoom works (controlled)
- [ ] Pull to refresh (if browser supports)
- [ ] Touch drag is smooth

---

## 🎨 Visual Tests

### Typography
- [ ] All text is readable
- [ ] Headings are clear
- [ ] Line spacing is good
- [ ] No text overflow

### Images
- [ ] All images load
- [ ] No distortion
- [ ] Proper aspect ratios
- [ ] Images fit screens

### Colors
- [ ] Brand green (#2d5a27) consistent
- [ ] Good contrast
- [ ] Text is legible
- [ ] Links are distinguishable

### Spacing
- [ ] Consistent padding
- [ ] Good breathing room
- [ ] No cramped sections
- [ ] Balanced white space

---

## 🔍 Detailed Feature Tests

### Test 1: Navigation Flow
1. Open site on mobile view
2. Click hamburger menu
3. Verify menu opens smoothly
4. Click each page in order
5. Verify pages load
6. Check page-specific layouts

### Test 2: Carousel
1. Go to Home page
2. Wait for carousel to auto-advance
3. Verify images change (every 4 seconds)
4. Check subtitle changes
5. Verify smooth transitions

### Test 3: Statistics
1. Go to Home page
2. Scroll to statistics section
3. Verify counter animation starts
4. Check all 4 stats animate
5. Verify icons pulse/bounce

### Test 4: Forms
1. Go to Contact page
2. Tap each input field
3. Verify no zoom occurs
4. Type in each field
5. Submit form
6. Check success message

### Test 5: Responsive Breakpoints
1. Start at desktop width (>1024px)
2. Slowly resize browser
3. Watch layout change at:
   - 1024px (tablet)
   - 768px (mobile)
   - 480px (small mobile)
4. Verify smooth transitions

---

## 🐛 Common Issues to Check

### Issue: Menu doesn't open
- **Check:** Hamburger icon clickable?
- **Check:** Console for JavaScript errors?
- **Fix:** Reload page

### Issue: Text too small
- **Check:** Zoom level at 100%?
- **Check:** Device pixel ratio?
- **Fix:** Adjust breakpoint CSS

### Issue: Horizontal scroll
- **Check:** Images too wide?
- **Check:** Text overflow?
- **Fix:** Add max-width: 100%

### Issue: Inputs zoom on focus (iOS)
- **Check:** Font size < 16px?
- **Fix:** Set font-size: 16px minimum

### Issue: Animations laggy
- **Check:** Too many animations?
- **Check:** Device performance?
- **Fix:** Reduce animation complexity

---

## 📊 Browser Testing Matrix

| Browser | iOS | Android | Notes |
|---------|-----|---------|-------|
| Safari | ✅ Test | N/A | Primary iOS browser |
| Chrome | ✅ Test | ✅ Test | Most popular |
| Firefox | ⚪ Optional | ⚪ Optional | Good to test |
| Samsung | N/A | ✅ Test | Pre-installed on Samsung |
| Edge | ⚪ Optional | ⚪ Optional | Less common on mobile |

---

## 🎓 Testing Tips

### Use Multiple Devices
- Test on at least 2 physical devices
- Use different screen sizes
- Try both iOS and Android
- Test on older devices too

### Test Different Scenarios
- Fast WiFi vs 3G/4G
- Portrait vs Landscape
- With/without ad blockers
- Different zoom levels

### Record Issues
- Take screenshots
- Note device and browser
- Describe the problem
- Note steps to reproduce

---

## ✅ Acceptance Criteria

### Must Pass
- ✅ Navigation works on all devices
- ✅ All content is readable
- ✅ No horizontal scrolling
- ✅ Forms work properly
- ✅ Images load correctly
- ✅ Animations are smooth

### Should Pass
- ✅ Loads in < 3 seconds
- ✅ 90+ Lighthouse mobile score
- ✅ Accessible to screen readers
- ✅ Works offline (basic functionality)

---

## 🚀 Ready to Deploy?

Before deploying to production, ensure:

1. ✅ All tests pass
2. ✅ No console errors
3. ✅ Performance is good
4. ✅ Works on real devices
5. ✅ Forms submit correctly
6. ✅ All images load
7. ✅ Analytics works (if implemented)
8. ✅ SEO meta tags correct

---

## 📞 Need Help?

If you encounter issues:

1. Check browser console (F12)
2. Review MOBILE_OPTIMIZATION_GUIDE.md
3. Test in Chrome DevTools first
4. Verify code changes were saved
5. Try hard refresh (Ctrl+Shift+R)
6. Check if server is running

---

**Happy Testing! 🎉**

The website is now professionally optimized for mobile devices and ready for production use.

---

**Server**: http://localhost:5173/  
**Last Updated**: November 5, 2025  
**Status**: Ready for Testing
