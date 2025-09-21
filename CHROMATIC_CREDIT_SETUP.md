# 🎯 Quick Setup: Chromatic Credit Management

## Immediate Actions to Control Chromatic Credits

### Step 1: Access Repository Settings
1. Go to your repository on GitHub
2. Click **Settings** (top navigation)
3. Navigate to **Secrets and variables** → **Actions**
4. Click the **Variables** tab

### Step 2: Set Credit Control Variables

Add these repository variables:

#### Option A: Stop All Chromatic (Most Conservative)
```
Variable Name: SKIP_CHROMATIC_CREDITS_EXHAUSTED
Value: true
```

#### Option B: Stop Only PR Chromatic (Balanced)
```
Variable Name: SKIP_CHROMATIC_ON_PR  
Value: true
```

### Step 3: Save and Test
1. Click **Add variable** for each setting
2. Push a commit to test the new behavior
3. Check the Actions tab to see the workflow skip Chromatic with informative messages

## 📊 Monthly Reset (When Credits Refresh)

Update the variables to resume Chromatic:
```
SKIP_CHROMATIC_CREDITS_EXHAUSTED = false
SKIP_CHROMATIC_ON_PR = false
```

## 🔍 Monitor Usage

- **Chromatic Dashboard**: https://www.chromatic.com/
- **GitHub Actions**: Check workflow logs for patterns
- **PR Comments**: Automatic status updates when Chromatic is skipped

## ⚡ Emergency Override

If you need to run Chromatic immediately:
1. Set both variables to `false`
2. Re-run the failed workflow
3. Set variables back to `true` after critical deployment

---

**Result**: Your deployment workflow now respects credit limits and provides clear feedback about Chromatic status!
