# Color Palette & WCAG 2.1 Contrast Ratios: breaksignal.ai

- **Bead**: `ash-ck1w`
- **Date**: 2026-11-04
- **Document**: `docs/ash-ck1w/contrast.md`
- **Standard**: WCAG 2.1 Level AA / AAA Relative Luminance Formula

---

## 1. Palette Specification & Luminance Values

Relative luminance $L$ is computed per WCAG 2.1:
$$c' = \begin{cases} \frac{c}{12.92} & c \le 0.04045 \\ \left(\frac{c + 0.055}{1.055}\right)^{2.4} & c > 0.04045 \end{cases}$$
$$L = 0.2126 \times R' + 0.7152 \times G' + 0.0722 \times B'$$

### 1.1 Color Channels & Computed Relative Luminance

| Theme | Token Name | Hex Code | R, G, B | Normalized $R', G', B'$ | Relative Luminance ($L$) |
|:---|:---|:---|:---|:---|:---|
| **Light** | `--color-ground` | `#ffffff` | 255, 255, 255 | 1.0000, 1.0000, 1.0000 | **1.0000** |
| **Light** | `--color-surface` | `#f4f5f7` | 244, 245, 247 | 0.9048, 0.9129, 0.9293 | **0.9124** |
| **Light** | `--color-surface-raised`| `#e9ebef` | 233, 235, 239 | 0.8142, 0.8300, 0.8617 | **0.8289** |
| **Light** | `--color-ink` | `#111418` | 17, 20, 24 | 0.0057, 0.0071, 0.0093 | **0.0070** |
| **Light** | `--color-ink-muted` | `#575e67` | 87, 94, 103 | 0.0967, 0.1136, 0.1378 | **0.1118** |
| **Light** | `--color-border` | `#767d86` | 118, 125, 134 | 0.1834, 0.2096, 0.2464 | **0.2067** |
| **Light** | `--color-border-subtle` | `#d0d5dd` | 208, 213, 221 | 0.6358, 0.6720, 0.7327 | **0.6687** |
| **Light** | `--color-accent` | `#c5221f` | 197, 34, 31 | 0.5599, 0.0159, 0.0137 | **0.1314** |
| **Light** | `--color-accent-contrast`| `#ffffff`| 255, 255, 255 | 1.0000, 1.0000, 1.0000 | **1.0000** |
| **Light** | `--color-focus` | `#c5221f` | 197, 34, 31 | 0.5599, 0.0159, 0.0137 | **0.1314** |
| **Dark** | `--color-ground` | `#0d0f12` | 13, 15, 18 | 0.0040, 0.0047, 0.0062 | **0.0047** |
| **Dark** | `--color-surface` | `#15181d` | 21, 24, 29 | 0.0074, 0.0091, 0.0125 | **0.0089** |
| **Dark** | `--color-surface-raised`| `#1d2128` | 29, 33, 40 | 0.0125, 0.0152, 0.0216 | **0.0151** |
| **Dark** | `--color-ink` | `#eceef0` | 236, 238, 240 | 0.8385, 0.8540, 0.8698 | **0.8519** |
| **Dark** | `--color-ink-muted` | `#949ca6` | 148, 156, 166 | 0.2965, 0.3323, 0.3797 | **0.3281** |
| **Dark** | `--color-border` | `#606873` | 96, 104, 115 | 0.1200, 0.1428, 0.1776 | **0.1404** |
| **Dark** | `--color-border-subtle` | `#272d36` | 39, 45, 54 | 0.0207, 0.0267, 0.0381 | **0.0263** |
| **Dark** | `--color-accent` | `#ff5447` | 255, 84, 71 | 1.0000, 0.0898, 0.0637 | **0.2814** |
| **Dark** | `--color-accent-contrast`| `#0d0f12`| 13, 15, 18 | 0.0040, 0.0047, 0.0062 | **0.0047** |
| **Dark** | `--color-focus` | `#ff5447` | 255, 84, 71 | 1.0000, 0.0898, 0.0637 | **0.2814** |

---

## 2. Contrast Ratio Matrix (Required Pairs)

Contrast ratio formula:
$$\text{Contrast Ratio} = \frac{L_1 + 0.05}{L_2 + 0.05} \quad (L_1 > L_2)$$

### 2.1 Light Theme Pairs (Default Theme)

