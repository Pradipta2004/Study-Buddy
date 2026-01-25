# Swipe-Based Input Interface - Visual Guide

## Component: QuestionCustomizer (NEW)

### 📱 Step-by-Step Interface

The new QuestionCustomizer presents a **swipe-navigable** step-by-step interface for users to configure question generation parameters.

### 🎯 Four Steps

#### **Step 1: Select Your Class** 
```
┌─────────────────────────────────┐
│ ⚙️ Configure Questions       • • • ○ │
├─────────────────────────────────┤
│ Step 1: Select Your Class       │
│                                 │
│ ┌─────────────┐   ┌─────────────┐│
│ │ Class 6     │   │ Class 7     ││
│ └─────────────┘   └─────────────┘│
│ ┌─────────────┐   ┌─────────────┐│
│ │ Class 8     │   │ Class 9     ││
│ └─────────────┘   └─────────────┘│
│ ┌─────────────┐   ┌─────────────┐│
│ │ Class 10    │   │ Class 11    ││
│ └─────────────┘   └─────────────┘│
│ ┌─────────────┐                  │
│ │ Class 12    │   ┌─────────────┐│
│ └─────────────┘   │  College    ││
│                   └─────────────┘│
│                                 │
│         [          Next →]      │
│                                 │
│ 💡 Swipe left to go to the next step │
└─────────────────────────────────┘
```

**Features:**
- Grid layout with large touch-friendly buttons
- Selected state highlighted in blue with scale animation
- One or two columns based on screen size
- "Next" button on bottom right

---

#### **Step 2: Select Subject** 
```
┌─────────────────────────────────┐
│ ⚙️ Configure Questions       • • ○ ○ │
├─────────────────────────────────┤
│ Step 2: Select Subject          │
│                                 │
│ ┌──────────────────────────────┐│
│ │ 📐 Mathematics              ││
│ └──────────────────────────────┘│
│ ┌──────────────────────────────┐│
│ │ ⚛️ Physics                  ││
│ └──────────────────────────────┘│
│ ┌──────────────────────────────┐│
│ │ 🧪 Chemistry                ││
│ └──────────────────────────────┘│
│ ┌──────────────────────────────┐│
│ │ 🧬 Biology                  ││
│ └──────────────────────────────┘│
│ [many more subjects...]        │
│                                 │
│ [← Back] [Next →]              │
│                                 │
│ 💡 Swipe left to go to the next step │
└─────────────────────────────────┘
```

**Features:**
- Full-width button layout for subjects
- 20+ subject options with emoji icons
- Back button to go to previous step
- Scrollable if needed
- Selected subject highlighted and scaled

---

#### **Step 3: Select Difficulty** 
```
┌─────────────────────────────────┐
│ ⚙️ Configure Questions       • • • ○ │
├─────────────────────────────────┤
│ Step 3: Select Difficulty       │
│                                 │
│ ┌─────────┐ ┌─────────┐        │
│ │🟢 Easy  │ │🟡Medium │        │
│ └─────────┘ └─────────┘        │
│ ┌─────────┐ ┌─────────┐        │
│ │🔴 Hard  │ │🎯Mixed  │        │
│ └─────────┘ └─────────┘        │
│                                 │
│ [← Back] [Next →]              │
│                                 │
│ 💡 Swipe left to go to the next step │
└─────────────────────────────────┘
```

**Features:**
- Four difficulty options in 2x2 grid
- Emoji-based visual indicators
- Each option has hover scale effect
- Back button available
- Next button to proceed

---

#### **Step 4: Ready to Generate** 
```
┌─────────────────────────────────┐
│ ⚙️ Configure Questions       • • • • │
├─────────────────────────────────┤
│        ✅ Ready to Generate!    │
│                                 │
│ ┌──────────────────────────────┐│
│ │ Class: Class 10             ││
│ │ Subject: 📐 Mathematics      ││
│ │ Difficulty: 🟡 Medium        ││
│ └──────────────────────────────┘│
│                                 │
│ [← Back] [← Change Configuration]│
│                                 │
│ 💡 Swipe left to go to the next step │
└─────────────────────────────────┘
```

**Features:**
- Summary of selected options
- Green background gradient to indicate completion
- "Change Configuration" button to go back
- All selections clearly displayed
- Ready for question generation

---

### 🎨 Visual Elements

#### Progress Indicator (Top Right)
- **4 dots** showing current step
- Filled dots (🔵 blue) = completed steps
- Empty dots (○ gray) = pending steps
- Real-time update as user progresses

