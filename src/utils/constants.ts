import { BudgetType, CategoryType } from "../types";

export const CATEGORIES: Record<CategoryType, string> = {
  all: "All",
  basic: "Basic Commands",
  flag: "CLI Flags/Options",
  slash: "Slash Commands",
  thinking: "Extended Thinking Keywords",
  settings: "Settings",
  environment: "Environment Variables",
};

export const BUDGET_COLORS: Record<BudgetType, string> = {
  max: "#FF4444", // Red
  mid: "#FF8800", // Orange
  min: "#22C55E", // Green
};

export const BUDGET_DISPLAY: Record<BudgetType, { emoji: string; label: string; description: string }> = {
  max: { emoji: "🔴", label: "MAX", description: "Maximum budget (31,999 tokens)" },
  mid: { emoji: "🟠", label: "MID", description: "Medium budget (10,000 tokens)" },
  min: { emoji: "🟢", label: "MIN", description: "Minimum budget (4,000 tokens)" },
};

export const DEPRECATED_BADGE = "DEPRECATED";
export const NEW_BADGE = "✨ NEW";
export const WARNING_BADGE = "⚠️ CAUTION";

export const DEPRECATED_ICON = "🛑";
export const WARNING_ICON = "⚠️";

export const SECTION_ORDER: CategoryType[] = ["basic", "flag", "slash", "thinking", "settings", "environment"];