| Required Pair | Foreground (Hex) | Background (Hex) | Calculation | Ratio | Threshold | Result |
|:---|:---|:---|:---|:---:|:---:|:---:|
| **Body text on background** | `#111418` ($L=0.0070$) | `#ffffff` ($L=1.0000$) | $\frac{1.0500}{0.0570}$ | **18.42:1** | $\ge 4.5:1$ | **PASS (AAA)** |
| **Muted text on background** | `#575e67` ($L=0.1118$) | `#ffffff` ($L=1.0000$) | $\frac{1.0500}{0.1618}$ | **6.49:1** | $\ge 4.5:1$ | **PASS (AA)** |
| **Muted text on card surface** | `#575e67` ($L=0.1118$) | `#f4f5f7` ($L=0.9124$) | $\frac{0.9624}{0.1618}$ | **5.95:1** | $\ge 4.5:1$ | **PASS (AA)** |
| **Accent as text on background** | `#c5221f` ($L=0.1314$) | `#ffffff` ($L=1.0000$) | $\frac{1.0500}{0.1814}$ | **5.79:1** | $\ge 4.5:1$ | **PASS (AA)** |
| **Accent button text on accent** | `#ffffff` ($L=1.0000$) | `#c5221f` ($L=0.1314$) | $\frac{1.0500}{0.1814}$ | **5.79:1** | $\ge 4.5:1$ | **PASS (AA)** |
| **Borders on background** | `#767d86` ($L=0.2067$) | `#ffffff` ($L=1.0000$) | $\frac{1.0500}{0.2567}$ | **4.09:1** | $\ge 3.0:1$ | **PASS** |
| **Focus ring on background** | `#c5221f` ($L=0.1314$) | `#ffffff` ($L=1.0000$) | $\frac{1.0500}{0.1814}$ | **5.79:1** | $\ge 3.0:1$ | **PASS** |

### 2.2 Dark Theme Pairs (Activated via `[data-theme="dark"]`)

| Required Pair | Foreground (Hex) | Background (Hex) | Calculation | Ratio | Threshold | Result |
|:---|:---|:---|:---|:---:|:---:|:---:|
| **Body text on background** | `#eceef0` ($L=0.8519$) | `#0d0f12` ($L=0.0047$) | $\frac{0.9019}{0.0547}$ | **16.49:1** | $\ge 4.5:1$ | **PASS (AAA)** |
| **Muted text on background** | `#949ca6` ($L=0.3281$) | `#0d0f12` ($L=0.0047$) | $\frac{0.3781}{0.0547}$ | **6.91:1** | $\ge 4.5:1$ | **PASS (AA)** |
| **Muted text on card surface** | `#949ca6` ($L=0.3281$) | `#15181d` ($L=0.0089$) | $\frac{0.3781}{0.0589}$ | **6.42:1** | $\ge 4.5:1$ | **PASS (AA)** |
| **Accent as text on background** | `#ff5447` ($L=0.2814$) | `#0d0f12` ($L=0.0047$) | $\frac{0.3314}{0.0547}$ | **6.06:1** | $\ge 4.5:1$ | **PASS (AA)** |
| **Accent button text on accent** | `#0d0f12` ($L=0.0047$) | `#ff5447` ($L=0.2814$) | $\frac{0.3314}{0.0547}$ | **6.06:1** | $\ge 4.5:1$ | **PASS (AA)** |
| **Borders on background** | `#606873` ($L=0.1404$) | `#0d0f12` ($L=0.0047$) | $\frac{0.1904}{0.0547}$ | **3.48:1** | $\ge 3.0:1$ | **PASS** |
| **Focus ring on background** | `#ff5447` ($L=0.2814$) | `#0d0f12` ($L=0.0047$) | $\frac{0.3314}{0.0547}$ | **6.06:1** | $\ge 3.0:1$ | **PASS** |

---

## 3. Summary of Design Decisions

1. **Dual Accent Strategy**: The legacy single accent (`#ff4438`) provided only 3.22:1 contrast against white `#ffffff`. In our dual-token system:
   - Light theme adopts Deep Signal Red (`#c5221f`), yielding 5.79:1 contrast (surpassing 4.5:1 AA for normal text).
   - Dark theme retains Bright Signal Red (`#ff5447`), yielding 6.06:1 contrast against `#0d0f12`.
2. **Text Readability**: Body text in both modes achieves Level AAA compliance (>16:1 contrast ratio). Muted text safely clears Level AA (>5.9:1 in both ground and surface containers).
3. **Control Affordance**: Structural borders and active `:focus-visible` rings exceed the 3.0:1 requirement across all theme configurations.