#### Progress Bar (Below Header)
- **Horizontal bar** under progress dots
- Gradient from blue (#1E90FF) to sky blue (#87CEFA)
- Width increases as user progresses through steps
- Smooth transition animation

#### Button States

**Default State (Not Selected)**
```
┌─────────────────────┐
│ Sky Blue Background │  ← Light sky blue (#87CEFA)
│ Blue Text           │  ← Blue text color
│ Hover: Darker Blue  │  ← bg-sky-200 on hover
└─────────────────────┘
```

**Selected State**
```
┌─────────────────────┐
│ Blue Background     │  ← Blue-600 (#2563EB)
│ White Text          │  ← White text color
│ Scaled Up           │  ← scale-105 (5% larger)
│ Shadow Effect       │  ← Box shadow for depth
└─────────────────────┘
```

---

### 📱 Touch Interactions

#### Swipe Left (Next)
```
User Action: Swipe finger from right to left across screen
Threshold: 30px minimum distance
Result: Slide animation → Next step
Example: In Step 1 (Class), swiping left moves to Step 2 (Subject)
```

#### Swipe Right (Back)
```
User Action: Swipe finger from left to right across screen
Threshold: 30px minimum distance
Result: Slide animation → Previous step
Example: In Step 2 (Subject), swiping right moves back to Step 1 (Class)
```

#### Button Clicks
```
Tapping any option button: Immediately save selection + go to next step
Tapping "Back" button: Go to previous step
Tapping "Next" button: Go to next step
Tapping "Change Configuration": Return to Step 1
```

---

### 🎬 Animations

#### Slide In Animation (Entering Step)
```
Initial State: Element positioned off-screen (left)
Duration: 300ms
Final State: Element at center of screen
Effect: Smooth slide from left to right as new step enters
CSS Class: animate-slideInLeft
```

#### Slide Out Animation (Leaving Step)
```
Initial State: Element at center of screen
Duration: 300ms
Final State: Element positioned off-screen (right or left)
Effect: Smooth slide out before next step slides in
CSS Classes: animate-slideOutLeft, animate-slideOutRight
```

#### Fade In Animation (Initial Load)
```
Initial State: Element with opacity 0
Duration: 300ms
Final State: Element fully opaque
Effect: Smooth fade in when component first loads
CSS Class: animate-fadeIn
```

---

### 🎯 Key Features

1. **Progressive Disclosure** - Users configure one aspect at a time
2. **Clear Visual Feedback** - Progress indicators show where they are
3. **Touch-Optimized** - Large buttons, swipe gestures
4. **Mobile-First** - Designed for small screens first
5. **Accessibility** - Clear labels, color indicators, buttons for navigation
6. **Responsive** - Adapts to tablet/desktop with 2-column layouts

---

### 📊 Responsive Design

#### Mobile (< 768px)
- Full width buttons (1 column for subjects)
- Single column for difficulty selection
- Standard button sizing

#### Tablet/Desktop (≥ 768px)
- 2-column grid for class and subjects
- 4-column grid for difficulty options
- Larger padding and spacing
- Optimized button sizes

---

### 🔄 State Flow

```
                    ┌─────────────┐
                    │   Class     │
                    │  Selection  │
                    └──────┬──────┘
                           │ (Swipe Left / Next Button)
                    ┌──────▼──────┐
                    │  Subject    │
                    │ Selection   │
                    └──────┬──────┘
                           │ (Swipe Left / Next Button)
                    ┌──────▼──────┐
                    │ Difficulty  │
                    │ Selection   │
                    └──────┬──────┘
                           │ (Swipe Left / Next Button)
                    ┌──────▼──────┐
                    │  Summary    │
                    │    View     │
                    └─────────────┘
                           │
                     (Generate Questions)
                           ▼
                    (Show Results)
```

---

### 💾 Data Flow

```javascript
// Example state changes during user interaction
Step 1: User selects "Class 10"
  → config.studentClass = "10"
  → Animate to Step 2

Step 2: User selects "Mathematics"
  → config.subject = "mathematics"
  → Animate to Step 3

Step 3: User selects "Medium"
  → config.difficulty = "medium"
  → Animate to Step 4 (Summary)

Step 4: User sees summary, clicks "Generate"
  → handleUpload is triggered
  → Questions are generated and displayed below
```

---

### 🎓 What This Solves

✅ **No More Overwhelming Form** - Users see one configuration option at a time
✅ **Mobile-Friendly** - Touch gestures and large buttons
✅ **Clear Progress** - Visual indicators show where user is
✅ **Flexible Navigation** - Swipe or buttons, forward or backward
✅ **Professional Look** - Modern design with smooth animations
✅ **User Guidance** - Hints about swipe gestures available

---

### 🚀 Future Enhancements (Optional)

1. Add "Advanced Options" collapsible section for custom instructions
2. Add question type and marks-based configuration as additional steps
3. Add confirmation dialog before generating questions
4. Add preset configurations (e.g., "Board Exam", "Entrance", "Quiz")
5. Add animation/haptic feedback on swipe
6. Add keyboard navigation (arrow keys) for accessibility
